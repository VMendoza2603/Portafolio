"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "mx-auto max-w-6xl px-4 py-24 opacity-0 transition-all duration-700 sm:px-6 lg:px-8",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
      style={{ transform: isVisible ? "translateY(0)" : "translateY(30px)" }}
    >
      {children}
    </section>
  )
}
