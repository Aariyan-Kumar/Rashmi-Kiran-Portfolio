import { TbTargetArrow, TbSettingsAutomation, TbReportSearch } from 'react-icons/tb';
import { GiProgression } from "react-icons/gi";
import { LuBrainCircuit, LuLightbulb, LuFeather, LuBriefcaseBusiness } from "react-icons/lu";

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.jpg';
import projectImg2 from '../assets/project2.jpg';
import projectImg3 from '../assets/project3.png';


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
    title: "Organizational Analysis of TATA",
    description: "How TATA became TATA by investing Trust among their employees.",
    image: projectImg1,
    demo: "https://drive.google.com/file/d/1m3oGKUssi5b4NSzgW_-4iVZWrnQfA01k/view?usp=drive_link",
    code: "#",
  },
  {
    title: "Zomato Reviews", 
    description: "Sentiment Analysis of the reviews across Playstore.",
    image: projectImg2,
    demo: "https://drive.google.com/file/d/1-l4kxyUDfbYmaxt03TpZldP9TEwrurAH/view?usp=drive_link",
    code: "#",
  },
  {
    title: "Dorado Crust",
    description: "A pitch deck for a Kolkata mobile fusion bakery seeking ₹10 Lakhs for 10% equity.",
    image: projectImg3,
    demo: "https://drive.google.com/file/d/1ut4TZHxl4lWBXeH7Iir41PaTAm2l7W0y/view?usp=drive_link",
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
