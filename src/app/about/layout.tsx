'use client';

import Sidebar from "@/components/Sidebar";

export default function AboutLayout({ children }: { children: React.ReactNode }) {

 

  return (
    <div className="flex min-h-screen">
      <Sidebar    />
      <div className="flex-1 bg-zinc-50 dark:bg-black">
        {children}
      </div>
    </div>
  );
}
