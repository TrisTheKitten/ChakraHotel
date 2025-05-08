"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Rooms from "@/components/rooms"
import Services from "@/components/services"
import FoodMenu from '@/components/food-menu';
import Amenities from "@/components/amenities"
import Location from "@/components/location"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"
import BookingForm from "@/components/booking-form"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main
      className={`min-h-screen bg-[#F5F0E6] ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <FoodMenu />
      <Amenities />
      <Gallery />
      <Location />
      <section className="py-16 bg-[#F5F0E6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#8B7355]">Experience Thai Wellness & Tradition</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Book your stay at Chakra Hotel and immerse yourself in a unique blend of traditional Thai hospitality and
            modern comfort.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-[#6d1d2a] hover:bg-[#a02d3f] text-white px-8 py-6 rounded-md text-lg flex items-center gap-2"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calendar className="h-5 w-5" />
              Book Your Stay Now
            </Button>
          </div>
        </div>
      </section>
      <div id="booking" className="py-16">
        <BookingForm />
      </div>
      <Footer />
    </main>
  )
}
