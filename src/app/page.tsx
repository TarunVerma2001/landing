"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Header from "./_components/header";
import GridBoxes from "./_components/grid-boxes";
import { Cover } from "@/components/ui/cover";
import TextHoverEffectDemo from "./_components/text-hover";
import ServicesSection from "./_components/services-section";
import PricingSection from "./_components/pricing-sections";
import TestimonialsPage from "./_components/testimonials";

const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: any;
  delay?: number;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-background to-black h-full">
      <div className="h-full z-10 min-h-screen py-8 p-8 w-full flex flex-col justify-start gap-4 items-center relative">
        <AnimatedSection>
          <Header />
          {/* Remove the login and signup buttons */}
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex  flex-col items-center justify-center">
            <h2 className="text-2xl pt-[50px] lg:pt-[150px] relative md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              Take your <Cover>Development Game</Cover> to another level with
            </h2>
            <TextHoverEffectDemo />
            {/* <div className="relative lg:hidden text-5xl mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">CHNOVA</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">CHNOVA</span>
              </div>
            </div> */}

            <div className="text-[1rem] text-zinc-400 text-center md:text-3xl lg:max-w-4xl md:py-5">
              <pre className="tracking-tight uppercase max-w-md md:max-w-4xl text-wrap">
                WE DELIVER YOU APPLICATION V1 WITHIN A WEEK.
              </pre>
              <pre className="tracking-tight uppercase max-w-md md:max-w-4xl text-wrap">
                ALONG WITH A FIGMA FILE AND WHOLE CODE.
              </pre>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-7xl">
            <img
              src="/dashboard.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <TestimonialsPage />
        </AnimatedSection>
      </div>
      <div className="z-0">
        <GridBoxes />
      </div>
    </main>
  );
}
