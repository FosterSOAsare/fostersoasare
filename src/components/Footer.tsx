import React, { useEffect } from "react";

import { BiLogoGithub, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
	return (
		<footer className="w-full md:mt-auto  h-8 flex items-center gap-5">
			<a href="https://github.com/fostersoasare" target="_blank" rel="noreferrer">
				<BiLogoGithub className="text-3xl text-[#C5D1EC] hover:text-sec" />
			</a>
			<a href="https://twitter.com/@fostersoasare" target="_blank" rel="noreferrer">
				<BiLogoTwitter className="text-3xl text-[#C5D1EC] hover:text-sec" />
			</a>
			<a href="https://www.linkedin.com/in/foster-asare-599660232/" target="_blank" rel="noreferrer">
				<BiLogoLinkedin className="text-3xl text-[#C5D1EC] hover:text-sec" />
			</a>
		</footer>
	);
};

export default Footer;
