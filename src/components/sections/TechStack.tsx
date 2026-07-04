"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { TECH_STACK } from "@/lib/constants"

const iconMap: Record<string, string> = {
  SiReact: "⚛️",
  SiNextdotjs: "▲",
  SiAngular: "🅰️",
  SiJavascript: "JS",
  SiTypescript: "TS",
  SiHtml5: "HTML5",
  SiCss3: "CSS3",
  SiBootstrap: "B",
  SiTailwindcss: "TW",
  SiNodedotjs: "Node",
  SiExpress: "Ex",
  SiPhp: "PHP",
  SiLaravel: "L",
  SiGraphql: "GQL",
  SiMicrosoftsqlserver: "MSSQL",
  SiMysql: "MySQL",
  SiGit: "Git",
  SiDocker: "D",
  SiJira: "J",
  SiGithub: "GH",
}

export function TechStack() {
  return (
    <SectionWrapper id="tech">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Tecnologías</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-sm transition-colors hover:border-foreground"
                  >
                    <span className="text-xs font-mono">{iconMap[tech.icon] || tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
