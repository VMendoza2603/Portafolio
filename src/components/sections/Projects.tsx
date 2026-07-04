"use client"

import { useState, useMemo } from "react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { FilterBar } from "@/components/shared/FilterBar"
import { SearchBar } from "@/components/shared/SearchBar"
import type { MergedProject, ProjectCategory } from "@/types/project"

interface ProjectsProps {
  projects: MergedProject[]
}

export function Projects({ projects }: ProjectsProps) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<ProjectCategory | "all">("all")

  const categories = useMemo(() => {
    const cats = new Set<ProjectCategory>()
    projects.forEach((p) => cats.add(p.category))
    return Array.from(cats)
  }, [projects])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === "all" || p.category === category
      return matchSearch && matchCategory
    })
  }, [projects, search, category])

  return (
    <SectionWrapper id="projects">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Proyectos</h2>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterBar categories={categories} activeCategory={category} onCategoryChange={(cat) => setCategory(cat as ProjectCategory | "all")} />
        <div className="w-full sm:w-72">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No se encontraron proyectos con esos criterios.
        </p>
      )}
    </SectionWrapper>
  )
}
