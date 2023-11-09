"use client";

import useCurrentPage from "@/hooks/useCurrentPage";
import Container from "./ui/Container";
import { footerInfo } from "@/data";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa"
import Image from "next/image";

export default function Footer() {
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);

  const handleClickLink = (href: string) => {
    updatePage(1);
    router.push(href);
  }
  return (
    <div className="bg-primary-color w-full">
      <Container>
        <div className="grid text-center lg:text-left grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-12 py-12">
          {/* Social media links */}
          <div className="flex flex-col gap-y-8 text-gray-300">
            <div className="flex flex-col gap-y-3">
              <h2 className="font-semibold text-lg">
                Síguenos
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-x-4">
                <Link href="">
                  <FaInstagram className="text-3xl duration-300 hover:text-secondary-color" />
                </Link>
                <Link href="">
                  <FaFacebook className="text-3xl duration-300 hover:text-secondary-color" />
                </Link>
                <Link href="">
                  <FaTiktok className="text-3xl duration-300 hover:text-secondary-color" />
                </Link>
                <Link href="">
                  <FaYoutube className="text-3xl duration-300 hover:text-secondary-color" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="font-semibold text-lg">
                Métodos de Pago
              </h2>
              <div className="relative w-full h-[30px] text-center lg:text-left">
                <Image
                  fill
                  src={footerInfo.paymentMethodsImage}
                  alt="Payment Methods"
                  className="
                    object-contain
                    object-center
                    lg:object-left
                  "
                />
              </div>
            </div>
          </div>
          {/* Genre */}
          <div className="flex flex-col gap-y-4 text-gray-300">
            <h2 className="font-semibold text-lg">
              {footerInfo.genreLink.title}
            </h2>
            <ul className="flex flex-col gap-y-2">
              {footerInfo.genreLink.links.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClickLink(item.href)}
                    className="
                    font-light
                    text-base
                    duration-300
                    hover:text-secondary-color
                    underline-offset-4
                    underline
                  "
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Styles */}
          <div className="flex flex-col gap-y-4 text-gray-300">
            <h2 className="font-semibold text-lg">
              {footerInfo.stylesLink.title}
            </h2>
            <ul className="flex flex-col gap-y-2">
              {footerInfo.stylesLink.links.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClickLink(item.href)}
                    className="
                    font-light
                    text-base
                    duration-300
                    hover:text-secondary-color
                    underline-offset-4
                    underline
                  "
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-zinc-800">
        <div className="flex justify-center py-4">
          <span className="text-sm font-light text-zinc-500">
            © 2023 Nomada. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </div>
  );
}
