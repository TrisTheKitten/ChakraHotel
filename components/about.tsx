"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B7355] mb-4">About Us</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Where Thai heritage meets modern elegance, creating a sanctuary for mindful travelers seeking authentic
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/lobby-area-1.jpg"
              alt="Chakra Hotel Interior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-[#8B7355] mb-4">
              Welcome to CHAKRA Hotel – Where Thai Heritage Meets Modern Elegance
            </h3>
            <p className="mb-4 text-gray-700">
              CHAKRA Hotel is a refined escape that blends the timeless beauty of Thai tradition with modern
              sophistication. Our identity is inspired by the elegance of the Chakraphat traditional Thai dress,
              reflecting a harmonious fusion of cultural richness and contemporary design.
            </p>
            <p className="mb-6 text-gray-700">
              From the moment you arrive, you'll be immersed in an atmosphere that celebrates heritage, artistry, and
              comfort. Every space within CHAKRA Hotel is thoughtfully curated to honor Thai history while offering a
              modern and serene retreat for today's traveler.
            </p>

            <div className="bg-[#F5F0E6] p-6 rounded-lg mb-6">
              <h4 className="font-serif text-[#8B7355] text-xl mb-2 text-center">
                "ROOTED IN TRADITION, RESTORED IN WELLNESS."
              </h4>
            </div>

            <Button
              className="w-full bg-[#6d1d2a] hover:bg-[#a02d3f] text-white"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Discover Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
