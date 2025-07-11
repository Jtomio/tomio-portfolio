'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import TomioHero from '../../../public/tomio-hero.png'
import TomioHeroDark from '../../../public/tomio-hero-dark.png'

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentImage = resolvedTheme === 'dark' ? TomioHeroDark : TomioHero

  return (
    <section className="section-base">
      <div className="container-base flex flex-col items-center justify-center text-center md:flex-row md:text-left">
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl md:w-1/2"
        >
          <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
            Olá, eu sou{' '}
            <span className="text-muted-foreground dark:text-secondary-foreground">
              Tomio
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Desenvolvedor Front-end apaixonado por experiências digitais
            modernas, acessíveis e performáticas. Com foco em{' '}
            <strong>Next.js</strong>, <strong>TypeScript</strong> e
            <strong> Tailwind CSS</strong>, crio interfaces que realmente fazem
            diferença.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#about"
              className="rounded-md bg-primary px-6 py-2 text-primary-foreground transition hover:opacity-90"
            >
              Me Conheça
            </a>
            <a
              href="#projects"
              className="rounded-md border border-primary px-6 py-2 text-primary transition hover:bg-primary hover:text-background"
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
          className="mt-12 flex justify-center md:mt-0"
        >
          <Image
            src={currentImage}
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
