"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error reporting service here.
    console.error("Products page error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0F] px-6 text-white">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
          <AlertTriangle className="h-7 w-7 text-red-400" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight">
          Couldn&apos;t load products
        </h2>

        <p className="mt-3 text-sm text-zinc-500">
          Something went wrong while fetching the product catalog. This is
          usually temporary — try again in a moment.
        </p>

        {error.message && (
          <p className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-xs text-zinc-600">
            {error.message}
          </p>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            <RotateCcw className="h-4 w-4" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.07] hover:text-white"
          >
            <Home className="h-4 w-4" />
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}