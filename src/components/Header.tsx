'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ModeToggle } from './toggle-theme'
import { MobileNav } from './MobileNav'

const navLinks = [
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/drones', label: 'Drone' },
  { href: '/contact', label: 'Contato' },
]

export function Header() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastScrollY.current && currentY > 64)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background shadow-sm backdrop-blur"
    >
      <div className="container-base flex items-center justify-between py-4">
        {/* Logo à esquerda */}
        <Link
          href="/"
          className="cursor-pointer text-xl font-bold text-primary hover:opacity-80"
        >
          TOMIO <span className="text-sm text-muted-foreground">/ Dev</span>
        </Link>

        {/* Navegação e botão de tema à direita */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'cursor-pointer text-sm font-medium transition-colors hover:text-primary',
                  pathname === href ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <ModeToggle />
        </div>

        {/* Mobile: hambúrguer à direita */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
}
