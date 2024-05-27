import React, { useEffect } from "react";
import AOS from "aos";

import { experienceType } from "@/data/experience";

import { BsLink45Deg } from "react-icons/bs";

const Experience = ({ position, company, startDate, endDate, desc, stack, links }: experienceType) => {
	useEffect(() => {
		AOS.init({
			duration: 600,
		});
	}, []);
	return (
		<div className="w-full  card hover:drop-shadow-lg rounded-[10px] h-auto mb-12 flex flex-col md:flex-row items-start justify-between gap-4 lg:p-4" data-aos="fade-up">
			<div className="md:w-1/5">
				<p className="text-[12px] font-clash opacity-60 mt-[3px] font-normal">
					{startDate} - <span className="text-sec font-bold">{endDate}</span>
				</p>
			</div>
			<div className="md:w-4/5">
				<p className="font-bold font-clash text-sec">
					{position} <span className="text-sm   text-white"> @ {company}</span>
				</p>
				<p className="text-sm leading-[25px] font-light mt-2">{desc}</p>

				{links && (
					<div className="mt-2 w-full lg:w-[90%]">
						{links.map((link, index) => (
							<a href={link.href} target="_blank" rel="noreferrer" key={index} className="text-[#CBD5E1] hover:text-[#2DD4BF] text-[13px] p-[4px] inline-block mb-2 mr-[6px]">
								<BsLink45Deg className="inline mr-[2px]" />

								{link.name}
							</a>
						))}
					</div>
				)}
				<div className="mt-2 w-[90%]">
					{stack.map((item, index) => (
						<p
							key={index}
							className="bg-slate-50 hover:cursor-pointer hover:bg-opacity-20 bg-opacity-5 text-[#2DD4BF] rounded-full font-clash px-3 text-sm p-[4px] inline-block mb-2 mr-[6px]">
							{item}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
