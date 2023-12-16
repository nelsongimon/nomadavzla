"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import Button from "./ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Checkbox } from "./ui/checkbox";
import usePersonalInformation from "@/hooks/usePersonalInformation";
import { PersonalInformation } from "@/types";

const formSchema = z.object({
  firstName: z.string({ required_error: "El campo nombre es requerido." }).regex(/^[a-zA-Z]+$/, {
    message: "El campo nombre solo puede contener letras.",
  }).min(2, {
    message: "El campo nombre debe contener al menos 2 caracteres."
  }),

  lastName: z.string({ required_error: "El campo apellido es requerido." }).regex(/^[a-zA-Z]+$/, {
    message: "El campo apellido solo puede contener letras.",
  }).min(2, {
    message: "El campo apellido debe contener al menos 2 caracteres."
  }),

  dni: z.string({ required_error: "El campo cédula de identidad es requerido." }).regex(/^[0-9]+$/, {
    message: "El campo cédula de identidad solo puede contener números.",
  }),

  email: z.string({ required_error: "El campo correo electrónico es requerido." }).email({
    message: "El campo correo electrónico debe tener un formato válido.",
  }),

  phoneNumber: z.string({ required_error: "El campo número de teléfono es requerido." }).regex(/^[0-9]+$/, {
    message: "El campo número de teléfono solo puede contener números.",
  }),

  isSubscribe: z.boolean().default(false).optional(),
});
export default function PersonalInformationForm() {
  const router = useRouter();
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);
  const setPersonalInformation = usePersonalInformation(state => state.setPersonalInformation);
  const personalInformation = usePersonalInformation(state => state.personalInformation);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: personalInformation ? personalInformation.firstName : undefined,
      lastName: personalInformation ? personalInformation.lastName : undefined,
      dni: personalInformation ? personalInformation.dni : undefined,
      email: personalInformation ? personalInformation.email : undefined,
      phoneNumber: personalInformation ? personalInformation.phoneNumber : undefined,
      isSubscribe: personalInformation ? personalInformation.isSubscribe : false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setPersonalInformation(values as PersonalInformation);
    setCurrentStep(2);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-y-10 mt-3"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0px", opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div className="flex flex-col lg:gap-y-7 px-2 lg:px-0">
            <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">Nombre</FormLabel>
                    <FormControl>
                      <Input className="text-base" placeholder="Escribe tu nombre" {...field} autoComplete="off" />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">Apellido</FormLabel>
                    <FormControl>
                      <Input className="text-base" placeholder="Escribe tu apellido" {...field} autoComplete="off" />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-5 mt-4 lg:mt-0">
              <FormField
                control={form.control}
                name="dni"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">Cédula de identidad</FormLabel>
                    <FormControl>
                      <Input className="text-base" placeholder="Escribe tu número de cédula de identidad" {...field} autoComplete="off" />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">Correo electrónico</FormLabel>
                    <FormControl>
                      <Input className="text-base" placeholder="Escribe tu correo electrónico" {...field} autoComplete="off" />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-5 items-end mt-4 lg:mt-0">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">Número de teléfono</FormLabel>
                    <FormControl>
                      <Input className="text-base" placeholder="Escribe tu número de teléfono" {...field} autoComplete="off" />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isSubscribe"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-base">
                        Subscribirse a nuestra newsletter
                      </FormLabel>
                      <FormDescription className="text-sm font-light">
                        Deseo recibir notificaciones sobre promociones y descuentos.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="default"
              onClick={() => router.push("/carrito")}
              className="flex gap-x-1 items-center"
              type="button"
            >
              <ChevronLeft size={20} className="stroke-[1.5]" />
              Volver al carrito
            </Button>
            <Button
              variant="default"
              size="default"
              onClick={() => { }}
              type="submit"
              className="flex gap-x-1 items-center"
            >
              Siguiente
              <ChevronRight size={20} className="stroke-[1.5]" />
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
