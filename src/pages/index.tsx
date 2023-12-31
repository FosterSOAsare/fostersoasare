import { useState } from "react";
import Head from "next/head";

import UserInfo from "@/components/pages/Homepage/UserInfo";
import MainContent from "@/components/pages/Homepage/MainContent";

export default function Home() {
	const [selected, setSelected] = useState(0);
	return (
		<>
			<Head>
				<title>Portfolio - Foster Asare</title>
				<meta
					name="description"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			<main className=" relative z-[2] w-[100vw] text-primary min-h-screen">
				<section className="w-full lg:gap-8 h-auto max-w-6xl md:px-4 mx-auto flex lg:flex-row flex-col items-start justify-between">
					<UserInfo {...{ selected, setSelected }} />
					<MainContent {...{ selected, setSelected }} />
				</section>
			</main>
		</>
	);
}
