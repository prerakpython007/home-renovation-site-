import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — HomeReno",
  description:
    "Read what our clients say about their home renovation experience with HomeReno.",
};

const testimonials = [
  {
    quote:
      "They transformed our outdated kitchen into a modern showpiece. The attention to detail was incredible — every tile, every cabinet, perfectly placed. We couldn't be happier with the result.",
    name: "Sarah M.",
    role: "Kitchen Remodel",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "From the first consultation to the final walk-through, the team was professional and communicative. Our bathroom renovation was completed ahead of schedule and the quality is top-notch.",
    name: "David & Karen L.",
    role: "Bathroom Renovation",
    location: "Dallas, TX",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "We were nervous about a whole-home renovation, but they made the process stress-free. The result exceeded every expectation we had. Our home feels completely new.",
    name: "James R.",
    role: "Whole-Home Renovation",
    location: "San Antonio, TX",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "The outdoor kitchen and patio they built is the envy of our neighborhood. We use it almost every weekend now. The craftsmanship is second to none.",
    name: "Linda & Tom B.",
    role: "Outdoor Living",
    location: "Cedar Park, TX",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "They replaced all the flooring in our 3,000 sq ft home with beautiful hardwood. It was done in just two weeks with minimal disruption. The team was respectful and cleaned up every day.",
    name: "Robert K.",
    role: "Flooring Installation",
    location: "Round Rock, TX",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "The fresh paint and new accent walls completely changed the feel of our living room. They helped us pick the perfect colors and the execution was flawless. Highly recommend.",
    name: "Emily W.",
    role: "Painting & Finishing",
    location: "Pflugerville, TX",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Client Stories
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Testimonials
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-600 sm:text-lg">
            Real reviews from real homeowners
          </p>
        </div>
      </div>

      {/* Rating summary */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-12">
            <div className="text-center sm:text-left">
              <div className="text-4xl font-bold text-zinc-900 sm:text-5xl">4.9</div>
              <div className="flex gap-1 mt-1 justify-center sm:justify-start text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 text-sm text-zinc-500">Based on 200+ reviews</p>
            </div>
            <div className="hidden sm:block h-16 w-px bg-gray-200" />
            <div className="flex gap-8 text-center">
              {[
                { value: "98%", label: "Would Recommend" },
                { value: "95%", label: "On-Time Completion" },
                { value: "97%", label: "On-Budget Delivery" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-zinc-900 sm:text-2xl">{stat.value}</div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="space-y-10 sm:space-y-12">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:gap-0 lg:grid-cols-5 ${
                idx % 2 === 1 ? "" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-56 sm:h-64 lg:h-auto lg:col-span-2 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={t.image}
                  alt={`${t.role} project`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center p-6 sm:p-8 lg:col-span-3 lg:p-12 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {t.role} &middot; {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-amber-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Ready to be our next success story?
          </h2>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg">
            Join thousands of satisfied homeowners who trusted us with their
            renovation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
