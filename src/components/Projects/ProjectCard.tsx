'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye, ExternalLink, Scroll } from 'lucide-react'

interface ProjectProps {
  title: string
  description: string
  tech: string[]
  image: string
  demo: string
  github: string
  onPreview?: () => void
}

export function ProjectCard({
  title,
  description,
  tech,
  image,
  demo,
  onPreview,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="rounded-lg border bg-card p-4 shadow-md transition hover:scale-[1.02]"
    >
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={360}
          className="mb-4 rounded-md object-cover"
        />
        {onPreview && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={onPreview}
            className="absolute right-2 top-2 rounded-full bg-background p-2 shadow-md hover:bg-muted"
          >
            <Eye className="h-5 w-5 text-primary" />
          </motion.button>
        )}
      </div>

      <h3 className="text-xl font-semibold text-primary">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" /> Site
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/docs/bsprea"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <Scroll className="h-4 w-4" /> Sobre o Projeto
        </motion.a>
      </div>
    </motion.div>
  )
}
