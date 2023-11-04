import ProductView from "@/components/product/ProductView";
import { getProduct } from "@/actions/getProduct";
import NoResults from "@/components/ui/NoResults";
import ProductDetails from "@/components/product/ProductDetails";
import ServiceFeatures from "@/components/ui/ServiceFeatures";
import Container from "@/components/ui/Container";
import Newsletter from "@/components/ui/Newsletter";
import { getFeaturedProducts } from "@/actions/getFeaturedProducts";
import RelatedProducts from "@/components/product/RelatedProducts";
import { getRelatedProducts } from "@/actions/getRelatedProducts";

interface IParams {
  slug: string;
}

export default async function ProductPage({ params }: { params: IParams }) {
  const { product, relatedProducts } = await getProduct(params.slug);

  if (!product) {
    return <NoResults />
  }

  // const products = await getRelatedProducts(product.related_ids);

  return (
    <>
      <ProductView product={product} />
      <div className="mt-14">
        <ProductDetails product={product} />
      </div>
      <Container>
        <div className="my-16">
          <ServiceFeatures withBorder />
        </div>
        <div className="my-16">
          <RelatedProducts products={relatedProducts} />
        </div>
      </Container>
      <Newsletter />
    </>
  );
}
