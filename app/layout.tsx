import { Outfit } from "next/font/google";
import type { Metadata } from "next";

import ToastProvider from "@/providers/ToastProvider";
import ModalProvider from "@/providers/ModalProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import TopBar from "@/components/TopBar";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomada ® | Lentes 5 en 1 y Sobrelentes en Venezuela",
  description: "",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
