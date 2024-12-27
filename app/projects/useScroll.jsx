"use client"
import { motion, useSpring, useScroll } from "motion/react";
export default function UseScrolls() {
     const { scrollYProgress } = useScroll();
        const scaleX = useSpring(scrollYProgress, {
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
        });
  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#ff0088   ",
      }}
    />
  );
}
