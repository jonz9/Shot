"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

const navItems = ["Work", "About", "Inquiry"];

const Navbar = () => {
  return (
    <div className="flex w-full relative justify-between items-center py-12 px-64">
      {/* Logo/Home NavItem */}
      <Link
        key={"Home"}
        href={"/"}
        scroll
        className={cn("flex relative items-center justify-center")}
      >
        <h1 className="text-2xl text-bold font-bold italic">Shot</h1>
      </Link>

      <div className="flex relative items-center space-x-16">
        <div className="flex relative items-center space-x-16">
          {navItems.map((navItem: string, idx: number) => (
            <Link
              key={idx}
              href={"/"}
              scroll
              className="transition duration-300 text-lg"
            >
              {navItem}
            </Link>
          ))}
        </div>
        <button className="py-2 px-4 bg-slate-400 hover rounded-xl cursor-pointer font-semibold hover:bg-slate-500 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
