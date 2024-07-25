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
    date: "August 2023 - Present",
    points: [
      "Spearheaded frontend/UI/UX development, expediting our product, TrustWrite, to beta stage",
      "Drafted software design documents & created task timelines; led meetings with exec board to finalize product specs and with engineering team to discuss security concerns & backend integration",
      "Prototyped with Figma & implemented with React: dashboards, statistical graphs, tables listing data from Canvas LMS, timed quizzes, and score reports; with a focus on accessibility and intuitive design",
      "Rebranded color scheme from purple to green and redesigned logo from a hacker icon to a book to better reflect the company values and mission of assurance, accuracy, and approachability",
      "Redesigned & launched landing pages ethicable.ai & trustwrite.ai, using principles of hierarchy, spacing, and consistency to navigate users to contact sales, attracting 8 new potential clients",
      "Integrated code with backend engineer to support GraphQL, Redis Pub/Sub, and AWS SQS and SNS",
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Thermo Fisher Scientific",
    icon: thermofisher,
    iconBg: "#FFF8FC",
    date: "July 2022 - June 2023",
    points: [
      "Collaborated with engineers, R&D scientists, and UX designers team to accelerate an embedded systems medical PCR testing device to feature completion through daily scrum, weekly syncs, and labs",
      "Implemented UI and new functionalities (USB log exporting, barcode scanning, user authentication) on device with C++ using a hierarchical state machine (HSM) approach",
      "Tested and peer reviewed frequently to troubleshoot and fix bugs along the way, ensuring reliability",
      "Optimized and improved the device’s target line detection algorithm accuracy from 44% to 98% using image processing techniques such as smoothing, color contrast, and pixel derivatives",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Thermo Fisher Scientific",
    icon: thermofisher,
    iconBg: "#FFF8FC",
    date: "Jan 2021 - August 2021",
    points: [
      "Learned React and React Native in order to handle mobile/web development in house, eliminating outsourcing costs and increasing project delivery efficiency",
      "Built React Native mobile app that scans patient info barcodes and takes pictures and uploads test result strips to AWS Cloud to be easily viewed on our product website",
      "Enhanced the Material UI ReactJS website used to view test results with the following: company branding, test strip image viewing ability, and interactive customer statistical charts and graphs ",
      "Created Power BI reports to assist the marketing team in optimizing spending and maximizing ROI",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Mesa Biotech",
    icon: mesabiotech,
    iconBg: "#FFF8FC",
    date: "June 2020 - August 2021",
    points: [
      "Prototyped with Adobe XD and creatively implemented with C++ the design team’s UI changes for our touch screen product, overcoming limitations of the STemWin GUI graphics library",
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
      "Collaborated and communicated with other mentors regularly for feedback.",
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
      "KingPin Donuts is a donut shop near UC Berkeley. They have great donuts; however, their website according to my web deisgn class needed improvement (update: they've redesigned their website at some point!), so that was our assignment. This is my remake. I wanted it to be a simple design and put an emphasis on using mouthwatering pictures since luring customers in would be the goal of a donut website.",
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
