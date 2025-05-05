"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Clock, DollarSign, Calendar } from "lucide-react"

interface ServiceDetailProps {
  isOpen: boolean
  onClose: () => void
  service: {
    id: string
    title: string
    shortDescription: string
    fullDescription: string
    image: string
    detailImage: string
    price: string
    duration: string
    benefits: string[]
    includes: string[]
  }
}

export default function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleBookNow = () => {
    onClose()
    // Scroll to booking form and pre-select the service type
    const bookingElement = document.getElementById("booking")
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" })

      // Switch to service booking tab
      setTimeout(() => {
        const serviceTab = document.querySelector('[value="service"]') as HTMLElement
        if (serviceTab) {
          serviceTab.click()

          // Find the service type select element and set its value
          setTimeout(() => {
            const serviceTypeSelect = document.querySelector('[aria-label="Select service type"]') as HTMLElement
            if (serviceTypeSelect) {
              serviceTypeSelect.click()

              // Find and click the appropriate service type option
              setTimeout(() => {
                const serviceOptions = document.querySelectorAll('[role="option"]')
                serviceOptions.forEach((option) => {
                  if (option.textContent?.toLowerCase().includes(service.id.toLowerCase())) {
                    ;(option as HTMLElement).click()
                  }
                })
              }, 100)
            }
          }, 300)
        }
      }, 800)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-[#f8f3ea]">
        <DialogTitle className="sr-only">{service.title}</DialogTitle>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 bg-white/80 p-2 rounded-full"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Service Image */}
            <div className="relative h-[300px] md:h-auto">
              <Image
                src={service.detailImage || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-2xl md:text-3xl font-serif">{service.title}</h2>
                <p className="text-white/90 mt-2">{service.shortDescription}</p>
              </div>
            </div>

            {/* Service Details */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <Image src="/logo.png" alt="Chakra Hotel Logo" width={120} height={48} className="h-auto" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center mb-3 md:mb-0">
                  <DollarSign className="h-5 w-5 text-[#c9a227] mr-2" />
                  <div>
                    <span className="block text-sm text-gray-500">Price</span>
                    <span className="font-bold text-[#6d1d2a]">{service.price}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#c9a227] mr-2" />
                  <div>
                    <span className="block text-sm text-gray-500">Duration</span>
                    <span className="font-medium text-gray-700">{service.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{service.fullDescription}</p>

              <div className="mb-6">
                <h3 className="font-medium text-[#6d1d2a] mb-3">Benefits</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-[#c9a227] rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-[#6d1d2a] mb-3">What's Included</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-[#c9a227] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-[#6d1d2a] hover:bg-[#a02d3f] text-white py-6" onClick={handleBookNow}>
                <Calendar className="mr-2 h-4 w-4" />
                Book This Experience
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
