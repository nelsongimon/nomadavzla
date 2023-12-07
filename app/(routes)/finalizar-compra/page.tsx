import CheckoutProcess from "@/components/CheckoutProcess";
import Invoice from "@/components/Invoice";
import ShoppingCartProducts from "@/components/product/ShoppingCartProducts";
import Container from "@/components/ui/Container";

export default function CheckoutPage() {
  return (
    <div className="mt-14 mb-32">
      <Container>
        <div className="w-full flex flex-col gap-y-1 mb-10">
          <h3 className="text-strong-color font-bold text-3xl lg:text-4xl text-center">
            Finalizar Compra
          </h3>
          <p className="text-gray-strong-color text-base lg:text-lg text-center font-light">
            Text here
          </p>
        </div>
        <div className="grid grid-cols-12 gap-x-10">
          <div className="col-span-7">
            <CheckoutProcess />
          </div>
          <div className="col-span-5">
            <Invoice />
          </div>
        </div>
      </Container>
    </div>
  );
}
