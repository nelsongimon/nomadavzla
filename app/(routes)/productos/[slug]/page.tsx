import ProductView from "@/components/product/ProductView";
import { getProduct } from "@/actions/getProduct";
import NoResults from "@/components/ui/NoResults";
import ProductDetails from "@/components/product/ProductDetails";

interface IParams {
  slug: string;
}

export default async function ProductPage({ params }: { params: IParams }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return <NoResults />
  }

  return (
    <>
      <ProductView product={product} />
      <ProductDetails product={product} />
    </>
  );
}
