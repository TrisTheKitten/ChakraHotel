"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Wifi, Snowflake, Tv, Phone, Ban, Footprints, ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface RoomDetailProps {
  isOpen: boolean
  onClose: () => void
  room: {
    id: number
    name: string
    description: string
    fullDescription?: string
    image: string
    galleryImages: string[]
    price: string
    priceNumeric: number
    capacity: string
    capacityDetail?: string
    size?: string
    bedType: string
    features: string[]
    location?: string
    additionalInfo?: string
    amenities?: string[]
  }
}

export default function RoomDetailModal({ isOpen, onClose, room }: RoomDetailProps) {
  const [mounted, setMounted] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    // Reset to first image when modal opens
    setActiveImageIndex(0)
  }, [isOpen])

  if (!mounted) {
    return null
  }

  const handleBookNow = () => {
    onClose()
    // Scroll to booking form and pre-select the room type
    const bookingElement = document.getElementById("booking")
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" })

      // Find the room type select element and set its value
      setTimeout(() => {
        const roomTypeSelect = document.querySelector('[aria-label="Select room type"]') as HTMLElement
        if (roomTypeSelect) {
          roomTypeSelect.click()

          // Find and click the appropriate room type option
          setTimeout(() => {
            const roomOptions = document.querySelectorAll('[role="option"]')
            roomOptions.forEach((option) => {
              if (option.textContent?.toLowerCase().includes(room.name.toLowerCase())) {
                ;(option as HTMLElement).click()
              }
            })
          }, 100)
        }
      }, 800)
    }
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === room.galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? room.galleryImages.length - 1 : prev - 1))
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-[#f8f3ea]">
        <DialogTitle className="sr-only">{room.name}</DialogTitle>
        <div className="relative">
          {/* Removed custom close button to use default Shadcn one */}

          <div className="grid md:grid-cols-2">
            {/* Room Image Gallery */}
            <div className="relative h-[300px] md:h-auto">
              <Image
                src={room.galleryImages[activeImageIndex] || "/placeholder.svg"}
                alt={`${room.name} - Image ${activeImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {room.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#6d1d2a]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 text-[#6d1d2a]" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {room.galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-2 h-2 rounded-full ${
                          idx === activeImageIndex ? "bg-white" : "bg-white/50"
                        } transition-all duration-300`}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Room Details */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <Image src="/logo.png" alt="Chakra Hotel Logo" width={120} height={48} className="h-auto" />
              </div>

              <h2 className="text-2xl md:text-3xl font-serif text-[#6d1d2a] mb-4">{room.name}</h2>

              <p className="text-gray-700 mb-6">{room.fullDescription || room.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="bg-[#f0e6d6] rounded-full p-3 mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-[#6d1d2a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-center text-gray-700">{room.capacityDetail || room.capacity}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-[#f0e6d6] rounded-full p-3 mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-[#6d1d2a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 18V6"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-center text-gray-700">{room.priceNumeric.toLocaleString()}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-[#f0e6d6] rounded-full p-3 mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-[#6d1d2a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 3h20v10H2z"></path>
                      <path d="M2 17h20v4H2z"></path>
                      <path d="M6 13v4"></path>
                      <path d="M18 13v4"></path>
                      <path d="M10 17h4"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-center text-gray-700">{room.bedType}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-[#6d1d2a] mb-3">Room Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-[#c9a227] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-[#6d1d2a] mb-3">Amenities</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#f0e6d6] rounded-full p-2 mb-1">
                      <Wifi className="h-5 w-5 text-[#6d1d2a]" />
                    </div>
                    <span className="text-xs text-center text-gray-700">Free Wifi</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-[#f0e6d6] rounded-full p-2 mb-1">
                      <Footprints className="h-5 w-5 text-[#6d1d2a]" />
                    </div>
                    <span className="text-xs text-center text-gray-700">Slipper</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-[#f0e6d6] rounded-full p-2 mb-1">
                      <Snowflake className="h-5 w-5 text-[#6d1d2a]" />
                    </div>
                    <span className="text-xs text-center text-gray-700">Air conditioning</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-[#f0e6d6] rounded-full p-2 mb-1">
                      <Ban className="h-5 w-5 text-[#6d1d2a]" />
                    </div>
                    <span className="text-xs text-center text-gray-700">Non-smoking</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-[#f0e6d6] rounded-full p-2 mb-1">
                      <Tv className="h-5 w-5 text-[#6d1d2a]" />
                    </div>
                    <span className="text-xs text-center text-gray-700">Television</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-[#f0e6d6] rounded-full p-2 mb-1">
                      <Phone className="h-5 w-5 text-[#6d1d2a]" />
                    </div>
                    <span className="text-xs text-center text-gray-700">24/7 reception</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#6d1d2a] hover:bg-[#a02d3f] text-white py-6" onClick={handleBookNow}>
                Book This Room
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
