"use client";

import useGetCartProducts from "@/hooks/useGetCartProducts"; // swap for your real hook
import { useState } from "react";
import { Package, User, Calendar, ChevronRight } from "lucide-react";

export type OrderProduct = {
  productId: number;
  quantity: number;
};

export type Order = {
  id: number;
  userId: number;
  date: string;
  products: OrderProduct[];
  __v?: number;
};

export default function OrdersPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { product,isPending, isSuccess: ordersReady, error: ordersError } =
    useGetCartProducts();

  // Handles both possible hook shapes: a raw array, or an axios-style
  // { data: [...] } response — avoids a crash if the hook's wrapping changes.
  const orders: Order[] = Array.isArray(product)
    ? product
    : product?.data ?? [];

  if ( isPending) {
    return <OrdersSkeleton />;
  }

  if (ordersError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0A0A0F] text-white">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Failed to load orders</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Something went wrong while fetching order history.
          </p>
        </div>
      </main> 
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <section className="mb-10">
          <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500">
            <span>Home</span>
            <span>/</span>
            <span className="text-zinc-300">Orders</span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Order history
              </h2>
              <p className="mt-3 max-w-xl text-zinc-400">
                All past orders across all customers.
              </p>
            </div>

            <div className="text-sm text-zinc-500">{orders.length} orders</div>
          </div>
        </section>

        {/* Orders list */}
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#12121A] px-6 py-20 text-center">
            <h3 className="text-lg font-semibold text-white">No orders yet</h3>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              Orders will show up here once they come in.
            </p>
          </div>
        ) : (
          <section className="flex flex-col gap-3">
            {orders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                expanded={expandedId === order.id}
                onToggle={() =>
                  setExpandedId((id) => (id === order.id ? null : order.id))
                }
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

function OrderRow({
  order,
  expanded,
  onToggle,
}: {
  order: Order;
  expanded: boolean;
  onToggle: () => void;
}) {
  const totalQuantity = order.products.reduce((sum, p) => sum + p.quantity, 0);

  const formattedDate = Number.isNaN(new Date(order.date).getTime())
    ? "Unknown date"
    : new Date(order.date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

  return (
    <article className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#12121A] transition duration-200 hover:border-white/[0.13]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
            <Package className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              Order #{order.id}
            </div>
            <div className="mt-0.5 flex items-center gap-3 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" /> User {order.userId}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {formattedDate}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm font-medium text-white">
              {order.products.length} item{order.products.length !== 1 ? "s" : ""}
            </div>
            <div className="text-xs text-zinc-500">{totalQuantity} qty total</div>
          </div>
          <ChevronRight
            className={`h-4 w-4 text-zinc-500 transition-transform ${
              expanded ? "rotate-90" : ""
            }`}
          />
        </div>
      </button>

      {expanded && (
        <div className="border-t border-white/[0.07] bg-white/[0.02] p-4">
          <div className="flex flex-col gap-2">
            {order.products.map((item, index) => (
              <div
                key={`${order.id}-${item.productId}-${index}`}
                className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
              >
                <span className="text-sm text-zinc-300">
                  Product #{item.productId}
                </span>
                <span className="text-sm font-medium text-white">
                  x{item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function OrdersSkeleton() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 h-10 w-64 animate-pulse rounded-lg bg-white/[0.05]" />
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-20 animate-pulse rounded-2xl border border-white/[0.07] bg-[#12121A]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}