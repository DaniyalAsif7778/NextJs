"use client";

import useGetProducts from "@/hooks/useGetProducts";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import ProductCardSkeleton from "./loading";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const categories = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [cartCount, setCartCount] = useState(0);

  const { products, isPending,isSuccess, error } = useGetProducts();

  // Filter + sort the raw product list based on current controls.
  const filteredProducts = useMemo(() => {
    const raw: Product[] = products?.data ?? [];

    const query = search.trim().toLowerCase();

    let result = raw.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        query.length === 0 ||
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Sort without mutating the filtered array in place.
    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating.rate - a.rating.rate;
        case "featured":
        default:
          return 0;
      }
    });

    return result;
  }, [products, search, category, sort]);

  if (isPending) {
    return <ProductCardSkeleton />;
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0A0A0F] text-white">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Failed to load products</h2>

          <p className="mt-2 text-sm text-zinc-500">
            Something went wrong while fetching products.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Navbar */}

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero */}
        <section className="mb-10">
          <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500">
            <span>Home</span>
            <span>/</span>
            <span className="text-zinc-300">Products</span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Discover products
              </h2>

              <p className="mt-3 max-w-xl text-zinc-400">
                Find products you&apos;ll love, from everyday essentials to
                premium products.
              </p>
            </div>

            <div className="text-sm text-zinc-500">
              {filteredProducts.length} products
            </div>
          </div>
        </section>

        {/* Search + Sort */}
        <section className="mb-8 flex flex-col gap-3 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-12 pr-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/40 focus:bg-white/[0.05]"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-12 min-w-[190px] appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] pl-11 pr-10 text-sm text-zinc-300 outline-none focus:border-cyan-400/40"
            >
              <option value="featured" className="bg-[#12121A]">
                Featured
              </option>

              <option value="price-low" className="bg-[#12121A]">
                Price: Low to High
              </option>

              <option value="price-high" className="bg-[#12121A]">
                Price: High to Low
              </option>

              <option value="rating" className="bg-[#12121A]">
                Highest Rated
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8 overflow-x-auto">
          <div className="flex min-w-max gap-2">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium capitalize transition ${
                    active
                      ? "bg-cyan-400 text-black"
                      : "border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </section>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#12121A] px-6 py-20 text-center">
            <h3 className="text-lg font-semibold text-white">
              No products found
            </h3>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => setCartCount((count) => count + 1)}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: () => void;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-[#12121A] transition duration-300 hover:-translate-y-1 hover:border-white/[0.13]">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-8 transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Category */}
        <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium capitalize text-white backdrop-blur-md">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="line-clamp-2 min-h-[48px] font-semibold text-white">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-medium">{product.rating.rate}</span>
          </div>

          <span className="text-xs text-zinc-600">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>

          <button
            onClick={onAddToCart}
            className="rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-black transition hover:bg-cyan-400"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}