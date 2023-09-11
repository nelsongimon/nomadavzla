"use client";

import ProductInfo from "@/components/product/ProductInfo";
import usePreviewModal from "@/hooks/usePreviewModal";
import Gallery from "@/components/product/Gallery";
import Modal from "./Modal";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function PreviewModal() {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);
  const router = useRouter();

  if (!product) {
    return null;
  }

  const onCloseModal = () => {
    router.push(`/productos/${product.slug}`);
    previewModal.onClose();
  }

  return (
    <Modal
      open={previewModal.isOpen}
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-6">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-6">
          <ProductInfo product={product} />
          <div className="mt-7 flex">
            <Button
              size="none"
              variant="link"
              onClick={onCloseModal}
            >
              Ver más detalles
            </Button>
          </div>
        </div>

      </div>
    </Modal>
  );
}
