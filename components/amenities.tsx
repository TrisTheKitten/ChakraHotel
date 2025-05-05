import { Utensils, Wifi, Clock, Briefcase, Bike, Camera, Shirt, SpadeIcon as Spa, Coffee } from "lucide-react"

export default function Amenities() {
  const amenities = [
    {
      icon: <Utensils className="h-8 w-8 text-[#8B7355]" />,
      title: "Restaurant",
      description:
        "Thai fusion and European cuisine using local ingredients and seasonal menus with vegetarian options",
    },
    {
      icon: <Wifi className="h-8 w-8 text-[#8B7355]" />,
      title: "Free Wi-Fi",
      description: "Complimentary high-speed Wi-Fi throughout the property",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#8B7355]" />,
      title: "24-Hour Front Desk",
      description: "Round-the-clock front desk and concierge services",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#8B7355]" />,
      title: "Luggage Storage",
      description: "Secure luggage storage available for early arrivals and late departures",
    },
    {
      icon: <Bike className="h-8 w-8 text-[#8B7355]" />,
      title: "Transportation",
      description: "Rental services for bikes and tuk-tuks to explore the local area",
    },
    {
      icon: <Coffee className="h-8 w-8 text-[#8B7355]" />,
      title: "Food Workshop",
      description: "Weekly Thai cooking workshops featuring popular dishes like Som Tum (papaya salad)",
    },
    {
      icon: <Camera className="h-8 w-8 text-[#8B7355]" />,
      title: "Photoshoot Service",
      description: "Professional photography services with traditional Thai costumes on our rooftop",
    },
    {
      icon: <Shirt className="h-8 w-8 text-[#8B7355]" />,
      title: "Costume Rental",
      description: "Chakraphat style Thai traditional costume rental service for authentic cultural experiences",
    },
    {
      icon: <Spa className="h-8 w-8 text-[#8B7355]" />,
      title: "Herbal Massage",
      description: "Personalized Thai herbal massage with your choice of scents for relaxation and wellness",
    },
  ]

  return (
    <section id="amenities" className="py-16 md:py-24 bg-[#F5F0E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B7355] mb-4">Amenities & Facilities</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Experience our comprehensive range of services designed to enhance your stay and connect you with Thai
            culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-[#F5F0E6] p-4 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-serif text-[#8B7355] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
