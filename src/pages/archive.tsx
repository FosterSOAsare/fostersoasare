import React from "react";
import Link from "next/link";

import projects, { projectType } from "@/data/projects";

import Project from "@/components/pages/Archive/Project";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const archive = () => {
	return (
		<main className="relative z-[2] w-full text-white h-auto">
			<div className="w-full max-w-6xl mx-auto min-h-screen py-12 md:py-24 px-6 md:px-8 lg:px-0">
				<Link href="/" className="font-bold text-lg text-sec hover:text-xl transition-all duration-200">
					<HiOutlineArrowLongLeft className="inline mr-[4px] relative text-md -top-[2px]" />
					Foster Asare
				</Link>
				<h1 className="font-bold text-3xl mb-6 lg:text-5xl mt-2 text-white">All Projects</h1>

				<article className="w-full h-auto mt-4 md:gap-4 lg:gap-0 py-4 border-b-[1px] border-slate-300/10 flex justify-between items-center">
					<p className="w-1/5 md:w-[10%] text-sm">Year</p>
					<p className="w-4/5 md:w-1/2 lg:w-[35%] font-bold text-sm">Project</p>
					<p className="w-[35%] hidden lg:block font-bold text-sm">Built with</p>
					<p className="md:w-[40%] w-[20%] lg:w-[20%] hidden md:block font-bold text-sm">Link</p>
				</article>
				{projects.map((project, index) => (
					<Project {...project} key={index} />
				))}
			</div>
		</main>
	);
};

export default archive;
