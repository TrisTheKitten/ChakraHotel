"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'

export default function Hero() {
  const slides = [
    {
      image: "/preview (1).jpg",
      title: "Experience Thai Wellness & Tradition",
      subtitle: "Immerse yourself in the perfect blend of traditional Thai hospitality and modern comfort",
    },
    {
      image: "/preview (2).jpg",
      title: "Thai & European Fusion Cuisine",
      subtitle: "Enjoy classic Thai dishes and innovative European fusion meals in our elegant restaurant",
    },
    {
      image: "/preview (3).jpg",
      title: "Step Into Serenity",
      subtitle: "Discover an ambiance where modern elegance meets timeless tranquility.",
    },
    {
      image: "/preview (4).jpg",
      title: "Discover Our Serene Getaway",
      subtitle: "Relax and unwind in a tranquil environment designed for your ultimate comfort.",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-[90vh] flex items-end pb-20 md:pb-24 lg:pb-32">
      <div className="overflow-hidden absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title || "Chakra Hotel"} fill className="object-cover" priority={index === 0} />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 transition-all duration-500 transform translate-y-0">
            {slides[selectedIndex].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 transition-all duration-500 delay-100 transform translate-y-0">
            {slides[selectedIndex].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#6d1d2a] hover:bg-[#a02d3f] text-white px-8 py-6 rounded-md text-lg"
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
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-white" : "bg-white/50"} transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
