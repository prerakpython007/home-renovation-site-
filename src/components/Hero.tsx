import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-amber-50/80 via-white to-white pt-24 pb-0">
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="absolute -top-10 -left-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 pt-12 pb-16 lg:grid-cols-2 lg:pt-20 lg:pb-24">
          {/* Left — Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-1.5 mb-8 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-700">
                Trusted by 2,000+ homeowners
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-[1.08]">
              Transform your
              <br />
              home into a{" "}
              <span className="relative inline-block text-amber-600">
                masterpiece
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6c50-4 100-4 196 0" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-500 max-w-xl">
              From kitchen remodels to full-home renovations, we bring
              craftsmanship and attention to detail to every project. Quality
              materials, expert teams, and results that last a lifetime.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 hover:bg-amber-700 hover:shadow-amber-600/30 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-700 shadow-sm hover:border-amber-200 hover:bg-amber-50 transition-all duration-300"
              >
                View Our Work
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "2,000+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                alt="Beautiful modern home renovation"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100 glow-amber">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Licensed & Insured</p>
                  <p className="text-xs text-zinc-400">Fully bonded professionals</p>
                </div>
              </div>
            </div>
            {/* Second floating element */}
            <div className="absolute -top-3 -right-3 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-zinc-700">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
