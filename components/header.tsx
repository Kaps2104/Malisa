"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Very simple scroll handler
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10)
    })
  }

  return (
    <header className={cn("fixed left-0 top-0 z-50 w-full", scrolled ? "bg-white shadow-md" : "bg-transparent")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="z-10 flex items-center">
          <div className="relative h-16 w-56 md:h-20 md:w-64">
            {scrolled ? (
              <Image
                src="/images/malisa_partners_logo_transparent.png"
                alt="Malisa & Partners"
                fill
                className="object-contain"
              />
            ) : (
              <div className="text-white">
                <Image
                  src="/images/malisa_partners_logo_transparent.png"
                  alt="Malisa & Partners"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {[
              { name: "HOME", href: "/" },
              { name: "ABOUT", href: "/about" },
              { name: "PRACTICE AREAS", href: "/practice-areas" },
              { name: "OUR TEAM", href: "/team" },
              { name: "CONTACT", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn("text-sm font-light tracking-wider", scrolled ? "text-gray-800" : "text-white")}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone Number */}
        <div className="hidden lg:block">
          <Link
            href="tel:0211356035"
            className={cn(
              "flex items-center text-lg font-light tracking-wider",
              scrolled ? "text-gray-800" : "text-white",
            )}
          >
            <Phone className="mr-2 h-4 w-4" />
            0211 356 035
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("z-50 lg:hidden", isOpen ? "text-white" : scrolled ? "text-gray-800" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Basic Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-gray-900 lg:hidden">
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <div className="relative h-16 w-56">
                  <Image
                    src="/images/malisa_partners_logo_transparent.png"
                    alt="Malisa & Partners"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>

              <ul className="space-y-6">
                {[
                  { name: "HOME", href: "/" },
                  { name: "ABOUT", href: "/about" },
                  { name: "PRACTICE AREAS", href: "/practice-areas" },
                  { name: "OUR TEAM", href: "/team" },
                  { name: "CONTACT", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-2xl font-light text-white block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <Link
                  href="tel:0211356035"
                  className="flex items-center justify-center text-xl font-light text-white bg-gray-800 p-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="mr-3 h-5 w-5" />
                  0211 356 035
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
