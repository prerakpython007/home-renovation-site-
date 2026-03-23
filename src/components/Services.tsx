import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Custom cabinetry, countertops, and layouts designed for how you actually cook and live.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    title: "Bathroom Renovation",
    description: "Spa-like retreats with modern fixtures, premium tilework, and smart storage solutions.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
  },
  {
    title: "Whole-Home Renovation",
    description: "Complete transformations — structural changes, new layouts, and seamless finishes throughout.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    title: "Outdoor Living",
    description: "Decks, patios, pergolas, and outdoor kitchens that extend your living space into nature.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
  },
  {
    title: "Flooring & Tiling",
    description: "Hardwood, luxury vinyl, natural stone, and custom tile installations for every room.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
  },
  {
    title: "Painting & Finishing",
    description: "Interior and exterior painting, accent walls, and specialty finishes that set the mood.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Renovation services tailored to you
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-500">
            Every home is unique. We offer a full range of services to bring
            your vision to life — on time and on budget.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white ring-1 ring-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-zinc-900 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 shadow-sm hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
