// Generates a centred 1200x630 OG card for REAPER Architecture (architecture-iota-lac.vercel.app).
// Usage: node scripts/og-card.mjs [output path]   (default: ./og-card.png)
// Copy the result into the architecture project's public/ and point og:image / twitter:image at /og-card.png.
//
// Uses next/og (satori + resvg) and sharp from this repo's node_modules. Manrope (the site's font)
// and the background photo are fetched once and cached in node_modules/.cache/og.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { ImageResponse } from "next/og.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(root, "node_modules", ".cache", "og");
const outFile = path.resolve(process.argv[2] ?? "og-card.png");

const WIDTH = 1200;
const HEIGHT = 630;

// Same Unsplash photo the site uses in its project imagery (modern house at dusk).
const PHOTO_URL = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80";

const content = {
	mark: "ARC.",
	eyebrow: "Architecture & Design",
	name: "REAPER",
	tagline: "Timeless, sustainable spaces that elevate the human experience.",
	stats: [
		["15+", "Years"],
		["42", "Awards"],
		["£250M", "Construction Value"],
	],
	location: "London  —  Tokyo",
};

async function cached(file, download) {
	const target = path.join(cacheDir, file);
	try {
		return await fs.readFile(target);
	} catch {}
	const data = await download();
	await fs.mkdir(cacheDir, { recursive: true });
	await fs.writeFile(target, data);
	return data;
}

const fetchBuffer = async (url) => {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`${res.status} fetching ${url}`);
	return Buffer.from(await res.arrayBuffer());
};

const loadManrope = (weight) =>
	cached(`manrope-${weight}.woff`, () => fetchBuffer(`https://cdn.jsdelivr.net/fontsource/fonts/manrope@latest/latin-${weight}-normal.woff`));

async function loadPhoto() {
	const original = await cached("reaper-bg.jpg", () => fetchBuffer(PHOTO_URL));
	const buffer = await sharp(original)
		.resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
		.modulate({ saturation: 0.35, brightness: 1.15 }) // near-monochrome, to match the site's black & white palette
		.jpeg({ quality: 85 })
		.toBuffer();
	return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

// Satori requires every div to be flex, so default to it.
const h = (type, style, ...children) => ({ type, props: { style: { display: "flex", ...style }, children: children.flat() } });

const fill = { position: "absolute", top: 0, left: 0, width: WIDTH, height: HEIGHT };

function card(photo) {
	return h(
		"div",
		{ ...fill, position: "relative", backgroundColor: "#000", color: "#fff", fontFamily: "Manrope" },
		{ type: "img", props: { src: photo, width: WIDTH, height: HEIGHT, style: { ...fill, objectFit: "cover" } } },
		// Darken evenly, then vignette so the centre text reads cleanly.
		h("div", { ...fill, backgroundColor: "rgba(0, 0, 0, 0.3)" }),
		h("div", { ...fill, backgroundImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.8) 100%)" }),
		// Thin inset frame
		h("div", { position: "absolute", top: 28, left: 28, width: WIDTH - 56, height: HEIGHT - 56, border: "1px solid rgba(255,255,255,0.18)" }),

		// Centred content
		h(
			"div",
			{ ...fill, flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" },
			h("div", { fontSize: 26, fontWeight: 800, letterSpacing: -0.5 }, content.mark),
			h(
				"div",
				{ alignItems: "center", marginTop: 34 },
				h("div", { width: 40, height: 1, backgroundColor: "rgba(255,255,255,0.6)", marginRight: 18 }),
				h("div", { fontSize: 16, fontWeight: 500, letterSpacing: 6, textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }, content.eyebrow),
				h("div", { width: 40, height: 1, backgroundColor: "rgba(255,255,255,0.6)", marginLeft: 18 }),
			),
			h("div", { fontSize: 128, fontWeight: 800, letterSpacing: 10, lineHeight: 1, marginTop: 22 }, content.name),
			h("div", { fontSize: 24, fontWeight: 400, color: "rgba(255,255,255,0.82)", marginTop: 26, maxWidth: 900, lineHeight: 1.4, justifyContent: "center" }, content.tagline),
			h(
				"div",
				{ alignItems: "center", marginTop: 44 },
				content.stats.map(([value, label], i) =>
					h(
						"div",
						{
							flexDirection: "column",
							alignItems: "center",
							padding: "0 36px",
							borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.25)",
						},
						h("div", { fontSize: 34, fontWeight: 700 }, value),
						h("div", { fontSize: 13, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: 6 }, label),
					),
				),
			),
		),
		h(
			"div",
			{ position: "absolute", bottom: 50, left: 0, width: WIDTH, justifyContent: "center", fontSize: 14, fontWeight: 500, letterSpacing: 5, textTransform: "uppercase", color: "rgba(255,255,255,0.55)" },
			content.location,
		),
	);
}

async function main() {
	const [regular, medium, bold, extraBold, photo] = await Promise.all([loadManrope(400), loadManrope(500), loadManrope(700), loadManrope(800), loadPhoto()]);

	const image = new ImageResponse(card(photo), {
		width: WIDTH,
		height: HEIGHT,
		fonts: [
			{ name: "Manrope", data: regular, weight: 400, style: "normal" },
			{ name: "Manrope", data: medium, weight: 500, style: "normal" },
			{ name: "Manrope", data: bold, weight: 700, style: "normal" },
			{ name: "Manrope", data: extraBold, weight: 800, style: "normal" },
		],
	});

	await fs.writeFile(outFile, Buffer.from(await image.arrayBuffer()));
	console.log(`✓ Wrote ${outFile} (${WIDTH}x${HEIGHT})`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
