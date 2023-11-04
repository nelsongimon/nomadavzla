import ProductListFeatured from "@/components/product/ProductListFeatured";
import { getFeaturedProducts } from "@/actions/getFeaturedProducts";
import ServiceFeatures from "@/components/ui/ServiceFeatures";
import Container from "@/components/ui/Container";
import Slides from "@/components/Slides";
import Styles from "@/components/Styles";
import GenreBillboards from "@/components/GenreBillboards";
import Newsletter from "@/components/ui/Newsletter";
import { getStyles } from "@/actions/getStyles";
import { getSlides } from "@/actions/getSlides";

export default async function HomePage() {
  const products = await getFeaturedProducts();
  const styles = await getStyles();
  const slides = await getSlides();

  return (
    <>
      <Slides slides={slides} />
      <ServiceFeatures />
      <Container>
        <GenreBillboards />
        <ProductListFeatured
          products={products}
          className="grid gap-x-10 gap-y-20 grid-cols-4"
        />
        <Styles styles={styles} />
      </Container>
      <Newsletter />
    </>
  )
}
