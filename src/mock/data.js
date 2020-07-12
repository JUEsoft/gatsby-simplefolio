import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Emmanuel Emejulu | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: ' Official Emmanuel Emejulu Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Emmanuel Emejulu',
  name: 'Founder of JUEsoft',
  subtitle: 'A Web and App Developer from ojoto, Anambra State, Nigeria.',
  cta: 'This is my portfolio.',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: " I'm Emmanuel Emejulu, a 16yrs old web and app developer.",
  paragraphTwo: 'I have over 3yrs experience in computer programming with full-stack development skills.',
  paragraphThree: 'Im also available for remote works.',
  resume: 'https://juesoft.github.io', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Space.jpg',
    title: 'SPACE SHOOTER GAME',
    info: 'A realistic space invaders game made with js.',
    info2: '',
    url: 'https://juesoft.github.io/SpaceShooter.html',
    repo: 'https://github.com/JUEsoft/juesoft.github.io/blob/master/SpaceShooter.html', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'S20.jpg',
    title: 'SAMSUNG GALAXY S20 FEATURE',
    info: 'All the details of the popular SAMSUNG GALAXY 20.',
    info2: '',
    url: 'https://juesoft.github.io/S20.html',
    repo: 'https://github.com/JUEsoft/juesoft.github.io/blob/master/S20.html', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Ball.jpg',
    title: 'GLITTERING BALL',
    info: 'A ball of glittering light show.',
    info2: '',
    url: 'https://juesoft.github.io/Glittering.html',
    repo: 'https://github.com/JUEsoft/juesoft.github.io/blob/master/Glittering.html', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'SEND ME A MAIL',
  btn: 'E-mail',
  email: 'emmanueljunior433@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/emejuluCodes',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/Emejulu.Officials',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/mwlite/in/emmanuel-emejulu-a7747b195',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/emmanuel_emejulu/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
