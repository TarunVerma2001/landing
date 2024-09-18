"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthPage from "../_components/auth-page";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (email: string, password: string) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during login");
    }
  };

  return <AuthPage onSubmit={handleSubmit} error={error} />;
}
