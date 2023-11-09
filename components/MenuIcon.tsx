"use client";

import { useState } from "react";
import MobileMenuItems from "./MobileMenuItems";
import { motion } from "framer-motion";

const variantLineOne = {
  open: { rotate: 45, y: "7px", x: "0px" },
  closed: { rotate: 0, y: 0 },
}

const variantLineTwo = {
  open: { opacity: 0, x: "-10%" },
  closed: { opacity: 1, x: 0 },
}

const variantLineThree = {
  open: { rotate: -45, y: "-7px", x: "0px" },
  closed: { rotate: 0, y: 0 },
}

export default function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prevValue => !prevValue);
  }
  return (
    <>
      <div className="h-full flex items-center justify-center mx-2">
        <div onClick={handleOpen} className="flex flex-col justify-between w-6 h-4 cursor-pointer outline-none">
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={variantLineOne}
            className="bg-black w-full h-0.5"
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={variantLineTwo}
            className="bg-black w-full h-0.5"
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={variantLineThree}
            className="bg-black w-full h-0.5"
          />
        </div>
      </div>
      <MobileMenuItems isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} />
    </>

  );
}
