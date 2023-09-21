"use client";

import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  {
    title: "What are optical glasses?",
    content: "Optical glasses, or prescription glasses, are specifically designed to help people who have vision trouble see better. These frames manipulate light to focus on the retina in the eye, which allows for clearer vision with the appropriate prescriptions. Optical glasses also help in the correction of other vision problems like myopia, hyperopia, and astigmatism."
  },
  {
    title: "How much are eyeglasses?",
    content: "Prices vary greatly based on the kind of frame, lenses, and retailer. Luckily at Eyebuydirect, we offer affordable options for every budget, with frames starting at just $6!"
  },
  {
    title: "Where to get eyeglasses",
    content: "Eyebuydirect can save you hundreds of dollars when purchasing prescription glasses online. We offer a variety of styles, as well as multiple lens options, at an affordable price — without compromising the quality of your glasses! On top of that, we provide a 365-Day Guarantee and 14-Day Free Returns policy."
  },
  {
    title: "How much do eyeglasses cost?",
    content: "At Eyebuydirect, we offer frames starting at $6 per pair, while our most popular frames range from $32 to $55. If you’re looking to add prescription lenses, we offer options starting at $20."
  },
  {
    title: "How should eyeglasses fit?",
    content: "Take our fun Fit & Style Quiz to find out which styles will best suit you! We'll handpick an exclusive range of frames curated just for you, to help you find your perfect pair."
  }
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  }

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-20 mb-20 mr-20">
      <h3 className="font-bold text-4xl text-primary-color mb-5">
        FAQ
      </h3>
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-7 overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full"
          >
            <span className={clsx(
              `font-semibold text-lg duration-200`,
              index === activeIndex ? "text-secondary-color" : "text-primary-color"
            )}>
              {item.title}
            </span>
            <motion.span
              initial={{ rotate: 0 }}
              animate={index === activeIndex ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              variants={variants}
            >
              <ChevronDown size={25} className="stroke-[1.5] text-primary-color" />
            </motion.span>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base font-normal text-primary-color mt-5">
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))
      }
    </div >
  );


}
