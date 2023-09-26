"use client";

import { useRouter } from "next/navigation";
import ProductCard from "../ui/ProductCard";
import { Product } from "@/types";
import useCurrentPage from "@/hooks/useCurrentPage";
import Button from "../ui/Button";

interface ProductListFeaturedProps {
  products: Product[];
  className: string;
}

export default function ProductListFeatured({
  products,
  className
}: ProductListFeaturedProps) {
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);

  const handleClickLink = (href: string) => {
    updatePage(1);
    router.push(href);
  }

  return (
    <div className="py-20">
      <div className="mb-8">
        <h3 className="text-strong-color font-bold text-4xl text-center">
          Every Vision of You
        </h3>
      </div>
      <div className={className}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button
          onClick={() => handleClickLink("/productos")}
          size="large"
          variant="secondary"
        >
          Ir a la tienda
        </Button>
      </div>
    </div>
  );
}
