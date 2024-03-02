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
import { states } from "@/mrw";
import clsx from "clsx";
import { Agency } from "@/types";

export default function MrwSelectAgency() {

  const [selectedState, setSelectedState] = useState(-1);
  const [agencies, setAgencies] = useState<Record<string, any>>([]);

  useEffect(() => {
    if (selectedState < 0) return;
    setAgencies(states[selectedState].agencies);
  }, [selectedState]);

  return (
    <div className="flex flex-col gap-y-7 mt-8 mb-10">
      <h3 className="text-center font-semibold text-xl text-primary-color">
        Encuentra tu oficina MRW más cercana
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
                  {state.name} {state.agencies.length === 1 ? (
                    <span className="text-[10px] text-gray-500 ml-1">
                      ({state.agencies.length} Agencia disponible)
                    </span>
                  ) : (
                    <span className="text-[10px] text-gray-500 ml-1">
                      ({state.agencies.length} Agencias disponible)
                    </span>
                  )}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {agencies.length > 0 && (
          <div className={clsx(
            `flex flex-col gap-y-5 mt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-color  scrollbar-track-transparent px-4`,
            agencies.length > 4 && "h-[600px]",
          )}>
            {agencies.map((agency: Agency) => (
              <AgencyCard key={agency.id} agency={{ ...agency, state: states[selectedState].name, company: "MRW" }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
