import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Practice areas data
const practiceAreasData = [
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
    detailedContent: [
      {
        title: "Business Formation and Structuring",
        description:
          "We assist entrepreneurs and established businesses in selecting and forming the appropriate legal entity for their ventures. Our attorneys provide guidance on the advantages and disadvantages of various business structures, including corporations, limited liability companies (LLCs), partnerships, and sole proprietorships. We help clients understand the legal, tax, and operational implications of each option and prepare all necessary formation documents.",
      },
      {
        title: "Corporate Governance",
        description:
          "Our team advises boards of directors, executives, and shareholders on corporate governance matters, including fiduciary duties, compliance with laws and regulations, and best practices. We help clients develop and implement corporate governance policies and procedures that promote transparency, accountability, and ethical business practices. Our attorneys also assist with board and committee structures, shareholder agreements, and internal investigations.",
      },
      {
        title: "Mergers and Acquisitions",
        description:
          "We represent buyers and sellers in mergers, acquisitions, divestitures, and other corporate transactions. Our attorneys provide strategic advice throughout the transaction process, from initial structuring and due diligence to negotiation, documentation, and closing. We help clients identify and address legal, regulatory, and business risks and develop solutions that protect their interests and facilitate successful transactions.",
      },
      {
        title: "Joint Ventures and Strategic Alliances",
        description:
          "Our practice includes advising clients on the formation and operation of joint ventures, strategic alliances, and other collaborative business arrangements. We help clients structure these relationships to achieve their business objectives while protecting their intellectual property, confidential information, and other valuable assets. Our attorneys draft and negotiate joint venture agreements, collaboration agreements, and related documents.",
      },
      {
        title: "Corporate Restructuring",
        description:
          "We assist clients with corporate restructurings, reorganizations, and recapitalizations. Our attorneys provide guidance on the legal, tax, and business implications of various restructuring options and help clients implement changes in a manner that minimizes disruption to their operations. We also advise on debt restructuring, workouts, and other financial restructuring matters.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Our team helps clients navigate the complex regulatory landscape applicable to their businesses. We provide advice on compliance with corporate, securities, antitrust, and other laws and regulations. Our attorneys assist with developing and implementing compliance programs, conducting compliance audits, and responding to regulatory inquiries and investigations.",
      },
    ],
    teamMembers: [
      {
        name: "John Malisa",
        title: "Managing Partner",
        image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg",
      },
      {
        name: "Michael Tembo",
        title: "Associate",
        image: "https://images.pexels.com/photos/5669612/pexels-photo-5669612.jpeg",
      },
    ],
    caseStudies: [
      {
        title: "Successful Merger of Regional Companies",
        description:
          "We represented a mid-sized manufacturing company in its merger with a competitor, creating the largest player in the regional market. Our team handled all aspects of the transaction, including due diligence, negotiation of the merger agreement, regulatory approvals, and integration planning.",
      },
      {
        title: "Corporate Restructuring for International Expansion",
        description:
          "We advised a growing technology company on a corporate restructuring to facilitate its expansion into international markets. Our team developed a structure that optimized tax efficiency, protected intellectual property, and addressed regulatory requirements in multiple jurisdictions.",
      },
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
    detailedContent: [
      {
        title: "Contract Disputes",
        description:
          "We represent clients in disputes arising from commercial contracts, including breach of contract claims, interpretation disputes, and enforcement actions. Our attorneys have experience with a wide range of commercial agreements, including supply contracts, distribution agreements, licensing arrangements, and service contracts. We help clients understand their rights and obligations under these agreements and develop strategies to resolve disputes efficiently.",
      },
      {
        title: "Business Torts",
        description:
          "Our team handles cases involving business torts, such as fraud, misrepresentation, interference with contractual relations, unfair competition, and breach of fiduciary duty. We help clients protect their business interests and recover damages for wrongful conduct by competitors, business partners, or other parties. Our attorneys also defend clients against such claims, developing robust defenses based on the facts and applicable law.",
      },
      {
        title: "Shareholder and Partnership Disputes",
        description:
          "We represent shareholders, partners, and business owners in disputes with co-owners, including claims for breach of fiduciary duty, minority shareholder oppression, and disputes over management and control. Our attorneys understand the complex legal and personal dynamics involved in these cases and work to resolve them in a manner that protects our clients' interests and preserves business value when possible.",
      },
      {
        title: "Intellectual Property Litigation",
        description:
          "Our litigation practice includes representing clients in disputes involving patents, trademarks, copyrights, trade secrets, and other intellectual property. We help clients protect their valuable intellectual assets from infringement and misappropriation. Our attorneys also defend clients against intellectual property claims, developing strategies to challenge validity, ownership, and infringement allegations.",
      },
      {
        title: "Employment Litigation",
        description:
          "We represent employers in litigation involving employment contracts, non-compete agreements, discrimination claims, wrongful termination, and other employment-related disputes. Our attorneys work closely with clients to understand their business needs and develop litigation strategies that align with their overall employment policies and practices.",
      },
      {
        title: "Class Action Defense",
        description:
          "Our team defends clients against class action lawsuits in various areas, including consumer protection, securities, antitrust, and employment. We help clients navigate the complex procedural aspects of class actions and develop strategies to defeat class certification, limit exposure, and resolve claims efficiently.",
      },
    ],
    teamMembers: [
      {
        name: "Sarah Banda",
        title: "Partner",
        image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
      },
      {
        name: "Linda Phiri",
        title: "Associate",
        image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
      },
    ],
    caseStudies: [
      {
        title: "Successful Defense in Contract Dispute",
        description:
          "We defended a manufacturing company against claims of breach of contract and business torts brought by a former distributor. After aggressive litigation, including successful motions to dismiss several claims, we negotiated a favorable settlement that allowed our client to continue its business operations without disruption.",
      },
      {
        title: "Shareholder Dispute Resolution",
        description:
          "We represented a minority shareholder in a dispute with majority owners over corporate governance and financial matters. Through strategic litigation and negotiation, we secured a buyout of our client's shares at a premium value, protecting their investment and allowing the business to continue operations.",
      },
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
    detailedContent: [
      {
        title: "Employment Contracts and Policies",
        description:
          "We draft and review employment contracts, employee handbooks, and workplace policies to ensure compliance with applicable laws and regulations. Our attorneys help employers establish clear expectations and procedures that protect their interests while promoting a positive work environment. We also advise employees on their rights and obligations under employment contracts and workplace policies.",
      },
      {
        title: "Workplace Investigations",
        description:
          "Our team conducts and advises on workplace investigations involving allegations of misconduct, harassment, discrimination, retaliation, and other issues. We help employers develop and implement investigation protocols that are fair, thorough, and legally compliant. Our attorneys also provide guidance on appropriate remedial actions based on investigation findings.",
      },
      {
        title: "Discrimination and Harassment Claims",
        description:
          "We represent employers and employees in matters involving discrimination, harassment, and retaliation claims. Our attorneys help employers develop preventive strategies, including training programs and complaint procedures, to minimize the risk of such claims. When claims arise, we provide strategic advice and representation in administrative proceedings and litigation.",
      },
      {
        title: "Wage and Hour Compliance",
        description:
          "Our practice includes advising clients on compliance with wage and hour laws, including minimum wage, overtime, classification of employees and independent contractors, and working time issues. We help employers develop and implement compliant pay practices and defend against wage and hour claims when they arise.",
      },
      {
        title: "Employee Benefits and Compensation",
        description:
          "We advise employers on the design, implementation, and administration of employee benefit plans and compensation programs. Our attorneys help clients navigate the complex legal and regulatory requirements applicable to these arrangements, including tax, securities, and labor laws. We also represent employers and employees in disputes over benefits and compensation.",
      },
      {
        title: "Severance Agreements and Negotiations",
        description:
          "Our team drafts and negotiates severance agreements for employers and employees. We help employers structure severance arrangements that protect their interests while providing appropriate benefits to departing employees. For employees, we review and negotiate severance terms to ensure they receive fair treatment and appropriate compensation.",
      },
    ],
    teamMembers: [
      {
        name: "Sarah Banda",
        title: "Partner",
        image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
      },
      {
        name: "Linda Phiri",
        title: "Associate",
        image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
      },
    ],
    caseStudies: [
      {
        title: "Workplace Policy Overhaul",
        description:
          "We assisted a growing company with a comprehensive review and update of its employment policies and procedures. Our team developed a new employee handbook, employment contracts, and HR protocols that ensured compliance with current laws while supporting the company's business objectives and culture.",
      },
      {
        title: "Successful Defense Against Discrimination Claims",
        description:
          "We defended an employer against multiple discrimination claims filed with the labor authority. Through thorough investigation and presentation of evidence, we demonstrated that the employer's actions were based on legitimate business reasons and not discriminatory factors, resulting in dismissal of all claims.",
      },
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
    detailedContent: [
      {
        title: "Property Acquisitions and Sales",
        description:
          "We represent buyers and sellers in residential and commercial real estate transactions. Our attorneys handle all aspects of these transactions, from contract negotiation and due diligence to closing and post-closing matters. We help clients identify and address title issues, environmental concerns, and other potential problems that could affect the value or use of the property.",
      },
      {
        title: "Commercial Leasing",
        description:
          "Our team drafts and negotiates commercial leases for landlords and tenants. We help clients understand and address key lease terms, including rent, term, maintenance responsibilities, improvements, and default provisions. Our attorneys also assist with lease administration, enforcement, and dispute resolution.",
      },
      {
        title: "Real Estate Development",
        description:
          "We advise developers on all aspects of real estate development projects, from site acquisition and financing to construction and sales or leasing. Our attorneys help clients navigate the complex legal, regulatory, and business issues involved in development projects. We also assist with joint ventures, partnerships, and other structures for development projects.",
      },
      {
        title: "Land Use and Zoning",
        description:
          "Our practice includes advising clients on land use and zoning matters, including obtaining necessary approvals and permits for development projects. We represent clients before planning commissions, zoning boards, and other regulatory bodies. Our attorneys also assist with environmental compliance, historic preservation, and other regulatory issues affecting real estate.",
      },
      {
        title: "Construction Contracts and Disputes",
        description:
          "We draft and negotiate construction contracts for owners, developers, contractors, and subcontractors. Our attorneys help clients allocate risks and responsibilities appropriately and establish clear procedures for changes, payments, and dispute resolution. We also represent clients in construction disputes, including claims for defects, delays, and payment issues.",
      },
      {
        title: "Real Estate Finance",
        description:
          "Our team represents lenders and borrowers in real estate financing transactions, including acquisition loans, construction loans, and permanent financing. We help clients structure and document these transactions to protect their interests and comply with applicable laws and regulations. Our attorneys also assist with loan workouts, foreclosures, and other enforcement actions.",
      },
    ],
    teamMembers: [
      {
        name: "David Mwanza",
        title: "Partner",
        image: "https://images.pexels.com/photos/5669608/pexels-photo-5669608.jpeg",
      },
      {
        name: "Michael Tembo",
        title: "Associate",
        image: "https://images.pexels.com/photos/5669612/pexels-photo-5669612.jpeg",
      },
    ],
    caseStudies: [
      {
        title: "Major Commercial Development Project",
        description:
          "We represented a developer in all aspects of a mixed-use development project, including site acquisition, financing, zoning approvals, construction contracts, and commercial leasing. Our comprehensive approach helped the client navigate complex legal and regulatory issues while keeping the project on schedule and within budget.",
      },
      {
        title: "Complex Property Acquisition",
        description:
          "We assisted a client in acquiring a large commercial property with significant environmental and title issues. Our team conducted thorough due diligence, negotiated appropriate representations and warranties, and structured the transaction to protect our client from potential liabilities, enabling a successful purchase at a favorable price.",
      },
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
    detailedContent: [
      {
        title: "Trademark Registration and Protection",
        description:
          "We assist clients with trademark searches, applications, and registrations in Zambia and internationally. Our attorneys help clients develop and implement trademark protection strategies that align with their business objectives. We also advise on trademark usage, monitoring, and enforcement to maintain the strength and value of these assets.",
      },
      {
        title: "Copyright Registration and Enforcement",
        description:
          "Our team helps clients protect their original creative works through copyright registration and enforcement. We advise on copyright ownership, fair use, and infringement issues. Our attorneys also assist with copyright licensing and transfers, enabling clients to monetize their creative assets while maintaining appropriate control.",
      },
      {
        title: "Patent Applications and Prosecution",
        description:
          "We work with inventors and businesses to protect their innovations through patent applications and prosecution. Our attorneys help clients evaluate the patentability of their inventions, prepare and file patent applications, and navigate the examination process. We also advise on patent portfolio management and international patent protection strategies.",
      },
      {
        title: "IP Licensing and Transactions",
        description:
          "Our practice includes drafting and negotiating intellectual property licenses, assignments, and other transactions. We help clients structure these arrangements to achieve their business objectives while protecting their intellectual property rights. Our attorneys also assist with due diligence for IP assets in mergers, acquisitions, and other corporate transactions.",
      },
      {
        title: "Trade Secret Protection",
        description:
          "We advise clients on strategies to protect their valuable trade secrets and confidential information. Our attorneys help clients develop and implement appropriate security measures, confidentiality agreements, and non-disclosure policies. We also assist with enforcement actions against misappropriation of trade secrets by former employees, competitors, or other parties.",
      },
      {
        title: "IP Litigation and Dispute Resolution",
        description:
          "Our team represents clients in intellectual property disputes, including infringement claims, ownership disputes, and licensing disagreements. We help clients evaluate their options for resolving these disputes, whether through negotiation, mediation, arbitration, or litigation. Our attorneys develop and implement strategies that protect our clients' intellectual property rights and business interests.",
      },
    ],
    teamMembers: [
      {
        name: "Grace Mutale",
        title: "Senior Associate",
        image: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg",
      },
      {
        name: "John Malisa",
        title: "Managing Partner",
        image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg",
      },
    ],
    caseStudies: [
      {
        title: "Trademark Portfolio Development",
        description:
          "We assisted a growing consumer products company in developing and implementing a comprehensive trademark protection strategy. Our team conducted clearance searches, filed strategic trademark applications, and developed monitoring and enforcement protocols, resulting in a strong trademark portfolio that supported the company's brand and market position.",
      },
      {
        title: "Technology Licensing Program",
        description:
          "We helped a technology company develop and implement a licensing program for its patented technology. Our team drafted license agreements, established royalty structures, and created compliance monitoring systems that enabled the client to generate significant revenue from its intellectual property while maintaining control over its use.",
      },
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
    detailedContent: [
      {
        title: "International Business Transactions",
        description:
          "We advise clients on a wide range of international business transactions, including distribution agreements, agency relationships, joint ventures, and licensing arrangements. Our attorneys help clients understand and address the legal, regulatory, and practical challenges of doing business across borders. We work with local counsel in other jurisdictions when necessary to ensure comprehensive advice.",
      },
      {
        title: "Cross-Border Mergers and Acquisitions",
        description:
          "Our team represents buyers and sellers in cross-border mergers, acquisitions, and other corporate transactions. We help clients navigate the complex legal, regulatory, and cultural issues involved in these transactions. Our attorneys work with clients to develop and implement transaction structures that achieve their business objectives while addressing jurisdiction-specific requirements.",
      },
      {
        title: "International Trade and Customs",
        description:
          "We assist clients with international trade matters, including import and export regulations, customs compliance, trade agreements, and trade remedies. Our attorneys help clients understand and comply with the complex web of laws and regulations governing international trade. We also advise on strategies to optimize the benefits of trade agreements and minimize trade barriers.",
      },
      {
        title: "Foreign Investment",
        description:
          "Our practice includes advising foreign investors on investments in Zambia and Zambian clients on investments abroad. We help clients understand and comply with foreign investment laws and regulations, including investment approvals, ownership restrictions, and repatriation of profits. Our attorneys also assist with investment protection strategies, including treaty protections and political risk insurance.",
      },
      {
        title: "International Dispute Resolution",
        description:
          "We represent clients in international disputes, whether through negotiation, mediation, arbitration, or litigation. Our attorneys have experience with various international arbitration rules and forums. We help clients develop and implement dispute resolution strategies that take into account the legal, cultural, and practical aspects of international disputes.",
      },
      {
        title: "Compliance with International Regulations",
        description:
          "Our team advises clients on compliance with international regulations, including anti-corruption laws, sanctions, export controls, and data protection requirements. We help clients develop and implement compliance programs that address these complex and often overlapping regulatory regimes. Our attorneys also assist with compliance audits, investigations, and remediation efforts.",
      },
    ],
    teamMembers: [
      {
        name: "John Malisa",
        title: "Managing Partner",
        image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg",
      },
      {
        name: "Grace Mutale",
        title: "Senior Associate",
        image: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg",
      },
    ],
    caseStudies: [
      {
        title: "Cross-Border Acquisition",
        description:
          "We represented a Zambian company in its acquisition of a business with operations in multiple African countries. Our team coordinated due diligence across jurisdictions, structured the transaction to address country-specific requirements, and negotiated agreements that protected our client's interests while facilitating a smooth transition.",
      },
      {
        title: "International Joint Venture",
        description:
          "We assisted a client in establishing a joint venture with an international partner for a major infrastructure project. Our team negotiated the joint venture agreement, addressing governance, financing, operational, and dispute resolution issues. We also helped the client navigate regulatory approvals and compliance requirements across multiple jurisdictions.",
      },
    ],
  },
]

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const practiceArea = practiceAreasData.find((area) => area.id === slug)

  if (!practiceArea) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={practiceArea.image || "/placeholder.svg"}
          alt={practiceArea.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-white text-center">
            {practiceArea.title.toUpperCase()}
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8">OVERVIEW</h2>
              <p className="text-lg text-gray-600 mb-8">{practiceArea.description}</p>

              <h3 className="text-2xl font-light tracking-wider text-gray-800 mb-4">Our Services Include:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {practiceArea.services.map((service) => (
                  <li key={service} className="flex items-center text-lg text-gray-600">
                    <span className="text-red-500 mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-12 text-center">OUR SERVICES</h2>

            <div className="space-y-12">
              {practiceArea.detailedContent.map((content, index) => (
                <div
                  key={content.title}
                  className="bg-white p-8 rounded-lg shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-medium text-gray-800 mb-4">{content.title}</h3>
                  <p className="text-gray-600">{content.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-12 text-center">OUR TEAM</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practiceArea.teamMembers.map((member) => (
                <div key={member.name} className="flex items-center space-x-6 animate-fade-in">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
                    <p className="text-red-500">{member.title}</p>
                    <Link
                      href={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-gray-800 mt-2 inline-block relative group"
                    >
                      View Profile →
                      <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-12 text-center">CASE STUDIES</h2>

            <div className="space-y-8">
              {practiceArea.caseStudies.map((caseStudy, index) => (
                <div
                  key={caseStudy.title}
                  className="bg-white p-8 rounded-lg shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-medium text-gray-800 mb-4">{caseStudy.title}</h3>
                  <p className="text-gray-600">{caseStudy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-6">
              NEED ASSISTANCE WITH {practiceArea.title.toUpperCase()}?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact Malisa and Partners Legal Practitioners today to discuss your legal needs with one of our
              experienced attorneys specializing in {practiceArea.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href={`/contact?service=${practiceArea.id}`}>
                <Button className="bg-red-500 px-8 py-6 text-lg font-light tracking-wider text-white hover:bg-red-600 relative overflow-hidden group">
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-10"></span>
                  CONTACT US
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  variant="outline"
                  className="border-gray-800 px-8 py-6 text-lg font-light tracking-wider text-gray-800 hover:bg-gray-100 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-gray-800 transition-all duration-500 ease-out group-hover:w-full opacity-5"></span>
                  MEET OUR TEAM
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
