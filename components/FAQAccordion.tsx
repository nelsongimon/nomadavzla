import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionShadcn";

const items = [
  {
    title: "¿Qué son los lentes 5 en 1?",
    content: "Optical glasses, or prescription glasses, are specifically designed to help people who have vision trouble see better. These frames manipulate light to focus on the retina in the eye, which allows for clearer vision with the appropriate prescriptions. Optical glasses also help in the correction of other vision problems like myopia, hyperopia, and astigmatism."
  },
  {
    title: "¿Cuánto cuestan los lentes?",
    content: "Prices vary greatly based on the kind of frame, lenses, and retailer. Luckily at Eyebuydirect, we offer affordable options for every budget, with frames starting at just $6!"
  },
  {
    title: "Cómo puedo comprar?",
    content: "Eyebuydirect can save you hundreds of dollars when purchasing prescription glasses online. We offer a variety of styles, as well as multiple lens options, at an affordable price — without compromising the quality of your glasses! On top of that, we provide a 365-Day Guarantee and 14-Day Free Returns policy."
  },
  {
    title: "¿Cuánto cuestan los lentes?",
    content: "At Eyebuydirect, we offer frames starting at $6 per pair, while our most popular frames range from $32 to $55. If you’re looking to add prescription lenses, we offer options starting at $20."
  },
  {
    title: "¿Cómo deben quedar los lentes?",
    content: "Take our fun Fit & Style Quiz to find out which styles will best suit you! We'll handpick an exclusive range of frames curated just for you, to help you find your perfect pair."
  }
];
export default function FAQAccordion() {
  return (
    <div className="mt-20 mb-20">
      <h3 className="font-bold text-2xl lg:text-3xl text-primary-color mb-2 lg:mb-4">
        FAQ
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem value={item.title} key={index}>
            <AccordionTrigger className="text-base lg:text-lg font-semibold py-5 lg:py-6" >
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm lg:text-base font-normal text-primary-color">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
