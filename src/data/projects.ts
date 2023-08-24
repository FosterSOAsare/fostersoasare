export type projectType = {
  name: string;
  link: string;
  desc: string;
  stars?: number;
  downloads?: string;
  stack?: string[];
  image: string
}

const projects: projectType[] = [
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

export default projects