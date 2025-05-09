import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg"
          alt="City skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-widest max-w-4xl mx-auto leading-tight">
            REPRESENTATION
            <br />
            YOU CAN COUNT ON
          </h1>
          <Link href="/contact">
            <Button className="mt-8 bg-red-500 px-8 py-6 text-lg font-light tracking-wider text-white hover:bg-red-600">
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-light tracking-wider text-gray-800 sm:text-4xl">ABOUT OUR FIRM</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Malisa and Partners Legal Practitioners is an illustrious combination of skilled legal minds whose aim is
              to offer high quality legal services in a vast array of practice fields on the local and international
              scene.
            </p>
            <p className="mb-12 text-lg leading-relaxed text-gray-600">
              Our team of experienced attorneys is dedicated to providing exceptional legal representation across a wide
              range of practice areas. We combine deep legal knowledge with a commitment to client service, ensuring
              that we deliver results that meet our clients' needs.
            </p>
            <Link href="/about">
              <Button className="border-gray-800 px-8 py-6 text-lg font-light tracking-wider text-gray-800 hover:bg-gray-100">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-light tracking-wider text-gray-800 sm:text-4xl">
            PRACTICE AREAS
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Corporate Law",
                description:
                  "We provide comprehensive legal services to businesses of all sizes, from startups to multinational corporations.",
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
              },
              {
                title: "Commercial Litigation",
                description:
                  "Our litigation team represents clients in complex commercial disputes, providing strategic advocacy at every stage.",
                image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
              },
              {
                title: "Employment Law",
                description:
                  "We advise both employers and employees on all aspects of employment law, from contracts to dispute resolution.",
                image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
              },
              {
                title: "Real Estate",
                description:
                  "Our real estate practice covers all aspects of property transactions, development, and dispute resolution.",
                image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
              },
              {
                title: "Intellectual Property",
                description:
                  "We help clients protect and leverage their intellectual property assets through registration, licensing, and enforcement.",
                image: "https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg",
              },
              {
                title: "International Law",
                description:
                  "Our international practice assists clients with cross-border transactions, disputes, and regulatory compliance.",
                image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg",
              },
            ].map((area, index) => (
              <div key={area.title} className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative h-48">
                  <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-medium text-gray-800">{area.title}</h3>
                  <p className="mb-4 text-gray-600">{area.description}</p>
                  <Link href="/practice-areas" className="text-red-500 hover:text-red-600">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-light tracking-wider text-gray-800 sm:text-4xl">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  "Malisa and Partners provided exceptional legal representation during a complex corporate restructuring. Their expertise and strategic approach were invaluable.",
                author: "John D., CEO",
              },
              {
                quote:
                  "The team at Malisa and Partners demonstrated a deep understanding of international law that was crucial to the success of our cross-border transaction.",
                author: "Sarah M., International Business Director",
              },
              {
                quote:
                  "I was impressed by the personal attention and dedication shown by the attorneys at Malisa and Partners. They truly care about their clients' success.",
                author: "Michael T., Real Estate Developer",
              },
              {
                quote:
                  "Their expertise in employment law helped our company navigate a challenging situation with confidence. I highly recommend their services.",
                author: "Lisa K., HR Director",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <p className="mb-4 text-lg italic text-gray-600">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-800">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <Image
          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
          alt="Law office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="mb-8 text-3xl font-light tracking-wider sm:text-4xl">READY TO DISCUSS YOUR LEGAL NEEDS?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg">
            Contact Malisa and Partners Legal Practitioners today to schedule a consultation with one of our experienced
            attorneys.
          </p>
          <Link href="/contact">
            <Button className="bg-red-500 px-8 py-6 text-lg font-light tracking-wider text-white hover:bg-red-600">
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
