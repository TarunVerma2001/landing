"use client";

import { motion } from "framer-motion";
import {
  Code,
  Paintbrush,
  Megaphone,
  Globe,
  BarChart,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications tailored to your needs.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing designs for optimal user experience.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Boost your online presence and reach your target audience effectively.",
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic.",
  },
  {
    icon: BarChart,
    title: "Data Analysis",
    description:
      "Turn your data into actionable insights for informed decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our advanced security solutions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg bg-gray-900 p-6 shadow-lg"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500" />
              <service.icon className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
