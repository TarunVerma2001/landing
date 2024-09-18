"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GridBoxes from "./grid-boxes";

interface AuthPageProps {
  onSubmit: (email: string, password: string, name?: string) => Promise<void>;
  error: string | null;
  isSignup?: boolean;
}

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

export default function AuthPage({
  onSubmit,
  error,
  isSignup = false,
}: AuthPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, isSignup ? name : undefined);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 overflow-hidden">
      <AnimatedBackground />

      {/* Add logo to the top left */}
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
          {isSignup ? "Join the Revolution" : "Welcome Back"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400 text-center mb-8"
        >
          {isSignup
            ? "Where innovation meets opportunity. Let's create something extraordinary."
            : "Unleash your creativity, one project at a time."}
        </motion.p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
          >
            {isSignup ? "Sign Up" : "Log In"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
        <div className="mt-6 text-center">
          <Link
            href={isSignup ? "/login" : "/signup"}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            {isSignup
              ? "Already have an account? Log in"
              : "Need an account? Sign up"}
          </Link>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            By signing up, you agree to our Terms of Service and Privacy Policy
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
            {isSignup
              ? "Join our community of visionaries"
              : "Elevate your freelancing game"}
          </span>
        </motion.div>
      </motion.div>
      <GridBoxes />
    </div>
  );
}
