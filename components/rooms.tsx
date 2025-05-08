"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Wind, ShoppingBag, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import RoomDetailModal from "./room-detail-modal"

export default function Rooms() {
  const rooms = [
    // 1. Standard Room
    {
      id: 4,
      name: "Standard Room",
      description: "Comfortable room with two single beds, ideal for friends or colleagues, offering essential amenities.",
      fullDescription:
        "Our Standard Room provides a cozy 20 sqm space, perfect for up to 2 adults. It features two comfortable single beds, a regular bathroom with a shower, and essential amenities for a pleasant stay. Ideal for travelers seeking comfort and value.",
      image: "/standard.jpg",
      galleryImages: ["/standard.jpg"],
      price: "1700 ฿",
      priceNumeric: 1700,
      capacity: "2 Guests",
      capacityDetail: "2 adults",
      size: "20 sq.m",
      bedType: "2 Single Beds",
      location: "1st and 2nd floors",
      features: ["2 Single Beds", "20 sq.m", "City View", "Maximum 2 Guests", "Work Desk", "Essential Toiletries"],
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Fridge", "In-room Safe", "Hairdryer"],
    },
    // 2. Deluxe Room
    {
      id: 1,
      name: "Deluxe Room",
      description: "Spacious room with premium bedding, elegant Thai-inspired design and regular bathroom",
      fullDescription:
        "Located on the 2nd and 3rd floors, our Deluxe Room offers 20 sqm of thoughtfully designed space, ideal for up to 2 adults. An extra bed can be added upon request, providing added flexibility for your stay. Features a regular bathroom with shower. Enjoy a refined and comfortable retreat tailored for relaxation.",
      image: "/deluxe-room-1.jpg",
      galleryImages: ["/deluxe-room-1.jpg", "/deluxe-room-2.jpg"],
      price: "2200 ฿",
      priceNumeric: 2200,
      capacity: "2 Guests",
      capacityDetail: "2 adults",
      size: "20 sq.m",
      bedType: "Queen size",
      location: "2nd and 3rd floors",
      features: ["Queen Bed", "20 sq.m", "Garden View", "Maximum 2 Guests", "Sitting Area", "Premium Toiletries"],
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Fridge", "In-room Safe", "Hairdryer"],
    },
    // 3. Family Room
    {
      id: 3,
      name: "Family Room",
      description: "Perfect for families, featuring multiple beds, traditional Thai motifs, bathtub and mini-pantry",
      fullDescription:
        "Located on the 2nd floor, offers 30 sqm of spacious comfort, perfect for up to 4 guests. It features a king-size bed for the parents, with the option to add two extra single beds, ideal for children. The room includes a bathtub and a mini-pantry area for preparing simple meals and snacks. Also features a small living room area for relaxation and convenient luggage storage.",
      image: "/family-room-1.jpg",
      galleryImages: ["/family-room-1.jpg", "/family-room-2.jpg", "/family-room-3.jpg"],
      price: "3800 ฿",
      priceNumeric: 3800,
      capacity: "4 Guests",
      capacityDetail: "2 adults, 2 kids",
      size: "30 sq.m",
      bedType: "King + Bunk beds",
      location: "2nd floor",
      features: ["King Bed + Bunk Beds", "30 sq.m", "Mini-Pantry Area", "Maximum 4 Guests", "Bathtub", "Extra Storage"],
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Fridge",
        "In-room Safe",
        "Child-friendly Features",
      ],
    },
    // 4. Suite Room
    {
      id: 2,
      name: "Suite Room",
      description: "Luxurious suite with separate living area, authentic Thai silk accents and bathtub",
      fullDescription:
        "Located on the 2nd floor, offers 27 sqm of spacious comfort, ideal for up to 3 adults. It features a luxurious king-size bed, with the option to add an extra single bed. The room includes a bathtub for ultimate relaxation, as well as a small living room area and ample luggage storage for convenience.",
      image: "/suite-room-1.jpg",
      galleryImages: ["/suite-room-1.jpg", "/suite-room-2.jpg", "/suite-room-3.jpg"],
      price: "3200 ฿",
      priceNumeric: 3200,
      capacity: "3 Guests",
      capacityDetail: "2 adults",
      size: "27 sq.m",
      bedType: "King size",
      location: "2nd floor",
      features: ["King Bed", "27 sq.m", "Private Living Space", "Maximum 3 Guests", "Bathtub", "Premium Amenities"],
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "In-room Safe", "Luxury Toiletries"],
    },
  ]

  const [activeRoom, setActiveRoom] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)

  const nextRoom = () => {
    setActiveRoom((prev) => (prev === rooms.length - 1 ? 0 : prev + 1))
  }

  const prevRoom = () => {
    setActiveRoom((prev) => (prev === 0 ? rooms.length - 1 : prev - 1))
  }

  const openRoomDetail = (roomId: number) => {
    setSelectedRoom(roomId)
  }

  const closeRoomDetail = () => {
    setSelectedRoom(null)
  }

  return (
    <section id="rooms" className="py-16 md:py-24 bg-[#f0e6d6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#6d1d2a] mb-4">Our Rooms</h2>
          <div className="w-20 h-1 bg-[#c9a227] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            17 unique rooms with modern style and traditional Thai décor, offering comfort and authentic experience.
          </p>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={rooms[activeRoom].image || "/placeholder.svg"}
                    alt={rooms[activeRoom].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-serif">{rooms[activeRoom].name}</h3>
                    <p className="text-sm text-white/80">
                      {rooms[activeRoom].size} • {rooms[activeRoom].capacity}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#c9a227] font-bold">{rooms[activeRoom].price}/night</span>
                  </div>
                  <p className="text-gray-600 mb-4">{rooms[activeRoom].description}</p>
                  <div className="mb-4">
                    <ul className="grid grid-cols-2 gap-2">
                      {rooms[activeRoom].features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-[#c9a227] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between mb-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Wifi size={14} />
                      <span>Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tv size={14} />
                      <span>Smart TV</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wind size={14} />
                      <span>AC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShoppingBag size={14} />
                      <span>Mini Fridge</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="border-[#6d1d2a] text-[#6d1d2a] hover:bg-[#6d1d2a] hover:text-white"
                      onClick={() => openRoomDetail(rooms[activeRoom].id)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button
                      className="bg-[#6d1d2a] text-white"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={prevRoom}
            className="absolute left-2 top-32 bg-white/80 hover:bg-white text-[#6d1d2a] p-2 rounded-full shadow-md z-10"
            aria-label="Previous room"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextRoom}
            className="absolute right-2 top-32 bg-white/80 hover:bg-white text-[#6d1d2a] p-2 rounded-full shadow-md z-10"
            aria-label="Next room"
          >
            <ChevronRight size={20} />
          </button>
          <div className="flex justify-center mt-4 gap-2">
            {rooms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRoom(idx)}
                className={`w-2 h-2 rounded-full ${
                  idx === activeRoom ? "bg-[#6d1d2a]" : "bg-[#6d1d2a]/30"
                } transition-all duration-300`}
                aria-label={`Go to room ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg grid grid-rows-[auto_1fr_auto]">
              <div className="relative h-56 md:h-64 group cursor-pointer" onClick={() => openRoomDetail(room.id)}>
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white border-none text-[#6d1d2a]"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
              {/* Room Card Content */}
              <div className="p-6 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-serif text-[#6d1d2a]">{room.name}</h3>
                  <span className="text-sm font-bold text-[#c9a227] whitespace-nowrap">{room.price}/night</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3 h-16 overflow-hidden">
                  {room.description}
                </p>
                {/* Features List */}
                <div className="mb-4">
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-500 mb-3 h-[68px] overflow-hidden">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center min-h-8">
                        <span className="w-1.5 h-1.5 bg-[#c9a227] rounded-full mr-1.5"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Amenities Icons */}
                <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
                  <div className="flex items-center gap-1">
                    <Wifi size={14} />
                    <span>Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tv size={14} />
                    <span>Smart TV</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wind size={14} />
                    <span>AC</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShoppingBag size={14} />
                    <span>Mini Fridge</span>
                  </div>
                </div>
              </div>

              {/* Buttons Container */}
              <div className="grid grid-cols-2 gap-3 px-6 pb-6 pt-2">
                <Button
                  variant="outline"
                  className="border-[#6d1d2a] text-[#6d1d2a] hover:bg-[#6d1d2a]/10 hover:text-[#6d1d2a] text-sm"
                  onClick={() => openRoomDetail(room.id)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Button>
                <Button
                  className="bg-[#6d1d2a] text-white text-sm"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Room Detail Modal */}
        {selectedRoom !== null && (
          <RoomDetailModal
            isOpen={selectedRoom !== null}
            onClose={closeRoomDetail}
            room={rooms.find((room) => room.id === selectedRoom)!}
          />
        )}
      </div>
    </section>
  )
}
