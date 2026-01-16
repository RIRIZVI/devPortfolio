
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Ri Rizvi",
  headline: "Crafting Digital Excellence Through Modern Web Technologies",
  subHeadline: "Full Stack Developer specializing in React, TypeScript, and AI-driven applications. I build scalable, high-performance solutions with a focus on user experience.",
  about: "I'm a passionate Software Developer with 5+ years of experience in creating robust web applications. My journey started with a fascination for how logic translates into visual interfaces, and today, I bridge the gap between complex backend architectures and seamless frontend experiences. When I'm not coding, I'm exploring new LLM capabilities or contributing to open-source projects.",
  skills: [
    { name: "React/Next.js", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Backend" },
    { name: "Gemini API", level: 88, category: "Tools" },
    { name: "Docker", level: 75, category: "Tools" },
    { name: "Git", level: 92, category: "Tools" },
    { name: "Problem Solving", level: 90, category: "Soft Skills" },
    { name: "Collaboration", level: 85, category: "Soft Skills" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Frontend Engineer",
      company: "TechFlow Systems",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Led the migration of a legacy monolithic app to a modern Micro-frontend architecture using React and Module Federation.",
        "Improved application performance by 40% through code-splitting, lazy loading, and asset optimization.",
        "Mentored a team of 5 junior developers and established coding standards."
      ]
    },
    {
      id: "exp-2",
      role: "Full Stack Developer",
      company: "Innovate AI",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      description: [
        "Developed and maintained cloud-native applications using Node.js and React.",
        "Implemented secure authentication systems and RESTful APIs serving 100k+ active users.",
        "Integrated third-party LLM APIs to create smart content generation features."
      ]
    },
    {
      id: "exp-3",
      role: "Junior Web Developer",
      company: "Startup Hub",
      location: "Austin, TX",
      period: "2018 - 2020",
      description: [
        "Assisted in developing responsive UI components using CSS Grid and Flexbox.",
        "Reduced bug count by 25% through the implementation of unit tests using Jest.",
        "Collaborated with UX designers to refine interactive mockups into functional code."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Zenith Commerce",
      description: "A high-speed e-commerce platform with real-time stock updates.",
      longDescription: "Zenith Commerce is built using Next.js 14 and Stripe. It features a custom CMS, real-time inventory management via WebSockets, and a blazing fast checkout experience.",
      tags: ["Next.js", "Tailwind", "PostgreSQL", "Stripe"],
      imageUrl: "https://picsum.photos/seed/zenith/800/450",
      year: "2023"
    },
    {
      id: "proj-2",
      title: "Insight Dashboard",
      description: "Data visualization tool for marketing analytics.",
      longDescription: "An enterprise-grade dashboard that pulls data from multiple social media APIs. It uses Recharts for complex data viz and features custom report generation.",
      tags: ["React", "D3.js", "Recharts", "Node.js"],
      imageUrl: "https://picsum.photos/seed/insight/800/450",
      year: "2023"
    },
    {
      id: "proj-3",
      title: "AI Resume Scanner",
      description: "Smart recruitment tool powered by Gemini API.",
      longDescription: "A tool that allows HR teams to upload PDF resumes and get instant summaries, skill matching scores, and interview question suggestions using LLMs.",
      tags: ["React", "Gemini API", "FastAPI", "Python"],
      imageUrl: "https://picsum.photos/seed/airesume/800/450",
      year: "2024"
    }
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/ririzvi", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/ririzvi", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/ririzvi", icon: "Twitter" },
    { platform: "Email", url: "mailto:contact@ririzvi.dev", icon: "Mail" }
  ]
};
