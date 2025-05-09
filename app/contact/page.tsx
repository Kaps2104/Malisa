"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useSearchParams } from "next/navigation"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceParam || "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will contact you shortly.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5668476/pexels-photo-5668476.jpeg"
          alt="Law office"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-white text-center">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8">GET IN TOUCH</h2>
                <p className="text-lg text-gray-600 mb-8">
                  If you need legal assistance or have questions about our services, please don't hesitate to contact
                  Malisa and Partners Legal Practitioners. Our team is ready to help you with your legal needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Office Location</h3>
                      <p className="text-gray-600">
                        Plot No. 8A Kawama Road,
                        <br />
                        Woodlands, Lusaka,
                        <br />
                        Zambia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Phone</h3>
                      <Link href="tel:0211356035" className="text-gray-600 hover:text-gray-800 relative group">
                        0211 356 035
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Email</h3>
                      <Link
                        href="mailto:info@malisaandpartners.law"
                        className="text-gray-600 hover:text-gray-800 relative group"
                      >
                        info@malisaandpartners.law
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:30 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h2 className="text-2xl font-medium text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a Service</option>
                      <option value="corporate-law">Corporate Law</option>
                      <option value="commercial-litigation">Commercial Litigation</option>
                      <option value="employment-law">Employment Law</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="intellectual-property">Intellectual Property</option>
                      <option value="international-law">International Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    <p>
                      This form is for general inquiries only. Please do not include confidential or sensitive
                      information in your message.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-6">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8 text-center">OUR LOCATION</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
              {/* In a real implementation, this would be a Google Maps embed */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
