import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export default function WhatToDoPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5668472/pexels-photo-5668472.jpeg"
          alt="Law office"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white text-center">
            WHAT SHOULD I DO NOW?
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8">
              IF YOU'VE BEEN CHARGED WITH A CRIMINAL OFFENCE
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-4">1. Contact a Lawyer Immediately</h3>
                <p className="text-gray-600 mb-4">
                  The most important step is to speak with a criminal defence lawyer as soon as possible. Do not discuss
                  your case with anyone, including the police, before consulting with a lawyer.
                </p>
                <p className="text-gray-600">
                  At Roulston Urquhart Criminal Defence, we offer 24/7 emergency consultations. Call us at 403-474-8188
                  to speak with a lawyer right away.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-4">2. Exercise Your Right to Remain Silent</h3>
                <p className="text-gray-600 mb-4">
                  You have the right to remain silent when questioned by police. Politely inform the officers that you
                  wish to speak with a lawyer before answering any questions.
                </p>
                <p className="text-gray-600">
                  Remember that anything you say can be used against you in court. Even innocent explanations can be
                  misinterpreted or taken out of context.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-4">3. Gather and Preserve Evidence</h3>
                <p className="text-gray-600 mb-4">
                  If possible, make notes about what happened while the events are still fresh in your memory. Include
                  details about times, locations, and any witnesses present.
                </p>
                <p className="text-gray-600">
                  Preserve any evidence that might be relevant to your case, such as text messages, emails, photographs,
                  or video recordings. Share this information with your lawyer.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-4">4. Understand Your Release Conditions</h3>
                <p className="text-gray-600 mb-4">
                  If you've been released on bail or with conditions, make sure you understand and follow all
                  requirements. Violating release conditions can result in additional charges and complicate your case.
                </p>
                <p className="text-gray-600">
                  Your lawyer can explain your conditions and help you apply for changes if they are too restrictive or
                  impractical.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-4">5. Attend All Court Appearances</h3>
                <p className="text-gray-600 mb-4">
                  It is crucial to attend all scheduled court appearances. Missing a court date can result in a warrant
                  for your arrest and additional charges.
                </p>
                <p className="text-gray-600">
                  Your lawyer will guide you through the court process and ensure you understand what to expect at each
                  stage.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gray-800 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-medium mb-4">How Roulston Urquhart Can Help</h2>
              <p className="mb-6">Our experienced criminal defence lawyers will:</p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Provide immediate legal advice and representation</li>
                <li>Protect your rights throughout the legal process</li>
                <li>Analyze the evidence and identify weaknesses in the prosecution's case</li>
                <li>Develop a strategic defence tailored to your specific situation</li>
                <li>Negotiate with prosecutors for reduced charges or alternative resolutions when appropriate</li>
                <li>Provide strong advocacy in court if your case goes to trial</li>
              </ul>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="tel:4034748188">
                  <Button className="bg-white text-gray-800 hover:bg-gray-200 px-8 py-6">
                    <Phone className="mr-2 h-4 w-4" />
                    CALL 403-474-8188
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-gray-700 px-8 py-6">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    CONTACT US ONLINE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8 text-center">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">How much will it cost to hire a lawyer?</h3>
                <p className="text-gray-600">
                  Legal fees vary depending on the complexity of your case and the specific charges you're facing.
                  During your initial consultation, we'll discuss our fee structure and payment options. We strive to
                  provide transparent and fair pricing for our services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Should I represent myself in court?</h3>
                <p className="text-gray-600">
                  While you have the right to represent yourself, criminal law is complex, and the consequences of a
                  conviction can be severe. A skilled defence lawyer understands the legal system, knows how to
                  challenge evidence, and can advocate effectively on your behalf.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">What if I can't afford a lawyer?</h3>
                <p className="text-gray-600">
                  If you cannot afford a lawyer, you may qualify for Legal Aid. During your initial consultation, we can
                  discuss your options and help determine if you're eligible for Legal Aid or other assistance programs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">How long will my case take?</h3>
                <p className="text-gray-600">
                  The duration of a criminal case varies widely depending on the charges, complexity, and court
                  schedules. Some cases may be resolved in a few months, while others might take a year or more. Your
                  lawyer will provide a more specific timeline based on your particular situation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Will my case go to trial?</h3>
                <p className="text-gray-600">
                  Not all criminal cases go to trial. Many are resolved through negotiations with the prosecution,
                  resulting in reduced charges, alternative measures, or other favorable outcomes. However, we always
                  prepare each case as if it will go to trial to ensure the strongest possible position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">DON'T FACE CRIMINAL CHARGES ALONE</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact Roulston Urquhart Criminal Defence today for a confidential consultation with an experienced lawyer.
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
