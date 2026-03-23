import Image from "next/image";

const testimonials = [
  {
    quote: "They transformed our outdated kitchen into a modern showpiece. The attention to detail was incredible — every tile, every cabinet, perfectly placed.",
    name: "Sarah M.",
    role: "Kitchen Remodel, Austin TX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "From the first consultation to the final walk-through, the team was professional and communicative. Our bathroom renovation was completed ahead of schedule.",
    name: "David & Karen L.",
    role: "Bathroom Renovation, Dallas TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "We were nervous about a whole-home renovation, but they made the process stress-free. The result exceeded every expectation we had.",
    name: "James R.",
    role: "Whole Home, San Antonio TX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-linear-to-b from-amber-50/60 to-orange-50/30 py-24 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-linear-to-r from-transparent via-amber-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Loved by homeowners
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-amber-100">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
