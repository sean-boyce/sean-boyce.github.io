
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does your MVP development process work?",
    answer:
      "We focus on rapid development of core features that matter most to your business. Instead of lengthy planning phases, we start building immediately and iterate based on your feedback.",
  },
  {
    question: "What's included in the monthly subscription?",
    answer:
      "Your subscription includes full-stack development, tech stack selection, hosting, and ongoing development sprints. We handle all technical aspects so you can focus on your business.",
  },
  {
    question: "Can I switch between different pricing tiers?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time to match your development needs and budget constraints.",
  },
  {
    question: "Do you handle both frontend and backend development?",
    answer:
      "Absolutely. As a full-service development shop, we handle everything from user interfaces to server architecture and database design.",
  },
];

export const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};
