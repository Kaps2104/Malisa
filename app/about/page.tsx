import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg"
          alt="Law firm office"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-white text-center">
            ABOUT OUR FIRM
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8">OUR STORY</h2>
              <p className="text-lg text-gray-600 mb-6">
                Malisa and Partners Legal Practitioners is an illustrious combination of skilled legal minds whose aim
                is to offer high quality legal services in a vast array of practice fields on the local and
                international scene.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a commitment to excellence, our firm has grown to become one of the most respected legal
                practices in Zambia. Our attorneys bring decades of combined experience across various practice areas,
                allowing us to provide comprehensive legal solutions to our diverse clientele.
              </p>
              <p className="text-lg text-gray-600 mb-12">
                We pride ourselves on our ability to understand the unique challenges faced by our clients and to
                develop tailored strategies that address their specific legal needs. Our approach combines technical
                expertise with practical business sense, ensuring that we deliver not just legal advice, but solutions
                that work in the real world.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8">OUR PHILOSOPHY</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Malisa and Partners, we believe that exceptional legal representation begins with a deep
                understanding of our clients' objectives. We take the time to listen, to learn about your business or
                personal situation, and to understand what success means to you.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to providing responsive, efficient, and cost-effective legal services. Our attorneys
                are accessible and communicative, ensuring that you are always informed about the progress of your
                matter and involved in key decisions.
              </p>
              <p className="text-lg text-gray-600 mb-12">
                Integrity is at the core of everything we do. We adhere to the highest ethical standards and are
                dedicated to building long-term relationships based on trust, respect, and results.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8">OUR COMMITMENT</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are dedicated to making a positive impact, not just for our clients, but for our community as well.
                Our firm actively participates in pro bono work and community service initiatives, reflecting our belief
                in the importance of giving back.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to diversity and inclusion within our firm and in the legal profession as a whole. We
                believe that diverse perspectives lead to better solutions and are essential to providing the highest
                quality legal services.
              </p>
              <p className="text-lg text-gray-600">
                Above all, we are committed to excellence in everything we do. From the quality of our legal work to the
                service we provide to our clients, we strive to exceed expectations at every turn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-12 text-center">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality legal services and exceeding our clients' expectations.",
              },
              {
                title: "Integrity",
                description:
                  "We adhere to the highest ethical standards in all our dealings with clients, colleagues, and the courts.",
              },
              {
                title: "Collaboration",
                description:
                  "We work together as a team, drawing on our collective expertise to achieve the best results for our clients.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace creative thinking and innovative approaches to solving complex legal challenges.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
