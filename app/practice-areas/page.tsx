import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const practiceAreas = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    description:
      "Our corporate law practice provides comprehensive legal services to businesses at all stages of development. We advise on entity formation, corporate governance, mergers and acquisitions, joint ventures, and corporate restructuring. Our attorneys work closely with business owners, executives, and boards of directors to develop strategies that support their business objectives while managing legal risks.",
    services: [
      "Business Formation and Structuring",
      "Corporate Governance",
      "Mergers and Acquisitions",
      "Joint Ventures and Strategic Alliances",
      "Corporate Restructuring",
      "Regulatory Compliance",
    ],
  },
  {
    id: "commercial-litigation",
    title: "Commercial Litigation",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    description:
      "Our litigation team represents clients in complex commercial disputes across a wide range of industries. We combine strategic thinking with aggressive advocacy to protect our clients' interests in court. Our approach is always focused on achieving the best possible outcome, whether through negotiation, alternative dispute resolution, or trial.",
    services: [
      "Contract Disputes",
      "Business Torts",
      "Shareholder and Partnership Disputes",
      "Intellectual Property Litigation",
      "Employment Litigation",
      "Class Action Defense",
    ],
  },
  {
    id: "employment-law",
    title: "Employment Law",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    description:
      "Our employment law practice advises both employers and employees on all aspects of the employment relationship. We help clients navigate the complex web of laws and regulations governing the workplace, from hiring to termination and everything in between. Our goal is to help prevent disputes when possible and to resolve them efficiently when they arise.",
    services: [
      "Employment Contracts and Policies",
      "Workplace Investigations",
      "Discrimination and Harassment Claims",
      "Wage and Hour Compliance",
      "Employee Benefits and Compensation",
      "Severance Agreements and Negotiations",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description:
      "Our real estate practice covers all aspects of property transactions, development, and dispute resolution. We represent buyers, sellers, developers, lenders, and investors in residential and commercial real estate matters. Our attorneys have extensive experience in complex real estate transactions and development projects throughout Zambia.",
    services: [
      "Property Acquisitions and Sales",
      "Commercial Leasing",
      "Real Estate Development",
      "Land Use and Zoning",
      "Construction Contracts and Disputes",
      "Real Estate Finance",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    image: "https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg",
    description:
      "Our intellectual property practice helps clients protect and leverage their intellectual property assets. We assist with trademark and copyright registration, patent applications, licensing agreements, and IP enforcement. Our attorneys understand the value of intellectual property in today's economy and work to help clients maximize the value of their IP portfolios.",
    services: [
      "Trademark Registration and Protection",
      "Copyright Registration and Enforcement",
      "Patent Applications and Prosecution",
      "IP Licensing and Transactions",
      "Trade Secret Protection",
      "IP Litigation and Dispute Resolution",
    ],
  },
  {
    id: "international-law",
    title: "International Law",
    image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg",
    description:
      "Our international law practice assists clients with cross-border transactions, disputes, and regulatory compliance. We have extensive experience working with international clients and understand the unique challenges of operating in a global business environment. Our attorneys provide practical advice that takes into account the legal, cultural, and business considerations of international matters.",
    services: [
      "International Business Transactions",
      "Cross-Border Mergers and Acquisitions",
      "International Trade and Customs",
      "Foreign Investment",
      "International Dispute Resolution",
      "Compliance with International Regulations",
    ],
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg"
          alt="Law books"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-white text-center">
            PRACTICE AREAS
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">COMPREHENSIVE LEGAL SERVICES</h2>
              <p className="text-lg text-gray-600 mb-6">
                Malisa and Partners Legal Practitioners provides expert legal representation across a wide range of
                practice areas. Our experienced attorneys have successfully represented clients in various matters, from
                routine transactions to complex litigation.
              </p>
              <p className="text-lg text-gray-600">
                We understand that each client's situation is unique, and we develop tailored strategies based on your
                specific circumstances and objectives. Our goal is to provide practical, effective legal solutions that
                help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Detail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                className="mb-16 overflow-hidden rounded-lg bg-white shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 w-full">
                  <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h2 className="mb-4 text-2xl font-medium text-gray-800">{area.title}</h2>
                  <p className="mb-6 text-gray-600">{area.description}</p>
                  <h3 className="mb-3 text-xl font-medium text-gray-800">Our Services Include:</h3>
                  <ul className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-2">
                    {area.services.map((service) => (
                      <li key={service} className="flex items-center text-gray-600">
                        <span className="mr-2 text-red-500">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href={`/practice-areas/${area.id}`}>
                      <Button className="bg-red-500 px-6 py-2 text-white hover:bg-red-600 relative overflow-hidden group">
                        <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-10"></span>
                        Learn More
                      </Button>
                    </Link>
                    <Link href={`/contact?service=${area.id}`}>
                      <Button
                        variant="outline"
                        className="border-gray-800 text-gray-800 hover:bg-gray-100 px-6 py-2 relative overflow-hidden group"
                      >
                        <span className="absolute inset-0 w-0 bg-gray-800 transition-all duration-500 ease-out group-hover:w-full opacity-5"></span>
                        Inquire About {area.title}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">NEED LEGAL ASSISTANCE?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact Malisa and Partners Legal Practitioners today to discuss your legal needs with one of our
              experienced attorneys.
            </p>
            <Link href="/contact">
              <Button className="bg-red-500 px-8 py-6 text-lg font-light tracking-wider text-white hover:bg-red-600 relative overflow-hidden group">
                <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-10"></span>
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
