import { getCategories } from "@/actions/getCategories";
import { getStyleProducts } from "@/actions/getStyleProducts";
import AppliedFilters from "@/components/AppliedFilters";
import Filter from "@/components/Filter";
import ProductList from "@/components/product/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

export default async function StylePage({
  params,
  searchParams
}: {
  params: { style: string },
  searchParams: { [key: string]: string }
}) {
  const products = await getStyleProducts(params.style, searchParams);
  const categories = await getCategories();

  return (
    <Container>
      <div className="mt-9">
        <h2 className="text-4xl text-primary-color font-bold">
          Estilo {params.style}
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
        </div>
      </div>
    </Container>
  );
}
