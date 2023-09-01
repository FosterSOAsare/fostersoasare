import React from "react";

import { experienceType } from "@/data/experience";

import { BsLink45Deg } from "react-icons/bs";

const Experience = ({ position, company, startDate, endDate, desc, stack, links }: experienceType) => {
	return (
		<div className="w-full  card hover:drop-shadow-lg rounded-[10px] h-auto mb-12 flex flex-col md:flex-row items-start justify-between gap-4 p-4">
			<div className="md:w-1/5">
				<p className="text-[12px] opacity-60 mt-[3px] font-normal">
					{startDate} - {endDate}
				</p>
			</div>
			<div className="md:w-4/5">
				<p className="text-white hover:text-sec">
					{position} . <span>{company}</span>
				</p>
				<p className="text-sm opacity-60 mt-2">{desc}</p>

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
						<p key={index} className="bg-slate-50 hover:cursor-pointer hover:bg-opacity-20 bg-opacity-5 text-[#2DD4BF] rounded-full px-3 text-sm p-[4px] inline-block mb-2 mr-[6px]">
							{item}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
