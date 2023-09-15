import { History } from "lucide-react"

export default function ServiceFeatures() {
  return (
    <div className="w-full bg-gray-color py-7">
      <div className="grid grid-cols-3 max-w-3xl w-full mx-auto">
        <div className="flex gap-x-2 justify-center items-center border-r border-r-strong-color">
          <History size={25} className="stroke-[1.5] text-strong-color" />
          <span className="text-gray-strong-color text-base">
            14-Day Free Returns
          </span>
        </div>
        <div className="flex gap-x-2 justify-center items-center border-r border-r-strong-color">
          <History size={25} className="stroke-[1.5] text-strong-color" />
          <span className="text-gray-strong-color text-base">
            14-Day Free Returns
          </span>
        </div>
        <div className="flex gap-x-2 justify-center items-center">
          <History size={25} className="stroke-[1.5] text-strong-color" />
          <span className="text-gray-strong-color text-base">
            14-Day Free Returns
          </span>
        </div>
      </div>

    </div>
  );
}
