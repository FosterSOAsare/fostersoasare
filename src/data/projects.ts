export type homeProjectType = {
  name: string;
  link: string;
  desc: string;
  stars?: number;
  downloads?: string;
  stack?: string[];
  image: string
}

export const homeProjects: homeProjectType[] = [
  {
    name: 'Build a Spotify Connected App',
    link: 'https://www.newline.co/courses/build-a-spotify-connected-app',
    image: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75',
    desc: `Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.`,
  }, {
    name: 'Spotify Profile',
    image: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75',
    desc: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    stars: 567,
    stack: ['React', 'Express', 'Spotify API', 'Heroku'],
    link: 'https://spotify-profile.herokuapp.com/'
  }, {
    name: 'Halcyon Theme',
    desc: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    downloads: '100k+',
    link: 'https://halcyon-theme.netlify.app/',
    image: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75'
  }, {
    name: 'brittanychiang.com (v4)',
    desc: 'An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks',
    stars: 6528,
    stack: ['Gatsby', 'Styled Components', 'Netlify'],
    image: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&w=256&q=75',
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