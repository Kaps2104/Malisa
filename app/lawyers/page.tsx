import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const lawyers = [
  {
    id: "jane-roulston",
    name: "Jane Roulston",
    title: "Partner",
    image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
    bio: "Jane Roulston is a founding partner with over 15 years of experience in criminal defence. She has successfully represented clients in complex cases including homicide, sexual assault, and drug trafficking. Jane is known for her meticulous preparation and persuasive advocacy in the courtroom.",
  },
  {
    id: "michael-urquhart",
    name: "Michael Urquhart",
    title: "Partner",
    image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg",
    bio: "Michael Urquhart brings more than 20 years of criminal law experience to the firm. He has handled hundreds of trials and appeals at all levels of court. Michael specializes in defending serious criminal charges and has a particular expertise in Charter rights violations and complex legal arguments.",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Associate",
    image: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg",
    bio: "Sarah Johnson joined the firm after serving as Crown counsel, giving her unique insight into prosecution strategies. She specializes in impaired driving defences, domestic violence cases, and youth criminal justice matters. Sarah is dedicated to providing compassionate and effective representation.",
  },
  {
    id: "david-chen",
    name: "David Chen",
    title: "Associate",
    image: "https://images.pexels.com/photos/5669608/pexels-photo-5669608.jpeg",
    bio: "David Chen focuses on drug offences, fraud, and white-collar crime. With a background in financial law, he brings specialized knowledge to complex cases involving financial evidence. David is known for his strategic approach and attention to detail in case preparation.",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    title: "Associate",
    image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    bio: "Emily Rodriguez specializes in representing vulnerable clients, including those with mental health challenges and addiction issues. She has extensive experience with diversion programs and alternative measures. Emily is passionate about ensuring fair treatment for all individuals in the justice system.",
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Associate",
    image: "https://images.pexels.com/photos/5669612/pexels-photo-5669612.jpeg",
    bio: "James Wilson has particular expertise in cases involving search and seizure issues, police misconduct, and Charter violations. Before joining the firm, he worked with a civil liberties organization. James is committed to protecting his clients' constitutional rights throughout the criminal process.",
  },
]

export default function LawyersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
          alt="Law firm team"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white text-center">
            OUR LAWYERS
          </h1>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our team of experienced criminal defence lawyers is dedicated to providing exceptional legal
              representation. Each member of our team brings unique expertise and a commitment to protecting our
              clients' rights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lawyers.map((lawyer) => (
                <div key={lawyer.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-80 w-full">
                    <Image src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-medium text-gray-800 mb-1">{lawyer.name}</h2>
                    <p className="text-gray-600 mb-4">{lawyer.title}</p>
                    <p className="text-gray-600 mb-6">{lawyer.bio}</p>
                    <Link href={`/lawyers/${lawyer.id}`}>
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
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">SPEAK WITH A DEFENCE LAWYER TODAY</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us to schedule a consultation with one of our experienced criminal defence lawyers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="tel:4034748188">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6">CALL 403-474-8188</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100 px-8 py-6">
                CONTACT US ONLINE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
