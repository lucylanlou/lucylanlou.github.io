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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    csm,
    mesabiotech,
    thermofisher,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
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

const services = [{
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

const technologies = [{
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
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Material UI",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // {
    //     name: "C++",
    //     icon: nodejs,
    // },
    // {
    //     name: "Python",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    // {
    //     name: "github",
    //     icon: git,
    // },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "Adobe Cloud",
    //     icon: docker,
    // },
    // {
    //     name: "Blender",
    //     icon: docker,
    // },
];

const experiences = [{
        title: "CS Mentor",
        company_name: "Computer Science Mentors",
        icon: csm,
        iconBg: "#FFF8FC",
        date: "August 2019 - January 2021",
        points: [
            "Tutored small group every week on CS61A topics",
            "Created cribsheets for various topics for future mentors",
            "<something about teaching strategies>",
            "<something about collaboration and communication>",
        ],
    },
    {
        title: "Software and User Interface Intern",
        company_name: "Mesa Biotech",
        icon: mesabiotech,
        iconBg: "#FFF8FC",
        date: "June 2020 - August 2021",
        points: [
            "Worked on the UI design and firmware development of touch screen PCR testing device",
            "Prototyped UI with Adobe XD and implemented with STemWin gui graphics library",
            "Developed the front-end and back-end of new features such a maintenance user with unique hashed passwords retrievable with an external app and a test result print functionality",
            "Implemented unit-testing with VS C++ NativeUnit Test framework",
            "Updated software requirements documentation",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Thermo Fisher Scientific",
        icon: thermofisher,
        iconBg: "#FFF8FC",
        date: "Jan 2021 - Jan 2023",
        points: [
            "Built React Native mobile app that aids with recording mass PCR testing by scanning patient infobarcodes, takes pictures of result strips, and uploads to an AWS Cloud database",
            "Enhanced website used to view test results with company branding, test strip image viewing ability, and interactive customer stat graphs with various React APIs",
            "Created Power BI reports for marketing spends",
        ],
    },
    {
        title: "Software Engineer II",
        company_name: "Thermo Fisher Scientific",
        icon: thermofisher,
        iconBg: "#FFF8FC",
        date: "July 2022 - Present",
        points: [
            "Collaborated cross-functionally to accelerate feature completion of an embedded systems medical PCR testing device by implementing user interface and new functionalities (such as exporting logs to a USB, scanning/saving barcode data, user authentication and persistent lockout if auth fails 3x)",
            "Troubleshooted/fixed bugs in firmware with hierarchical state machines & asynchronous processing",
            "Integrated and improved the device target line detection algorithm using smoothing, color contrast, and derivatives",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Car Rent",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [{
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
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };