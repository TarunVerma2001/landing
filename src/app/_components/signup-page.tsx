"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GridBoxes from "./grid-boxes";
import { useRouter } from "next/navigation";

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gray-800 rounded-lg opacity-20"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
          }}
        />
      ))}
    </div>
  );
};

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
    experience: "",
    portfolioUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      nextStep();
    } else {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "An error occurred during signup");
        } else {
          nextStep(); // Move to success step
        }
      } catch (error) {
        console.error(error);
        setError("An error occurred during signup");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 overflow-hidden">
      <AnimatedBackground />

      {/* Add login button to the top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 left-4 z-20 flex items-center space-x-4"
      >
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/ddd.svg"
              alt="Chnova Logo"
              width={40}
              height={40}
              className="rounded-full bg-white p-1"
            />
            <span className="text-xl font-bold text-white">Chnova</span>
          </div>
        </Link>
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-xl p-8 w-full max-w-md relative z-10 shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Join the Revolution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 text-center mb-8"
          >
            Where innovation meets opportunity. Let's create something
            extraordinary.
          </motion.p>

          {step === 1 && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-4"
            >
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-4"
            >
              <Input
                type="text"
                name="skills"
                placeholder="Your Skills (e.g., Web Design, SEO, Content Writing)"
                value={formData.skills}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
              <Input
                type="text"
                name="experience"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
              <Input
                type="url"
                name="portfolioUrl"
                placeholder="Portfolio URL (optional)"
                value={formData.portfolioUrl}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
              >
                Complete Signup
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center space-y-4"
            >
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="text-2xl font-bold text-gray-100">
                Welcome Aboard!
              </h2>
              <p className="text-gray-400">
                Your account has been created successfully. Get ready to
                revolutionize your freelancing career!
              </p>
              <Button
                onClick={() => router.push("/dashboard")}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
              >
                Go to Dashboard
              </Button>
            </motion.div>
          )}

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Already have an account? Log in
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Sparkles className="inline-block text-yellow-500 mr-2" />
            <span className="text-gray-300 font-semibold">
              Join our community of visionaries
            </span>
          </motion.div>
        </motion.div>
      </div>
      <GridBoxes />
    </div>
  );
}
