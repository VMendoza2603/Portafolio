"use client"

import { cn } from "@/lib/utils"
import type { ProjectCategory } from "@/types/project"

interface FilterBarProps {
  categories: ProjectCategory[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterBar({ categories, activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange("all")}
        className={cn(
          "rounded-full px-4 py-1.5 text-sm transition-colors",
          activeCategory === "all"
            ? "bg-foreground text-background"
            : "bg-muted text-muted-foreground hover:text-foreground"
        )}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm transition-colors",
            activeCategory === cat
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
