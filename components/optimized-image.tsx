"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageData, fallbackImages } from "@/lib/images";

interface OptimizedImageProps {
  imageData: ImageData;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: "blur" | "empty";
  loading?: "lazy" | "eager";
}

export default function OptimizedImage({
  imageData,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  onLoad,
  onError,
  placeholder = "empty",
  loading = "lazy",
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Determine fallback image based on category
  const getFallbackImage = (category: string) => {
    switch (category) {
      case "hero":
        return fallbackImages.hero;
      case "services":
        return fallbackImages.service;
      case "team":
        return fallbackImages.team;
      case "technology":
        return fallbackImages.technology;
      case "about":
        return fallbackImages.about;
      case "icons":
        return fallbackImages.icon;
      default:
        return fallbackImages.service;
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
    onError?.();
  };

  const imageSrc = imageError ? getFallbackImage(imageData.category) : imageData.src;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <Image
        src={imageSrc}
        alt={imageData.alt}
        title={imageData.title}
        priority={priority || imageData.priority}
        fill={fill}
        width={!fill ? imageData.width : undefined}
        height={!fill ? imageData.height : undefined}
        sizes={sizes}
        quality={quality}
        loading={loading}
        placeholder={placeholder}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          "object-cover"
        )}
      />
      
      {/* Optional overlay for better text readability on hero images */}
      {imageData.category === "hero" && (
        <div className="absolute inset-0 bg-black/30" />
      )}
    </div>
  );
}

// Specialized components for different image types
export function HeroImage({ 
  imageData, 
  className,
  ...props 
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      imageData={imageData}
      className={cn("w-full h-[600px] lg:h-[800px]", className)}
      priority={true}
      fill={true}
      sizes="100vw"
      quality={90}
      {...props}
    />
  );
}

export function ServiceImage({ 
  imageData, 
  className,
  ...props 
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      imageData={imageData}
      className={cn("w-full h-48 rounded-lg", className)}
      fill={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={85}
      {...props}
    />
  );
}

export function TeamImage({ 
  imageData, 
  className,
  ...props 
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      imageData={imageData}
      className={cn("w-full h-64 rounded-lg", className)}
      fill={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={85}
      {...props}
    />
  );
}

export function TechnologyImage({ 
  imageData, 
  className,
  ...props 
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      imageData={imageData}
      className={cn("w-full h-96 rounded-lg", className)}
      fill={true}
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={85}
      {...props}
    />
  );
}

export function IconImage({ 
  imageData, 
  className,
  ...props 
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      imageData={imageData}
      className={cn("w-24 h-12", className)}
      sizes="120px"
      quality={95}
      {...props}
    />
  );
} 