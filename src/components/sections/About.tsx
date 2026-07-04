"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/SectionWrapper"

export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Sobre mí</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Soy un desarrollador Full Stack con experiencia en tecnologías modernas como
            React, Next.js, TypeScript y Node.js. Mi enfoque está en construir aplicaciones
            web escalables, optimizadas y con código limpio.
          </p>
          <p>
            Actualmente curso Ingeniería en Software en la Universidad Estatal de Milagro,
            donde combino la formación académica con proyectos prácticos que abarcan desde
            el desarrollo frontend hasta la implementación de APIs y sistemas backend.
          </p>
          <p>
            Me apasiona la arquitectura de software y las buenas prácticas de desarrollo.
            Cada proyecto es una oportunidad para aprender, mejorar y crear soluciones que
            realmente marquen la diferencia.
          </p>
          <p>
            Fuera del código, disfruto explorar nuevas tecnologías, contribuir a proyectos
            open source y compartir conocimiento con la comunidad de desarrolladores.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
