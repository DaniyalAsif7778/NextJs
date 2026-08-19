 export default function CartLoading() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A0F]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo + Navigation */}
          <div className="flex items-center gap-10">
            <div className="h-6 w-24 animate-pulse rounded-md bg-white/[0.08]" />

            <div className="hidden items-center gap-6 md:flex">
              <div className="h-4 w-16 animate-pulse rounded bg-white/[0.05]" />

              <div className="h-4 w-12 animate-pulse rounded bg-white/[0.05]" />
            </div>
          </div>

          {/* Cart */}
          <div className="h-10 w-10 animate-pulse rounded-xl bg-white/[0.06]" />
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Page Header */}
        <section className="mb-10">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2">
            <div className="h-4 w-10 animate-pulse rounded bg-white/[0.05]" />

            <div className="h-4 w-2 animate-pulse rounded bg-white/[0.04]" />

            <div className="h-4 w-12 animate-pulse rounded bg-white/[0.06]" />
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              {/* Heading */}
              <div className="h-12 w-64 animate-pulse rounded-lg bg-white/[0.08]" />

              {/* Description */}
              <div className="mt-3 h-5 w-80 max-w-full animate-pulse rounded bg-white/[0.05]" />
            </div>

            {/* Clear cart */}
            <div className="h-5 w-24 animate-pulse rounded bg-white/[0.05]" />
          </div>
        </section>

        {/* Main Cart Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          <section className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <CartItemSkeleton key={index} />
            ))}
          </section>

          {/* Order Summary */}
          <CartSummarySkeleton />
        </div>
      </div>
    </main>
  );
}

function CartItemSkeleton() {
  return (
    <article className="rounded-2xl border border-white/[0.07] bg-[#12121A] p-4 sm:p-5">
      <div className="flex gap-4">
        {/* Image */}
        <div className="h-28 w-28 shrink-0 animate-pulse rounded-xl bg-white/[0.06] sm:h-36 sm:w-36" />

        {/* Product Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 space-y-2">
              {/* Category */}
              <div className="h-3 w-20 animate-pulse rounded bg-white/[0.04]" />

              {/* Product title */}
              <div className="h-4 w-full max-w-md animate-pulse rounded bg-white/[0.07]" />

              <div className="h-4 w-3/4 max-w-sm animate-pulse rounded bg-white/[0.05]" />
            </div>

            {/* Delete button */}
            <div className="h-8 w-8 shrink-0 animate-pulse rounded-lg bg-white/[0.04]" />
          </div>

          {/* Bottom */}
          <div className="mt-4 flex items-end justify-between gap-4">
            {/* Quantity */}
            <div className="flex h-10 w-28 animate-pulse rounded-lg bg-white/[0.05]" />

            {/* Price */}
            <div className="space-y-2 text-right">
              <div className="ml-auto h-3 w-20 animate-pulse rounded bg-white/[0.04]" />

              <div className="ml-auto h-6 w-20 animate-pulse rounded bg-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CartSummarySkeleton() {
  return (
    <aside className="h-fit rounded-2xl border border-white/[0.07] bg-[#12121A] p-5 lg:sticky lg:top-24">
      {/* Title */}
      <div className="h-6 w-32 animate-pulse rounded bg-white/[0.08]" />

      {/* Price rows */}
      <div className="mt-6 space-y-5">
        <SummaryRowSkeleton />

        <SummaryRowSkeleton />

        <SummaryRowSkeleton />
      </div>

      <div className="my-5 border-t border-white/[0.07]" />

      {/* Promo */}
      <div>
        <div className="mb-2 h-3 w-20 animate-pulse rounded bg-white/[0.04]" />

        <div className="flex gap-2">
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-white/[0.05]" />

          <div className="h-10 w-16 animate-pulse rounded-lg bg-white/[0.06]" />
        </div>
      </div>

      <div className="my-5 border-t border-white/[0.07]" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <div className="h-5 w-12 animate-pulse rounded bg-white/[0.06]" />

        <div className="h-8 w-24 animate-pulse rounded bg-white/[0.08]" />
      </div>

      {/* Checkout */}
      <div className="mt-5 h-12 w-full animate-pulse rounded-xl bg-white/[0.08]" />

      {/* Security */}
      <div className="mt-5 flex gap-2">
        <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-white/[0.04]" />

        <div className="h-3 flex-1 animate-pulse rounded bg-white/[0.04]" />
      </div>
    </aside>
  );
}

function SummaryRowSkeleton() {
  return (
    <div className="flex items-center justify-between">
      <div className="h-4 w-20 animate-pulse rounded bg-white/[0.04]" />

      <div className="h-4 w-16 animate-pulse rounded bg-white/[0.06]" />
    </div>
  );
}
 
