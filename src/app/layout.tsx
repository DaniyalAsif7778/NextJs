 import "./globals.css";
import FloatingNavbar from "@/components/Navbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
     >
      <body className="min-h-full flex flex-col">
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
