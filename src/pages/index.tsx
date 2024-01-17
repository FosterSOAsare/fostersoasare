import { useState } from "react";
import Head from "next/head";

import UserInfo from "@/components/pages/Homepage/UserInfo";
import MainContent from "@/components/pages/Homepage/MainContent";

export default function Home() {
	const [selected, setSelected] = useState(0);
	return (
		<div className="w-full h-auto">
			<Head>
				<title>Portfolio - Foster Asare</title>
				<meta
					name="description"
					content="Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			<main className="w-full relative h-auto">
				<section className="flex relative text-white flex-col lg:flex-row justify-center items-start">
					<UserInfo {...{ selected, setSelected }} />
					<MainContent {...{ selected, setSelected }} />
				</section>
			</main>
		</div>
	);
}
