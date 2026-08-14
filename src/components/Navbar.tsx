'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
            MyBrand
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              About
            </Link>
            <Link href="/about/teams" className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Team
            </Link>
            <Link href="/contact" className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6"
          >
            <span className={`h-0.5 w-full bg-black dark:bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-black dark:bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-black dark:bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg p-4 w-48">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              About
            </Link>
            <Link href="/about/teams" onClick={() => setIsOpen(false)} className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Team
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
