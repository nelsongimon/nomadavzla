import ShoppingCartProducts from "@/components/product/ShoppingCartProducts";
import Container from "@/components/ui/Container";

export default function CartPage() {
  return (
    <div className="mt-14 mb-32">
      <Container>
        <div className="w-full flex flex-col gap-y-1 mb-10">
          <h3 className="text-strong-color font-bold text-3xl lg:text-4xl text-center">
            Carrito de Compras
          </h3>
          <p className="text-gray-strong-color text-base lg:text-lg text-center font-light">
            Lista de productos en el carrito de compras
          </p>
        </div>
        <ShoppingCartProducts />
      </Container>
    </div>
  );
}
