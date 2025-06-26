"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { fadeIn, slideInFromLeft, slideInFromTop, scaleUp } from "@/lib/animations"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideFromLeft" | "slideFromTop" | "scaleUp"
  delay?: number
}

const animationVariants = {
  fadeIn,
  slideFromLeft: slideInFromLeft,
  slideFromTop: slideInFromTop,
  scaleUp
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  animation = "fadeIn",
  delay = 0 
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animationVariants[animation]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
} 