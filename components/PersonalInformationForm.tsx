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
import { Input } from "@/components/ui/Input";
import Button from "./ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import { motion } from "framer-motion";
import { useEffect } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Tu nombre debe contener al menos 2 caracteres.",
  }),
  lastName: z.string().min(2, {
    message: "Tu apellido debe contener al menos 2 caracteres.",
  }),
});
export default function PersonalInformationForm() {
  const router = useRouter();
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-x-3">
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
