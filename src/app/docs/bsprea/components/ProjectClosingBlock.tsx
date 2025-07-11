'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function ProjectClosingBlock() {
  const testimonials = [
    {
      name: 'Cap. Rafael – Três Lagoas',
      quote:
        'O BSPREA transformou nossa forma de atuar como voluntários. O apoio técnico do projeto nos dá segurança para evoluir com impacto real.',
    },
    {
      name: 'Silvana – Ilha Solteira',
      quote:
        'Ver nossos esforços organizados num sistema digital foi uma vitória. A tecnologia trouxe visibilidade e eficiência às ações.',
    },
    {
      name: 'André – Guarujá',
      quote:
        'Ter um blog e gestão por equipes nos aproxima da comunidade. A página reflete nosso compromisso com o bem coletivo.',
    },
    {
      name: 'Fernanda – Três Lagoas II',
      quote:
        'A pandemia nos isolou, mas o BSPREA nos uniu de forma inteligente, humana e estruturada. Gratidão ao desenvolvimento desse espaço.',
    },
  ]

  return (
    <div className="mt-20 space-y-20">
      {/* 💬 Depoimentos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="mb-6 text-xl font-semibold text-primary">
          💬 Agradecimentos dos Membros
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map(({ name, quote }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-4 text-sm text-muted-foreground shadow-sm"
            >
              <p className="mb-3 italic">“{quote}”</p>
              <span className="block font-medium text-primary">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 📢 Chamada à ação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-lg border bg-primary/5 p-6 text-center"
      >
        <h3 className="mb-2 text-xl font-semibold text-primary">
          Quer apoiar ou colaborar com o BSPREA?
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          O projeto é construído por mãos voluntárias e tem espaço para quem
          deseja contribuir com conhecimento, recursos ou tempo.
        </p>
        <Link
          href="/#contato"
          className="inline-block rounded-md bg-primary px-5 py-2 text-sm text-primary-foreground transition hover:opacity-90"
        >
          Fale com a Equipe BSPREA
        </Link>
      </motion.div>
    </div>
  )
}
