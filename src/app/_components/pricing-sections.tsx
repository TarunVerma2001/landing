"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: 99,
    features: ["1 project", "10 revisions", "Basic support", "1 week delivery"],
  },
  {
    name: "Pro",
    price: 199,
    features: [
      "3 projects",
      "Unlimited revisions",
      "Priority support",
      "3 day delivery",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 399,
    features: [
      "Unlimited projects",
      "Unlimited revisions",
      "24/7 support",
      "1 day delivery",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gray-950 text-gray-100 py-24 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 shadow-2xl transition-all duration-300 relative overflow-hidden ${
                plan.popular ? "lg:scale-105 lg:-mt-4 lg:mb-4 z-10" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-semibold mb-6">{plan.name}</h3>
              <p className="text-6xl font-bold mb-8">
                ${plan.price}
                <span className="text-2xl font-normal">/mo</span>
              </p>
              <ul className="mb-10 space-y-5">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + idx * 0.1,
                    }}
                  >
                    <Check className="text-green-400 flex-shrink-0" size={24} />
                    <span className="text-xl">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                whileHover={{
                  boxShadow: "0 0 20px rgba(138, 43, 226, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
