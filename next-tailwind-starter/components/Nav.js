import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav({ logoRef }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-ink sticky top-0 z-30 shadow-md border-b border-olive/20">
      <div className="relative flex items-center justify-between px-8 py-5 overflow-hidden">
        <Link href="/" className="text-xl font-extrabold text-primary tracking-wide">Porch Swing Software</Link>

        {/* Centered logo — desktop only, scroll-driven up from bottom */}
        <Link
          href="/"
          ref={logoRef}
          className="group absolute left-1/2 -translate-x-1/2 hidden md:block"
          style={{ transform: 'translateY(48px)', opacity: 0, pointerEvents: 'none' }}
          aria-label="Go to home page"
        >
          <Image
            src="/logo.png"
            alt="Porch Swing Software"
            width={96}
            height={96}
            className="object-contain transition-[filter] duration-200 [filter:drop-shadow(1px_0_0_#d6b891)_drop-shadow(-1px_0_0_#d6b891)_drop-shadow(0_1px_0_#d6b891)_drop-shadow(0_-1px_0_#d6b891)] group-hover:[filter:brightness(1.18)_sepia(0.12)_saturate(0.9)_drop-shadow(1px_0_0_#fff)_drop-shadow(-1px_0_0_#fff)_drop-shadow(0_1px_0_#fff)_drop-shadow(0_-1px_0_#fff)]"
          />
        </Link>

        {/* Desktop menu */}
        <div className="space-x-6 hidden md:flex items-center">
          <Link href="/" className="text-sm font-medium text-muted hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-muted hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-muted hover:text-primary transition-colors">Contact</Link>
          <Link href="/book" className="text-sm font-bold bg-taupe text-ink px-5 py-2 rounded-full hover:bg-primary transition-colors">Book a call</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="flex flex-col px-8 pb-5 gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-sm font-medium text-muted hover:text-primary transition-colors">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-sm font-medium text-muted hover:text-primary transition-colors">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-sm font-medium text-muted hover:text-primary transition-colors">Contact</Link>
          <Link href="/book" onClick={() => setOpen(false)} className="text-sm font-bold bg-taupe text-ink px-5 py-2 rounded-full hover:bg-primary transition-colors text-center">Book a call</Link>
        </div>
      </div>
    </nav>
  )
}
