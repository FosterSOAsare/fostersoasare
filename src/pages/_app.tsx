import { useEffect, useState, useRef } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

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
		<main className="w-full relative bg-[#0F172A]">
			<div
				className="fixed w-full h-screen   top-0 left-0"
				style={{ background: `radial-gradient(400px at ${newCursorPosition?.x}px ${newCursorPosition.y}px, rgba(29, 78, 216, 0.2), transparent 80%)` }}
				ref={backgroundRef}></div>
			<Component {...pageProps} className="z-[2] relative" />;
		</main>
	);
}
