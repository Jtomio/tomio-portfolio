'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TomioHero from '../../../public/tomio-hero.png'
import TomioHeroDark from '../../../public/tomio-hero-dark.png'

export function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 lg:pt-40 h-full w-full overflow-hidden px-6">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 text-center md:text-left max-w-screen-xl mx-auto">
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Olá, eu sou <span className="dark:text-secondary-foreground text-muted-foreground">Tomio</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl">
            Desenvolvedor Front-end apaixonado por experiências digitais modernas,
            acessíveis e performáticas. Com foco em <strong>Next.js</strong>, <strong>TypeScript</strong> e
            <strong> Tailwind CSS</strong>, crio interfaces que realmente fazem diferença.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#about"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition"
            >
              Me Conheça
            </a>
            <a
              href="#projects"
              className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-background transition"
            >
              Ver Projetos
            </a>
          </div>
        </motion.div>

        {/* Imagem animada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-12 md:mt-0  flex justify-center"
        >
          <Image
            src={TomioHero} // Substitua pelo caminho correto da imagem
            alt="Tomio como desenvolvedor front-end"
            width={320}
            height={320}
            className="rounded-xl object-cover shadow-md"
          />
        </motion.div>
      </div>
    </section>
  )
}