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
    position: 'Lead Developer',
    company: 'Zest',
    desc: `Developed an interactive web app for a Point of Sale (POS) system, with a focus on features related to stock management. This ongoing project involves enhancing the functionality and user interface of the POS system for efficient stock tracking and management.`,
    stack: ['Node', 'Express', 'MongoDB', 'NextJs', 'TailwindCSS'],
    links: [
      // { name: 'MusicKit.js', href: 'https://developer.apple.com/documentation/musickitjs' },
      // { name: '9to5Mac', href: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/' },
      // { name: 'The Verge', href: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming' }
    ],
    startDate: 'AUG 2023',
    endDate: 'PRESENT'
  }, {
    position: 'Fullstack Developer',
    company: 'Xennol Limited',
    desc: 'Proficiently developed high-quality, robust production code across a wide spectrum of projects, showcasing versatility and adaptability in delivering tailored solutions. My experience spans a diverse array of assignments, demonstrating the ability to work independently and excel in various project environments.',
    stack: ['NextJs', 'MongoDB', 'Typescript', 'TailwindCSS', 'AWS', 'Express', 'Node'],
    links: [
      { name: 'Procvcreator', href: 'https://procvcreator.com' },
      { name: 'Xennol Website', href: 'https://xennol.com' },
    ],
    startDate: 'JUL 2023',
    endDate: 'OCT 2023'
  },
  {
    position: 'Frontend Web Developer',
    company: 'Cedirates',
    desc: `Developed, maintained, and successfully deployed production code for a comprehensive website project with a primary objective is  providing up-to-date information regarding about a wide range of topics. This involved  a user-friendly interface, and a seamless browsing experience for visitors seeking information on various subjects`,
    stack: ['React', 'CSS', 'Javascript'],
    links: [{ name: 'Cedirates', href: 'https://cedirates.com' },],
    startDate: 'FEB 2023',
    endDate: 'PRESENT'
  },
  {
    position: 'Frontend Developer',
    company: 'WalletHack',
    desc: `Collaborated with a senior developer on a Stellar blockchain project, focusing on creating a seamless, user-friendly environment for on-the-go trading and various other activities.`,
    stack: ['Angular', 'SCSS', 'Javascript', 'Codepen'],
    links: [{ name: 'Wallethack', href: 'https://wallethack.com' },],
    startDate: 'NOV 2022',
    endDate: 'MAR 2023'
  },
  {
    position: 'PHP Developer',
    company: 'UNIFIN',
    desc: `Contributed to the development of a closed system designed to establish a community based on referrals. The system implemented a democratic decision-making process, where community members voted on the allocation of earned funds. Leveraged highly customizable components to build a high-performance application for this purpose.`,
    stack: ['PHP', 'Scss', 'Javascript', 'Hostinger', 'WalletConnect', 'Stellar'],
    links: [

    ],
    startDate: 'APR',
    endDate: 'NOV 2022'
  },

]



export default experiences