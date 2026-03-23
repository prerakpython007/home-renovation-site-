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
      "Your kitchen is the heart of your home. We design and build kitchens that combine stunning aesthetics with practical functionality — from custom cabinetry to premium countertops.",
    features: ["Custom Cabinetry", "Countertop Installation", "Kitchen Islands", "Lighting Design", "Backsplash Tiling", "Appliance Integration"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Transform your bathroom into a personal spa. Premium fixtures, elegant tilework, and intelligent layouts that make the most of every square foot.",
    features: ["Walk-in Showers", "Freestanding Tubs", "Heated Floors", "Custom Vanities", "Premium Tilework", "Smart Storage"],
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop",
  },
  {
    title: "Whole-Home Renovation",
    description:
      "Ready for a complete transformation? Everything from structural changes and new layouts to seamless finishes throughout. We manage the entire process.",
    features: ["Floor Plan Redesign", "Structural Changes", "Electrical Upgrades", "Plumbing Overhaul", "HVAC Systems", "Interior Finishing"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
  },
  {
    title: "Outdoor Living",
    description:
      "Extend your living space beyond four walls. Beautiful outdoor areas — covered patios, pergolas, outdoor kitchens, and fire pit gathering spaces.",
    features: ["Deck Construction", "Patio Design", "Outdoor Kitchens", "Pergolas & Shade", "Fire Pits", "Landscape Integration"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
  },
  {
    title: "Flooring & Tiling",
    description:
      "The foundation of great design starts at your feet. Premium hardwood, luxury vinyl, natural stone, porcelain, and custom tile patterns.",
    features: ["Hardwood Flooring", "Luxury Vinyl Plank", "Natural Stone", "Porcelain Tile", "Custom Patterns", "Subfloor Prep"],
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=500&fit=crop",
  },
  {
    title: "Painting & Finishing",
    description:
      "Color transforms a space. Professional painting and finishing for interior and exterior surfaces, accent walls, specialty textures, and protective coatings.",
    features: ["Interior Painting", "Exterior Painting", "Accent Walls", "Cabinet Refinishing", "Trim & Molding", "Specialty Finishes"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=500&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-linear-to-b from-amber-50/80 to-white border-b border-amber-100/50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            What We Do
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-500 sm:text-lg">
            Expert craftsmanship for every corner of your home
          </p>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover group overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-amber-100"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 4 && (
                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-zinc-500 ring-1 ring-gray-200">
                      +{service.features.length - 4} more
                    </span>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  Get a Quote
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-linear-to-b from-amber-50/60 to-orange-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-base text-zinc-500 sm:text-lg">
            Book a free consultation and we&apos;ll help you figure out the best
            plan for your home and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 hover:bg-amber-700 hover:shadow-amber-600/30 transition-all duration-300"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
