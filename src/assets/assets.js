import { FaReact, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { TbTargetArrow, TbSettingsAutomation, TbReportSearch } from 'react-icons/tb';
import { GiProgression } from "react-icons/gi";
import { LuBrainCircuit, LuLightbulb, LuFeather, LuBriefcaseBusiness } from "react-icons/lu";

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: TbSettingsAutomation,
      title: 'No-code tool',
      description: ' When programming language functions are difficult to remember, then drag and drop comes to the survival',
      color: '#F1F3F4'
    },
    {
      icon: GiProgression,
      title: 'Business Analysis',
      description: 'When you couldn’t find the problem in the business, you deep dive into the root cause.',
      color: '#F1F3F4'
    },
    {
      icon: TbTargetArrow,
      title: 'Strategic Competitive Advantage',
      description: 'Every time when you think there is no sale, you lack uniqueness.',
      color: '#F1F3F4'
    },
  ];



export const skills = [
  {
    title: 'Research & Consulting', 
    icon: TbReportSearch,
    description: 'Research, information synthesis, business analysis, identifying problems and evaluating potential solutions.',
    tags: ['Market Research', 'Consulting']
  },
  {
    title: 'Technical & Analytical Skills',   
    icon: LuBrainCircuit,
    description: ' Excel, SQL and Python,  tools for data analysis, querying databases, automating tasks and supporting decisions.',
    tags: ['Excel', 'SQL', 'Python', 'Power BI']
  },
  {
    title: 'Business Problem-Solving', 
    icon: LuLightbulb,
    description: 'Understanding business challenges, examining root causes, comparing options and developing practical solutions.',
    tags: ['Business Analysis', 'Problem Solving', 'Decision Making']
  },
  {
    title: 'Creative & Written Expression', 
    icon: LuFeather,
    description: 'Poetry writing, creative expression and potentially written communication. Professional writing proficiency would need separate assessment.',
    tags: ['Poetry Writing', 'Creative Expression', 'Written Communication']
  },
  {
    title: 'Career Management',
    icon: LuBriefcaseBusiness,
    description: 'A stated area of interest or expertise. Your specific capabilities could include career research, planning, skill mapping or career strategy.',
    tags: ['Career Research', 'Career Planning', 'Skill Mapping', 'Career Strategy']
  }
]



export const projects = [
  {
    title: "", //TBD
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "", //TBD
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "", //TBD
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "", //TBD
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "", //TBD
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "", //TBD
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "", //TBD
    company: "", //TBD
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
