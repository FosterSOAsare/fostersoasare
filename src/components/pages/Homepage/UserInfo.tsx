import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";

import Footer from "@/components/Footer";

import ProfileImage from "@/assets/pp.jpg";

const UserInfo = ({ selected, setSelected }: { selected: number; setSelected: React.Dispatch<React.SetStateAction<number>> }) => {
	return (
		<article className="py-12 lg:py-22 w-full lg:w-1/2  px-4 relative lg:sticky top-0 left-0 h-auto lg:h-screen  justify-start gap-8">
			<div className="w-full max-w-[500px] h-full lg:ml-auto flex flex-col">
				<div className="mb-12 lg:mb-6">
					<div className="w-16 h-16 overflow-hidden border-[3px] bg-slate-100 mb-4 relative rounded-full">
						<Image src={ProfileImage} alt="Asare Foster" fill></Image>
					</div>
					<h1 className="font-bold font-clash text-3xl lg:text-5xl mb-2 text-white">Foster Asare </h1>
					<p className="font-medium font-clash mb-4 text-sec">Fullstack Website Developer</p>

					<p className="">
						Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready
						code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively.
					</p>
				</div>
				<nav className="mb-12 lg:mb-0 ">
					<ul className="list-none">
						<a href="#about" className={`flex mb-6 items-center justify-start group gap-3 ${selected === 0 ? "active_link" : "opacity-80"}`} onClick={() => setSelected(0)}>
							<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
							<p className="tracking-[2px] uppercase font-bold font-clash text-[13px] group-hover:text-white">About</p>
						</a>
						<a href="#experience" className={`flex mb-6 items-center justify-start group gap-3 ${selected === 1 ? "active_link" : "opacity-80"}`} onClick={() => setSelected(1)}>
							<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
							<p className="tracking-[2px] uppercase font-bold font-clash text-[13px] group-hover:text-white">Experience</p>
						</a>
						<a href="#projects" className={`flex mb-6 items-center justify-start group gap-3 ${selected === 2 ? "active_link" : "opacity-80"}`} onClick={() => setSelected(2)}>
							<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
							<p className="tracking-[2px] uppercase font-bold font-clash text-[13px] group-hover:text-white">Projects</p>
						</a>
					</ul>
				</nav>
				<Footer />
			</div>
		</article>
	);
};

export default UserInfo;
