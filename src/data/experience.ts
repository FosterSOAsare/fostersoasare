export type experienceType = {
  position: string,
  company: string,
  desc: string,
  stack: string[],
  links: { name: string, href: string }[],
  startDate: string,
  endDate: string
}


const experiences = [
  {
    position: 'Lead Engineer',
    company: 'Upstatement',
    desc: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
    stack: ['React', 'React Native', 'SCSS', 'WordPress', 'Javascript', 'Typescript', "PHP"],
    links: [],
    startDate: '2018',
    endDate: 'PRESENT'
  },
  {
    position: 'UI Engineer Co-op',
    company: 'Apple',
    desc: `Developed and styled interactive web apps for Apple Music, including the UI of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.`,
    stack: ['Ember', 'SCSS', 'Javascript', 'MusicKit.js'],
    links: [
      { name: 'MusicKit.js', href: 'https://developer.apple.com/documentation/musickitjs' },
      { name: '9to5Mac', href: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/' },
      { name: 'The Verge', href: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming' }
    ],
    startDate: 'JULY',
    endDate: 'DEC 2017'
  },
  {
    position: 'Developer',
    company: 'Scout Studio',
    desc: `Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.`,
    stack: ['Jekyll', 'SCSS', 'Javascript', 'WordPress'],
    links: [],
    startDate: '2016',
    endDate: '2017'
  },
  {
    position: 'Software Engineer Co-op',
    company: 'Starry',
    desc: `Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.`,
    stack: ['Cardova', 'Backbone', 'Javascript', 'CSS'],
    links: [
      { name: 'Android app', href: 'https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US' },
      { name: 'ScreenTime 2.0', href: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents' }
    ],
    startDate: 'JULY',
    endDate: 'DEC 2016'
  },
  {
    position: 'Creative Technologist Co-op',
    company: 'MullenLowe',
    desc: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
    stack: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    links: [],
    startDate: 'JULY',
    endDate: 'DEC 2015'
  },

]



export default experiences