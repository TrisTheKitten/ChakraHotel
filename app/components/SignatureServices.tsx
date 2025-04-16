import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ChevronRight } from "lucide-react"

export default function SignatureServices() {
  const services = [
    {
      title: "Thai Herbal Massage",
      description: "Traditional Thai massage with medicinal herbs for deep relaxation and healing",
      mainImage: "/thai-massage-main.jpg",
      galleryImages: [
        "/thai-massage-1.jpg",
        "/thai-massage-2.jpg", 
        "/thai-massage-3.jpg",
        "/thai-massage-4.jpg"
      ],
      price: "600 ฿",
      duration: "1 hour",
      maxParticipants: "Max 1",
      rating: "4.9",
      highlights: [
        "Traditional techniques passed down through generations",
        "Organic herbs grown in our garden"
      ],
      buttonColor: "bg-[#8B0000]" // Deep red color
    },
    {
      title: "Thai Costume & Photo Service",
      description: "Experience Thai culture with traditional costume rental and professional photography",
      mainImage: "/thai-costume-main.jpg",
      galleryImages: [
        "/thai-costume-1.jpg",
        "/thai-costume-2.jpg", 
        "/thai-costume-3.jpg",
        "/thai-costume-4.jpg"
      ],
      price: "1,500 ฿",
      duration: "3 hours",
      maxParticipants: "Max 4",
      rating: "4.8",
      highlights: [
        "Museum-quality traditional Thai costumes",
        "Professional photography studio"
      ],
      buttonColor: "bg-[#B8860B]" // Dark goldenrod color
    },
    {
      title: "Thai Food Workshop",
      description: "Learn to prepare authentic Thai dishes with our expert chefs in a hands-on cooking class",
      mainImage: "/thai-food-main.jpg",
      galleryImages: [
        "/thai-food-1.jpg",
        "/thai-food-2.jpg", 
        "/thai-food-3.jpg",
        "/thai-food-4.jpg"
      ],
      price: "1,800 ฿",
      duration: "3 hours",
      maxParticipants: "Max 8",
      rating: "4.9",
      highlights: [
        "Small class size for personalized attention",
        "Fresh ingredients from local markets"
      ],
      buttonColor: "bg-[#8B0000]" // Deep red color
    }
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B0000] mb-3">Our Signature Services</h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience authentic Thai wellness, cuisine, and cultural traditions with our exclusive services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              {/* Main Image with Price Tag */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.mainImage}
                  alt={`${service.title} main image`}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {service.price}
                </div>
              </div>
              
              {/* Gallery Images Grid */}
              <div className="grid grid-cols-4 gap-1 p-1">
                {service.galleryImages.map((img, imgIdx) => (
                  <div key={imgIdx} className="aspect-square overflow-hidden rounded">
                    <img 
                      src={img} 
                      alt={`${service.title} gallery ${imgIdx+1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                ))}
              </div>

              <CardContent className="pt-5 pb-2">
                <h3 className="text-xl font-serif text-[#8B0000] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{service.maxParticipants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{service.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-sm text-gray-700 mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-[#B8860B] mt-1">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-0 pb-4">
                <Button 
                  className={`w-full ${service.buttonColor} text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-1`}
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 