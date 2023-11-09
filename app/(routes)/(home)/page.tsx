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
import FiveInOneGlassesSection from "@/components/FiveInOneGlassesSection";
import LoadingLogo from "@/components/ui/LoadingLogo";
import SlidesMobile from "@/components/SlidesMobile";
import StylesMobile from "@/components/StylesMobile";


export default async function HomePage() {
  const products = await getFeaturedProducts();
  const styles = await getStyles();
  const slides = await getSlides();

  return (
    <>
      <div className="hidden lg:block">
        <Slides slides={slides} />
      </div>
      <div className="block lg:hidden">
        <SlidesMobile slides={slides} />
      </div>
      <ServiceFeatures />
      <Container>
        <GenreBillboards />
        <ProductListFeatured
          products={products}
          className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-20"
        />
        <FiveInOneGlassesSection />
        <div className="hidden lg:block">
          <Styles styles={styles} />
        </div>
        <div className="block lg:hidden">
          <StylesMobile styles={styles} />
        </div>
      </Container>
      <Newsletter />
    </>
  )
}
