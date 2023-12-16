import CheckoutClient from "@/components/CheckoutClient";
import Container from "@/components/ui/Container";

export const revalidate = 0;

export default function CheckoutPage() {
  return (
    <div className="mt-10 xl:mt-14 mb-32">
      <CheckoutClient />
    </div>
  );
}
