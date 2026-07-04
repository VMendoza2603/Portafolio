import type { NavLink, TechCategory, SocialLink, Experience, Education, Skill, Certificate } from "@/types/portfolio"

export const SITE = {
  name: "Víctor Mendoza",
  title: "Ingeniero de Software",
  description:
    "Desarrollador Full Stack Junior apasionado por el desarrollo web, la arquitectura de software y la creación de soluciones modernas. Estudiante de Ingeniería en Software en la Universidad Estatal de Milagro.",
  url: "https://vmendoza.dev",
  location: "Ecuador",
  email: "edumendoza.2031@gmail.com",
  github: "https://github.com/VMendoza2603",
  linkedin: "https://www.linkedin.com/in/victor-mendoza-a7ba6914a",
} as const

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#tech" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
]

export const TECH_STACK: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Angular", icon: "SiAngular" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss3" },
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "PHP", icon: "SiPhp" },
      { name: "Laravel", icon: "SiLaravel" },
      { name: "GraphQL", icon: "SiGraphql" },
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      { name: "SQL Server", icon: "SiMicrosoftsqlserver" },
      { name: "MySQL", icon: "SiMysql" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Jira", icon: "SiJira" },
      { name: "GitHub", icon: "SiGithub" },
    ],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    company: "Freelance",
    role: "Desarrollador Full Stack",
    period: "2024 - Presente",
    description:
      "Desarrollo de aplicaciones web modernas utilizando React, Next.js y Node.js. Creación de APIs RESTful, integración con bases de datos y despliegue en producción.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
]

export const EDUCATION: Education[] = [
  {
    institution: "Universidad Estatal de Milagro",
    degree: "Ingeniería en Software",
    period: "2022 - Presente",
    description:
      "Formación en ingeniería de software con énfasis en desarrollo web, arquitectura de software, bases de datos y metodologías ágiles.",
  },
]

export const SKILLS: Skill[] = [
  { name: "Desarrollo Web", category: "desarrollo", level: 90 },
  { name: "React / Next.js", category: "frontend", level: 85 },
  { name: "Node.js", category: "backend", level: 80 },
  { name: "TypeScript", category: "lenguaje", level: 80 },
  { name: "Bases de Datos", category: "datos", level: 75 },
  { name: "Docker", category: "devops", level: 65 },
  { name: "Git & GitHub", category: "herramientas", level: 85 },
  { name: "UI/UX Design", category: "diseno", level: 70 },
]

export const CERTIFICATES: Certificate[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/VMendoza2603", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/victor-mendoza-a7ba6914a", icon: "linkedin" },
  { name: "Email", url: "mailto:edumendoza.2031@gmail.com", icon: "mail" },
]
