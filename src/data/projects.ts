import TasteEatImage from "@/assets/tasteeat.png";
import HubspotImage from "@/assets/hubspot.png";
import WiseImage from "@/assets/wise-app.png";
import BlogAppImage from "@/assets/blog-app.png";
// import HomeBasketImage from "@/assets/homebasket.jpg";
import LogicoreImage from "@/assets/logicore.jpg";
import ArchImage from "@/assets/arch.jpg";
import MirrorImage from "@/assets/mirror.jpg";
import AevodropImage from "@/assets/aevodrop.jpg";
import MafoilImage from "@/assets/mafoil.jpg";
import { StaticImageData } from "next/image";

export interface homeProjectType {
  name: string;
  link: string;
  desc: string;
  stars?: number;
  downloads?: string;
  stack?: string[];
  image: string | StaticImageData;
  status?: string;
}

export const homeProjects: homeProjectType[] = [
  {
    name: "Logicore Website",
    link: "https://logicore-psi.vercel.app",
    image: LogicoreImage,
    stack: ["NextJs", "Tailwindcss", "TypeScript"],
    desc: `A logistics platform for managing shipments, service requests, and client communication. Features real-time tracking and an admin dashboard for handling orders and updates. Built for performance and scalability.`,
  },
  {
    name: "Architecture Website",
    link: "https://architecture-iota-lac.vercel.app/",
    image: ArchImage,
    stack: ["NextJs", "Tailwindcss", "TypeScript"],
    desc: `An architecture platform showcasing modern building and house designs. Users can explore projects, view galleries, and connect with architects. Includes an admin panel for managing content efficiently.`,
  },

  // {
  //   name: "Homebasket",
  //   link: "https://homebasket.store",
  //   status: "Currently down due to unpaid hosting",
  //   image: HomeBasketImage,
  //   stack: ["React", "Express", "Tailwindcss", "MongoDB", "Typescript"],
  //   desc: `A complete eCommerce website with the aim of allowing users to browse and purchase foodstuff, specifically catering to KNUST students. The platform includes an admin section where admins can add, edit, update, or delete products, manage orders, and oversee user interactions.`,
  // },
  {
    name: "Mafoil E-commerce",
    desc: "Fully fledged e-commerce website built with current technologies to have latest features in all e-commerce applications. These includes auth , wishlist , cart , orders amd several others. ",
    stack: [
      "NextJs",
      "MongoDB",
      "RTK Query",
      "Tailwindcss",
      "Express",
      "NodeJs",
    ],
    image: MafoilImage,
    link: "https://mafoil.vercel.app/",
  },
  // {
  //   name: "Logicore Website",
  //   link: "https://logicore-psi.vercel.app",
  //   image: LogicoreImage,
  //   stack: ["NextJs", "Tailwindcss", "TypeScript"],
  //   desc: `A complete website with the aim of allowing users book reservations , read blogs , read and contact chefs and as well browse through dishes. Has the admin section also where admin can edit , add , update or delete blogs , chefs or dishes. This is highly performant and scalable in production`,
  // },
  {
    name: "Mirror Web app",
    link: "https://mirror-fa.vercel.app/",
    image: MirrorImage,
    stack: ["React", "Tailwindcss", "TypeScript"],
    desc: `Get to know the hidden you. Mirror reveals your true personality, exposing the unseen and unknown self. LOOK INTO THE MIRROR TODAY`,
  },
  {
    name: "Hubspot Homepage Clone",
    image: HubspotImage,
    desc: "Clone of the homepage of one of the best websites that offers softwares , tools and resources for your business",
    stack: ["HTML", "Scss", "Typescript", "DOM"],
    link: "https://hubspot-two.vercel.app/",
  },
  {
    name: "AevoDrop Website",
    image: AevodropImage,
    desc: "The airdrop and presale website of the aevodrop token. It includes a feature for airdrops as well as that for presale. Includes information about the coin as well as whitepaper",
    stack: ["NextJs", "Tailwindcss", "Typescript"],
    link: "https://aevodrop.vercel.app/",
  },

  {
    name: "Wise website clone",
    desc: "A clone of the homepage of an internation website that deals with the sending of incentives from abroad to their relatives in mostly African countries",
    stack: ["React", "Firebase", "Javascript", "MUI"],
    image: WiseImage,
    link: "https://wise-ef84b.web.app",
  },
];

export type projectType = {
  name: string;
  stack: string[];
  link?: { name: string; href: string };
  year: string;
};
const projects: projectType[] = [
  {
    name: "Logicore Website",
    year: "2026",
    stack: ["NextJs", "Tailwindcss", "TypeScript", "Framer Motion"],
    link: { name: "Logicore", href: "https://logicore-psi.vercel.app" },
  },
  {
    name: "Architecture Website",
    year: "2026",
    stack: ["NextJs", "Tailwindcss", "TypeScript", "Framer Motion"],
    link: {
      name: "architecture",
      href: "https://architecture-iota-lac.vercel.app/",
    },
  },
  {
    name: "Mafoil E-commerce",
    year: "2024",
    stack: ["NextJs", "MongoDB", "RTK Query", "NodeJs"],
    link: { name: "mafo.il", href: "https://mafoil.vercel.app/" },
  },
  {
    name: "Aevodrop Website",
    stack: ["NextJs", "Tailwindcss", "Typescript"],
    link: { name: "aevodrop.vercel.app", href: "https://aevodrop.vercel.app/" },
    year: "2024",
  },
  {
    name: "Taste-eat Restaurant App",
    stack: ["NodeJs", "React", "Express", "MongoDB", "MUI"],
    link: {
      name: "taste-eat-eta.vercel.app",
      href: "https://taste-eat-eta.vercel.app/",
    },
    year: "2023",
  },

  {
    name: "Mirror Web app",
    link: { name: "Mirror", href: "https://mirror-fa.vercel.app/" },
    year: "2023",
    stack: ["React", "Tailwindcss", "TypeScript"],
  },
  // {
  //   name: "Blog App",
  //   stack: ["React", "Scss", "Firebase", "Javascript"],
  //   link: {
  //     name: "blog.app",
  //     href: "https://blog-site-d48bd.firebaseapp.com/",
  //   },
  //   year: "2023",
  // },
  // {
  //   name: "Election App",
  //   stack: ["React", "Scss", "Firebase", "Context API"],
  //   link: {
  //     name: "election.app",
  //     href: "https://elections-app-2aa42.firebaseapp.com/",
  //   },
  //   year: "2023",
  // },
  {
    name: "Wise Website Clone",
    stack: ["React", "Javascript", "MUI", "Firebase"],
    link: { name: "wise-ef84b.web.app", href: "https://wise-ef84b.web.app/" },
    year: "2022",
  },
  {
    name: "Hubspot Clone",
    stack: ["HTML", "CSS", "Typescript", "DOM"],
    link: {
      name: "hubspot-two.vercel.app",
      href: "https://hubspot-two.vercel.app/",
    },
    year: "2022",
  },

  {
    name: "Modern Nest Landing Page",
    stack: ["React", "Tailwindcss", "Javascript", "Swiper"],
    link: {
      name: "furniture-beryl.vercel.app",
      href: "https://furniture-beryl.vercel.app/",
    },
    year: "2022",
  },
];

export default projects;
