import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import experiences, { experienceType } from "@/data/experience";
import { projectType, homeProjectType, homeProjects } from "@/data/projects";
import stack from "@/data/stack";

import Experience from "./Experience";

import { AiOutlineSwapRight } from "react-icons/ai";
import Project from "./Project";

const MainContent = ({ setSelected }: { setSelected: React.Dispatch<React.SetStateAction<number>> }) => {
	const aboutRef = useRef<any>(null);
	const experienceRef = useRef<any>(null);
	const projectsRef = useRef<any>(null);

	useEffect(() => {
		if (!aboutRef?.current || !experienceRef?.current || !projectsRef?.current) return;
		function checkInView() {
			// This is to check the first true value and set it as the selected
			let values = [isInViewport(aboutRef?.current), isInViewport(experienceRef?.current), isInViewport(projectsRef?.current)];
			let index = values.findIndex((v) => v === true);
			setSelected(index);
		}
		function isInViewport(element: any) {
			const rect = element?.getBoundingClientRect();
			if (!rect) return;
			return rect.bottom >= 0 && rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
		}
		window.addEventListener("scroll", checkInView);

		return () => {
			window.removeEventListener("scroll", checkInView);
		};
	}, []);

	return (
		<article className="w-[100vw] lg:w-2/3  h-auto overflow-x:hidden  backdrop-blur">
			<div className="p-4 w-full max-w-[760px] mr-auto px-6">
				<section className="lg:ml-4 w-full lg:w-[90%] pt-0 md:pt-6 mt-6 lg:pt-10 lg:mt-12" id="about" ref={aboutRef} data-aos="fade-left">
					<p className="w-full lg:leading-[30px]  mb-4 font-clash">
						In 2020, I discovered my passion for web and mobile development during my Senior High School years. Self-driven learning, tutorials, and practice led me to secure my first
						contract as a PHP developer at UNIFIN. Subsequent experiences with startups and senior developers further enriched my skills, resulting in the creation of high-performance
						projects.
						<br />
						<br />
						Beyond my professional pursuits, I have a strong interest in music, occasional article writing, and coding. This summary encapsulates my journey and interests, and I am
						available for discussions and collaborations
					</p>
				</section>

				<section className="w-[95%] overflow-hidden h-auto py-6 my-6 lg:py-14 lg:my-14" id="experience" ref={experienceRef}>
					{experiences.map((experience: experienceType, index) => (
						<Experience {...experience} key={index} />
					))}
					<a href="/web-resume.pdf" download={true} target="_blank" className="capitalize text-white2 hover:text-sec">
						View full Resume
						<AiOutlineSwapRight className="inline ml-[5px]" />
					</a>
				</section>

				<section className="overflow-hidden overflow-y-auto w-full h-auto py-6 my-6 lg:py-14 lg:my-14" id="projects" ref={projectsRef}>
					{homeProjects.map((project: homeProjectType, index) => (
						<Project {...project} key={index} index={index} />
					))}
					<Link href="/archive" className="capitalize text-white2 hover:text-sec">
						View full project archive
						<AiOutlineSwapRight className="inline ml-[5px]" />
					</Link>
				</section>

				<section className="w-full h-auto gap-8  my-6 grid grid-cols-6 md:grid-cols-8 pb-12 lg:my-14" id="stack" ref={projectsRef}>
					{stack.map((item, index) => {
						let fade = index % 4 === 0 ? "fade-up" : index % 3 === 0 ? "fade-down" : index % 2 === 1 ? "fade-right" : "fade-left";
						return (
							<div key={index} className="w-full relative h-12 hover:cursor-pointer" data-aos={fade} title={item?.name}>
								<Image src={item?.image} fill alt="Image" />
							</div>
						);
					})}
				</section>
			</div>
		</article>
	);
};

export default MainContent;
