'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex flex-wrap items-center justify-between px-6 lg:px-12 py-6 text-sm relative">
      <span className="font-semibold text-lg">Wedding Crash</span>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-8">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Galería</a>
        <a href="#">Planes</a>
        <a href="#">Testimonios</a>
      </nav>

      {/* Cotizar Button */}
      <button className="hidden lg:block border border-[#1e1e1e] px-6 py-2 rounded text-sm">
        Cotizar
      </button>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-10 flex flex-col items-center py-4 lg:hidden">
          <a href="#" className="py-2">Inicio</a>
          <a href="#" className="py-2">Productos</a>
          <a href="#" className="py-2">Galería</a>
          <a href="#" className="py-2">Planes</a>
          <a href="#" className="py-2">Testimonios</a>
          <button className="mt-4 border border-[#1e1e1e] px-6 py-2 rounded text-sm">
            Cotizar
          </button>
        </div>
      )}
    </header>
  )
}
