"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F5F0E6] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Chakra Hotel Logo" width={150} height={60} className="h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-[#8B7355] hover:text-[#6d5a43] font-medium">
              About
            </Link>
            <Link href="#rooms" className="text-[#8B7355] hover:text-[#6d5a43] font-medium">
              Rooms
            </Link>
            <Link href="#services" className="text-[#8B7355] hover:text-[#6d5a43] font-medium">
              Services
            </Link>
            <Link href="#amenities" className="text-[#8B7355] hover:text-[#6d5a43] font-medium">
              Amenities
            </Link>
            <Link href="#gallery" className="text-[#8B7355] hover:text-[#6d5a43] font-medium">
              Gallery
            </Link>
            <Link href="#location" className="text-[#8B7355] hover:text-[#6d5a43] font-medium">
              Location
            </Link>
            <Button
              className="bg-[#6d1d2a] hover:bg-[#a02d3f] text-white"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#8B7355]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F0E6] border-t border-[#8B7355]/10 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-[#8B7355] hover:text-[#6d5a43] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#rooms"
              className="text-[#8B7355] hover:text-[#6d5a43] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="#services"
              className="text-[#8B7355] hover:text-[#6d5a43] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#amenities"
              className="text-[#8B7355] hover:text-[#6d5a43] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="#gallery"
              className="text-[#8B7355] hover:text-[#6d5a43] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#location"
              className="text-[#8B7355] hover:text-[#6d5a43] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </Link>
            <Button
              className="bg-[#6d1d2a] hover:bg-[#a02d3f] text-white w-full"
              onClick={() => {
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                setIsMenuOpen(false)
              }}
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
