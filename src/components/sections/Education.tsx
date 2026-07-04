"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { EDUCATION } from "@/lib/constants"

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Educación</h2>

        <div className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <GraduationCap size={20} />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                {edu.description && (
                  <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
