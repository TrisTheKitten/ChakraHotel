"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/lobby-area-1.jpg",
      alt: "Hotel Lobby",
      category: "Interior",
    },
    {
      src: "/restaurant-area-2.jpg",
      alt: "Restaurant Area",
      category: "Dining",
    },
    {
      src: "/spa-area-1.jpg",
      alt: "Thai Massage",
      category: "Wellness",
    },
    {
      src: "/restaurant-area-3.jpg",
      alt: "Restaurant",
      category: "Dining",
    },
    {
      src: "/garden-area-1.jpg",
      alt: "Garden Courtyard",
      category: "Outdoor",
    },
    {
      src: "/garden-area-2.jpg",
      alt: "Garden Walkway",
      category: "Outdoor",
    },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B7355] mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Explore the beauty and elegance of Chakra Hotel through our gallery.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-serif text-lg">{image.alt}</p>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <DialogTitle className="sr-only">Enlarged Gallery Image</DialogTitle>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 bg-white/80 p-2 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
          {selectedImage && (
            <div className="relative h-[80vh]">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
