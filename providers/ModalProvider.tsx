"use client";

import FavoriteSidebar from "@/components/FavoriteSidebar";
import MobileSidebarFilter from "@/components/MobileSidebarFilter";
import MobileSidebarMenu from "@/components/MobileSidebarFilter";
import ImageModal from "@/components/ui/ImageModal";
import PreviewModal from "@/components/ui/PreviewModal";
import { useState, useEffect } from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
      <MobileSidebarFilter />
      <FavoriteSidebar />
      <ImageModal />
    </>
  );
}
