import {
  web,
  reactNative,
  uiux,
  fullStack,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  materialui,
  python,
  cpp,
  java,
  nodejs,
  mongodb,
  github,
  figma,
  creativecloud,
  docker,
  csm,
  mesabiotech,
  thermofisher,
  ethicable,
  tinytales,
  gymhaus,
  kingpin,
  scrunchies4sma,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Software Engineer",
    icon: fullStack,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: reactNative,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Adobe Creative Cloud",
    icon: creativecloud,
  },
  // {
  //     name: "GitHub",
  //     icon: github,
  // },
  // {
  //     name: "Blender",
  //     icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Ethicable",
    icon: ethicable,
    iconBg: "#FFF8FC",
    date: "August 2023 - April 2024",
    points: [
      "Spearheaded frontend/UI/UX development for TrustWrite, a web app empowering teachers and academic institutions to efficiently verify the authenticity of assignments",
      "Prototyped landing pages, dashboards, account creation workflows with Figma, implemented in React, and collaborated on backend integration",
      "Focussed on accessibility and intuitive design",
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Thermo Fisher Scientific",
    icon: thermofisher,
    iconBg: "#FFF8FC",
    date: "July 2022 - June 2023",
    points: [
      "Collaborated cross-functionally to develope an embedded medical PCR device",
      "Implemented UI and functionalities such as usb export, test workflows, and user authentication on the device with C++",
      "Enhanced target line detection accuracy with image processing techniques",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Thermo Fisher Scientific",
    icon: thermofisher,
    iconBg: "#FFF8FC",
    date: "Jan 2021 - August 2021",
    points: [
      "Used React and React Native to develop a web and mobile app that streamlines covid testing process",
      "Implemented ability for the mobile app to scan patient info barcodes and upload test result strip images to the cloud",
      "Collaborated with the backend engineer to display those uploaded results and images on the web app",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Mesa Biotech",
    icon: mesabiotech,
    iconBg: "#FFF8FC",
    date: "June 2020 - August 2021",
    points: [
      "Prototyped with Adobe XD and implemented with C++ UI changes for our touch screen product",
      "Developed features such a maintenance user with hashed passwords & a test result print functionality",
      "Initiated unit-testing with VS C++ NativeUnit Test framework to aid test driven development",
      "Updated SW requirements documentation & refactored code to improve maintainability & scalability",
    ],
  },
  {
    title: "CS Mentor",
    company_name: "Computer Science Mentors",
    icon: csm,
    iconBg: "#FFF8FC",
    date: "August 2019 - January 2021",
    points: [
      "Tutored small group every week on CS61A topics improving retention of students in the class",
      "Created cribsheets on various topics for future mentors",
      "Incorporated different teaching strategies to adapt to different students such as scaffolding, peer learning, and using analogies",
    ],
  },
];

const projects = [
  {
    name: "Tiny Tales",
    description:
      "This is an early childhood education app aimed at developing language skills while fostering creativity through storytelling. We use the Google Cloud Vision API to order images (previously imported by the user) based on similar keywords for continuity. Then the child is able to record a story with these 4 images. I was the front-end lead and part of the UI design team.",
    tags: [
      {
        name: "android application",
        color: "blue-text-gradient",
      },
      {
        name: "google api",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: tinytales,
    source_code_link: "/files/TinyTalesReport.pdf",
  },
  {
    name: "GymHaus",
    description:
      "This was my first website I made! During the summer, my friend designed Covid-19 t-shirts he wanted to sell to help donate funds for frontline workers. He asked me to design and create this website for him. Sadly, he wasn’t able to continue with this project, so we never launched the full website. Besides the pictures of the shirts, all other images are stock photos.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "web design",
        color: "pink-text-gradient",
      },
    ],
    image: gymhaus,
    source_code_link: "/files/GymHaus Website/gymhaus.html",
  },
  {
    name: "Scrunchies 4 SMA",
    description:
      "Spinal Muscular Atrophy (SMA) is a disease my brother has, and this is a passion project where scrunchies made from scrap fabric will raise funds for SMA cure research. It started as a project for a brand identity and graphic design class where I created stylescapes, logos, and other mockups. The color scheme is bright and sparkly to symbolize happiness and hope, and the logo is created with hand drawn hearts.",
    tags: [
      {
        name: "branding",
        color: "blue-text-gradient",
      },
      {
        name: "graphic design",
        color: "green-text-gradient",
      },
      {
        name: "adobe illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: scrunchies4sma,
    source_code_link: "/files/Scrunchies4SMA.pdf",
  },
  {
    name: "KingPin Donuts Remake",
    description:
      "KingPin Donuts is a donut shop near UC Berkeley. They have great donuts; however, their website according to my web deisgn class needed improvement (update: they've since redesigned their website!), so that was our assignment. This is my remake. I wanted it to be a simple design and put an emphasis on using mouthwatering pictures since luring customers in would be the goal of a donut website.",
    tags: [
      {
        name: "web design",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kingpin,
    source_code_link: "/files/KingPin/index.html",
  },
  // {
  //     name: "Sleepy Cat Books Logo",
  //     description: "Come Make Your marK Designathon",
  //     tags: [{
  //             name: "branding",
  //             color: "blue-text-gradient",
  //         },
  //         {
  //             name: "graphic design",
  //             color: "green-text-gradient",
  //         },
  //         {
  //             name: "adobe illustrator",
  //             color: "pink-text-gradient",
  //         },
  //     ],
  //     image: kingpin,
  //     source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };
