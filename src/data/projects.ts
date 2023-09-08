import TasteEatImage from '@/assets/tasteeat.png';
import HubspotImage from '@/assets/hubspot.png';
import WiseImage from '@/assets/wise-app.png';
import BlogAppImage from '@/assets/blog-app.png'
import RestCountryImage from '@/assets/rest-country.png'
import XennolImage from '@/assets/xennol.png'
import { StaticImageData } from 'next/image';


export type homeProjectType = {
  name: string;
  link: string;
  desc: string;
  stars?: number;
  downloads?: string;
  stack?: string[];
  image: string | StaticImageData
}

export const homeProjects: homeProjectType[] = [
  {
    name: 'Restaurant Web App(taste-eat)',
    link: 'https://taste-eat-eta.vercel.app/',
    image: TasteEatImage,
    stack: ['React', 'NodeJs', 'MUI', 'Express', 'MongoDB', 'JavaScript'],
    desc: `A complete website with the aim of allowing users book reservations , read blogs , read and contact chefs and as well browse through dishes. Has the admin section also where admin can edit , add , update or delete blogs , chefs or dishes. This is highly performant and scalable in production`,
  }, {
    name: 'Xennol Landing Page',
    link: 'https://xennol.com',
    image: XennolImage,
    stack: ['NextJs', 'AWS', 'Tailwindcss', 'TypeScript'],
    desc: `A complete website with the aim of allowing users book reservations , read blogs , read and contact chefs and as well browse through dishes. Has the admin section also where admin can edit , add , update or delete blogs , chefs or dishes. This is highly performant and scalable in production`,
  }, {
    name: 'Hubspot Homepage Clone',
    image: HubspotImage,
    desc: 'Clone of the homepage of one of the best websites that offers softwares , tools and resources for your business',
    stack: ['HTML', 'Scss', 'Typescript', 'DOM'],
    link: 'https://hubspot-two.vercel.app/'
  }, {
    name: 'Blog App(read.cash clone)',
    desc: 'Growing up , I was at an advantage to get to know of a website called read.cash where I could write articles and get paid. I therefore decided to create a blog app that mimicks what that website does',
    link: 'https://blog-site-d48bd.firebaseapp.com/',
    image: BlogAppImage,
    stack: ['React', 'Firebase', 'Scss', 'Javascript'],
  }, {
    name: 'Wise website clone',
    desc: 'A clone of the homepage of an internation website that deals with the sending of incentives from abroad to their relatives in mostly African countries',
    stack: ['React', 'Firebase', 'Javascript', 'MUI'],
    image: WiseImage,
    link: 'https://v4.brittanychiang.com/'
  }, {
    name: 'Rest Country API Project',
    desc: 'A frontend challenge project from frontendmentor.io. This was a fun way to rehearse on Js, CSS and HTML',
    stack: ['HTML', 'Scss', 'Javascript', 'DOM'],
    image: RestCountryImage,
    link: 'https://v4.brittanychiang.com/'
  }
]

export type projectType = {
  name: string,
  stack: string[],
  link?: { name: string, href: string },
  year: string
}
const projects: projectType[] = [{
  name: 'Taste-eat Restaurant App',
  stack: ['NodeJs', 'React', 'Express', 'MongoDB', 'MUI'],
  link: { name: 'taste-eat-eta.vercel.com', href: 'https://taste-eat-eta.vercel.app/' },
  year: '2023'
}, {
  name: 'Xennol',
  stack: ['NextJs', 'Tailwindcss', 'Typescript'],
  link: { name: 'xennol.com', href: 'https://xennol.com' },
  year: '2023'
}, {
  name: 'Blog App',
  stack: ['React', 'Scss', 'Firebase', 'Javascript'],
  link: { name: 'blog.app', href: 'https://blog-site-d48bd.firebaseapp.com/' },
  year: '2023'
}, {
  name: 'Election App',
  stack: ['React', 'Scss', 'Firebase', 'Context API'],
  link: { name: 'election.app', href: 'https://elections-app-2aa42.firebaseapp.com/' },
  year: '2023'
}, {
  name: 'Wise Website Clone',
  stack: ['React', 'Javascript', 'MUI', 'Firebase'],
  link: { name: 'wise-ef84b.web.app', href: 'https://wise-ef84b.web.app/' },
  year: '2022'
}, {
  name: 'Hubspot Clone',
  stack: ['HTML', 'CSS', 'Typescript', 'DOM'],
  link: { name: 'hubspot-two.vercel.app', href: 'https://hubspot-two.vercel.app/' },
  year: '2022'
}, {
  name: 'Rest Country API',
  stack: ['HTML', 'CSS', 'Javascript', 'DOM'],
  link: { name: 'rest-country-api-xi.vercel.app', href: 'https://rest-country-api-xi.vercel.app/' },
  year: '2021'
}, {
  name: 'Modern Nest Landing Page',
  stack: ['React', 'Tailwindcss', 'Javascript', 'Swiper'],
  link: { name: 'furniture-beryl.vercel.app', href: 'https://furniture-beryl.vercel.app/' },
  year: '2022'
}, {
  name: 'Carpatin Landing Page',
  stack: ['MUI', 'React', 'Javascript'],
  link: { name: 'carpatin.vercel.app', href: 'https://carpatin.vercel.app/' },
  year: '2022'
}, {
  name: 'Ramen UI Landing Page',
  stack: ['React', 'Tailwindcss', 'Scss'],
  link: { name: 'ramen-ui.vercel.app', href: 'https://ramen-ui.vercel.app/' },
  year: '2021'
}, {
  name: 'Google Docs Clone ',
  stack: ['Oauth', 'Node', 'NextJs', 'MongoDB', 'Express'],
  year: '2023'
}, {
  name: 'Car Rental Web App',
  stack: ['Oauth', 'Node', 'NextJs', 'MongoDB', 'Express', 'Tailwindcss'],
  year: '2023'
}]

export default projects