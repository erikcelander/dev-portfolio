"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

export function NavLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname() 
  console.log(pathname)

  const navLinks = [
    { title: 'About me', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'Articles', href: '/articles' },
    { title: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navLinks.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={`mx-2 text-sm font-medium text-muted-foreground hover:text-primary ${pathname === link.href ? 'text-black' : ''
            }`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}