
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  buildTime: string;
  sprintTime: string;
  isPopular?: boolean;
}

export const PricingCard = ({
  title,
  price,
  buildTime,
  sprintTime,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-8 rounded-2xl backdrop-blur-sm ${
        isPopular
          ? "bg-white/90 shadow-lg border-2 border-primary scale-105"
          : "bg-white/80 border border-gray-200"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center text-gray-700">
          <Check className="w-5 h-5 text-primary mr-2" />
          MVP built in {buildTime}
        </li>
        <li className="flex items-center text-gray-700">
          <Check className="w-5 h-5 text-primary mr-2" />
          {sprintTime} sprints after launch
        </li>
        <li className="flex items-center text-gray-700">
          <Check className="w-5 h-5 text-primary mr-2" />
          Full stack development
        </li>
        <li className="flex items-center text-gray-700">
          <Check className="w-5 h-5 text-primary mr-2" />
          Tech stack selection
        </li>
        <li className="flex items-center text-gray-700">
          <Check className="w-5 h-5 text-primary mr-2" />
          Hosting included
        </li>
      </ul>
      <a
        href="https://app.youform.com/forms/7wz0fofp"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block w-full py-3 px-6 rounded-lg transition-all duration-200 text-center ${
          isPopular
            ? "bg-primary hover:bg-primary-hover text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
        }`}
      >
        Get Started
      </a>
    </motion.div>
  );
};
