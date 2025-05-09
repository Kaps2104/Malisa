import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    id: "assault-case",
    title: "Assault Charges Dismissed",
    category: "Assault",
    image: "https://images.pexels.com/photos/5668472/pexels-photo-5668472.jpeg",
    summary:
      "Our client was charged with assault after an altercation outside a nightclub. Through careful investigation, we were able to obtain security footage that contradicted witness statements and showed our client acting in self-defence.",
    outcome: "All charges were dismissed before trial.",
  },
  {
    id: "drug-trafficking",
    title: "Drug Trafficking Charges Reduced",
    category: "Drug Offences",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    summary:
      "Our client faced serious trafficking charges that carried a mandatory minimum sentence. We successfully challenged the search warrant that led to the discovery of evidence, arguing that it violated our client's Charter rights.",
    outcome: "Charges reduced to simple possession with no jail time.",
  },
  {
    id: "impaired-driving",
    title: "Impaired Driving Acquittal",
    category: "DUI & Impaired Driving",
    image: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg",
    summary:
      "Our client was charged with impaired driving and refusing to provide a breath sample. We demonstrated that the police officer did not have reasonable grounds to demand a breath sample and that our client's Charter rights were violated during the arrest.",
    outcome: "Full acquittal at trial.",
  },
  {
    id: "domestic-assault",
    title: "Domestic Assault Resolution",
    category: "Domestic Violence",
    image: "https://images.pexels.com/photos/5668476/pexels-photo-5668476.jpeg",
    summary:
      "Our client was charged with domestic assault following an argument with their spouse. We negotiated with the Crown to allow our client to complete a counseling program and maintain employment while the case was pending.",
    outcome: "Charges withdrawn after successful completion of alternative measures program.",
  },
  {
    id: "fraud-case",
    title: "Complex Fraud Defence",
    category: "Fraud",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    summary:
      "Our client faced multiple fraud charges related to alleged business improprieties. Through detailed financial analysis and expert testimony, we demonstrated that our client's actions, while perhaps showing poor judgment, did not constitute criminal fraud.",
    outcome: "Acquittal on all major charges after trial.",
  },
  {
    id: "weapons-possession",
    title: "Weapons Possession Case",
    category: "Weapons Offences",
    image: "https://images.pexels.com/photos/5669612/pexels-photo-5669612.jpeg",
    summary:
      "Our client was charged with unauthorized possession of a firearm. We successfully challenged the legality of the search that led to the discovery of the weapon, arguing that police did not have sufficient grounds to conduct the search.",
    outcome: "Evidence excluded and charges dismissed.",
  },
]

export default function CasesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg"
          alt="Law books"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white text-center">
            CASE RESULTS
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">OUR TRACK RECORD</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Roulston Urquhart Criminal Defence, we have a proven history of achieving favorable outcomes for our
              clients. Below are examples of cases we have successfully handled. While past results do not guarantee
              future outcomes, these case studies demonstrate our approach and commitment to providing effective
              criminal defence.
            </p>
            <p className="text-lg text-gray-600">
              Note: All case details have been anonymized to protect client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 w-full">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-sm">
                      {caseStudy.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-gray-800 mb-4">{caseStudy.title}</h2>
                    <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
                    <div className="bg-gray-50 p-3 rounded-md mb-6">
                      <p className="font-medium text-gray-800">Outcome:</p>
                      <p className="text-gray-600">{caseStudy.outcome}</p>
                    </div>
                    <Link href={`/cases/${caseStudy.id}`}>
                      <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100 text-gray-800">
                        READ FULL CASE STUDY
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Case Result Disclaimer</h3>
              <p className="text-gray-600 mb-4">
                The case results described on this page are not an indication of future results. Every case is
                different, and the outcome of any particular case depends on a variety of factors unique to that case.
              </p>
              <p className="text-gray-600">
                The information provided here is for educational purposes only and should not be construed as legal
                advice. If you have been charged with a criminal offence, please contact our office to discuss your
                specific situation with an experienced lawyer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">DISCUSS YOUR CASE WITH US</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact Roulston Urquhart Criminal Defence today to schedule a confidential consultation with one of our
            experienced criminal defence lawyers.
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
