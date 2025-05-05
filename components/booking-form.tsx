"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined)
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined)
  const [serviceDate, setServiceDate] = useState<Date | undefined>(undefined)
  const [bookingType, setBookingType] = useState("room")
  const [roomType, setRoomType] = useState("")
  const [adults, setAdults] = useState("")
  const [children, setChildren] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [serviceDuration, setServiceDuration] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would handle the booking submission
    alert("Thank you for your booking request! We will contact you shortly to confirm your reservation.")
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#6d1d2a] p-6 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-serif">Book Your Experience</h2>
          <p className="mt-2">Experience the perfect blend of Thai tradition and modern comfort</p>
        </div>

        <Tabs value={bookingType} onValueChange={setBookingType} className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-none">
            <TabsTrigger value="room" className="py-3 text-base font-serif">
              Room Booking
            </TabsTrigger>
            <TabsTrigger value="service" className="py-3 text-base font-serif">
              Service Booking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="room">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="room-type">Room Type</Label>
                  <Select required value={roomType} onValueChange={setRoomType} aria-label="Select room type">
                    <SelectTrigger>
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">Deluxe Room - 2,200 ฿</SelectItem>
                      <SelectItem value="suite">Suite Room - 3,200 ฿</SelectItem>
                      <SelectItem value="family">Family Room - 3,800 ฿</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adults">Adults</Label>
                  <Select required value={adults} onValueChange={setAdults}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of adults" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Adult</SelectItem>
                      <SelectItem value="2">2 Adults</SelectItem>
                      <SelectItem value="3">3 Adults</SelectItem>
                      <SelectItem value="4">4 Adults</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="children">Children</Label>
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of children" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No Children</SelectItem>
                      <SelectItem value="1">1 Child</SelectItem>
                      <SelectItem value="2">2 Children</SelectItem>
                      <SelectItem value="3">3 Children</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-requests">Special Requests</Label>
                <textarea
                  id="special-requests"
                  className="w-full min-h-[100px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d1d2a]"
                  placeholder="Any special requests or requirements?"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-[#6d1d2a] hover:bg-[#a02d3f] text-white py-6 text-lg">
                Request Room Booking
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * Your booking request will be confirmed based on availability. We will contact you shortly.
              </p>
            </form>
          </TabsContent>

          <TabsContent value="service">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name-service">Full Name</Label>
                  <Input id="name-service" placeholder="Enter your full name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-service">Email Address</Label>
                  <Input id="email-service" type="email" placeholder="Enter your email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone-service">Phone Number</Label>
                  <Input id="phone-service" placeholder="Enter your phone number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select required value={serviceType} onValueChange={setServiceType} aria-label="Select service type">
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="herbal-massage">Thai Herbal Massage</SelectItem>
                      <SelectItem value="costume-rental">Thai Costume Rental</SelectItem>
                      <SelectItem value="food-workshop">Thai Food Workshop - 1,800 ฿</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {serviceType === "herbal-massage" && (
                  <div className="space-y-2">
                    <Label htmlFor="service-duration">Session Duration</Label>
                    <Select required value={serviceDuration} onValueChange={setServiceDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select session duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-hour">1 Hour - 800 ฿</SelectItem>
                        <SelectItem value="2-hour">2 Hours - 1,500 ฿</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {serviceDate ? format(serviceDate, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={serviceDate} onSelect={setServiceDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-preference">Preferred Time</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9:00 - 12:00)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (13:00 - 16:00)</SelectItem>
                      <SelectItem value="evening">Evening (17:00 - 20:00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-requests-service">Special Requests</Label>
                <textarea
                  id="special-requests-service"
                  className="w-full min-h-[100px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d1d2a]"
                  placeholder="Any special requests or requirements?"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-[#6d1d2a] hover:bg-[#a02d3f] text-white py-6 text-lg">
                Request Service Booking
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * Your service request will be confirmed based on availability. We will contact you shortly.
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
