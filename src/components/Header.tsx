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
      className="fixed top-0 left-0 w-full z-50 bg-background border-b border-border shadow-sm backdrop-blur"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Logo à esquerda */}
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:opacity-80 cursor-pointer"
        >
          TOMIO <span className="text-muted-foreground text-sm">/ Dev</span>
        </Link>

        {/* Links centralizados (desktop) */}
        <nav className="hidden md:flex justify-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary cursor-pointer',
                pathname === href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Toggle e menu mobile */}
        <div className="flex items-center justify-end gap-2">
          {/* Mobile: hambúrguer à direita */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* Desktop: toggle do tema */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}