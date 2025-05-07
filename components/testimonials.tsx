"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      image: "https:
      rating: 5,
      text: "Chakra Hotel provided the perfect blend of traditional Thai culture and modern comfort. The herbal massage was the highlight of my stay - absolutely rejuvenating!",
    },
    {
      id: 2,
      name: "David Chen",
      location: "Singapore",
      image: "https:
      rating: 5,
      text: "The attention to detail in the Thai décor and the warmth of the staff made our stay memorable. The food workshop gave us insights into authentic Thai cuisine.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "Australia",
      image: "https:
      rating: 4,
      text: "A beautiful boutique hotel with a strong sense of Thai heritage. The rooms are comfortable and the staff went above and beyond to make our stay special.",
    },
    {
      id: 4,
      name: "Takashi Yamamoto",
      location: "Japan",
      image: "/avatar-4.jpg",
      rating: 5,
      text: "The Thai costume rental and photo shoot experience was incredible! We have amazing photos to remember our trip. The hotel's attention to cultural details is impressive.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#6d1d2a] mb-4">Guest Experiences</h2>
          <div className="w-20 h-1 bg-[#c9a227] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Discover what our guests have to say about their stay at Chakra Hotel.
          </p>
        </div>

        {}
        <div className="md:hidden relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              onTouchStart={() => setAutoplay(false)}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#6d1d2a]">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonials[activeIndex].rating ? "text-[#c9a227] fill-[#c9a227]" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonials[activeIndex].text}"</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx)
                  setAutoplay(false)
                }}
                className={`w-2 h-2 rounded-full ${
                  idx === activeIndex ? "bg-[#6d1d2a]" : "bg-[#6d1d2a]/30"
                } transition-all duration-300`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#6d1d2a]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "text-[#c9a227] fill-[#c9a227]" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
