import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  codingNinjas,
  Fidelis,
  DU,
  java,
  carrent,
  jobit,
  tripguide,
  postman,
  mongoose,
  firebase,
  express,
  Connections,
  promptpal,
  Cartify,
  openLink,
  Roamio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "ST.FIDELIS.SEC.SCHOOL",
    company_name: "PCMC",
    icon: Fidelis,
    iconBg: "#EBEBEC",
    date: "March 2017 - April 2019",
    points: [
      "C++, DSA, Maths, Physics, Chemistry ",
      "Completed 11th and 12th standard with an average of 92%",
    ],
  },
  {
    title: "RAM LAL ANAND COLLEGE, DU",
    company_name: "B.Sc. (Hons) Computer Science",
    icon: DU,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - July 2023",
    points: [
      "CGPA : 9.2 ",
      "Html, css, JavaScript, Java, Python, PHP, ML, AI, CG, DBMS, Sql, DSA, C++, CPUSIM",
      "Developed a grocery website MamaMart using php as a backend and vanilla Js for frontend and tailwind css",
      "Minor in Maths",
      "3rd in 1st & 2nd year",
    ],
  },
  {
    title: "Coding Ninjas",
    company_name: "Full Stack Course in MERN",
    icon: codingNinjas,
    iconBg: "#EBEBEC",
    date: " 2022 -  2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Node.js, React.js, Express.js, MongoDb, Redux, Firebase,postman, AWS, GIT, TailwindCss,BootStrap,Java, Dsa",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Romio",
    description:
      "A travel booking platform that allows users to bookhotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: Roamio,
    source_code_link:
      "https://github.com/rahulbatra-19/Roamio-Vacation-Booking-mern",
    hosted_link: "",
  },
  {
    name: "Connections",
    description:
      "This is a Social Media web application, where users can make friends, chat with them ,post their pictures, friends could leave a like and comment, and a special page for celebrity as well.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Connections,
    source_code_link: "https://github.com/rahulbatra-19/Connections",
    hosted_link: "",
  },
  {
    name: "Cartify",
    description:
      "Web application that enables users to search for products, view product, and product to the cart, filter them by category, and even add product .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Cartify,
    source_code_link: "https://github.com/rahulbatra-19/Cartify",
    hosted_link: "https://rahulbatra-19.github.io/Cartify",
  },
  {
    name: "PromptPal",
    description:
      "This is a prompts Web application that enables users to search for prompts, where users can post prompts and copy them that are used to instruct AI models like GPT-3 to generate text or perform specific tasks.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: promptpal,
    source_code_link: "https://github.com/rahulbatra-19/PromptPal",
    hosted_link: "https://promptpal-xi.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
