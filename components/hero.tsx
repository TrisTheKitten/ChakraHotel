"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const slides = [
    {
      image: "/lobby-area-1.jpg",
      title: "Experience Thai Wellness & Tradition",
      subtitle: "Immerse yourself in the perfect blend of traditional Thai hospitality and modern comfort",
    },
    {
      image: "/spa-area-1.jpg",
      title: "Authentic Thai Herbal Massage",
      subtitle: "Rejuvenate your body and mind with our traditional Thai wellness treatments",
    },
    {
      image: "/restaurant-area-1.jpg",
      title: "Thai & European Fusion Cuisine",
      subtitle: "Enjoy classic Thai dishes and innovative European fusion meals in our elegant restaurant",
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const prev = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="relative h-[90vh] flex items-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image src={slide.image || "/placeholder.svg"} alt="Chakra Hotel" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 transition-all duration-500 transform translate-y-0">
            {slides[current].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 transition-all duration-500 delay-100 transform translate-y-0">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#6d1d2a] hover:bg-[#a02d3f] text-white px-8 py-6 rounded-md text-lg"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
