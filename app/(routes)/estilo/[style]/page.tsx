import { getCategories } from "@/actions/getCategories";
import { getStyleProducts } from "@/actions/getStyleProducts";
import AppliedFilters from "@/components/AppliedFilters";
import Filter from "@/components/Filter";
import ProductList from "@/components/product/ProductList";
import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import Newsletter from "@/components/ui/Newsletter";
import { convertToCapitalize } from "@/lib/utils";

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
    <>
      <Container>
        <div className="mt-3">
          <div className="relative flex justify-center w-full items-center">
            <h2 className="text-8xl text-gray-color font-extrabold uppercase tracking-tight">
              Estilo
            </h2>
            <h3 className="absolute text-4xl font-normal text-primary-color uppercase tracking-widest">
              {params.style}
            </h3>
          </div>
        </div>
        <div className="mb-4 mt-0">
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
