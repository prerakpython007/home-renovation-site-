import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — HomeReno",
  description:
    "Explore our full range of home renovation services including kitchen remodels, bathroom renovations, outdoor living, and more.",
};

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Your kitchen is the heart of your home. We design and build kitchens that combine stunning aesthetics with practical functionality. From custom cabinetry and premium countertops to smart storage solutions and modern appliances — we handle every detail.",
    features: ["Custom Cabinetry", "Countertop Installation", "Kitchen Islands", "Lighting Design", "Backsplash Tiling", "Appliance Integration"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Transform your bathroom into a personal spa. We specialize in creating luxurious bathrooms with premium fixtures, elegant tilework, and intelligent layouts that make the most of every square foot.",
    features: ["Walk-in Showers", "Freestanding Tubs", "Heated Floors", "Custom Vanities", "Premium Tilework", "Smart Storage"],
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop",
  },
  {
    title: "Whole-Home Renovation",
    description:
      "Ready for a complete transformation? Our whole-home renovation service covers everything from structural changes and new layouts to seamless finishes throughout. We manage the entire process so you don't have to.",
    features: ["Floor Plan Redesign", "Structural Changes", "Electrical Upgrades", "Plumbing Overhaul", "HVAC Systems", "Interior Finishing"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
  },
  {
    title: "Outdoor Living",
    description:
      "Extend your living space beyond the four walls. We create beautiful outdoor areas — from covered patios and pergolas to full outdoor kitchens and fire pit gathering spaces that you'll enjoy year-round.",
    features: ["Deck Construction", "Patio Design", "Outdoor Kitchens", "Pergolas & Shade", "Fire Pits", "Landscape Integration"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
  },
  {
    title: "Flooring & Tiling",
    description:
      "The foundation of great design starts at your feet. We install premium flooring solutions including hardwood, luxury vinyl, natural stone, porcelain, and custom tile patterns that bring any room to life.",
    features: ["Hardwood Flooring", "Luxury Vinyl Plank", "Natural Stone", "Porcelain Tile", "Custom Patterns", "Subfloor Prep"],
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=500&fit=crop",
  },
  {
    title: "Painting & Finishing",
    description:
      "Color transforms a space. Our professional painting and finishing services cover interior and exterior surfaces, accent walls, specialty textures, and protective coatings that look beautiful and last.",
    features: ["Interior Painting", "Exterior Painting", "Accent Walls", "Cabinet Refinishing", "Trim & Molding", "Specialty Finishes"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=500&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            What We Do
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-600 sm:text-lg">
            Expert craftsmanship for every corner of your home
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {service.description}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-700"
                    >
                      <svg className="h-4 w-4 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-amber-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg">
            Book a free consultation and we&apos;ll help you figure out the best
            plan for your home and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
