import AppliedFilters from "@/components/AppliedFilters";
import { getCategories } from "@/actions/getCategories";
import ProductList from "@/components/product/ProductList";
import { getProducts } from "@/actions/getProducts";
import Container from "@/components/ui/Container";
import Filter from "@/components/Filter";
import Accordion from "@/components/ui/Accordion";
import Newsletter from "@/components/ui/Newsletter";

export const revalidate = 0;

export default async function ProductsPage({
  params,
  searchParams
}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const products = await getProducts(searchParams);
  const categories = await getCategories();

  return (
    <>
      <Container>
        <div className="mt-9">
          <h2 className="text-4xl text-primary-color font-bold">
            Encuentra tus lentes favoritos
          </h2>
        </div>
        <div className="my-4">
          <AppliedFilters />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 pr-7">
            <Filter
              categories={categories}
            />
          </div>
          <div className="col-span-9">
            <ProductList
              products={products}
              className="grid gap-x-10 gap-y-20 grid-cols-3"
            />
            <Accordion />
          </div>
        </div>
      </Container>
      <Newsletter />
    </>

  );
}
