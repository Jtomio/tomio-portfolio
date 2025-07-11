'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-base">
      <div className="container-base flex flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left">
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-xl md:w-1/2"
        >
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Sobre Mim
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Sou <strong>Tomio</strong>, desenvolvedor front-end apaixonado por
            interfaces que combinam design, performance e acessibilidade.
            Transformo ideias em experiências digitais usando{' '}
            <span className="font-semibold text-primary">Next.js</span>,{' '}
            <span className="font-semibold text-primary">TypeScript</span> e
            <span className="font-semibold text-primary"> Tailwind CSS</span>.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Quando não estou codando, gosto de explorar novas formas de
            representar interações visuais, estudar UX ou otimizar
            acessibilidade em projetos reais. Sempre buscando evoluir com cada
            linha de código 🚀
          </p>
        </motion.div>

        {/* Tecnologias animadas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:w-1/2 md:justify-start"
        >
          {[
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Acessibilidade',
            'UX/UI',
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
