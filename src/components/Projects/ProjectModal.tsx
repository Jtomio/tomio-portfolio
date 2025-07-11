'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  image: string
  demo: string
  github: string
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  demo,
  github,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl rounded-lg border bg-background p-6 shadow-xl"
          >
            {/* Botão de fechar */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-muted-foreground hover:text-primary"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Conteúdo */}
            <h3 className="mb-4 text-2xl font-bold text-primary">{title}</h3>
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className="mb-4 rounded-md object-cover"
            />
            <p className="text-sm text-muted-foreground">{description}</p>

            {/* Botões de ação */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90"
              >
                Ver Online
              </a>
              <a
                href={github}
                // target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-primary px-4 py-2 text-sm text-primary transition hover:bg-primary hover:text-background"
              >
                Ver Projeto
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
