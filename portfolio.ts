import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "YASİN TUNÇ",
  title: "Hello, I'm Yasin",
  description:
    "I am Yasin, an engineer with increasing competence in the field of software development. I am particularly interested in web development and artificial intelligence. I have worked on projects aimed at developing user-friendly web interfaces using technologies such as Python, JavaScript, React.js, and Node.js. Additionally, I am working in the fields of artificial intelligence, machine learning, and deep learning, developing basic projects to improve myself in these areas. I am someone who loves learning new technologies, is curious about research, and aims to continuously progress.",
    resumeLink: "/ornekcv.pdf",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contactInfo = {
  avatar_url: "/1747320462234.jpeg", // updated photo in public folder
  bio: "Frontend and Artificial Intelligence Developer | HTML CSS JAVASCRIPT | REACT JS | NODE JS, and C# | SQL SERVER | POSTGRE SQL | PYTHON",
  location: "Diyarbakır, Turkey"
};

export const socialLinks: SocialLinksType = {
  email: "yasin.tncc22@gmail.com",
  linkedin: "https://www.linkedin.com/in/yasin-tun%C3%A7-b4a822269/",
  github: "https://github.com/yasintuncc",
  instagram: "https://www.instagram.com/yasintuncc27?igsh=MWZ0cXJpNGNyNzVnNQ==",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "WHAT I DO",
  subTitle: "I develop modern interfaces with Html, Css, Javascript, React.js and Node.js, and smart solutions with artificial intelligence! I bring your projects to life from start to finish with my web and AI skills. My passion for technology is reflected in every project I code.",
  data: [
    {
      title: "FRONTEND DEVELOPMENT AND ARTIFICIAL INTELLIGENCE FIELDS",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Developing user-friendly and responsive single page applications (SPA) with React.js"),
        emoji("⚡ Creating static and fast web interfaces using Node.js"),
        emoji("⚡ Developing machine learning and deep learning models (scikit-learn, TensorFlow)"),
        emoji("⚡ Extracting insights with data analysis and visualization (pandas, matplotlib, Numpy, seaborn)"),
        emoji("⚡ Data preprocessing, model training and evaluation in AI projects"),
      ],
      
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "CSHARP",
          iconifyTag: "logos:c-sharp",
        },
        {
          skillName: "SQL SERVER",
          iconifyTag: "simple-icons:microsoftsqlserver",
        },
        {
          skillName: "HTML 5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "logos:css-3",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Git Bash",
          iconifyTag: "simple-icons:git",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
        {
          skillName: "React Native",
          iconifyTag: "logos:react",
        },
        {
          skillName: "Node.js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "NumPy",
          iconifyTag: "logos:numpy",
        },
        {
          skillName: "Pandas",
          iconifyTag: "simple-icons:pandas",
        },
        {
          skillName: "Matplotlib",
          iconifyTag: "logos:matplotlib",
        },
        {
          skillName: "TensorFlow",
          iconifyTag: "logos:tensorflow",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "40",
  },
  {
    Stack: "Database",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
  {
    Stack: "artificial intelligence",
    progressPercentage: "40",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "FIRAT UNIVERSITY",
    subHeader: "Bachelor's Degree in Software Engineering",
    duration: "SEPTEMBER 2020 - JUNE 2025",
    desc: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Web Developer",
    company: "Elazig Municipality IT Department",
    companyLogo: "/img/icons/common/elazig-belediyesi-screen.png",
    date: "2 Oct 2024 - 27 Oct 2024",
    desc: "I worked as a Web Developer Intern at the municipality. During this period, I actively participated in development efforts for the municipality's official website. As part of the project, I designed and implemented the 'Frequently Asked Questions (FAQ)' section to help citizens access information more quickly. In addition, I contributed to backend development of various web applications, APIs, and WebSocket-based solutions.",
  },
  
];

export const projects: ProjectType[] = [
  {
    name: "Heart Attack",
    desc: "A machine learning AI project that analyzes and predicts heart attack risk",
    github: "https://github.com/yasintuncc/Heartattacak",
    
  },
  {
    name: "mushroom-classification",
    desc: "In this project, whether mushrooms are edible or stored cannot be predicted using machine learning techniques.",
    github: "https://github.com/yasintuncc/mushroom-classification",
    
  },
  {
    name: "Determination_of_Water_Analysis",
    desc: "In this project, I aimed to determine the quality of water by evaluating the chemical analysis results of water samples.",
    github: "https://github.com/yasintuncc/Determination_of_Water_Analysis",
    
  },
  {
    name: "my personal website",
    desc: "A modern portfolio website showcasing my web development and AI skills. Built with React.js and TypeScript, featuring animated components and responsive design. The site presents my projects, experiences, and technical expertise in a clean, user-friendly interface.",
    github: "https://github.com/yasintuncc/yasintunc-portfolio",
  },
  {
    name: "MicroService E-Commerce Site",
    desc: "In this project developed with .NET 8 and C#, modules such as product, order, and authentication were built by separating them with microservice architecture. Inter-service communication was provided with RabbitMQ, and API Gateway was implemented with Ocelot. A scalable and modular e-commerce infrastructure was created using the SQL Server database.",
    link: "https://github.com/yasintuncc/MikroServicesEticaret",
  },
  {
    name: "fitness App",
    desc: "A useful mobile application where users can learn sports movements",
    link: "https://github.com/yasintuncc/fitness-uygulamas-",
  },
  {
    name: "calculator-original",
    desc: "a nice looking calculator",
    link: "https://github.com/yasintuncc/calculator-original",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "HTML CSS JAVASCRİPT",
    role: "",
    feedback:
      "",
  },
  {
    name: " REACT JS , NODE JS , REACT NATİVE",
    role: "",
    feedback:
      "",
  },
  {
    name: "PYTHON , SQL SERVER , PostgreSQL , C# , JAVA",
    role: "",
    feedback:
      "",
  },
  {
    name: "ARTIFICIAL INTELLIGENCE , MACHINE LEARNING , DEEP LEARNING",
    role: "",
    feedback:
      "",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Yasin Tunç",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
