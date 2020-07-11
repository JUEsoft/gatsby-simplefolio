import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Emmanuel Emejulu | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Emmanuel Emejulu Portfolio built with react.js', // e.g: Welcome to my website
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
  paragraphOne: 'Im Emmanuel Emejulu, a 16yrs old web and app developer',
  paragraphTwo: 'I have over 3yrs experience in computer programming',
  paragraphThree: 'Im also available for remote works.',
  resume: 'https://www.linkedin.com/mwlite/in/emmanuel-emejulu-a7747b195', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
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
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
