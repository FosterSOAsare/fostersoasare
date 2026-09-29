// Generates favicons and app icons from public/profile.png.
// Usage: npm run icons
//
// Outputs (all in public/):
//   favicon.ico            16/32/48, circular crop (browser tab)
//   favicon-32.png         circular crop
//   apple-touch-icon.png   180x180, square (iOS fills transparency with black, so no circle)
//   icons/icon-192.png     square, used by manifest.json (any + maskable)
//   icons/icon-512.png     square, used by manifest.json (any + maskable)

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");

// Square region of profile.png (1122x1402) framing the head, with a little headroom.
const FACE = { left: 101, top: 60, width: 920, height: 920 };

const face = () => sharp(path.join(pub, "profile.png")).extract(FACE);

const square = (size) => face().resize(size, size).png().toBuffer();

async function circle(size) {
	const mask = Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`);
	return face()
		.resize(size, size)
		.composite([{ input: mask, blend: "dest-in" }])
		.png()
		.toBuffer();
}

// ICO container holding PNG-encoded images (supported by all modern browsers).
function toIco(images) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(1, 2); // type: icon
	header.writeUInt16LE(images.length, 4);

	let offset = 6 + images.length * 16;
	const entries = images.map(({ size, data }) => {
		const entry = Buffer.alloc(16);
		entry.writeUInt8(size >= 256 ? 0 : size, 0);
		entry.writeUInt8(size >= 256 ? 0 : size, 1);
		entry.writeUInt16LE(1, 4); // colour planes
		entry.writeUInt16LE(32, 6); // bits per pixel
		entry.writeUInt32LE(data.length, 8);
		entry.writeUInt32LE(offset, 12);
		offset += data.length;
		return entry;
	});

	return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

async function main() {
	const icoSizes = [16, 32, 48];
	const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await circle(size) })));

	const outputs = {
		"favicon.ico": toIco(icoImages),
		"favicon-32.png": icoImages[1].data,
		"apple-touch-icon.png": await square(180),
		"icons/icon-192.png": await square(192),
		"icons/icon-512.png": await square(512),
	};

	for (const [file, data] of Object.entries(outputs)) {
		await fs.writeFile(path.join(pub, file), data);
		console.log(`✓ Wrote public/${file}`);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
