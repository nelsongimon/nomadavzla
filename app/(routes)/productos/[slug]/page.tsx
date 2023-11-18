import ProductView from "@/components/product/ProductView";
import { getProduct } from "@/actions/getProduct";
import ProductDetails from "@/components/product/ProductDetails";
import ServiceFeatures from "@/components/ui/ServiceFeatures";
import Container from "@/components/ui/Container";
import Newsletter from "@/components/ui/Newsletter";
import RelatedProducts from "@/components/product/RelatedProducts";
import RelatedProductsMobile from "@/components/product/RelatedProductsMobile";
import NotFound from "@/components/ui/NotFound";

export const revalidate = 0;

export async function generateMetadata(
  { params }: { params: IParams }
) {
  const { product } = await getProduct(params.slug);
  return {
    title: product.name + " | Nomada ®",
    description: product?.description,
  }
}

interface IParams {
  slug: string;
}

export default async function ProductPage({ params }: { params: IParams }) {
  const { product, relatedProducts } = await getProduct(params.slug);

  if (!product) {
    return <NotFound />
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
