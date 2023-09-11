import { getFeaturedProducts } from "@/actions/getFeaturedProducts";
import Container from "@/components/ui/Container";
import Sliders from "@/components/Sliders";
import ProductListFeatured from "@/components/product/ProductListFeatured";

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <Container>
      <Sliders />
      <ProductListFeatured
        products={products}
        className="grid gap-x-10 gap-y-20 grid-cols-4"
      />
    </Container>
  )
}
