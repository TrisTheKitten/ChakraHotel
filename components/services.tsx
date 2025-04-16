"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Star, Users, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { X, Check } from "lucide-react"

export default function Services() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const services = [
    {
      id: "herbal-massage",
      title: "Thai Herbal Massage",
      shortDescription: "Traditional Thai massage with medicinal herbs for deep relaxation and healing",
      fullDescription:
        "This therapy combines warm herbal compresses—filled with medicinal Thai herbs like lemongrass, ginger, turmeric, and kaffir lime—with expert Thai massage techniques passed down through generations. The heat from the compress helps to relax muscles and improve circulation, while the herbs release essential oils that have therapeutic properties.",
      mainImage: "/service-thai-massage.png",
      detailImages: ["/massage-detail-1.png", "/massage-detail-2.png", "/massage-detail-3.png"],
      price: "600 ฿",
      duration: "1 hour",
      rating: 4.9,
      reviewCount: 124,
      maxParticipants: 1,
      benefits: [
        "Relieves muscle tension and pain",
        "Improves circulation and energy flow",
        "Reduces stress and anxiety",
        "Enhances flexibility and range of motion",
        "Promotes deep relaxation and well-being",
      ],
      includes: [
        "Personal scent consultation",
        "Herbal compress preparation",
        "Full body Thai massage",
        "Herbal tea service",
        "Post-treatment relaxation",
      ],
      highlights: [
        "Traditional techniques passed down through generations",
        "Organic herbs grown in our garden",
        "Certified massage therapists",
      ],
      faqs: [
        {
          question: "Is Thai herbal massage suitable for everyone?",
          answer:
            "Thai herbal massage is suitable for most people, but it's not recommended for pregnant women, people with certain medical conditions, or those who have recently undergone surgery. Please consult with our staff before booking if you have any concerns.",
        },
        {
          question: "What should I wear during the massage?",
          answer:
            "We provide comfortable clothing for you to change into before your massage. You may keep your undergarments on if you prefer.",
        },
        {
          question: "How will I feel after the massage?",
          answer:
            "Most guests feel deeply relaxed, with reduced muscle tension and improved mobility. We recommend drinking plenty of water after your massage to help flush toxins from your body.",
        },
      ],
      color: "#6d1d2a",
      bgColor: "bg-[#f0e6d6]",
    },
    {
      id: "costume-rental",
      title: "Thai Costume & Photo Service",
      shortDescription: "Experience Thai culture with traditional costume rental and professional photography",
      fullDescription:
        "Immerse yourself in Thai culture with our exclusive costume rental and professional photography service. Choose from a variety of authentic Thai costumes and have your photos taken in our specially designed setting. Our professional photographers will capture stunning images that will serve as beautiful mementos of your time in Thailand.",
      mainImage: "/service-thai-costume.png",
      detailImages: ["/costume-detail-1.png", "/costume-detail-2.png", "/costume-detail-3.png"],
      price: "1,500 ฿",
      duration: "3 hours",
      rating: 4.8,
      reviewCount: 86,
      maxParticipants: 4,
      benefits: [
        "Authentic cultural experience",
        "Professional photography",
        "Multiple costume options",
        "Hair and makeup assistance",
        "Digital and printed photos",
      ],
      includes: [
        "Traditional Thai costume rental",
        "Professional photography session",
        "Access to special photo locations",
        "Digital copies of all photos",
        "One printed photo in decorative frame",
      ],
      highlights: [
        "Museum-quality traditional Thai costumes",
        "Professional photography studio",
        "Expert styling assistance",
      ],
      faqs: [
        {
          question: "How many costume changes are included?",
          answer:
            "The standard package includes one costume, but you can add additional costume changes for an extra fee. Each additional costume change costs 500 THB.",
        },
        {
          question: "How long does the photo session take?",
          answer:
            "The photo session typically takes about 1-2 hours, depending on the number of costume changes and photo locations.",
        },
        {
          question: "When will I receive my photos?",
          answer:
            "Digital photos will be available within 24 hours. Printed photos will be ready for pickup within 48 hours, or we can arrange delivery to your room.",
        },
      ],
      color: "#c9a227",
      bgColor: "bg-[#f8f3ea]",
    },
    {
      id: "food-workshop",
      title: "Thai Food Workshop",
      shortDescription: "Learn to prepare authentic Thai dishes with our expert chefs in a hands-on cooking class",
      fullDescription:
        "Discover the secrets of Thai cuisine in our interactive cooking workshop. Our expert chefs will guide you through preparing authentic Thai dishes using traditional techniques and fresh, local ingredients. Learn about the essential herbs and spices that give Thai food its distinctive flavors, and enjoy the fruits of your labor in a communal meal at the end of the class.",
      mainImage: "/service-food-workshop.png",
      detailImages: ["/food-detail-1.png", "/food-detail-2.png", "/food-detail-3.png"],
      price: "1,800 ฿",
      duration: "3 hours",
      rating: 4.9,
      reviewCount: 102,
      maxParticipants: 8,
      benefits: [
        "Hands-on cooking experience",
        "Learn authentic Thai recipes",
        "Understand Thai ingredients and spices",
        "Master traditional cooking techniques",
        "Take home recipe cards",
      ],
      includes: [
        "Market tour to select fresh ingredients",
        "Preparation of 4 authentic Thai dishes",
        "Cooking equipment and ingredients",
        "Enjoy your creations in a communal meal",
        "Recipe booklet to take home",
      ],
      highlights: [
        "Small class sizes for personalized attention",
        "Fresh ingredients from local markets",
        "Recipes adapted for home cooking",
      ],
      faqs: [
        {
          question: "Do I need prior cooking experience?",
          answer:
            "No prior cooking experience is necessary. Our chefs will guide you through each step of the process, making it accessible for beginners while still engaging for experienced cooks.",
        },
        {
          question: "Can dietary restrictions be accommodated?",
          answer:
            "Yes, we can accommodate vegetarian, vegan, gluten-free, and most other dietary restrictions. Please inform us of any dietary needs when booking.",
        },
        {
          question: "What dishes will we cook?",
          answer:
            "The menu varies, but typically includes a curry, a stir-fry, a soup, and a dessert. Popular dishes include Tom Yum Goong, Pad Thai, Green Curry, and Mango Sticky Rice.",
        },
      ],
      color: "#aa0c0c",
      bgColor: "bg-[#f0e6d6]",
    },
  ]

  const openServiceDialog = (serviceId: string) => {
    setOpenDialog(serviceId)
    setActiveTab("overview")
  }

  const dialogServiceData = services.find((s) => s.id === openDialog)

  return (
    <section id="services" className="py-16 md:py-24 bg-[#f8f3ea]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#6d1d2a] mb-4">Our Signature Services</h2>
          <div className="w-20 h-1 bg-[#c9a227] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Experience authentic Thai wellness, cuisine, and cultural traditions with our exclusive services.
          </p>
        </div>

        {/* Services Cards - Redesigned for better readability */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              {/* Service Image */}
              <div className="relative h-[220px]">
                <Image
                  src={service.mainImage || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    className="bg-white/90 backdrop-blur-sm text-[#6d1d2a] hover:bg-white border-none font-medium"
                    style={{ color: service.color }}
                  >
                    {service.price}
                  </Badge>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2" style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 min-h-[50px]">{service.shortDescription}</p>

                {/* Service Highlights */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-5 border-t border-b border-gray-100 py-3">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>Max {service.maxParticipants}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-1 text-[#c9a227] fill-[#c9a227]" />
                    <span>{service.rating}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-5">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check size={14} className="mr-2 mt-1 text-[#c9a227]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full"
                  style={{ backgroundColor: service.color, color: "white" }}
                  onClick={() => openServiceDialog(service.id)}
                >
                  View Details
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Dialog */}
        <Dialog open={!!openDialog} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-4xl p-0 bg-white overflow-hidden">
            {dialogServiceData && (
              <div className="flex flex-col max-h-[90vh]">
                {/* Header Image */}
                <div className="relative h-[250px]">
                  <Image
                    src={dialogServiceData.mainImage || "/placeholder.svg"}
                    alt={dialogServiceData.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex justify-between items-end">
                      <div>
                        <h2 className="text-3xl font-serif mb-2">{dialogServiceData.title}</h2>
                        <div className="flex items-center text-sm">
                          <div className="flex items-center mr-4">
                            <Star size={16} className="mr-1 text-[#c9a227] fill-[#c9a227]" />
                            <span>
                              {dialogServiceData.rating} ({dialogServiceData.reviewCount} reviews)
                            </span>
                          </div>
                          <div className="flex items-center mr-4">
                            <Users size={16} className="mr-1" />
                            <span>Up to {dialogServiceData.maxParticipants} people</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-[#c9a227] hover:bg-[#c9a227] text-white text-lg py-1 px-3">
                        {dialogServiceData.price}
                      </Badge>
                    </div>
                  </div>
                  <DialogClose className="absolute right-4 top-4 rounded-full bg-white/20 p-2 backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
                    <X size={20} />
                  </DialogClose>
                </div>

                {/* Tabs Navigation */}
                <Tabs
                  defaultValue="overview"
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="flex-1 overflow-hidden"
                >
                  <div className="border-b">
                    <TabsList className="h-12 w-full justify-start rounded-none bg-transparent p-0">
                      <TabsTrigger
                        value="overview"
                        className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#6d1d2a] data-[state=active]:text-[#6d1d2a] data-[state=active]:shadow-none"
                      >
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="details"
                        className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#6d1d2a] data-[state=active]:text-[#6d1d2a] data-[state=active]:shadow-none"
                      >
                        What's Included
                      </TabsTrigger>
                      <TabsTrigger
                        value="gallery"
                        className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#6d1d2a] data-[state=active]:text-[#6d1d2a] data-[state=active]:shadow-none"
                      >
                        Gallery
                      </TabsTrigger>
                      <TabsTrigger
                        value="faq"
                        className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#6d1d2a] data-[state=active]:text-[#6d1d2a] data-[state=active]:shadow-none"
                      >
                        FAQ
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="overflow-y-auto max-h-[calc(90vh-350px)] p-6">
                    <TabsContent value="overview" className="mt-0 space-y-6">
                      <div>
                        <h3 className="text-xl font-serif text-[#6d1d2a] mb-3">About this experience</h3>
                        <p className="text-gray-700">{dialogServiceData.fullDescription}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-[#c9a227] mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">Duration</p>
                            <p className="font-medium">{dialogServiceData.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-[#c9a227] mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">Group Size</p>
                            <p className="font-medium">Up to {dialogServiceData.maxParticipants} people</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-serif text-[#6d1d2a] mb-3">Highlights</h3>
                        <ul className="grid grid-cols-1 gap-2">
                          {dialogServiceData.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-[#c9a227] mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-serif text-[#6d1d2a] mb-3">Benefits</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {dialogServiceData.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="details" className="mt-0">
                      <div>
                        <h3 className="text-xl font-serif text-[#6d1d2a] mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {dialogServiceData.includes.map((item, index) => (
                            <li key={index} className="flex items-start bg-[#f8f3ea] p-3 rounded-md">
                              <Check className="h-5 w-5 text-[#c9a227] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="gallery" className="mt-0">
                      <h3 className="text-xl font-serif text-[#6d1d2a] mb-4">Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={dialogServiceData.mainImage || "/placeholder.svg"}
                            alt={`${dialogServiceData.title} main image`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        {dialogServiceData.detailImages.map((img, idx) => (
                          <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`${dialogServiceData.title} detail ${idx + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="faq" className="mt-0">
                      <h3 className="text-xl font-serif text-[#6d1d2a] mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        {dialogServiceData.faqs.map((faq, idx) => (
                          <div key={idx} className="border-b border-gray-200 pb-4">
                            <h4 className="font-medium text-[#6d1d2a] mb-2">{faq.question}</h4>
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </div>

                  <div className="p-4 border-t bg-[#f8f3ea]">
                    <Button
                      className="w-full bg-[#6d1d2a] hover:bg-[#a02d3f] text-white py-6"
                      onClick={() => {
                        setOpenDialog(null)
                        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Book This Experience
                    </Button>
                  </div>
                </Tabs>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
