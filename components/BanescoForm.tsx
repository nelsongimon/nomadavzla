"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import { Copy, FileEdit, FileImage } from "lucide-react";
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
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { toastStyle } from "@/lib/utils";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";

const formSchema = z.object({
  referenceNumber: z.string({ required_error: "El número de referencia es requerido." }).regex(/^[0-9]+$/, {
    message: "El número de referencia solo puede contener números.",
  }),
  date: z.string({ required_error: "La fecha es requerida." }),
});


export default function BanescoForm() {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState<File>();
  const [invalidImage, setInvalidImage] = useState("");
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referenceNumber: undefined,
      date: undefined,
    },
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (!file.type.startsWith('image/')) {
        setInvalidImage("El archivo no es una imagen");
        return;
      }
      if (file.size > 1000000) {
        setInvalidImage("La imagen excede el tamaño máximo permitido: 1MB");
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
    setCurrentStep(4);

  }

  const handleCopy = (copy: string, message: string) => {
    navigator.clipboard.writeText(copy);
    toast.success(message, toastStyle);
  }

  useEffect(() => {
    const component = document.getElementById("banesco");
    const posicion = screen.width < 768 ? component?.offsetTop! + 255 : component?.offsetTop! + 245;
    window.scrollTo({
      top: posicion,
      behavior: "smooth"
    });
  }, []);

  return (
    <div id="banesco" className="flex flex-col items-center gap-y-5 w-full px-2 lg:px-10 py-0 lg:py-3">
      {/* Image */}
      <div className="relative h-[30px] w-full mb-2">
        <Image fill alt="" src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}images/banescoPanama.png`}
          className="object-contain"
        />
      </div>
      {/* Payment information */}
      <div className="mb-4 bg-gray-color w-full rounded-md py-3 px-2 lg:px-10">
        <h3 className="text-xl text-center font-semibold text-primary-color mb-4">
          Datos para el pago
        </h3>
        <div className="flex flex-col gap-y-4 pb-2">
          <div className="flex gap-x-3">
            <h4 className="text-base font-semibold">
              Nombre:
            </h4>
            <div className="flex gap-x-3 items-center">
              <p className="text-base font-normal">
                Mauro Mayz
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <h4 className="text-base font-semibold">
              Tipo de cuenta:
            </h4>
            <div className="flex gap-x-3 items-center">
              <p className="text-base font-normal">
                Cuenta de ahorro
              </p>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <h4 className="text-base font-semibold">
              Número de cuenta:
            </h4>
            <div className="flex gap-x-3 items-center">
              <p className="text-base font-normal">
                2018 0105 7073
              </p>
              <button
                onClick={() => handleCopy("201801057073", "¡Número de cuenta copiado!")}
              >
                <Copy size={15} className="text-primary-color stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl text-center font-semibold text-primary-color">
        Registra tu pago en Banesco Panamá aquí
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
                    <FormLabel className="text-base">Número de referencia</FormLabel>
                    <FormControl>
                      <Input className="text-base" placeholder="Ejemplo: 1234567" {...field} autoComplete="off" />
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
              {/* Upload Image */}
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
                    <div className="flex flex-col gap-y-2 items-center">
                      <FileImage size={35} className="stroke-[1] text-gray-300" />
                      <h2 className="text-lg font-semibold">
                        Comprobante de pago
                      </h2>
                      <p className="text-sm font-light text-gray-strong-color">
                        Puedes adjuntar una captura de pantalla del pago realizado en formato JPG, JPEG, PNG
                      </p>
                    </div>
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
            <div className="flex justify-end items-center">
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