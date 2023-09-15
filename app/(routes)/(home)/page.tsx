import ProductListFeatured from "@/components/product/ProductListFeatured";
import { getFeaturedProducts } from "@/actions/getFeaturedProducts";
import Container from "@/components/ui/Container";
import Slides from "@/components/Slides";
import ServiceFeatures from "@/components/ui/ServiceFeatures";

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <>
      <Slides />
      <ServiceFeatures />
      <Container>
        <ProductListFeatured
          products={products}
          className="grid gap-x-10 gap-y-20 grid-cols-4"
        />
      </Container>
    </>
  )
}
