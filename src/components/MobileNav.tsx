'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { ModeToggle } from './toggle-theme'
import { Separator } from './ui/separator'

const navLinks = [
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/drones', label: 'Drone' },
  { href: '/contact', label: 'Contato' },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[250px] bg-background p-6">
        <SheetHeader>
          <SheetTitle className="items-center justify-center text-lg font-semibold">
            {' '}
            TOMIO <span className="text-sm text-muted-foreground">
              / Dev
            </span>{' '}
          </SheetTitle>
        </SheetHeader>

        <Separator className="mt-2" />

        <nav className="mt-6 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link
                href={href}
                className="text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </SheetClose>
          ))}
          <Separator />
          <div className="mt-4">
            <ModeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
