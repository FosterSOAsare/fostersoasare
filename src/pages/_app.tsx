import { useEffect, useState, useRef } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	const [newCursorPosition, setNewCursorPosition] = useState({ x: 200, y: 500 });
	const backgroundRef = useRef<any>(null);

	useEffect(() => {
		if (!backgroundRef) return;
		function createNewCursorPosition(e: any) {
			setNewCursorPosition({ x: e.clientX, y: e.clientY });
		}
		window.addEventListener("mousemove", createNewCursorPosition);
		return () => {
			window.removeEventListener("mousemove", createNewCursorPosition);
		};
	}, []);

	return (
		<>
			<Head>
				<meta content="width=device-width,initial-scale=1" name="viewport" />
				<meta content="#000000" name="theme-color" />
				<link href="/icon.jpeg" rel="apple-touch-icon" />
				<link href="/manifest.json" rel="manifest" />
				<meta property="og:image" content="https://fostersoasare.vercel.app/logo.svg" data-rh="true" />
				<meta property="twitter:image" content="https://fostersoasare.vercel.app/logo.svg" data-rh="true" />
				<link rel="canonical" href="https://fostersoasare.vercel.app" data-rh="true" />
				<meta
					name="description"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively."
					data-rh="true"
				/>
				<meta
					property="og:title"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively."
					data-rh="true"
				/>
				<meta
					property="og:description"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code."
					data-rh="true"
				/>
				<meta property="og:url" content="https://fostersoasare.vercel.app" data-rh="true" />
				<meta
					name="twitter:title"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code."
					data-rh="true"
				/>

				<meta name="twitter:url" content="https://fostersoasare.vercel.app" data-rh="true" />
				<meta
					name="twitter:description"
					content="Check exchange rates and fuel prices in Ghana today on CediRates. Find all your price updates in one place for easy comparison and make informed decisions."
					data-rh="true"
				/>
			</Head>
			<main className="w-full relative bg-[#0F172A]">
				<div
					className="fixed w-full h-screen   top-0 left-0"
					style={{ background: `radial-gradient(400px at ${newCursorPosition?.x}px ${newCursorPosition.y}px, rgba(29, 78, 216, 0.2), transparent 80%)` }}
					ref={backgroundRef}></div>
				<Component {...pageProps} className="z-[2] relative" />;
			</main>
		</>
	);
}
