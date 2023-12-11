"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useZoomShipping from "@/hooks/useZoomShipping";

type companyOptions = "zoom" | "mrw";

interface ShippingCompanyFormProps {
  company: companyOptions;
}

export default function ShippingCompanyForm({
  company
}: ShippingCompanyFormProps) {
  const states = useZoomShipping();
  console.log(states);
  console.log("version 1");
  return (
    <div className="flex flex-col gap-y-7 mt-8 mb-3">
      <h3 className="text-center font-semibold text-xl text-primary-color">
        Ecuentra tu oficina Zoom más cercana
      </h3>
      <div className="flex flex-col gap-y-5">
        <Select>
          <SelectTrigger className="w-full text-base">
            <SelectValue placeholder="Seleccione un estado..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-base">Estados:</SelectLabel>
              <SelectItem className="text-base" value="apple">Monagas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full text-base">
            <SelectValue placeholder="Seleccione una ciudad..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-base">Ciudades:</SelectLabel>
              <SelectItem className="text-base" value="apple">Maturin</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full text-base">
            <SelectValue placeholder="Seleccione una oficina..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-base">Oficinas:</SelectLabel>
              <SelectItem className="text-base" value="apple">Maturin</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

      </div>
    </div>
  );
}
