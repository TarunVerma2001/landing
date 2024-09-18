"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechStart",
    content:
      "The quality of work delivered was exceptional. Our project was completed ahead of schedule, and the attention to detail was impressive.",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director, GrowthCo",
    content:
      "Working with this freelancer was a game-changer for our marketing campaigns. The results speak for themselves!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content:
      "Incredible creativity and technical skills. They brought our vision to life in ways we hadn't even imagined.",
    rating: 4,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, SwiftApps",
    content:
      "Responsive, professional, and highly skilled. They quickly became an invaluable part of our development process.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO, DataDrive",
    content:
      "Their expertise in data visualization transformed our complex datasets into clear, actionable insights.",
    rating: 5,
  },
  {
    name: "Laura Taylor",
    role: "Creative Director, DesignHub",
    content:
      "A true design virtuoso. They consistently delivered stunning visuals that perfectly captured our brand essence.",
    rating: 4,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 py-20 ">
      <div className=" ">
        <motion.h1
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Quote className="text-purple-400 mb-4 opacity-50" size={32} />
              <p className="text-lg mb-6 italic text-gray-300">
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-purple-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
