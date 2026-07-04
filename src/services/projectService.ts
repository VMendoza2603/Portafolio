"use server"

import type { Project, ProjectCategory, ProjectLevel, ProjectStatus, MergedProject } from "@/types/project"
import type { GitHubRepo } from "@/types/github"
import { fetchRepos, fetchRepoLanguages, fetchRepoReadme } from "./github"
import projectsData from "@/data/projects.json"

function classifyRepo(repo: GitHubRepo): {
  category: ProjectCategory
  level: ProjectLevel
  status: ProjectStatus
} {
  const name = repo.name.toLowerCase()
  const lang = repo.language?.toLowerCase() || ""
  const topics = repo.topics.map((t) => t.toLowerCase())

  let category: ProjectCategory = "Otros"
  let level: ProjectLevel = "principiante"
  let status: ProjectStatus = "completado"

  if (name.includes("api") || name.includes("graphql")) category = "APIs"
  else if (name.includes("landing") || name.includes("frontend") || ["html", "css", "javascript", "typescript", "vue"].includes(lang))
    category = "Frontend"
  else if (name.includes("backend") || ["python", "php"].includes(lang)) category = "Backend"
  else if (name.includes("crud") || name.includes("mongo") || name.includes("docker")) category = "Aplicaciones Web"
  else if (name.includes("ia") || name.includes("practica") || topics.includes("ai") || topics.includes("machine-learning"))
    category = "Inteligencia Artificial"
  else if (name.includes("base") || name.includes("sql") || name.includes("db")) category = "Bases de Datos"
  else if (["practica", "taller", "tarea", "guia", "actividad", "tp", "trabajo"].some((t) => name.includes(t)))
    category = "Universidad"
  else if (name.includes("test") || name.includes("experimento")) category = "Experimentos"
  else if (name.includes("tool") || name.includes("util")) category = "Herramientas"

  level = repo.size > 1000 ? "avanzado" : repo.size > 50 ? "intermedio" : "principiante"

  return { category, level, status }
}

function generateDescription(repo: GitHubRepo): string {
  if (repo.description) return repo.description

  const name = repo.name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())

  const lang = repo.language || "varias tecnologías"

  return `${name} — Proyecto desarrollado con ${lang}. ${repo.stargazers_count > 0 ? `Cuenta con ${repo.stargazers_count} estrella(s) en GitHub.` : ""}`
}

function projectStatusFromDate(repo: GitHubRepo): ProjectStatus {
  const daysSincePush = (Date.now() - new Date(repo.pushed_at).getTime()) / 86400000
  if (daysSincePush < 30) return "en desarrollo"
  if (daysSincePush < 180) return "completado"
  return "en pausa"
}

async function repoToProject(repo: GitHubRepo): Promise<Project> {
    const languages = await fetchRepoLanguages("VMendoza2603", repo.name)
  const { category, level } = classifyRepo(repo)

  return {
    id: `gh-${repo.id}`,
    name: repo.name,
    description: generateDescription(repo),
    html_url: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    languages,
    topics: repo.topics,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    category,
    status: projectStatusFromDate(repo),
    level,
    featured: repo.stargazers_count > 0 || repo.size > 500,
    private: repo.private,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
    images: [],
  }
}

export async function getProjects(): Promise<MergedProject[]> {
  const githubRepos = await fetchRepos()

  const manualProjects: import("@/types/project").ProjectManual[] = (projectsData as any).projects || []

  const githubProjects: Project[] = await Promise.all(
    githubRepos.map((repo) => repoToProject(repo))
  )

  const projectMap = new Map<string, MergedProject>()

  for (const gp of githubProjects) {
    projectMap.set(gp.name, { ...gp, source: "github" })
  }

  for (const mp of manualProjects) {
    const existing = projectMap.get(mp.nombre)
    if (existing) {
      projectMap.set(mp.nombre, {
        ...existing,
        description: mp.descripcion || existing.description,
        category: mp.categoria || existing.category,
        status: mp.estado || existing.status,
        level: mp.nivel || existing.level,
        featured: mp.destacado || existing.featured,
        private: mp.privado,
        images: mp.capturas || existing.images,
        client: mp.cliente,
        role: mp.rol,
        devTime: mp.tiempo_desarrollo,
        homepage: mp.url_proyecto || existing.homepage,
        html_url: mp.url_repositorio || existing.html_url,
        order: mp.orden,
        source: "both",
      })
    } else {
      projectMap.set(mp.nombre, {
        id: `manual-${mp.nombre}`,
        name: mp.nombre,
        description: mp.descripcion,
        html_url: mp.url_repositorio || "",
        homepage: mp.url_proyecto || null,
        language: mp.tecnologias[0] || null,
        languages: {},
        topics: mp.tecnologias,
        stargazers_count: 0,
        forks_count: 0,
        category: mp.categoria,
        status: mp.estado,
        level: mp.nivel,
        featured: mp.destacado,
        private: mp.privado,
        order: mp.orden,
        createdAt: mp.año || "",
        updatedAt: mp.año || "",
        pushedAt: mp.año || "",
        images: mp.capturas || [],
        client: mp.cliente,
        role: mp.rol,
        devTime: mp.tiempo_desarrollo,
        source: "manual",
      })
    }
  }

  const projects = Array.from(projectMap.values())

  const featured = projects.filter((p) => p.featured)
  const nonFeatured = projects.filter((p) => !p.featured)

  featured.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
  nonFeatured.sort((a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime())

  return [...featured, ...nonFeatured]
}

export async function getFeaturedProjects(): Promise<MergedProject[]> {
  const all = await getProjects()
  return all.filter((p) => p.featured)
}
