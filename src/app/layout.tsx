import "./globals.css";
 import Product_Provider from "@/components/provider/Product_Provider";
import Navbar from "@/components/Navbar"
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
