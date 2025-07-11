import About from '@/components/sections/About'
import { HeroSection } from '@/components/sections/Hero'
import ProjectsSection from '@/components/sections/Projects'

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <ProjectsSection />
    </div>
  )
}
