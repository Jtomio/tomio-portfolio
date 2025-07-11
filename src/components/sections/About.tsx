'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section
      id="about"
      className="pt-24 md:pt-32 lg:pt-40 h-full w-full overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-xl md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre Mim
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sou <strong>Tomio</strong>, desenvolvedor front-end apaixonado por interfaces que combinam
            design, performance e acessibilidade. Transformo ideias em experiências digitais
            usando <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">TypeScript</span> e
            <span className="text-primary font-semibold"> Tailwind CSS</span>.
          </p>
          <p className="mt-4 text-muted-foreground text-sm">
            Quando não estou codando, gosto de explorar novas formas de representar interações visuais,
            estudar UX ou otimizar acessibilidade em projetos reais. Sempre buscando evoluir com cada linha de código 🚀
          </p>
        </motion.div>

        {/* Tecnologias animadas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-wrap justify-center md:justify-start gap-4"
        >
          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Acessibilidade', 'UX/UI'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground shadow-sm border"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}