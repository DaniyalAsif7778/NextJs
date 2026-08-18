import "./globals.css";
 import { Metadata } from 'next';

 import Product_Provider from "@/components/provider/Product_Provider";
import Navbar from "@/components/Navbar"

export const metadata:Metadata = {
  title:{
    default:"Next JS",
    template:"%s  | Next JS"
  },
  description:"A project for learning nextjs",
  twitter:{
    title:"Next JS",
    description:"A project for learning nextjs"
  },
  openGraph:{
    siteName:"Next Js"
  }
}
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <Product_Provider  >
          {children}
        </Product_Provider>
      </body>
    </html>
  );
}
