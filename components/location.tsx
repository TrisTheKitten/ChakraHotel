"use client"

import Image from "next/image"
import { MapPin, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-[#F5F0E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B7355] mb-4">Our Location</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Conveniently located to explore the best of Thai culture and attractions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/map-location.png" alt="Chakra Hotel Location Map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                className="bg-[#6d1d2a] hover:bg-[#a02d3f] text-white"
                onClick={() => window.open("https://maps.app.goo.gl/H6TkhREiR47uE7g9A", "_blank")}
              >
                Open in Google Maps
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-[#8B7355] mb-6">Find Us</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#8B7355] mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-gray-700">43/7 Soi Lang Bot Phram, Sao Chingcha, Phra Nakhon, Bangkok</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#8B7355] mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-700">081-xxx-xxxx</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="h-6 w-6 text-[#8B7355] mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Website</h4>
                  <p className="text-gray-700">www.chakrahotel.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Nearby Attractions</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D2B48C] rounded-full mr-2"></span>
                  Sao Chingcha (Giant Swing) - 0.4 km (about 2 minutes)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D2B48C] rounded-full mr-2"></span>
                  The Grand Palace - 2.1 km (about 7 minutes)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D2B48C] rounded-full mr-2"></span>
                  Phra Sumen Fort - 2.4 km (can take around 19 minutes depending on traffic)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D2B48C] rounded-full mr-2"></span>
                  Wat Arun Viewing Point - 2.0 km (about 7 minutes)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
