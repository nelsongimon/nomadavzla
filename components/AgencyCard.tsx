"use client";

interface AgencyCardProps {
  agency: Record<string, any>
}
export default function AgencyCard({
  agency
}: AgencyCardProps) {
  return (
    <div className="flex flex-col gap-y-2 py-3 px-4 border-2 border-primary-color cursor-pointer rounded-md duration-300 hover:bg-gray-50">
      <h3 className="text-base font-semibold text-primary-color">
        {agency.nombre_ciudad}
      </h3>
      <p className="text-sm text-gray-500">
        {agency.nombre}
      </p>
      <p className="text-xs text-gray-500">
        {agency.direccion}
      </p>
    </div>
  );
}
