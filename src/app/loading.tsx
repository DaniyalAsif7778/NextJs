export default function ProductsSkeleton() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A0F]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-10">
            <div className="h-6 w-24 animate-pulse rounded-md bg-white/[0.08]" />

            <div className="hidden items-center gap-6 md:flex">
              <div className="h-4 w-16 animate-pulse rounded bg-white/[0.06]" />

              <div className="h-4 w-12 animate-pulse rounded bg-white/[0.06]" />
            </div>
          </div>

          {/* Cart */}
          <div className="h-10 w-10 animate-pulse rounded-xl bg-white/[0.06]" />
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero */}
        <section className="mb-10">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2">
            <div className="h-4 w-10 animate-pulse rounded bg-white/[0.05]" />
            <div className="h-4 w-2 animate-pulse rounded bg-white/[0.04]" />
            <div className="h-4 w-16 animate-pulse rounded bg-white/[0.06]" />
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-3">
              {/* Heading */}
              <div className="h-12 w-80 animate-pulse rounded-lg bg-white/[0.08]" />

              {/* Description */}
              <div className="h-5 w-[420px] max-w-full animate-pulse rounded bg-white/[0.05]" />
            </div>

            {/* Product count */}
            <div className="h-4 w-24 animate-pulse rounded bg-white/[0.05]" />
          </div>
        </section>

        {/* Search + Sort */}
        <section className="mb-8 flex flex-col gap-3 lg:flex-row">
          {/* Search */}
          <div className="h-12 flex-1 animate-pulse rounded-xl bg-white/[0.05]" />

          {/* Sort */}
          <div className="h-12 w-full animate-pulse rounded-xl bg-white/[0.05] lg:w-[190px]" />
        </section>

        {/* Categories */}
        <section className="mb-8 overflow-hidden">
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-24 shrink-0 animate-pulse rounded-full bg-white/[0.05]"
              />
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </section>
      </div>
    </main>
  );
}

function ProductCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#12121A]">
      {/* Product Image */}
      <div className="relative aspect-square animate-pulse bg-white/[0.05]">
        {/* Category */}
        <div className="absolute left-3 top-3 h-7 w-24 rounded-full bg-white/[0.08]" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <div className="min-h-[48px] space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-white/[0.08]" />

          <div className="h-4 w-3/4 animate-pulse rounded bg-white/[0.06]" />
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="h-4 w-12 animate-pulse rounded bg-white/[0.07]" />

          <div className="h-3 w-20 animate-pulse rounded bg-white/[0.04]" />
        </div>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="h-7 w-20 animate-pulse rounded bg-white/[0.08]" />

          <div className="h-9 w-24 animate-pulse rounded-lg bg-white/[0.08]" />
        </div>
      </div>
    </article>
  );
}