"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

const IMAGES_PER_PAGE = 6;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(0);

  const galleryImages = [
    {
      src: "/preview (1).jpg",
      alt: "Lobby 1",
      category: "Hotel Feature",
    },
    {
      src: "/preview (4).jpg",
      alt: "Lobby 4",
      category: "Hotel Feature",
    },
    {
      src: "/restaurant 4.jpg",
      alt: "Restaurant",
      category: "Dining",
    },
    // '/spa-area-2.jpg' (Spa Area 2) is removed based on user request.
    {
      src: "/spa-area-3.jpg",
      alt: "Spa Area 3",
      category: "Wellness",
    },
    {
      src: "/food workshop preview.jpg",
      alt: "Food Workshop Preview",
      category: "Activities",
    },
    {
      src: "/food-workshop-area-1.jpg",
      alt: "Food Workshop Area",
      category: "Activities",
    },
    {
      src: "/deluxe-room-1.jpg",
      alt: "Deluxe Room",
      category: "Rooms",
    },
    {
      src: "/family-room-1.jpg",
      alt: "Family Room",
      category: "Rooms",
    },
    {
      src: "/suite-room-2.jpg",
      alt: "Suite Room",
      category: "Rooms",
    },
    {
      src: "/standard.jpg",
      alt: "Standard Room",
      category: "Rooms",
    },
    {
      src: "/garden-area-2.jpg",
      alt: "Garden Area",
      category: "Outdoor",
    },
    {
      src: "/dress-rental-area.jpg",
      alt: "Dress Rental Area",
      category: "Activities",
    },
  ]

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImagesToDisplay = galleryImages.slice(startIndex, endIndex);

  const handleSetPage = (newPageIndex: number) => {
    setCurrentPage(newPageIndex);
  };

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

        <div className="relative overflow-hidden">
          <div
            key={currentPage}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {currentImagesToDisplay.map((image, index) => (
              <div
                key={image.src + '-' + index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < IMAGES_PER_PAGE / 2}
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

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => handleSetPage(pageIndex)}
                className={`h-3 w-3 rounded-full transition-colors duration-150 ${ 
                  currentPage === pageIndex ? 'bg-[#8B7355]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${pageIndex + 1}`}
              />
            ))}
          </div>
        )}
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
