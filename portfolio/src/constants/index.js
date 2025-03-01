import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  django,
  python,
  urbanaegis,
  spygame,
  loanmanager,
  olxdemo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'DSA',
    icon: ux,
  },
  {
    title: 'Full Stack Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Djnago',
    icon: django,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },

  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  

];

const experiences = [
  {
    title: 'BROTOTYPE',
    company_name: 'Full Stack Development Python DJAngo with React Course',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2024 - present',
  },
  {
    title: 'B-TECH',
    company_name: 'Computer science Engineering',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2020 - July 2024',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'UrbanAegis',
    description: "A stylish e-commerce platform for men's jewelry with seamless experience.",
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML&CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: urbanaegis,
    repo: 'https://github.com/Arjuna8546/UrbanAegis',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'Loan Management API',
    description: 'A robust Loan Management API built with Django REST Framework, enabling loan applications, repayments, user authentication, and efficient financial record handling.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'green-text-gradient',
      },
      {
        name: 'REST API',
        color: 'pink-text-gradient',
      },
    ],
    image: loanmanager,
    repo: 'https://github.com/Arjuna8546/assigment_flashfund',
    demo: 'https://loan-manager-qiu6.onrender.com/api/loans',
  },
  {
    id: 'project-3',
    name: 'Spy Game',
    description:
      'Spy Game is a social deduction game where players answer unrelated questions while identifying the hidden spy through strategy, deception, and observation.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: spygame,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'Olx demo ',
    description: ` OLX demo with Firebase as the backend ensures seamless authentication and real-time product management`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: olxdemo,
    repo: '#',
    demo: '#',
  },
  
];

export { services, technologies, experiences, projects };
