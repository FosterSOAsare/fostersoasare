import Footer from "@/components/Footer";
import React from "react";

const UserInfo = () => {
	return (
		<article className="py-12 lg:py-24 w-full lg:w-1/2  px-4 lg:sticky top-0 left-0 h-auto lg:h-screen flex flex-col justify-start gap-12">
			<div>
				<h1 className="font-bold text-3xl lg:text-5xl mb-2 text-white">Asare Foster</h1>
				<p className="font-medium mb-4 text-white">MERN Developer at Xennol Limited</p>

				<p className="w-2/3"> I build accessible, inclusive products and digital experiences for the web.</p>
			</div>
			<nav>
				<ul className="list-none">
					<li className="flex mb-6 items-center justify-start  group gap-3">
						<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
						<a href="#about" className="tracking-[2px] uppercase font-bold text-[13px] group-hover:text-white">
							About
						</a>
					</li>
					<li className="flex mb-6 items-center justify-start  group gap-3">
						<span className="w-8 block h-[1px] bg-white group-hover:w-16 transition-all duration-100"></span>
						<a href="#experience" className="tracking-[2px] uppercase text-[#64748B] font-bold text-[13px] group-hover:text-white">
							Experience
						</a>
					</li>
					<li className="flex mb-6 items-center justify-start group  gap-3">
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
