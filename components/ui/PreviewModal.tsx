"use client";

import ProductInfo from "@/components/product/ProductInfo";
import usePreviewModal from "@/hooks/usePreviewModal";
import Gallery from "@/components/product/Gallery";
import Modal from "./Modal";
import Button from "./Button";
import Link from "next/link";



export default function PreviewModal() {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  const onCloseModal = () => {
    // router.push(`/productos/${product.slug}`);
    previewModal.onClose();
  }

  return (
    <Modal
      open={previewModal.isOpen}
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-center gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-7">
          <Gallery previewModal images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-5">
          <ProductInfo previewModal product={product} />
          <div className="mt-7 flex">
            <Link
              href={`/productos/${product.slug}`}
            >
              <Button
                size="none"
                variant="link"
                onClick={onCloseModal}
              >
                Ver más detalles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
