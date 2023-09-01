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
    stack: ['React', 'NodeJs', 'Tailwindcss', 'Express', 'MongoDB', 'TypeScript'],
    desc: `A complete website with the aim of allowing users book reservations , read blogs , read and contact chefs and as well browse through dishes. Has the admin section also where admin can edit , add , update or delete blogs , chefs or dishes. This is highly performant and scalable in production`,
  }, {
    name: 'Hubspot Homepage Clone',
    image: HubspotImage,
    desc: 'Clone of the homepage of one of the best websites that offers softwares , tools and resources for your business',
    stack: ['HTML', 'Scss', 'Javascript', 'DOM'],
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
    stack: ['Gatsby', 'Styled Components', 'Netlify'],
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
  madeAt?: string,
  stack: string[],
  link?: { name: string, href: string },
  year: string
}
const projects: projectType[] = [{
  name: 'Harvard Business School Design System',
  madeAt: 'Upstatement',
  stack: ['Storybook', 'React', 'Typescript'],
  year: '2022'
}, {
  name: 'Threadable',
  madeAt: 'Upstatement',
  stack: ['React Native', 'Ruby On Rails', 'Firebase'],
  link: { name: 'apps.apple.com', href: 'https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&ct=threadablebooks.com%20header&mt=8' },
  year: '2022'
}, {
  name: 'Pratt',
  madeAt: 'Upstatement',
  stack: ['Wordpress', 'Timber', 'Wordpress Multisite', 'Gutenberg', 'Javascript'],
  link: { name: 'pratt.edu', href: 'https://www.pratt.edu/' },
  year: '2022'
}, {
  name: 'Everytown Gun Law Rankings',
  madeAt: 'Upstatement',
  stack: ['Wordpress', 'Timber', 'PHP', 'Airtable API'],
  link: { name: 'everytownresearch.org/rankings', href: 'https://everytownresearch.org/rankings/' },
  year: '2022'
}, {
  name: 'Koala Health',
  madeAt: 'Upstatement',
  stack: ['Nextjs', 'Typescript', 'Redux Toolkit', 'Stripe', 'Algolia', 'Firebase Auth', 'Formik', 'Vercel'],
  link: { name: 'koala.health', href: 'https://www.koala.health/' },
  year: '2021'
}, {
  name: 'Philadelphia Inquirer Sports Scoreboards',
  madeAt: 'Upstatement',
  stack: ['React', 'Typescript', 'Stats Perform API'],
  link: { name: 'inquirer.com/sports', href: 'https://www.inquirer.com/sports/' },
  year: '2021'
}, {
  name: 'Vanderbilt Design System',
  madeAt: 'Upstatement',
  stack: ['Twig', 'Puppy', 'Javascript'],
  link: { name: 'vanderbilt.edu', href: 'https://www.vanderbilt.edu/' },
  year: '2021'
}, {
  name: 'Michelle Wu for Boston Grassroots Toolkit',
  madeAt: 'Upstatement',
  stack: ['Gatsby', 'Styled Components'],
  link: { name: 'toolkit.michelleforboston.com', href: 'https://toolkit.michelleforboston.com/' },
  year: '2020'
}, {
  name: 'The 19th News',
  madeAt: 'Upstatement',
  stack: ['Wrdpress', 'Timber', 'Gutenberg', 'PHP', 'Javascript', 'Mailchimp', 'AMP'],
  link: { name: '19thnews.org', href: 'https://19thnews.org/' },
  year: '2020'
}, {
  name: 'Northeastern CSSH',
  madeAt: 'Upstatement',
  stack: ['Wordpress', 'Timber', 'Wordpress Multiline', 'PHP', 'Algolia', 'Javascript'],
  link: { name: 'cssh.northeastern.edu', href: 'https://cssh.northeastern.edu/' },
  year: '2020'
}, {
  name: 'Integrating Algolia Search with WordPress Multisite',
  madeAt: 'Upstatement',
  stack: ['Nuxt', 'Vue', 'Prismic'],
  link: { name: 'medium.com', href: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c' },
  year: '2020'
}]

export default projects