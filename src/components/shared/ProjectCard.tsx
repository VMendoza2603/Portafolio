"use client"

import { motion } from "framer-motion"
import { ExternalLink, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { MergedProject } from "@/types/project"
import { cn } from "@/lib/utils"

function GithubIcon({ size }: { size?: number }) {
  return (
    <svg width={size || 14} height={size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

interface ProjectCardProps {
  project: MergedProject
  index: number
}

const levelColors: Record<string, string> = {
  principiante: "bg-green-500/10 text-green-500",
  intermedio: "bg-yellow-500/10 text-yellow-500",
  avanzado: "bg-red-500/10 text-red-500",
}

const statusColors: Record<string, string> = {
  completado: "bg-blue-500/10 text-blue-500",
  "en desarrollo": "bg-purple-500/10 text-purple-500",
  "en pausa": "bg-muted text-muted-foreground",
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="group h-full border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-lg">
        <CardHeader className="flex flex-row items-start justify-between gap-2">
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold leading-tight tracking-tight">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.status && (
                <Badge
                  variant="secondary"
                  className={cn("text-[10px] font-normal", statusColors[project.status])}
                >
                  {project.status}
                </Badge>
              )}
              {project.level && (
                <Badge
                  variant="secondary"
                  className={cn("text-[10px] font-normal", levelColors[project.level])}
                >
                  {project.level}
                </Badge>
              )}
            </div>
          </div>
          {project.stargazers_count > 0 && (
            <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
              <Star size={12} />
              <span>{project.stargazers_count}</span>
            </div>
          )}
        </CardHeader>

        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </CardContent>

        <CardContent className="pb-3">
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(project.languages).length > 0
              ? Object.keys(project.languages).slice(0, 4).map((lang) => (
                  <Badge key={lang} variant="outline" className="text-[10px] font-normal">
                    {lang}
                  </Badge>
                ))
              : project.topics.slice(0, 4).map((topic) => (
                  <Badge key={topic} variant="outline" className="text-[10px] font-normal">
                    {topic}
                  </Badge>
                ))}
            {project.language && Object.keys(project.languages).length === 0 && project.topics.length === 0 && (
              <Badge variant="outline" className="text-[10px] font-normal">
                {project.language}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 pt-0">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon />
            Repositorio
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
