<<<<<<< HEAD
"use client";

import React from "react";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  staggerChildren = 1,
  delayChildren = 1,
}: PageTransitionProps) => {
  return (
    <motion.div
      className="relative overflow-hidden flex"
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate="show"
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
=======
>>>>>>> bef1a8ed9d2dcfdb5ad2e92ba9a0a7889dc0dbd3
