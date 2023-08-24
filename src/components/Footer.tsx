import React from "react";

import { BiLogoGithub, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
	return (
		<footer className="w-full mt-auto  h-8 flex items-center gap-5">
			<a href="">
				<BiLogoGithub className="text-3xl text-[#C5D1EC] hover:text-sec" />
			</a>
			<a href="">
				<BiLogoInstagram className="text-3xl text-[#C5D1EC] hover:text-sec" />
			</a>
			<a href="">
				<BiLogoTwitter className="text-3xl text-[#C5D1EC] hover:text-sec" />
			</a>
			<a href="">
				<BiLogoLinkedin className="text-3xl text-[#C5D1EC] hover:text-sec" />
			</a>
		</footer>
	);
};

export default Footer;
