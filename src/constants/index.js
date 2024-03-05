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
  postman,
  mongoose,
  firebase,
  express,
  Connections,
  promptpal,
  Cartify,
  Roamio,
  Formify,
  DirectDubai,
  BoloForms,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
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
];

const experiences = [
  {
    title: "ST.FIDELIS.SEC SCHOOL",
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

const experiencesReal = [
  {
    title: "Full Stack Developer",
    company_name: "BoloForms",
    icon: BoloForms,
    iconBg: "#EBEBEC",
    date: "Jan 2024 - present",
    points: [
      "Working as an intern.",
      "Enhanced user experience and functionality by developing several features.",
      "Successfully implemented CRM and HR integrations from Pipedrive to HubSpot, streamlining data flow and enhancing user experience for sales and marketing teams.",
      "Resolved technical challenges efficiently, demonstrating adaptability in a fast-paced work environment.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "DirectDubai",
    icon: DirectDubai,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Worked as an intern.",
      "Led the development of an app from scratch during my internship. Utilized my strong learning capabilities and initiative to build the user interface, implement core features using React Native components.",
      "Identified core functionalities: Conducted user interviews and competitor analysis to define the app's essential features.",
      "Evaluated SDK options: Compared various SDKs based on features, integration ease, documentation quality, and community support.",
    ],
  },
];

const projects = [
  {
    name: "Romio",
    description:
      "A travel booking platform that allows users to bookhotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "node.js",
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
    hosted_link: "https://roamio-app.netlify.app/",
  },
  {
    name: "Connections",
    description:
      "This is a Social Media web application, where users can make friends, chat with them ,post their pictures, friends could leave a like and comment, and a special page for celebrity as well.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
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
  {
    name: "Formify",
    description:
      "Fortify: An intuitive form builder with diverse question types—close, comprehension, and categorical. Simplifying form creation, submission, and result retrieval for seamless user interaction.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: Formify,
    source_code_link: "https://github.com/rahulbatra-19/Formify-backend",
    hosted_link: "https://formify-rahul.netlify.app/",
  },
];

export { services, technologies, experiences, projects, experiencesReal };
