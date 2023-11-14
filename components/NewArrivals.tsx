import NewProducts from "./product/NewProducts";
import { getNewProducts } from "@/actions/getNewProducts";

export default async function NewArrivals() {

  const newProducts = await getNewProducts();

  return (
    <div className="flex flex-col gap-y-3 mt-20 mb-20">
      <div className="flex flex-col gap-y-0 mb-6">
        <h3 className="text-lg text-center font-bold text-gray-strong-color uppercase">
          Descubre Nuestros
        </h3>
        <h3 className="text-strong-color font-bold text-5xl lg:text-4xl text-center">
          Nuevos Modelos
        </h3>
      </div>
      <NewProducts products={newProducts} />
    </div>
  );
}
