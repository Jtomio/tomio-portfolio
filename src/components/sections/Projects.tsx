'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '../Projects/ProjectCard'
import { ProjectModal } from '../Projects/ProjectModal'

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const projects = [
    {
      id: 'bsprea',
      title: 'BSPREA – Bombeiros Solidários',
      description:
        'Associação sem fins lucrativos que une bombeiros voluntários, civis e militares em ações sociais de proteção comunitária. Blog, campanhas e gestão regional.',
      tech: [
        'Next.js',
        'Tailwind CSS',
        'Blog Dinâmico',
        'Sistema de Comentários',
      ],
      image: '/assets/project-card-bsprea.png',
      demo: 'https://bsprea.com.br',
      github: 'docs/bsprea',
    },
    // Adicione outros projetos aqui
  ]

  const selected = projects.find((proj) => proj.id === activeProject)

  return (
    <section id="projects" className="section-base">
      <div className="container-base">
        {/* Título da seção */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl"
        >
          Projetos em Destaque
        </motion.h2>

        {/* Cards de projetos */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onPreview={() => setActiveProject(project.id)}
            />
          ))}
        </div>

        {/* Modal de preview */}
        {selected && (
          <ProjectModal
            isOpen={true}
            onClose={() => setActiveProject(null)}
            title={selected.title}
            description={selected.description}
            image={selected.image}
            demo={selected.demo}
            github={selected.github}
          />
        )}
      </div>
    </section>
  )
}
