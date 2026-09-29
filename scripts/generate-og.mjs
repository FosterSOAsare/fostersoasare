// Generates the Open Graph / Twitter share card (1200x630) at public/og.png.
// Usage: npm run og
//
// Uses next/og (satori + resvg) and sharp, both of which ship with Next, so no extra deps.
// Clash Display is fetched from Fontshare once and cached in node_modules/.cache/og.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { ImageResponse } from "next/og.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(root, "node_modules", ".cache", "og");
const outFile = path.join(root, "public", "og.png");

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO_WIDTH = 500;

// Mirrors tailwind.config.js / globals.css
const colors = {
	bg: "#0F172A",
	white: "#e2e8f0",
	primary: "#94A3B8",
	sec: "#2DD4BF",
};

const content = {
	name: "Foster Asare",
	role: "Fullstack Website Developer",
	tagline: "Building high-quality, scalable web applications — from idea to production.",
};

async function loadClashDisplay(weight) {
	const cached = path.join(cacheDir, `clash-display-${weight}.ttf`);
	try {
		return await fs.readFile(cached);
	} catch {}

	try {
		const css = await fetch(`https://api.fontshare.com/v2/css?f[]=clash-display@${weight}&display=swap`).then((r) => r.text());
		const match = css.match(/url\('([^']+\.ttf)'\)/);
		if (!match) throw new Error("no .ttf in Fontshare CSS");
		const url = match[1].startsWith("//") ? `https:${match[1]}` : match[1];
		const data = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
		await fs.mkdir(cacheDir, { recursive: true });
		await fs.writeFile(cached, data);
		return data;
	} catch (err) {
		console.warn(`! Could not load Clash Display ${weight} (${err.message}); falling back to default font.`);
		return null;
	}
}

async function loadPhoto() {
	// Crop the portrait to the panel's aspect ratio at 2x for a crisp result.
	const buffer = await sharp(path.join(root, "public", "profile.png"))
		.resize(PHOTO_WIDTH * 2, HEIGHT * 2, { fit: "cover", position: "top" })
		.jpeg({ quality: 85 })
		.toBuffer();
	return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

// Tiny hyperscript helper so this file needs no JSX transform.
// Satori requires every div to be flex, so default to it.
const h = (type, style, ...children) => ({ type, props: { style: { display: "flex", ...style }, children: children.flat() } });

function card(photo, hasClash) {
	const display = hasClash ? "Clash Display" : undefined;

	return h(
		"div",
		{
			width: WIDTH,
			height: HEIGHT,
			display: "flex",
			position: "relative",
			backgroundColor: colors.bg,
			// Same blue glow as the cursor spotlight on the site
			backgroundImage: "radial-gradient(circle at 18% 22%, rgba(29, 78, 216, 0.32), transparent 55%)",
			color: colors.white,
		},
		// Photo panel
		{
			type: "img",
			props: {
				src: photo,
				width: PHOTO_WIDTH,
				height: HEIGHT,
				style: { position: "absolute", top: 0, right: 0, width: PHOTO_WIDTH, height: HEIGHT, objectFit: "cover" },
			},
		},
		// Fade the photo into the background
		h("div", {
			position: "absolute",
			top: 0,
			right: 0,
			width: PHOTO_WIDTH,
			height: HEIGHT,
			backgroundImage: `linear-gradient(90deg, ${colors.bg} 0%, rgba(15, 23, 42, 0.85) 14%, rgba(15, 23, 42, 0.4) 32%, rgba(15, 23, 42, 0.1) 55%, rgba(15, 23, 42, 0) 75%)`,
		}),
		h("div", {
			position: "absolute",
			left: 0,
			bottom: 0,
			width: WIDTH,
			height: 6,
			backgroundImage: `linear-gradient(90deg, ${colors.sec}, rgba(45, 212, 191, 0))`,
		}),
		// Text column
		h(
			"div",
			{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				width: WIDTH - PHOTO_WIDTH + 40,
				height: HEIGHT,
				padding: "0 0 0 80px",
			},
			h(
				"div",
				{ display: "flex", alignItems: "center", marginBottom: 28 },
				h("div", { width: 64, height: 2, backgroundColor: colors.sec, marginRight: 16 }),
				h("div", { fontFamily: display, fontWeight: 700, fontSize: 18, letterSpacing: 4, color: colors.sec, textTransform: "uppercase" }, "Portfolio"),
			),
			h("div", { fontFamily: display, fontWeight: 700, fontSize: 92, lineHeight: 1, color: colors.white, letterSpacing: -1 }, content.name),
			h("div", { fontFamily: display, fontWeight: 500, fontSize: 36, color: colors.sec, marginTop: 18 }, content.role),
			h("div", { fontSize: 24, lineHeight: 1.45, color: colors.primary, marginTop: 24, maxWidth: 560 }, content.tagline),
		),
	);
}

async function main() {
	const [bold, medium, photo] = await Promise.all([loadClashDisplay(700), loadClashDisplay(500), loadPhoto()]);

	const fonts = [
		bold && { name: "Clash Display", data: bold, weight: 700, style: "normal" },
		medium && { name: "Clash Display", data: medium, weight: 500, style: "normal" },
	].filter(Boolean);

	const image = new ImageResponse(card(photo, fonts.length > 0), {
		width: WIDTH,
		height: HEIGHT,
		...(fonts.length ? { fonts } : {}),
	});

	await fs.writeFile(outFile, Buffer.from(await image.arrayBuffer()));
	console.log(`✓ Wrote ${path.relative(root, outFile)} (${WIDTH}x${HEIGHT})`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
