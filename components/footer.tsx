import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Globe, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#8B7355] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo-white.png" alt="Chakra Hotel Logo" width={150} height={60} className="h-auto mb-4" />
            <p className="text-white/80 mb-4">
              Experience the perfect blend of Thai tradition and modern comfort at Chakra Hotel.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-[#D2B48C]">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-[#D2B48C]">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-[#D2B48C]">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#rooms" className="text-white/80 hover:text-white">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-white/80 hover:text-white">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-white/80 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-white/80 hover:text-white">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#D2B48C]" />
                <span className="text-white/80">43/7 Soi Lang Bot Phram, Sao Chingcha, Phra Nakhon, Bangkok</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#D2B48C]" />
                <span className="text-white/80">081-123-4567</span>
              </li>
              <li className="flex items-center">
                <Globe size={18} className="mr-2 text-[#D2B48C]" />
                <span className="text-white/80">www.chakrahotel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#D2B48C] hover:bg-[#c9a678] px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60"></div>
      </div>
    </footer>
  )
}
