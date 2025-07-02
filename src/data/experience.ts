export type experienceType = {
    position: string;
    company: string;
    desc: string;
    stack: string[];
    links: { name: string; href: string }[];
    startDate: string;
    endDate: string;
    type?: string;
};

const experiences: experienceType[] = [
    {
        position: "Founder",
        company: "Dev Initiative",
        desc: "Teaching a team of resilient individuals how to build industry standard web applications. The initiative focuses on empowering individuals with the skills needed to excel in web development, fostering a community of learners and innovators.",
        stack: ["ReactJs", "MongoDB", "Typescript", "TailwindCSS", "Express", "Node"],
        links: [
            // {name: "Procvcreator", href: "https://procvcreator.com"},
            // { name: 'Xennol Website', href: 'https://xennol.com' },
        ],
        startDate: "JUNE 2024",
        endDate: "PRESENT",
    },
    {
        position: "Fullstack Developer",
        type: "CONTRACT",
        company: "Homebasket",
        desc: `Developed an interactive eCommerce web app for HomeBasket.store, a platform that sells foodstuff with a focus on KNUST students. The project includes features for seamless ordering, a smooth checkout process, and a robust admin section that allows full control over the site, including product management, order tracking, and user administration.`,
        stack: ["Node", "Express", "MongoDB", "Subdomains", "TailwindCSS"],
        links: [{ name: "Homebasket.store", href: "https://homebasket.store" }],
        startDate: "NOV 2024",
        endDate: "FEB 2025",
    },
    {
        position: "Lead Developer",
        company: "Zest",
        desc: `Developing an interactive web app for a Point of Sale (POS) system, with a focus on features related to stock management. This ongoing project involves enhancing the functionality and user interface of the POS system for efficient stock tracking and management.`,
        stack: ["Node", "Express", "MongoDB", "NextJs", "TailwindCSS"],
        links: [],
        startDate: "AUG 2023",
        endDate: "PRESENT",
    },

    {
        position: "Frontend Web Developer",
        company: "Cedirates",
        desc: `As a frontend developer on CediRates.com, I collaborated on building and deploying a responsive interface that provides real-time exchange rates, fuel prices, and economic news, focusing on user-friendly design and smooth navigation`,
        stack: ["React", "CSS", "Javascript"],
        links: [{ name: "Cedirates", href: "https://cedirates.com" }],
        startDate: "FEB 2023",
        endDate: "JUN 2023",
    },
    {
        position: "Frontend Developer",
        company: "WalletHack",
        type: "CONTRACT",
        desc: `Collaborated with a senior developer on a Stellar blockchain project, focusing on creating a seamless, user-friendly environment for on-the-go trading and various other activities.`,
        stack: ["Angular", "SCSS", "Javascript", "Codepen"],
        links: [{ name: "Wallethack", href: "https://wallethack.com" }],
        startDate: "NOV 2022",
        endDate: "MAR 2023",
    },
    {
        position: "PHP Developer",
        company: "UNIFIN",
        desc: `Contributed to the development of a closed system designed to establish a community based on referrals. The system implemented a democratic decision-making process, where community members voted on the allocation of earned funds. Leveraged highly customizable components to build a high-performance application for this purpose.`,
        stack: ["PHP", "Scss", "Javascript", "Hostinger", "WalletConnect", "Stellar"],
        links: [],
        startDate: "APR",
        endDate: "NOV 2022",
    },
];

export default experiences;
