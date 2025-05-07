"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Star, ChevronRight, MapPin, Info, X, Check } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)

  const services = [
    {
      id: "herbal-massage",
      title: "Thai Herbal Massage",
      shortDescription: "Personalized herbal massage with traditional Thai techniques and your choice of scents",
      fullDescription:
        "Our signature Thai herbal massage combines warm herbal compresses with expert massage techniques passed down through generations. Choose your favorite herbal scents to create a personalized experience. The heat from the compress helps to relax muscles and improve circulation, while the herbs release essential oils that have therapeutic properties.",
      mainImage: "/spa-area-1.jpg",
      detailImages: ["/spa-area-1.jpg", "/spa-area-2.jpg", "/spa-area-3.jpg"],
      price: "800 ฿",
      duration: "1 hour",
      rating: 4.9,
      reviewCount: 124,
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
        {
          question: "Do you offer longer sessions?",
          answer:
            "Yes, we offer 2-hour sessions for 1,500 ฿, which includes a more comprehensive treatment with additional focus areas and extended relaxation time.",
        },
      ],
      color: "#8B7355",
      bgColor: "bg-[#F5F0E6]",
    },
    {
      id: "costume-rental",
      title: "Thai Costume & Photo Service",
      shortDescription:
        "Rent traditional Chakraphat style Thai costumes and have professional photos taken on our rooftop",
      fullDescription:
        "Experience the beauty of Thai culture with our exclusive costume rental and professional photography service. Choose from a variety of authentic Chakraphat style Thai costumes and have your photos taken at our specially designed rooftop photo spots. Our professional photographers will capture stunning images that will serve as beautiful mementos of your time in Thailand.",
      mainImage: "/dress-rental-area.jpg",
      detailImages: ["/dress-rental-area.jpg", "/costume-detail-1.png", "/costume-detail-2.png"],
      price: "Contact for pricing",
      duration: "3 hours",
      rating: 4.8,
      reviewCount: 86,
      benefits: [
        "Authentic cultural experience",
        "Professional photography",
        "Multiple costume options",
        "Hair and makeup assistance",
        "Digital and printed photos",
      ],
      includes: [
        "Traditional Thai costume rental (Chakraphat style)",
        "Professional photography session on our rooftop",
        "Access to special photo spots",
        "Digital copies of all photos",
        "One printed photo in decorative frame",
      ],
      highlights: [
        "Museum-quality traditional Thai costumes",
        "Beautiful rooftop photo spots",
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
      color: "#D2B48C",
      bgColor: "bg-[#F5F0E6]",
    },
    {
      id: "food-workshop",
      title: "Thai Food Workshop",
      shortDescription:
        "Learn to prepare authentic Thai dishes like Som Tum (papaya salad) in our weekly cooking classes",
      fullDescription:
        "Discover the secrets of Thai cuisine in our interactive cooking workshops held weekly. Our expert chefs will guide you through preparing authentic Thai dishes like the popular Som Tum (papaya salad) using traditional techniques and fresh, local ingredients. Learn about the essential herbs and spices that give Thai food its distinctive flavors, and enjoy the fruits of your labor in a communal meal at the end of the class.",
      mainImage: "/food-workshop-area-1.jpg",
      detailImages: ["/food-workshop-area-1.jpg", "/food-workshop-area-2.jpg"],
      price: "1,800 ฿",
      duration: "3 hours",
      rating: 4.9,
      reviewCount: 102,
      benefits: [
        "Hands-on cooking experience",
        "Learn authentic Thai recipes",
        "Understand Thai ingredients and spices",
        "Master traditional cooking techniques",
        "Take home recipe cards",
      ],
      includes: [
        "Market tour to select fresh ingredients",
        "Preparation of 4 authentic Thai dishes including Som Tum",
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
            "The menu varies weekly, but typically includes Som Tum (papaya salad), a curry, a stir-fry, and a dessert. Popular dishes include Tom Yum Goong, Pad Thai, Green Curry, and Mango Sticky Rice.",
        },
      ],
      color: "#8B7355",
      bgColor: "bg-[#F5F0E6]",
    },
  ]

  const openServiceDialog = (serviceId: string) => {
    setOpenDialog(serviceId)
    setActiveTab("overview")
  }

  const dialogServiceData = services.find((s) => s.id === openDialog)

  return (
    <section id="services" className={`py-16 md:py-24 bg-[#F5F0E6]`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B7355] mb-4">Our Signature Services</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Experience authentic Thai wellness, cuisine, and cultural traditions with our exclusive services.
          </p>
        </div>

        {}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col"
            >
              {}
              <div className="relative h-[280px]">
                <Image
                  src={service.mainImage || "/placeholder.svg"} 
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="bg-white/80 hover:bg-white text-[#8B7355] border-none"
                    onClick={() => openServiceDialog(service.id)}
                  >
                    View Details
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    className="bg-white/90 backdrop-blur-sm hover:bg-white border-none font-medium px-3 py-1 text-sm"
                    style={{ color: service.color }}
                  >
                    {service.price}
                  </Badge>
                </div>
              </div>

              {}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-serif mb-2" style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">{service.shortDescription}</p>

                {}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-5 border-t border-b border-gray-100 py-3">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-1 text-[#D2B48C] fill-[#D2B48C]" />
                    <span>{service.rating}</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-auto bg-[#6d1d2a] hover:bg-[#a02d3f] text-white"
                  onClick={() => openServiceDialog(service.id)}
                >
                  View Details
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {}
        <Dialog open={!!openDialog} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-4xl p-0 bg-white overflow-hidden">
            {dialogServiceData && (
              <>
                <DialogTitle className="sr-only">{dialogServiceData.title}</DialogTitle>
                <div className="flex flex-col h-[90vh]">
                  {}
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
                              <Star size={16} className="mr-1 text-[#D2B48C] fill-[#D2B48C]" />
                              <span>
                                {dialogServiceData.rating} ({dialogServiceData.reviewCount} reviews)
                              </span>
                            </div>
                            <div className="flex items-center mr-4">
                              <Clock size={16} className="mr-1" />
                              <span>{dialogServiceData.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-[#D2B48C] hover:bg-[#D2B48C] text-white text-lg py-1 px-3">
                          {dialogServiceData.price}
                        </Badge>
                      </div>
                    </div>
                    {}
                  </div>

                  {}
                  <Tabs
                    defaultValue="overview"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="flex-1 overflow-hidden flex flex-col"
                  >
                    {}
                    <div className="border-b">
                      <TabsList className="h-12 w-full justify-start rounded-none bg-transparent p-0">
                        <TabsTrigger
                          value="overview"
                          className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#8B7355] data-[state=active]:text-[#8B7355] data-[state=active]:shadow-none"
                        >
                          Overview
                        </TabsTrigger>
                        <TabsTrigger
                          value="details"
                          className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#8B7355] data-[state=active]:text-[#8B7355] data-[state=active]:shadow-none"
                        >
                          What's Included
                        </TabsTrigger>
                        <TabsTrigger
                          value="gallery"
                          className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#8B7355] data-[state=active]:text-[#8B7355] data-[state=active]:shadow-none"
                        >
                          Gallery
                        </TabsTrigger>
                        <TabsTrigger
                          value="faq"
                          className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-[#8B7355] data-[state=active]:text-[#8B7355] data-[state=active]:shadow-none"
                        >
                          FAQ
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    {}
                    <div className="overflow-y-auto flex-1 p-6">
                      <TabsContent value="overview" className="mt-0 space-y-6">
                        <div>
                          <h3 className="text-xl font-serif text-[#8B7355] mb-3">About this experience</h3>
                          <p className="text-gray-700">{dialogServiceData.fullDescription}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-[#D2B48C] mr-3" />
                            <div>
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="font-medium">{dialogServiceData.duration}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-serif text-[#8B7355] mb-3">Highlights</h3>
                          <ul className="grid grid-cols-1 gap-2">
                            {dialogServiceData.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-[#D2B48C] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-serif text-[#8B7355] mb-3">Benefits</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {dialogServiceData.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-[#D2B48C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="details" className="mt-0">
                        <div>
                          <h3 className="text-xl font-serif text-[#8B7355] mb-4">What's Included</h3>
                          <ul className="space-y-3">
                            {dialogServiceData.includes.map((item, index) => (
                              <li key={index} className="flex items-start bg-[#F5F0E6] p-3 rounded-md">
                                <Check className="h-5 w-5 text-[#D2B48C] mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="gallery" className="mt-0">
                        <h3 className="text-xl font-serif text-[#8B7355] mb-4">Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {dialogServiceData.detailImages.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B7355]"
                              role="button"
                              tabIndex={0}
                              onClick={() => setSelectedGalleryImage(img)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  setSelectedGalleryImage(img)
                                }
                              }}
                            >
                              <Image
                                src={img || "/placeholder.svg"}
                                alt={`${dialogServiceData.title} detail ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="faq" className="mt-0">
                        <h3 className="text-xl font-serif text-[#8B7355] mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                          {dialogServiceData.faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-200 pb-4">
                              <h4 className="font-medium text-[#8B7355] mb-2">{faq.question}</h4>
                              <p className="text-gray-700">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </div>

                    {}
                    <div className="p-4 border-t bg-[#F5F0E6]">
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
              </>
            )}
          </DialogContent>
        </Dialog>

        {}
        <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <DialogTitle className="sr-only">Enlarged Service Gallery Image</DialogTitle>
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute right-4 top-4 z-10 bg-white/80 p-2 rounded-full"
              aria-label="Close enlarged image view"
            >
              <X className="h-4 w-4" />
            </button>
            {selectedGalleryImage && (
              <div className="relative h-[80vh]">
                <Image
                  src={selectedGalleryImage}
                  alt="Enlarged gallery image"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
