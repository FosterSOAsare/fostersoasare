import { useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { BsArrowUp } from "react-icons/bs";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const [newCursorPosition, setNewCursorPosition] = useState({ x: 200, y: 500 });
	const backgroundRef = useRef<any>(null);
	const [showScroll, setShowScroll] = useState(false);
	const { pathname } = useRouter();
	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);

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

	useEffect(() => {
		function scrollFunc() {
			setShowScroll(window.scrollY >= 300);
		}

		window.addEventListener("scroll", scrollFunc);

		return () => {
			window.removeEventListener("scroll", scrollFunc);
		};
	}, []);

	return (
		<div>
			<Head>
				<meta content="width=device-width,initial-scale=1" name="viewport" />
				<meta content="#000000" name="theme-color" />
				<link href="/icon.jpeg" rel="apple-touch-icon" />
				<link href="/manifest.json" rel="manifest" />
				<meta property="og:image" content="https://fostersoasare.vercel.app/share.jpg" data-rh="true" />
				<meta property="twitter:image" content="https://fostersoasare.vercel.app/share.jpg" data-rh="true" />
				<link rel="canonical" href="https://fostersoasare.vercel.app" data-rh="true" />
				<meta
					name="description"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively."
					data-rh="true"
				/>
				<meta property="og:title" content="Experienced Software Developer proficient in building projects forr client's needs" data-rh="true" />
				<meta
					property="og:description"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code."
					data-rh="true"
				/>
				<meta property="og:url" content="https://fostersoasare.vercel.app" data-rh="true" />
				<meta name="twitter:title" content="Experienced Software Developer proficient in building projects forr client's needs." data-rh="true" />
				<meta property="og:image" content="https://fostersoasare.vercel.app/share.jpg" />
				<meta name="twitter:url" content="https://fostersoasare.vercel.app" data-rh="true" />
				<meta property="twitter:image" content="https://fostersoasare.vercel.app/share.jpg" />
				<meta
					name="twitter:description"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code."
					data-rh="true"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<link href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,700,500&display=swap" rel="stylesheet" />
			</Head>
			<main className="w-auto relative">
				<div
					className="fixed w-[100vw] overflow-hidden min-h-screen h-auto lg:h-screen top-0 left-0"
					style={{ background: `radial-gradient(400px at ${newCursorPosition?.x}px ${newCursorPosition.y}px, rgba(29, 78, 216, 0.2), transparent 80%)` }}
					ref={backgroundRef}></div>
				<button
					className={`w-10 h-10 bg-sec flex items-center justify-center fixed transition-all duration-300 ${showScroll ? "scale-100" : "scale-0"} bottom-4 right-4 z-[8] text-black`}
					onClick={() => {
						window.scrollTo(0, 0);
					}}>
					<BsArrowUp className="text-xl" />
				</button>
				<Component {...pageProps} />
			</main>
		</div>
	);
}
