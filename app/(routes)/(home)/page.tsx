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
import SlidesMobile from "@/components/SlidesMobile";
import StylesMobile from "@/components/StylesMobile";
import NewArrivals from "@/components/NewArrivals";

export const revalidate = 0;
export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
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
        {/* <NewArrivals /> */}
        <GenreBillboards />
        <ProductListFeatured
          products={featuredProducts}
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
