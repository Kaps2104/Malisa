import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div>
            <Link href="/">
              <div className="mb-4">
                <h3 className="text-xl font-light tracking-widest">MALISA &</h3>
                <h3 className="text-xl font-light tracking-widest">PARTNERS</h3>
                <p className="text-xs tracking-wider">LEGAL PRACTITIONERS</p>
              </div>
            </Link>
            <p className="mb-4 text-gray-400">
              An illustrious combination of skilled legal minds offering high quality legal services in a vast array of
              practice fields on the local and international scene.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Practice Areas", href: "/practice-areas" },
                { name: "Our Team", href: "/team" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 transition-colors hover:text-white relative group">
                    {item.name}
                    <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Practice Areas</h3>
            <ul className="space-y-2">
              {[
                "Corporate Law",
                "Commercial Litigation",
                "Employment Law",
                "Real Estate",
                "Intellectual Property",
                "International Law",
              ].map((area) => (
                <li key={area}>
                  <Link
                    href={`/practice-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 transition-colors hover:text-white relative group"
                  >
                    {area}
                    <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">
                  Plot No. 8A Kawama Road,
                  <br />
                  Woodlands, Lusaka,
                  <br />
                  Zambia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <Link href="tel:0211356035" className="text-gray-400 transition-colors hover:text-white">
                  0211 356 035
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <Link
                  href="mailto:info@malisaandpartners.law"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  info@malisaandpartners.law
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://facebook.com/MalisaLegal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://linkedin.com/company/malisa-partners-legal-practitioners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Malisa and Partners Legal Practitioners. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1">Developed by Aquila Joels</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 transition-colors hover:text-white relative group"
            >
              Privacy Policy
              <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 transition-colors hover:text-white relative group"
            >
              Terms of Service
              <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
