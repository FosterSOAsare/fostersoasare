import React, { useState } from "react";

import Footer from "@/components/Footer";

const UserInfo = () => {
	const [selected, setSelected] = useState(0);
	return (
		<article className="py-12 lg:py-24 w-full lg:w-1/2  px-4 lg:sticky top-0 left-0 h-auto lg:h-screen flex flex-col justify-start gap-8 md:gap-12">
			<div>
				<h1 className="font-bold text-3xl lg:text-5xl mb-2 text-white">Foster Asare </h1>
				<p className="font-medium mb-4 text-white">MERN Developer at Xennol Limited</p>

				<p className="lg:w-2/3"> Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively.</p>
			</div>
			<nav>
				<ul className="list-none">
					<li className={`flex mb-6 items-center justify-start group gap-3 ${selected === 0 ? "active_link" : ""}`}>
						<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
						<a href="#about" className="tracking-[2px] uppercase font-bold text-[13px] group-hover:text-white">
							About
						</a>
					</li>
					<li className={`flex mb-6 items-center justify-start group gap-3 ${selected === 1 ? "active_link" : ""}`}>
						<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
						<a href="#experience" className="tracking-[2px] uppercase text-[#64748B] font-bold text-[13px] group-hover:text-white">
							Experience
						</a>
					</li>
					<li className={`flex mb-6 items-center justify-start group gap-3 ${selected === 2 ? "active_link" : ""}`}>
						<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
						<a href="#projects" className="tracking-[2px] uppercase text-[#64748B] font-bold text-[13px] group-hover:text-white">
							Projects
						</a>
					</li>
				</ul>
			</nav>
			<Footer />
		</article>
	);
};

export default UserInfo;
