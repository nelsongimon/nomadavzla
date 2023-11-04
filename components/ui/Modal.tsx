"use client";

import { Transition, Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";

import IconButton from "./IconButton";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  open,
  onClose,
  children
}: ModalProps) {
  return (
    <Transition show={open} appear as={Fragment} leave="duration-200">
      <Dialog
        as="div"
        className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center justify-center z-50 transform transition-all"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-black/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel className="w-full max-w-4xl overflow-hidden rounded-lg text-left align-middle">
            <div className="relative flex w-full items-center overflow-hidden bg-gray-color px-4 pb-8 pt-14 shadow-2xl sm:pt-8 md:p-6 lg:p-8">
              <div className="absolute right-4 top-4">
                <IconButton onClick={onClose} icon={<X size={15} />} />
              </div>
              {children}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog >
    </Transition >
  );
}
