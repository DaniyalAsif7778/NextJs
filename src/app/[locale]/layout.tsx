import "./globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Product_Provider from "@/components/provider/Product_Provider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Next JS",
    template: "%s | Next JS",
  },
  description: "A project for learning Next.js",
  twitter: {
    title: "Next JS",
    description: "A project for learning Next.js",
  },
  openGraph: {
    siteName: "Next JS",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
console.log(locale,"lng");

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          <Product_Provider>
            {children}
          </Product_Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}