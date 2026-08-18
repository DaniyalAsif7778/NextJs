import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CART",
  description: "cart page of project",
  openGraph: {
    title: "CART",
    description: "cart page of project",
  },
  twitter:{
     title: "CART",
    description: "cart page of project",
  }
};

export default function CartLayout({ children }: { children: ReactNode }) {
  return <div className="cart-layout-wrapper">{children}</div>;
}
