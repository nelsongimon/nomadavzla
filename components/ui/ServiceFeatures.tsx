import clsx from "clsx";
import { CreditCard, History, ShieldCheck, Truck } from "lucide-react"

interface ServiceFeaturesProps {
  withBorder?: boolean;
}

export default function ServiceFeatures({
  withBorder = false
}: ServiceFeaturesProps) {
  return (
    <div className={clsx(
      `w-full bg-gray-color py-6 lg:py-7`,
      withBorder && "rounded-lg"
    )}>
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 max-w-3xl w-full mx-auto">
        <div className="flex gap-x-2 justify-center items-center lg:border-r lg:border-r-strong-color">
          <Truck size={28} className="stroke-[1] text-strong-color" />
          <span className="text-gray-strong-color text-base">
            Envio gratis a todo el país
          </span>
        </div>
        <div className="flex gap-x-2 justify-center items-center lg:border-r lg:border-r-strong-color">
          <CreditCard size={27} className="stroke-[1] text-strong-color" />
          <span className="text-gray-strong-color text-base">
            Compra 100% segura
          </span>
        </div>
        <div className="flex gap-x-2 justify-center items-center">
          <ShieldCheck size={27} className="stroke-[1] text-strong-color" />
          <span className="text-gray-strong-color text-base">
            Calidad garantizada
          </span>
        </div>
      </div>

    </div>
  );
}
