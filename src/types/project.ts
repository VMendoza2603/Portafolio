export interface Project {
  id: string
  name: string
  description: string
  html_url: string
  homepage: string | null
  language: string | null
  languages: Record<string, number>
  topics: string[]
  stargazers_count: number
  forks_count: number
  category: ProjectCategory
  status: ProjectStatus
  level: ProjectLevel
  featured: boolean
  private: boolean
  order?: number
  createdAt: string
  updatedAt: string
  pushedAt: string
  images: string[]
  client?: string
  role?: string
  devTime?: string
  demo_url?: string
}

export type ProjectCategory =
  | "Aplicaciones Web"
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "APIs"
  | "Universidad"
  | "Freelance"
  | "Herramientas"
  | "Experimentos"
  | "Bases de Datos"
  | "Inteligencia Artificial"
  | "Otros"

export type ProjectStatus = "completado" | "en desarrollo" | "en pausa"

export type ProjectLevel = "principiante" | "intermedio" | "avanzado"

export interface ProjectManual {
  nombre: string
  descripcion: string
  categoria: ProjectCategory
  tecnologias: string[]
  estado: ProjectStatus
  año: string
  capturas?: string[]
  url_proyecto?: string
  url_repositorio?: string
  cliente?: string
  rol?: string
  tiempo_desarrollo?: string
  nivel: ProjectLevel
  destacado: boolean
  privado: boolean
  orden?: number
}

export interface MergedProject extends Project {
  source: "github" | "manual" | "both"
}
