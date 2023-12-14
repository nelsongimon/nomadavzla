"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import AgencyCard from "./AgencyCard";
import { states } from "@/zoom";
import clsx from "clsx";
import { Agency } from "@/types";

export default function ZoomSelectAgency() {

  const [selectedState, setSelectedState] = useState(-1);
  const [agencies, setAgencies] = useState<Record<string, any>>([]);

  useEffect(() => {
    if (selectedState < 0) return;
    setAgencies(states[selectedState].agencies);
  }, [selectedState]);

  return (
    <div className="flex flex-col gap-y-7 mt-8 mb-10">
      <h3 className="text-center font-semibold text-xl text-primary-color">
        Encuentra tu oficina Zoom más cercana
      </h3>
      <div className="flex flex-col gap-y-5">
        {/* States */}
        <Select onValueChange={(value) => setSelectedState(Number(value))}>
          <SelectTrigger className="w-full text-base">
            <SelectValue placeholder="Seleccione un estado..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-base">Estados:</SelectLabel>
              {states.map((state: Record<string, any>, index: number) => (
                <SelectItem key={index} className="text-base" value={String(index)}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {agencies.length > 0 && (
          <div className={clsx(`flex flex-col gap-y-5 mt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 px-4`,
            agencies.length === 1 && "h-[130px]",
            agencies.length === 2 && "h-[260px]",
            agencies.length === 3 && "h-[390px]",
            agencies.length > 4 && "h-[520px]",

          )}>
            {agencies.map((agency: Agency, index: number) => (
              <AgencyCard key={agency.id} agency={{ ...agency, company: "grupo zoom" }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
