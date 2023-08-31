import { Urbanist } from "next/font/google";
import type { Metadata } from "next";

import { getHeaderFooter } from "@/actions/getHeaderFooter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomada ® | Lentes 5 en 1 y Sobrelentes en Venezuela",
  description: "",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { header, footer } = await getHeaderFooter();
  return (
    <html lang="es">
      <body className={font.className}>
        <Navbar header={header} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
