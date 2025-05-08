"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Wifi, Snowflake, Tv, Phone, Ban, Footprints, ChevronLeft, ChevronRight } from "lucide-react"

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
  } | null
}

export default function RoomDetailModal({ isOpen, onClose, room }: RoomDetailProps) {
  const [mounted, setMounted] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { if (isOpen) setActiveImageIndex(0) }, [isOpen, room?.id])

  if (!mounted || !room) return null

  const sourceImages = (room.galleryImages?.filter(img => img?.trim())?.length > 0 
    ? room.galleryImages.filter(img => img?.trim()) 
    : (room.image?.trim() ? [room.image.trim()] : []));
  
  const currentActiveIdx = sourceImages.length > 0 ? Math.min(activeImageIndex, sourceImages.length - 1) : 0;
  const mainImageSrc = sourceImages.length > 0 ? sourceImages[currentActiveIdx] : "/placeholder.svg?query=main-room-image";

  const handleBookNow = () => {
    onClose()
    const bookingElement = document.getElementById("booking")
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const roomTypeSelect = document.querySelector('[aria-label="Select room type"]') as HTMLElement
        if (roomTypeSelect) {
          roomTypeSelect.click()
          setTimeout(() => {
            const roomOptions = document.querySelectorAll('[role="option"]')
            roomOptions.forEach((option) => {
              if (option.textContent?.toLowerCase().includes(room.name.toLowerCase())) {
                (option as HTMLElement).click()
              }
            })
          }, 100)
        }
      }, 800)
    }
  }

  const navigateImage = (direction: 'next' | 'prev') => {
    if (sourceImages.length <= 1) return;
    setActiveImageIndex(prev => {
      let newIndex = direction === 'next' ? prev + 1 : prev - 1;
      if (newIndex >= sourceImages.length) newIndex = 0;
      if (newIndex < 0) newIndex = sourceImages.length - 1;
      return newIndex;
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl md:max-w-6xl lg:max-w-7xl p-0 bg-[#f8f3ea] flex flex-col md:flex-row md:items-stretch max-h-[90vh] sm:max-h-[85vh] overflow-hidden">
        <DialogTitle className="sr-only">{room.name}</DialogTitle>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-3/5 flex flex-col max-h-[90vh] sm:max-h-[85vh] md:overflow-y-auto">
          <div className="flex flex-col p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 bg-[#e0d9ce] rounded-lg shadow-lg m-2 sm:m-3 md:m-4">
            <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden bg-gray-200">
              <Image
                key={mainImageSrc} 
                src={mainImageSrc}
                alt={`${room.name} - Image ${currentActiveIdx + 1}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {sourceImages.length > 1 && (
                <>
                  <Button variant="outline" size="icon" onClick={() => navigateImage('prev')} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-1 h-8 w-8 sm:h-9 sm:w-9 rounded-full z-10 text-[#6d1d2a] border-none focus-visible:ring-1 focus-visible:ring-[#6d1d2a]"><ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" /></Button>
                  <Button variant="outline" size="icon" onClick={() => navigateImage('next')} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-1 h-8 w-8 sm:h-9 sm:w-9 rounded-full z-10 text-[#6d1d2a] border-none focus-visible:ring-1 focus-visible:ring-[#6d1d2a]"><ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" /></Button>
                </>
              )}
            </div>

            {sourceImages.length > 1 && (
              <div className="overflow-x-auto pb-1">
                <div className="flex flex-row gap-2 pt-1 min-w-max"> 
                  {sourceImages.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-sm overflow-hidden outline-none transition-all duration-200 ease-in-out transform hover:scale-105 
                                  ${idx === currentActiveIdx ? "ring-2 ring-offset-1 ring-[#6d1d2a] opacity-100" : "opacity-70 hover:opacity-100"}`}
                    >
                      <Image src={imgSrc} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" sizes="20vw" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Room Details */}
        <div className="w-full md:w-2/5 p-4 sm:p-5 md:p-6 flex flex-col max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Image src="/logo.png" alt="Chakra Hotel Logo" width={100} height={40} className="h-auto sm:w-[110px] md:w-[120px]" />
             <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden text-[#6d1d2a] hover:bg-[#e0d9ce]"><X className="h-5 w-5" /></Button>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif text-[#6d1d2a] mb-2 sm:mb-3">{room.name}</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">{room.fullDescription || room.description}</p>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
            {[ { Icon: Footprints, label: room.capacityDetail || room.capacity, key: 'capacity' },
               { Icon: Footprints, label: room.priceNumeric.toLocaleString(), key: 'price' }, 
               { Icon: Footprints, label: room.bedType, key: 'bed' } 
            ].map(item => (
              <div key={item.key} className="flex flex-col items-center">
                <div className="bg-[#f0e6d6] rounded-full p-2 sm:p-2.5 mb-1 sm:mb-1.5"><item.Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#6d1d2a]" /></div>
                <span className="text-xs sm:text-sm text-center text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>

          {room.features?.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <h3 className="font-medium text-[#6d1d2a] mb-1.5 sm:mb-2 text-sm sm:text-base">Room Features</h3>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-700">
                {room.features.map((feature, index) => (<li key={index} className="flex items-center"><span className="text-yellow-500 mr-1.5">●</span>{feature}</li>))}
              </ul>
            </div>
          )}

          {room.amenities && room.amenities.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <h3 className="font-medium text-[#6d1d2a] mb-1.5 sm:mb-2 text-sm sm:text-base">Amenities</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1.5 text-xs sm:text-sm text-gray-700">
                {room.amenities.map((amenity, index) => {
                  let Icon = Footprints;
                  if (amenity.toLowerCase().includes("wifi")) Icon = Wifi;
                  else if (amenity.toLowerCase().includes("air conditioning")) Icon = Snowflake;
                  else if (amenity.toLowerCase().includes("tv") || amenity.toLowerCase().includes("television")) Icon = Tv;
                  else if (amenity.toLowerCase().includes("non-smoking")) Icon = Ban;
                  else if (amenity.toLowerCase().includes("reception") || amenity.toLowerCase().includes("service")) Icon = Phone;
                  return (<li key={index} className="flex items-center"><Icon className="w-3.5 h-3.5 sm:w-4 sm:w-4 text-[#6d1d2a] mr-1.5 flex-shrink-0" /><span>{amenity}</span></li>)
                })}
              </ul>
            </div>
          )}
          
          <div className="mt-auto pt-3 sm:pt-4">
            <Button onClick={handleBookNow} className="w-full bg-[#6d1d2a] text-white hover:bg-[#571723] py-2 sm:py-2.5 text-sm sm:text-base md:text-lg font-semibold rounded-md transition-colors duration-150">
              Book This Room
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
