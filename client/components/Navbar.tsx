import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

const navItems = ["Work", "About", "Inquiry"];

const Navbar = () => {
  return (
    <div className="flex w-full relative justify-between items-center py-12 px-36">
      {/* Logo/Home NavItem */}
      <Link
        key={"Home"}
        href={"/"}
        scroll
        className={cn("flex relative items-center justify-center")}
      >
        <h1 className="text-2xl text-bold font-bold italic">Shot</h1>
      </Link>

      <div className="flex relative items-center space-x-2">
        {navItems.map((navItem: string, idx: number) => (
          <Link
            key={idx}
            href={"/"}
            scroll
            className="hover:underline transition duration-300 text-lg"
          >
            {navItem}
          </Link>
        ))}
      </div>

      <span className="relative justify-center items-center"></span>
    </div>
  );
};

export default Navbar;
