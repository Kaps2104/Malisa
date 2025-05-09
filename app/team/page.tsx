import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const attorneys = [
  {
    id: "john-malisa",
    name: "John Malisa",
    title: "Managing Partner",
    bio: "John Malisa is the founding and managing partner of Malisa and Partners Legal Practitioners. With over 20 years of experience in corporate and commercial law, John has established himself as a leading attorney in Zambia.",
    areas: ["Corporate Law", "Commercial Litigation", "International Law"],
  },
  {
    id: "sarah-banda",
    name: "Sarah Banda",
    title: "Partner",
    bio: "Sarah Banda is a partner specializing in employment law and commercial litigation. With 15 years of experience, Sarah has successfully represented both employers and employees in complex employment disputes.",
    areas: ["Employment Law", "Commercial Litigation", "Alternative Dispute Resolution"],
  },
  {
    id: "david-mwanza",
    name: "David Mwanza",
    title: "Partner",
    bio: "David Mwanza is a partner with expertise in real estate and property law. He has advised on numerous high-profile property transactions and development projects throughout Zambia.",
    areas: ["Real Estate", "Construction Law", "Property Development"],
  },
  {
    id: "grace-mutale",
    name: "Grace Mutale",
    title: "Senior Associate",
    bio: "Grace Mutale is a senior associate focusing on intellectual property law and technology transactions. She advises clients on trademark and copyright protection, licensing agreements, and IP enforcement strategies.",
    areas: ["Intellectual Property", "Technology Law", "Data Privacy"],
  },
  {
    id: "michael-tembo",
    name: "Michael Tembo",
    title: "Associate",
    bio: "Michael Tembo is an associate in our corporate and commercial practice. He advises clients on business formation, corporate governance, and commercial transactions.",
    areas: ["Corporate Law", "Energy and Natural Resources", "Commercial Contracts"],
  },
  {
    id: "linda-phiri",
    name: "Linda Phiri",
    title: "Associate",
    bio: "Linda Phiri is an associate in our litigation practice. She represents clients in a variety of commercial disputes, including contract disputes, shareholder conflicts, and debt recovery matters.",
    areas: ["Commercial Litigation", "Debt Recovery", "Alternative Dispute Resolution"],
  },
  {
    id: "james-mulenga",
    name: "James Mulenga",
    title: "Associate",
    bio: "James Mulenga is an associate specializing in international law and cross-border transactions. He has experience working with clients on international trade matters and foreign investments.",
    areas: ["International Law", "Trade Law", "Foreign Investment"],
  },
  {
    id: "catherine-zulu",
    name: "Catherine Zulu",
    title: "Associate",
    bio: "Catherine Zulu is an associate in our employment law practice. She advises both employers and employees on workplace policies, contracts, and dispute resolution.",
    areas: ["Employment Law", "Labor Relations", "Workplace Compliance"],
  },
  {
    id: "robert-chanda",
    name: "Robert Chanda",
    title: "Associate",
    bio: "Robert Chanda is an associate focusing on intellectual property and technology law. He assists clients with trademark registrations, copyright matters, and technology licensing.",
    areas: ["Intellectual Property", "Technology Law", "Media Law"],
  },
  {
    id: "natasha-bwalya",
    name: "Natasha Bwalya",
    title: "Junior Associate",
    bio: "Natasha Bwalya is a junior associate in our corporate law practice. She assists clients with corporate governance, regulatory compliance, and commercial transactions.",
    areas: ["Corporate Law", "Regulatory Compliance", "Commercial Contracts"],
  },
  {
    id: "daniel-ngoma",
    name: "Daniel Ngoma",
    title: "Junior Associate",
    bio: "Daniel Ngoma is a junior associate in our litigation practice. He supports senior attorneys in case preparation, legal research, and client representation in court.",
    areas: ["Commercial Litigation", "Civil Litigation", "Legal Research"],
  },
]

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
          alt="Law firm team"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-white text-center">
            OUR TEAM
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">MEET OUR ATTORNEYS</h2>
              <p className="text-lg text-gray-600 mb-6">
                Malisa and Partners Legal Practitioners brings together a team of experienced attorneys with diverse
                backgrounds and expertise. Our lawyers are committed to providing exceptional legal representation and
                personalized service to each client.
              </p>
              <p className="text-lg text-gray-600">
                We pride ourselves on our collaborative approach, drawing on our collective knowledge and experience to
                develop innovative solutions to complex legal challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attorneys.map((attorney, index) => (
                <div
                  key={attorney.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 w-full bg-gray-200 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-3xl font-light text-gray-500">
                        {attorney.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-medium text-gray-800 mb-1">{attorney.name}</h2>
                    <p className="text-red-500 mb-4">{attorney.title}</p>
                    <p className="text-gray-600 mb-4 line-clamp-4">{attorney.bio}</p>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Practice Areas:</h3>
                    <ul className="mb-6">
                      {attorney.areas.map((area) => (
                        <li key={area} className="text-gray-600">
                          • {area}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/team/${attorney.id}`}>
                      <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100 text-gray-800">
                        VIEW PROFILE
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">WORK WITH OUR TEAM</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact Malisa and Partners Legal Practitioners today to schedule a consultation with one of our
              experienced attorneys.
            </p>
            <Link href="/contact">
              <Button className="bg-red-500 px-8 py-6 text-lg font-light tracking-wider text-white hover:bg-red-600">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
