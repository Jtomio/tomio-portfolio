'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { ProjectClosingBlock } from './components/ProjectClosingBlock'

export default function BspreaPage() {
  return (
    <section className="section-base">
      <div className="container-base max-w-3xl">
        {/* 🧭 Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-muted-foreground"
        >
          <ol className="flex items-center space-x-1">
            <li>
              <Link href="/" className="flex items-center hover:text-primary">
                <Home className="mr-1 h-4 w-4" /> Início
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </li>
            <li>
              <Link href="/#projects" className="hover:text-primary">
                Projetos
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </li>
            <li className="font-medium text-primary">BSPREA</li>
          </ol>
        </motion.nav>

        {/* 🎯 Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-bold text-primary"
        >
          BSPREA – Bombeiros Solidários
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-sm leading-relaxed text-muted-foreground"
        >
          Projeto social sem fins lucrativos que une bombeiros voluntários,
          civis, militares e municipais em ações de proteção comunitária.
          Fundado durante a pandemia para apoiar colegas de profissão e levar
          assistência à sociedade.
        </motion.p>

        {/* Seções animadas */}
        <AnimatedSection title="📌 Objetivos" delay={0.3}>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Promover ações emergenciais e comunitárias</li>
            <li>Manter um blog com conteúdo, imagens e comentários</li>
            <li>Representar bombeiros profissionais e voluntários</li>
          </ul>
        </AnimatedSection>

        <AnimatedSection title="🛠️ Tecnologias" delay={0.4}>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Next.js, TypeScript e Tailwind CSS</li>
            <li>Sistema dinâmico de blog e comentários</li>
            <li>Armazenamento de imagens e gestão por equipe</li>
          </ul>
        </AnimatedSection>

        <AnimatedSection title="🌍 Equipes Regionais" delay={0.5}>
          <p className="mb-4 text-sm text-muted-foreground">
            BSPREA é composto por 4 equipes com atuação local:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>São Paulo: Ilha Solteira e Guarujá</li>
            <li>Mato Grosso do Sul: duas equipes em Três Lagoas</li>
          </ul>
        </AnimatedSection>

        <AnimatedSection title="📆 Histórico" delay={0.6}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Iniciado de forma informal em dezembro de 2020 com 4 amigos e ações
            solidárias como doação de cestas básicas no Natal. Em 21/03/2021
            tornou-se oficialmente BSPREA. Desde então, o projeto cresceu, se
            estruturou em equipes regionais e segue atuando com espírito
            colaborativo e propósito social.
          </p>
        </AnimatedSection>

        <ProjectClosingBlock />
      </div>
    </section>
  )
}

/* 💫 Section com animação */
function AnimatedSection({
  title,
  delay,
  children,
}: {
  title: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <h2 className="mb-2 text-xl font-semibold text-primary">{title}</h2>
      {children}
    </motion.div>
  )
}
