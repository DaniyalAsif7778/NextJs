'use client';

import { useState } from 'react';
import Link from 'next/link';
  
 
 
  

export default function Sidebar( ) {
  const [isOpen, setIsOpen] = useState(false);
 const sidebarItems = [
    { label: 'About Us', href: '/about',  },
    { label: 'Our Team', href: '/about/teams',  },
  ];
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 md:hidden bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800 w-64 transform transition-transform duration-300 z-50 md:translate-x-0   md:border-r md:border-zinc-200 dark:md:border-zinc-800 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6">
          {/* Close Button for Mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden mb-6 text-black dark:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-lg font-bold text-black dark:text-zinc-50 mb-6">Menu</h3>

          <nav className="flex flex-col gap-3">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors  `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}
    </>
  );
}
