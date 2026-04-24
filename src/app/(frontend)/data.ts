// Portfolio Data File
// Easily customize your portfolio by changing the values below

// Personal Information
export const personalInfo = {
  name: "Bruno Eduardo",
  title: "Fullstack Developer",
  email: "bruno.139737@gmail.com",
  location: "São Paulo, Brazil",
  bio: "I build modern web applications with JavaScript, React, TypeScript, Node.js, and NestJS. Bringing your ideas to life with clean code and beautiful design.",
  availableFor: "I'm currently available for freelance work and full-time opportunities. If you'd like to work together or just want to say hello, feel free to reach out!",
  socialLinks: {
    github: "https://github.com/bruno3du",
    linkedin: "https://www.linkedin.com/in/bruno-eduardo-alves/",
    twitter: "https://twitter.com/yourusername",
  }
};

// Skills
export const skills = {
  frontend: {
    label: "Frontend",
    description: "React, Next.js, TypeScript",
    proficiency: 95,
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS"]
  },
  backend: {
    label: "Backend",
    description: "Node.js, NestJS, Express",
    proficiency: 90,
    items: ["Node.js", "NestJS", "Express", "RESTful APIs", "GraphQL"]
  },
  database: {
    label: "Databases",
    description: "MongoDB, PostgreSQL",
    proficiency: 85,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  apiDesign: {
    label: "API Design",
    description: "REST, GraphQL",
    proficiency: 88,
    items: ["RESTful APIs", "GraphQL", "API Documentation", "Swagger"]
  },
  uiux: {
    label: "UI/UX",
    description: "Tailwind, CSS, HTML",
    proficiency: 92,
    items: ["Tailwind CSS", "CSS", "HTML", "Responsive Design", "Figma"]
  }
};

// Projects
export const projects = [
  {
    id: 1,
    title: "Project Name 1",
    description: "A comprehensive web application with modern UI and robust backend services, delivering exceptional user experiences and streamlined workflows.",
    image: "/window.svg",
    tags: ["React", "TypeScript", "Node.js"],
    category: "Featured",
    color: "blue",
    links: {
      demo: "https://project1.demo",
      github: "https://github.com/yourusername/project1"
    }
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "A full-stack application built with Next.js and NestJS, featuring real-time data, complex data visualization, and enterprise-grade security.",
    image: "/globe.svg",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    category: "Latest",
    color: "purple",
    links: {
      demo: "https://project2.demo",
      github: "https://github.com/yourusername/project2"
    }
  },
  {
    id: 3,
    title: "Project Name 3",
    description: "A React-based web application with Express backend and MongoDB database, delivering intuitive user interfaces and scalable data management.",
    image: "/file.svg",
    tags: ["React", "Express", "MongoDB"],
    category: "Popular",
    color: "pink",
    links: {
      demo: "https://project3.demo",
      github: "https://github.com/yourusername/project3"
    }
  }
];

// Work Experience
export const experience = [
  {
    id: 1,
    role: "Senior Fullstack Developer",
    company: "Company Name",
    duration: "2022 - Present",
    description: "Led development of enterprise web applications using modern JavaScript frameworks. Architected scalable backend services and optimized database performance. Mentored junior developers and implemented CI/CD pipelines.",
    skills: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    color: "blue"
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Company Name",
    duration: "2020 - 2022",
    description: "Developed responsive user interfaces using React and state management libraries. Collaborated with designers to implement pixel-perfect UIs and improved application performance through code optimization and modern practices.",
    skills: ["JavaScript", "React", "Redux", "HTML/CSS"],
    color: "purple"
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Company Name",
    duration: "2018 - 2020",
    description: "Developed and maintained client websites. Created responsive layouts and implemented interactive features using JavaScript. Participated in code reviews and collaborated closely with design team.",
    skills: ["JavaScript", "HTML/CSS", "jQuery", "WordPress"],
    color: "pink"
  }
];

// Site Configuration
export const siteConfig = {
  title: "Bruno Eduardo | Fullstack Developer",
  description: "Portfolio of a Fullstack Developer specializing in JavaScript, TypeScript, React, Node.js, and NestJS",
  siteUrl: "https://brunoeduardo.tech",
  themeColors: {
    primary: "#3b82f6", // Blue
    secondary: "#8b5cf6", // Purple
    accent: "#ec4899", // Pink
  }
};