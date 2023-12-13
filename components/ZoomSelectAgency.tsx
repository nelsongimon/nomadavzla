"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";
import axios from "axios";
import { convertToCapitalizeFirstWord } from "@/lib/utils";
import AgencyCard from "./AgencyCard";

export default function ZoomSelectAgency() {

  const [state, setState] = useState([]);
  const [agencies, setAgencies] = useState([]);
  const [selectedState, setSelectedState] = useState(0);

  const handleSelectStare = (value: any) => {
    setSelectedState(value);
  }

  useEffect(() => {
    axios.get("/api/zoom/states")
      .then(res => {
        setState(res.data.states);
      });
  }, []);

  useEffect(() => {
    axios.get(`/api/zoom/states/${selectedState}/agencies`)
      .then(res => {
        setAgencies(res.data.agencies);
      });
  }, [selectedState]);

  return (
    <div className="flex flex-col gap-y-7 mt-8 mb-10">
      <h3 className="text-center font-semibold text-xl text-primary-color">
        Encuentra tu oficina Zoom más cercana
      </h3>
      <div className="flex flex-col gap-y-5">
        <Select onValueChange={(value) => handleSelectStare(value)}>
          <SelectTrigger className="w-full text-base">
            <SelectValue placeholder="Seleccione un estado..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-base">Estados:</SelectLabel>
              {state.map((state: Record<string, any>) => (
                <SelectItem key={state.codestado} className="text-base" value={state.codestado}>
                  {convertToCapitalizeFirstWord(state.nombre)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {agencies.length > 0 && (
          <div className="flex flex-col gap-y-5 mt-3 h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 px-4">
            {agencies.map((agency: Record<string, any>) => (
              <AgencyCard key={agency.codoficina} agency={agency} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
