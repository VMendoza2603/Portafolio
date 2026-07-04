"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { CERTIFICATES } from "@/lib/constants"

export function CertificatesSection() {
  if (CERTIFICATES.length === 0) return null

  return (
    <SectionWrapper id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Certificados</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground"
            >
              <div className="aspect-video bg-muted" />
              <div className="p-4">
                <h3 className="text-sm font-medium group-hover:underline">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
