"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  IconHome,
  IconLogin,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const Brand = () => (
    <div className="flex items-center justify-between md:block">
      <a href="javascript:void(0)">
        <Image
          src="/ddd.svg"
          alt="Chnova Logo"
          width={40}
          height={40}
          className="rounded-full bg-white p-1"
        />
      </a>
    </div>
  );

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <header className="p-4 z-50 w-full   grid grid-cols-3 ">
      <Brand />
      <div className="flex space-x-8 justify-center">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 cursor-pointer items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end">
        <button
          onClick={() => (window.location.href = "/login")}
          className="border hidden lg:flex text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>

        <Drawer>
          <DrawerTrigger>
            <HamburgerMenuIcon className="h-6 w-6 lg:hidden cursor-pointer" />
          </DrawerTrigger>
          <DrawerContent className="w-full">
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>Navigate through our site</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <button
                onClick={() => (window.location.href = "/login")}
                className="w-full border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
              >
                <span>Login</span>
              </button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* <HamburgerMenuIcon className="h-6 w-6 lg:hidden" /> */}
      </div>
    </header>
  );
}
