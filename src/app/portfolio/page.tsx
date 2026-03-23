import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — HomeReno",
  description:
    "Browse our portfolio of completed home renovation projects including kitchens, bathrooms, whole-home transformations, and outdoor spaces.",
};

const projects = [
  {
    title: "Modern Farmhouse Kitchen",
    category: "Kitchen",
    location: "Austin, TX",
    description:
      "Complete gut renovation featuring shaker-style cabinetry, quartz countertops, a 10-foot island with seating, and brass hardware throughout.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
  },
  {
    title: "Luxury Master Bath",
    category: "Bathroom",
    location: "Round Rock, TX",
    description:
      "Spa-inspired master bathroom with a freestanding soaking tub, frameless glass walk-in shower, heated porcelain floors, and double vanity.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
  },
  {
    title: "Open Concept Living",
    category: "Whole Home",
    location: "Cedar Park, TX",
    description:
      "Removed a load-bearing wall to merge kitchen, dining, and living. Added skylights, refinished hardwood floors, and a built-in entertainment center.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    title: "Backyard Oasis",
    category: "Outdoor",
    location: "Lakeway, TX",
    description:
      "Covered cedar pergola with a full outdoor kitchen, stone fire pit, string lighting, and integrated landscape design.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  },
  {
    title: "Coastal Inspired Kitchen",
    category: "Kitchen",
    location: "Georgetown, TX",
    description:
      "Light and airy kitchen remodel with white shaker cabinets, blue glass subway tile backsplash, and butcher-block island.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  },
  {
    title: "Industrial Loft Conversion",
    category: "Whole Home",
    location: "East Austin, TX",
    description:
      "Converted a warehouse loft into a modern two-bedroom home with exposed brick, polished concrete floors, and custom steel stairs.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
  },
  {
    title: "Minimalist Guest Bath",
    category: "Bathroom",
    location: "Pflugerville, TX",
    description:
      "Clean-line guest bathroom with large-format porcelain tile, floating vanity, and a frameless mirror with LED backlight.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
  },
  {
    title: "Rooftop Deck & Lounge",
    category: "Outdoor",
    location: "Downtown Austin, TX",
    description:
      "Rooftop entertaining space with composite decking, built-in bench seating, planter boxes, and a gas fire table.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Kitchen", "Bathroom", "Whole Home", "Outdoor"];

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our Work
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Project Portfolio
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-600 sm:text-lg">
            Browse our completed renovations and get inspired
          </p>
        </div>
      </div>

      {/* Filter pills */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 -mx-1 px-1">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-zinc-600 hover:bg-amber-50 hover:text-amber-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur-sm shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-amber-600 font-medium">
                  {project.location}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Want results like these?
          </h2>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg">
            Let&apos;s discuss your project and create something you&apos;ll love
            coming home to.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
