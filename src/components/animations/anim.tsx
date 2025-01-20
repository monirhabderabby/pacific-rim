"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?:
    | "fadeIn"
    | "slideInLeft"
    | "slideInRight"
    | "slideInTop"
    | "slideInBottom"
    | "slideOutTop"
    | "slideOutBottom"
    | "zoomIn"
    | "zoomOut"
    | "rotate"
    | "rotateIn"
    | "rotateOut"
    | "flipX"
    | "flipY"
    | "bounceIn"
    | "bounceOut"
    | "scaleIn"
    | "scaleOut"
    | "blurIn"
    | "blurOut"
    | "spinIn"
    | "spinOut"; // Add more variants as needed
}

// Define animation variants
const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  slideInLeft: {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  slideInRight: {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  slideInTop: {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  slideInBottom: {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  slideOutTop: {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  },
  slideOutBottom: {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  },
  zoomIn: {
    hidden: { scale: 0.6, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut", type: "tween" },
    },
  },
  zoomOut: {
    hidden: { scale: 1.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  },
  rotateIn: {
    hidden: { rotate: -90, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  rotateOut: {
    hidden: { rotate: 0, opacity: 1 },
    visible: {
      rotate: 90,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  },
  flipX: {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.5 } },
  },
  flipY: {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.5 } },
  },
  bounceIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [1.2, 0.9, 1],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  bounceOut: {
    hidden: { scale: 1, opacity: 1 },
    visible: {
      scale: [0.9, 1.2, 0.8],
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  },
  scaleIn: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  },
  scaleOut: {
    hidden: { scale: 1, opacity: 1 },
    visible: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  },
  blurIn: {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.5 } },
  },
  blurOut: {
    hidden: { filter: "blur(0px)", opacity: 1 },
    visible: {
      filter: "blur(10px)",
      opacity: 0,
      transition: { duration: 0.5 },
    },
  },
  spinIn: {
    hidden: { rotate: 360, scale: 0, opacity: 0 },
    visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.8 } },
  },
  spinOut: {
    hidden: { rotate: 0, scale: 1, opacity: 1 },
    visible: {
      rotate: 360,
      scale: 0,
      opacity: 0,
      transition: { duration: 0.8 },
    },

  },
};

//slideInBottom
//
const Anim = ({ children, variant = "slideInTop" }: Props) => {
  const selectedVariant = animationVariants[variant];

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

export default Anim;
