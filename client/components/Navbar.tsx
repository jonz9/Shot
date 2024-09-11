"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import { Delius, Delius_Unicase } from "next/font/google";

interface navItem {
  name: string;
  link: string;
}

const navItems = [
  { name: "Work", link: "/work" },
  { name: "About", link: "/about" },
  { name: "Inquiry", link: "/inquiry" },
];

const delius = Delius({ weight: "400", subsets: ["latin"] });

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
        <span className={delius.className}>
          <h1 className={`text-3xl italic`}>Shot</h1>
        </span>
      </Link>

      <div className="flex relative items-center space-x-16">
        <div className="flex relative items-center space-x-16">
          {navItems.map((navItem: navItem, idx: number) => (
            <Link
              key={idx}
              href={navItem.link}
              scroll
              className="relative flex text-lg group transition duration-300"
            >
              <span>{navItem.name}</span>
              <div className="absolute right-0 bottom-0 w-full h-0.5 bg-slate-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </Link>
          ))}
        </div>
        <button className="py-2 px-4 bg-blue-200 hover rounded-xl cursor-pointer font-semibold hover:bg-blue-300 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
