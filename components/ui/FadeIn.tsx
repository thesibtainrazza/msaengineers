"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { ANIMATIONS } from "@/constants/animations";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
}: FadeInProps) {
  
  let animationVariant;
  switch (direction) {
    case "up": animationVariant = ANIMATIONS.fadeInUp; break;
    case "down": animationVariant = ANIMATIONS.fadeInDown; break;
    case "left": animationVariant = ANIMATIONS.fadeInLeft; break;
    case "right": animationVariant = ANIMATIONS.fadeInRight; break;
    default: animationVariant = ANIMATIONS.fadeInUp;
  }

  return (
    <motion.div
      initial={animationVariant.initial}
      whileInView={animationVariant.whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={animationVariant.transition(delay)}
      className={fullWidth ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
}
