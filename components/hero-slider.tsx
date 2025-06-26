"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeIn, slideInFromLeft, slideInFromTop, staggerChildren } from "@/lib/animations"
import { useIsMobile } from "@/hooks/use-mobile"

interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

interface HeroSliderProps {
  slides: HeroSlide[]
  autoPlay?: boolean
  interval?: number
}

export default function HeroSlider({ slides, autoPlay = true, interval = 6000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const isMobile = useIsMobile()

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null) // Reset end touch when starting new touch
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isSignificantMovement = Math.abs(distance) > 50 // Reduced threshold for better response

    if (isSignificantMovement) {
      if (distance > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
    
    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  const currentSlide = slides[currentIndex]

  return (
    <section 
      className="relative min-h-[500px] h-[calc(100vh-4rem)] max-h-[800px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={currentSlide.image || "/placeholder.svg"}
              alt={currentSlide.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div 
          key={currentIndex}
          className="max-w-4xl text-white space-y-6 md:space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            {currentSlide.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-100">
            {currentSlide.subtitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            {currentSlide.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto"
            >
              <Link href={currentSlide.ctaLink} className="flex items-center justify-center w-full">
                {currentSlide.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {currentSlide.secondaryCtaText && currentSlide.secondaryCtaLink && (
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto"
              >
                <Link href={currentSlide.secondaryCtaLink} className="w-full text-center">
                  {currentSlide.secondaryCtaText}
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls - Now visible on all devices */}
      {slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-20"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
