import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Modern Farmhouse Kitchen",
    category: "Kitchen",
    description: "Complete gut renovation with custom island and open shelving",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
  },
  {
    title: "Luxury Master Bath",
    category: "Bathroom",
    description: "Freestanding tub, walk-in shower, and heated floors",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
  },
  {
    title: "Open Concept Living",
    category: "Whole Home",
    description: "Removed load-bearing wall to create flowing living space",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    title: "Backyard Oasis",
    category: "Outdoor",
    description: "Covered patio with built-in grill and lounge seating",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Recent projects we&apos;re proud of
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
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
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:border-amber-300 hover:bg-amber-50 transition-colors"
          >
            View Full Portfolio
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
