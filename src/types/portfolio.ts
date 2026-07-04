export interface NavLink {
  label: string
  href: string
}

export interface TechCategory {
  category: string
  items: TechItem[]
}

export interface TechItem {
  name: string
  icon: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export interface Education {
  institution: string
  degree: string
  period: string
  description?: string
}

export interface Certificate {
  name: string
  issuer: string
  date: string
  image: string
  url?: string
}

export interface Skill {
  name: string
  category: string
  level: number
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
