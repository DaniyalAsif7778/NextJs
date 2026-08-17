'use client';

import Link from "next/link";

import {
   ShoppingCart,
 } from "lucide-react"; 

export default function Navabar() {
 
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A0F]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <h1 className="text-xl font-bold tracking-tight">
              Shop<span className="text-cyan-400">ly</span>
            </h1>

            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/"
                className="text-sm font-medium text-white"
              >
                Products
              </Link>

            
            </nav>
          </div>

          <button
            className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5 transition hover:bg-white/[0.07]"
            aria-label="Shopping cart"
          >
            <Link href="/cart">
                        <ShoppingCart className="h-5 w-5" />

            </Link>

         
          
          </button>
        </div>
      </header>
    </>
  );
}
