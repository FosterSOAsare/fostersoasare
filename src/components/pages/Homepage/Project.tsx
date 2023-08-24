import React from "react";
import Image from "next/image";

import { projectType } from "@/data/projects";

import { AiFillStar } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

const Project = ({ name, stars, desc, downloads, image, link, stack }: projectType) => {
	return (
		<div className="w-full  card h-auto mb-12 flex items-start flex-col md:flex-row justify-between gap-4 group  rounded-[10px] lg:p-4">
			<div className="w-full md:w-1/3 h-48 lg:h-32 rounded-[5px] overflow-hidden relative">
				<Image src={image} fill alt="Project Lead Image" />
			</div>
			<div className="w-full md:w-2/3">
				<a href={link} className="text-white hover:text-sec">
					{name}
				</a>
				<p className="text-[13px] opacity-60 mt-2">{desc}</p>

				{stars && (
					<p className="text-sm mt-2 hover:text-sec  hover:cursor-pointer">
						<AiFillStar className="inline-block -mt-[2px] mr-[2px]" />
						{stars}
					</p>
				)}

				{downloads && (
					<p className="text-sm mt-2 hover:text-sec  hover:cursor-pointer">
						<BsDownload className="inline-block -mt-[2px] mr-[4px]" />
						{downloads} Installs
					</p>
				)}

				{stack && (
					<div className="mt-2 w-full lg:w-4/5">
						{stack?.map((item, index) => (
							<p key={index} className="bg-slate-50 bg-opacity-5 text-[#2DD4BF] rounded-full px-3 text-sm p-[4px] inline-block mb-2 mr-[6px]">
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
