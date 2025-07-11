// src/components/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ModeToggle } from './toggle-theme'

const navLinks = [
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/drones', label: 'Drone' },
  { href: '/contact', label: 'Contato' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-border bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:opacity-80"
        >
          TOMIO <span className="text-sm text-muted-foreground">/ Dev</span>
        </Link>

        {/* Navegação */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Modo escuro/claro */}
        <ModeToggle />
      </div>
    </header>
  )
}
