import AppliedFilters from "@/components/AppliedFilters";
import ProductList from "@/components/product/ProductList";
import { getProducts } from "@/actions/getProducts";
import Container from "@/components/ui/Container";
import Filter from "@/components/Filter";
import Newsletter from "@/components/ui/Newsletter";
import { getFilter } from "@/actions/getFilter";
import FAQAccordion from "@/components/FAQAccordion";
import FilterMobileButton from "@/components/FilterMobileButton";
import useFilterSidebar from "@/hooks/useFilterSidebar";

export const revalidate = 0;

export default async function ProductsPage({
  params,
  searchParams
}: {
  params: { slug: string },
  searchParams: { [key: string]: string }
}) {
  const products = await getProducts(searchParams);
  const attributes = await getFilter(searchParams);

  return (
    <>
      <Container>
        <div className="mt-7 lg:mt-9">
          <h2 className="text-2xl lg:text-4xl text-primary-color font-bold">
            Encuentra tus lentes favoritos
          </h2>
        </div>
        <div className="block lg:hidden">
          <FilterMobileButton />
        </div>
        <div className="my-4">
          <AppliedFilters />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12">
          <div className="hidden lg:block col-span-3 pr-7">
            <Filter
              attributes={attributes}
            />
          </div>
          <div className="col-span-9">
            <ProductList
              products={products}
              className="grid gap-x-4 gap-y-8 lg:gap-x-10 lg:gap-y-20 grid-cols-2 lg:grid-cols-3"
            />
            <FAQAccordion />
          </div>
        </div>
      </Container>
      <Newsletter />
    </>

  );
}
