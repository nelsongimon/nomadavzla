import { getFilterWithStyle } from "@/actions/getFilterWithStyle";
import { getStyleWithProducts } from "@/actions/getStyleWithProducts";
import AppliedFilters from "@/components/AppliedFilters";
import Filter from "@/components/Filter";
import ProductList from "@/components/product/ProductList";
import Accordion from "@/components/ui/Accordion";
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
        <div className="mt-9 flex flex-col gap-y-1">
          <h2 className="text-4xl text-primary-color font-bold">
            Estilo {style.name}
          </h2>
          <p className="text-lg text-gray-strong-color font-light">
            {style?.description}
          </p>
        </div>
        <div className="my-4">
          <AppliedFilters />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 pr-7">
            <Filter
              attributes={attributes}
            />
          </div>
          <div className="col-span-9">
            <ProductList
              products={style.products}
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
