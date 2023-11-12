import { getFilterWithSearch } from "@/actions/getFilterWithSearch";
import { getSearchProducts } from "@/actions/getSearchProducts";
import AppliedFilters from "@/components/AppliedFilters";
import FAQAccordion from "@/components/FAQAccordion";
import Filter from "@/components/Filter";
import FilterMobileButton from "@/components/FilterMobileButton";
import SearchInputPage from "@/components/SearchInputPage";
import ProductList from "@/components/product/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

export default async function SearchPage({
  params,
  searchParams
}: {
  params: { query: string },
  searchParams: { [key: string]: string }
}) {
  const query = params.query;
  const products = await getSearchProducts(query, searchParams);
  const attributes = await getFilterWithSearch(query, searchParams);

  return (
    <Container>
      <div className="mt-7 lg:mt-9">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-center items-center gap-x-7">
          <h3 className="font-semibold text-2xl text-primary-color">
            Buscador:
          </h3>
          <SearchInputPage />
        </div>
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
  );
}
