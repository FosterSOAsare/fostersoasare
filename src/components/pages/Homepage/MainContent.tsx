import React from "react";
import Link from "next/link";

import experiences, { experienceType } from "@/data/experience";
import { projectType, homeProjectType, homeProjects } from "@/data/projects";

import Experience from "./Experience";

import { AiOutlineSwapRight } from "react-icons/ai";
import Project from "./Project";

const MainContent = () => {
	return (
		<article className="w-full lg:w-2/3  h-auto min-h-screen p-4 backdrop-blur">
			<section className="lg:ml-4 w-full lg:w-[90%] pt-6 mt-6 lg:pt-12 lg:mt-12" id="about">
				<p className="w-full lg:leading-[30px]  mb-4 ">
					Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've
					had the privilege of building software for an
					<a href="" className="ml-[4px] hover:text-sec text-white2">
						advertising agency
					</a>
					,
					<a href="" className="ml-[4px] hover:text-sec text-white2">
						a start-up
					</a>
					,
					<a href="" className="ml-[4px] hover:text-sec text-white2">
						a student-led design studio
					</a>
					, and a
					<a href="" className="ml-[4px] hover:text-sec text-white2">
						huge corporation.
					</a>
				</p>

				<p className="w-full  mb-4">
					My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything
					you need to know to build a web app with the Spotify API.
				</p>

				<p>When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p>
			</section>

			<section className="w-[95%] h-auto py-6 my-6 lg:py-14 lg:my-14" id="experience">
				{experiences.map((experience: experienceType, index) => (
					<Experience {...experience} key={index} />
				))}
				<a href="" className="capitalize text-white2 hover:text-sec">
					View full Resume
					<AiOutlineSwapRight className="inline ml-[5px]" />
				</a>
			</section>

			<section className="w-full h-auto py-6 my-6 lg:py-14 lg:my-14" id="projects">
				{homeProjects.map((project: homeProjectType, index) => (
					<Project {...project} key={index} />
				))}
				<Link href="/archive" className="capitalize text-white2 hover:text-sec">
					View full project archive
					<AiOutlineSwapRight className="inline ml-[5px]" />
				</Link>
			</section>
		</article>
	);
	// absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg cz-color-12100500 cz-color-15460325
};

export default MainContent;
