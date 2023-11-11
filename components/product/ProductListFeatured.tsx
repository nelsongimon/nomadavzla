"use client";

import ProductCard from "../ui/ProductCard";
import { Product } from "@/types";
import useCurrentPage from "@/hooks/useCurrentPage";
import Button from "../ui/Button";
import Link from "next/link";

interface ProductListFeaturedProps {
  products: Product[];
  className: string;
}

export default function ProductListFeatured({
  products,
  className
}: ProductListFeaturedProps) {
  const updatePage = useCurrentPage(state => state.updatePage);

  const handleClickLink = () => {
    updatePage(1);
  }

  return (
    <div className="py-20">
      <div className="mb-8">
        <h3 className="text-strong-color font-bold text-3xl lg:text-4xl text-center">
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
        <Link href="/productos">
          <Button
            onClick={() => handleClickLink()}
            size="large"
            variant="secondary"
          >
            Ver todos los productos
          </Button>
        </Link>
      </div>
    </div>
  );
}
