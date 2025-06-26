"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageSliderProps {
  images: {
    src: string
    alt: string
    title?: string
    description?: string
  }[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showDots?: boolean
  className?: string
}

export default function ImageSlider({
  images,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showDots = true,
  className = "",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Main Image Display */}
      <div className="relative h-full">
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Overlay with title and description */}
        {(images[currentIndex].title || images[currentIndex].description) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            {images[currentIndex].title && (
              <h3 className="text-white text-xl font-semibold mb-2">{images[currentIndex].title}</h3>
            )}
            {images[currentIndex].description && (
              <p className="text-white/90 text-sm">{images[currentIndex].description}</p>
            )}
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      {showControls && images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
