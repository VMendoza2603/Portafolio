import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { TechStack } from "@/components/sections/TechStack"
import { Projects } from "@/components/sections/Projects"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { Experience } from "@/components/sections/Experience"
import { EducationSection } from "@/components/sections/Education"
import { SkillsSection } from "@/components/sections/Skills"
import { CertificatesSection } from "@/components/sections/Certificates"
import { Contact } from "@/components/sections/Contact"
import { getProjects, getFeaturedProjects } from "@/services/projectService"

export default async function Home() {
  const [projects, featuredProjects] = await Promise.all([
    getProjects(),
    getFeaturedProjects(),
  ])

  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects projects={featuredProjects} />
      <Projects projects={projects} />
      <Experience />
      <EducationSection />
      <SkillsSection />
      <CertificatesSection />
      <Contact />
    </>
  )
}
