import { getCategories } from "@/actions/getCategories";
import { getSearchProducts } from "@/actions/getSearchProducts";
import AppliedFilters from "@/components/AppliedFilters";
import Filter from "@/components/Filter";
import SearchInputPage from "@/components/SearchInputPage";
import ProductList from "@/components/product/ProductList";
import Container from "@/components/ui/Container";
import { Play } from "lucide-react";

export default async function SearchPage({
  params,
  searchParams
}: {
  params: { query: string },
  searchParams: { [key: string]: string }
}) {
  const query = params.query;
  const products = await getSearchProducts(query, searchParams);
  const categories = await getCategories();

  return (
    <Container>
      <div className="mt-9">
        <div className="flex justify-center items-center gap-x-7">
          <h3 className="font-semibold text-2xl text-primary-color">
            Buscador:
          </h3>
          <SearchInputPage />
        </div>
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
