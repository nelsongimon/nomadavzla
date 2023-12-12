"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import { FileEdit } from "lucide-react";
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
import { ChangeEvent, useState } from "react";
import Image from "next/image";

const formSchema = z.object({
  referenceNumber: z.string({ required_error: "El ID de la orden es requerido." }).regex(/^[0-9]+$/, {
    message: "El ID de la orden solo puede contener números.",
  }),
  email: z.string({ required_error: "El correo electrónico es requerido." }).email({
    message: "El correo electrónico debe tener un formato válido.",
  }),
  date: z.string({ required_error: "La fecha es requerida." }),
});

interface BinanceFormProps {
  onClose: (value: boolean) => void;
}

export default function BinanceForm({
  onClose
}: BinanceFormProps) {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState<File>();
  const [invalidImage, setInvalidImage] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referenceNumber: undefined,
      email: undefined,
      date: undefined,
    },
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("image");
    if (event.target.files) {
      const file = event.target.files[0];
      if (!file.type.startsWith('image/')) {
        setInvalidImage('El archivo no es una imagen');
        return;
      }
      if (file.size > 1000000) {
        setInvalidImage('La imagen excede el tamaño máximo permitido: 1MB');
        return;
      }
      const reader = new FileReader();
      setImage(file);
      setInvalidImage("");
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      }
      reader.readAsDataURL(file);
    }
  }

  const deleteImage = () => {
    setImage(undefined);
    setImagePreview("")
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!image) {
      setInvalidImage('La imagen es requerida.');
      return;
    }
    if (!image.type.startsWith('image/')) {
      setInvalidImage('El archivo no es una imagen');
      return;
    }
    if (image.size > 1000000) {
      setInvalidImage('La imagen excede el tamaño máximo permitido: 1MB');
      return;
    }
    console.log("Form submitted:", values);

  }

  return (
    <div className="flex flex-col items-center gap-y-5 w-full px-10 py-3">
      <h3 className="text-xl text-center font-semibold text-primary-color">
        Registra tu pago en Binance aquí
      </h3>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <div className="flex flex-col gap-y-5">
              <FormField
                control={form.control}
                name="referenceNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">ID de la orden</FormLabel>
                    <FormControl>
                      <Input className="text-base" placeholder="Ejemplo: 1234567" {...field} autoComplete="off" />
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
                      <Input className="text-base" placeholder="ejemplo@dominio.com" {...field} autoComplete="off" />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">Fecha</FormLabel>
                    <FormControl>
                      <Input className="text-base" type="date" {...field} autoComplete="off" />
                    </FormControl>
                    <FormMessage className="font-light" />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-y-2 mt-4">
                <label htmlFor="image" className="
                    cursor-pointer
                    text-primary-color
                    border-2
                    border-gray-200
                    border-dashed
                    font-semibold
                    text-lg 
                    py-4
                    px-4 
                    rounded
                    flex
                    items-center
                    justify-center
                    ">
                  {imagePreview ? (
                    <div className="flex flex-col gap-y-1 items-center">
                      <div className="w-[150px] h-[200px] rounded-md overflow-hidden relative">
                        <Image
                          src={imagePreview}
                          height={150}
                          width={100}
                          alt="Preview"
                          className="
                              object-cover
                              object-center
                              w-full
                              h-full
                            "
                        />
                        <Button
                          size="small"
                          variant="default"
                          onClick={deleteImage}
                          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 font-normal text-sm py-1 px-2 rounded-full"
                        >
                          <FileEdit size={15} /> Modificar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <span>Subir captura</span>
                  )
                  }
                </label>
                <input id="image" type="file" onChange={(e) => handleImageChange(e)} className="hidden" />
                {invalidImage && (
                  <span className="text-red-500 text-sm font-normal">
                    {invalidImage}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                size="default"
                onClick={() => onClose(false)}
                type="button"
              >
                Cerrar formulario
              </Button>
              <Button
                variant="default"
                size="default"
                onClick={() => { }}
                type="submit"
              >
                Registrar pago
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}