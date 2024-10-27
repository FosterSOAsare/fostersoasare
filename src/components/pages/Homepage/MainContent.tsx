import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import experiences, { experienceType } from "@/data/experience";
import { projectType, homeProjectType, homeProjects } from "@/data/projects";
import stack from "@/data/stack";

import Experience from "./Experience";
import Project from "./Project";

import { AiOutlineSwapRight } from "react-icons/ai";
import { MdSchool, MdWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";

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
					<p className="w-full lg:leading-[30px]  mb-4">
						Starting in Senior High School in 2020, my enthusiasm for web and mobile development grew through self-guided study and industry tutorials. This foundation led me to my first
						PHP project with UNIFIN and further collaboration with startups and mentors, building a portfolio of scalable, high-impact projects.
						<br />
						<br />
						Music, cybersecurity, and creative writing keep me grounded outside of coding. Now, I'm excited to connect with like-minded teams and work on projects that fuel innovation and
						learning.
					</p>
				</section>

				<section className="w-[95%] overflow-hidden h-auto py-6 my-6 lg:py-14 lg:my-14" id="experience" ref={experienceRef}>
					<div className="flex gap-3 items-center mb-5">
						<span className="flex items-center justify-center w-8 h-8">
							<MdWork className="text-2xl" />
						</span>
						<h3 className="font-clash text-3xl font-bold">Experience</h3>
					</div>
					{experiences.map((experience: experienceType, index) => (
						<Experience {...experience} key={index} />
					))}
					<a href="/web-resume.pdf" target="_blank" className="font-clash font-medium capitalize text-white2 hover:text-sec">
						View full Resume
						<AiOutlineSwapRight className="inline ml-[5px]" />
					</a>
				</section>

				<section className="w-[95%] h-auto mt-3">
					<div className="flex gap-3 items-center mb-5">
						<span className="flex items-center justify-center w-8 h-8">
							<MdSchool className="text-2xl" />
						</span>
						<h3 className="font-clash text-3xl font-bold">Education</h3>
					</div>
					<p className="font-clash">
						Currently pursuing a 4-year Bsc. Computer Science course at the{" "}
						<a href="https://www.knust.edu.gh/" target="_blank" className="hover:underline text-sec hover:cursor-pointer font-medium">
							Kwame Nkrumah University Of Science and Technology, Ghana
						</a>
					</p>

					<p className="font-clash mt-4">
						Pursued a 3-year General Science course at the{" "}
						<a href="https://en.wikipedia.org/wiki/Presbyterian_Boys%27_Senior_High_School" target="_blank" className="text-sec hover:underline hover:cursor-pointer font-medium">
							Presbyterian Boys' Secondary School, Legon{" "}
						</a>{" "}
					</p>
				</section>

				<section className="overflow-hidden overflow-y-auto w-full h-auto py-6 my-6 lg:py-14 lg:my-14" id="projects" ref={projectsRef}>
					<div className="flex gap-3 items-center mb-5">
						<span className="flex items-center justify-center w-8 h-8">
							<GoProjectRoadmap className="text-2xl" />
						</span>
						<h3 className="font-clash text-3xl font-bold">Projects</h3>
					</div>
					{homeProjects.map((project: homeProjectType, index) => (
						<Project {...project} key={index} index={index} />
					))}
					<Link href="/archive" className="font-clash font-medium capitalize text-white2 hover:text-sec">
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
