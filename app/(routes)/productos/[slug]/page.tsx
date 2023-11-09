import ProductView from "@/components/product/ProductView";
import { getProduct } from "@/actions/getProduct";
import NoResults from "@/components/ui/NoResults";
import ProductDetails from "@/components/product/ProductDetails";
import ServiceFeatures from "@/components/ui/ServiceFeatures";
import Container from "@/components/ui/Container";
import Newsletter from "@/components/ui/Newsletter";
import RelatedProducts from "@/components/product/RelatedProducts";
import RelatedProductsMobile from "@/components/product/RelatedProductsMobile";

interface IParams {
  slug: string;
}

export default async function ProductPage({ params }: { params: IParams }) {
  const { product, relatedProducts } = await getProduct(params.slug);

  if (!product) {
    return <NoResults />
  }

  return (
    <>
      <ProductView product={product} />
      <div className="mt-14">
        <ProductDetails product={product} />
      </div>
      <Container>
        <div className="my-4 lg:my-16">
          <ServiceFeatures withBorder />
        </div>
        <div className="my-8 lg:my-16">
          <div className="hidden lg:block">
            <RelatedProducts products={relatedProducts} />
          </div>
          <div className="block lg:hidden">
            <RelatedProductsMobile products={relatedProducts} />
          </div>
        </div>
      </Container>
      <Newsletter />
    </>
  );
}
