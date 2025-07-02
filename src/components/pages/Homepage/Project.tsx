import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import { homeProjectType } from "@/data/projects";

interface projectType extends homeProjectType {
	index: number;
}

import { AiFillStar } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

const Project = ({ name, stars, desc, downloads, image, link, stack, index, status }: projectType) => {
	useEffect(() => {
		AOS.init({
			duration: 600,
		});
	}, []);
	return (
		<div className="w-full  card h-auto mb-12 flex items-start flex-col md:flex-row justify-between gap-4 group  rounded-[10px] lg:p-4" data-aos={`fade-${index % 2 === 0 ? "left" : "right"}`}>
			<a href={link} className="w-full md:w-1/3 h-[180px] lg:h-28 rounded-[5px] overflow-hidden relative">
				<Image src={image} fill alt="Project Lead Image" />
			</a>
			<div className="w-full md:w-2/3">
				<a href={link} target="_blank" rel="noreferrer" className="text-white font-bold font-clash hover:text-sec">
					{name}
				</a>
				<p className="text-[13px] leading-[25px] mt-2 opacity-80">{desc}</p>

				{stars && (
					<p className="text-sm mt-2 hover:text-sec  hover:cursor-pointer">
						<AiFillStar className="inline-block -mt-[2px] mr-[2px]" />
						{stars}
					</p>
				)}

				{status && <p className="text-amber-300 text-xs">{status}</p>}

				{downloads && (
					<p className="text-sm mt-2 hover:text-sec  hover:cursor-pointer">
						<BsDownload className="inline-block -mt-[2px] mr-[4px]" />
						{downloads} Installs
					</p>
				)}

				{stack && (
					<div className="mt-2 w-full lg:w-4/5">
						{stack?.map((item, index) => (
							<p key={index} className="bg-slate-50 hover:bg-opacity-20 hover:cursor-pointer bg-opacity-5 text-[#2DD4BF] rounded-full px-3 text-sm p-[4px] inline-block mb-2 mr-[6px]">
								{item}
							</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Project;
