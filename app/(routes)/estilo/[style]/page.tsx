import { getFilterWithStyle } from "@/actions/getFilterWithStyle";
import { getStyleWithProducts } from "@/actions/getStyleWithProducts";
import AppliedFilters from "@/components/AppliedFilters";
import FAQAccordion from "@/components/FAQAccordion";
import Filter from "@/components/Filter";
import FilterMobileButton from "@/components/FilterMobileButton";
import ProductList from "@/components/product/ProductList";
import Container from "@/components/ui/Container";
import Newsletter from "@/components/ui/Newsletter";
import { Style } from "@/types";

export const revalidate = 0;

export default async function StylePage({
  params,
  searchParams
}: {
  params: { style: string },
  searchParams: { [key: string]: string }
}) {
  const style: Style = await getStyleWithProducts(params.style, searchParams);
  const attributes = await getFilterWithStyle(params.style, searchParams);

  return (
    <>
      <Container>
        <div className="mt-7 lg:mt-9 flex flex-col gap-y-[2px] lg:gap-y-1">
          <h2 className="text-2xl lg:text-4xl text-primary-color font-bold text-center lg:text-left">
            Estilo {style.name}
          </h2>
          <p className="text-base lg:text-lg text-gray-strong-color font-light text-center lg:text-left">
            {style?.description}
          </p>
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
              products={style.products}
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
