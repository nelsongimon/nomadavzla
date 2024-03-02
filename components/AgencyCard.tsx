"use client";

import useSelectedAgency from "@/hooks/useSelectedAgency";
import { Agency } from "@/types";
import { MapPin } from "lucide-react";

interface AgencyCardProps {
  agency: Agency
}
export default function AgencyCard({
  agency
}: AgencyCardProps) {
  const selectedAgency = useSelectedAgency(state => state.selectedAgency);
  const setSelectedAgency = useSelectedAgency(state => state.setSelectedAgency);

  if (selectedAgency?.id === agency.id) {
    return (
      <div className="flex flex-col gap-y-2 py-3 px-4 border-2 border-secondary-color bg-light-color rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <MapPin size={18} className="text-secondary-color stroke-[1.5]" />
            <h3 className="text-base font-semibold text-secondary-color">
              {agency.city}
            </h3>
          </div>
          <h3 className="text-base font-semibold text-secondary-color uppercase">
            {agency.company}
          </h3>
        </div>
        <p className="text-sm text-secondary-color font-semibold">
          {agency.name}
        </p>
        <p className="text-sm text-secondary-color">
          <span className="font-semibold">Dirección:</span> {agency.address}
        </p>
        <p className="text-sm text-secondary-color">
          <span className="font-semibold">Código:</span> {agency.code}
        </p>
      </div>
    );
  }

  return (
    <div
      onClick={() => setSelectedAgency(agency as Agency)}
      className="flex flex-col gap-y-2 py-3 px-4 border-2 border-primary-color cursor-pointer rounded-md duration-300 hover:bg-gray-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <MapPin size={18} className="text-primary-color stroke-[1.5]" />
          <h3 className="text-base font-semibold text-primary-color">
            {agency.city}
          </h3>
        </div>
        <h3 className="text-base font-semibold text-primary-color uppercase">
          {agency.company}
        </h3>
      </div>
      <p className="text-sm text-gray-500 font-semibold">
        {agency.name}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Dirección:</span> {agency.address}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Código:</span> {agency.code}
      </p>
    </div>
  );
}
