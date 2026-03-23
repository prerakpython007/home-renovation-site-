import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 pt-12 pb-16 lg:grid-cols-2 lg:pt-20 lg:pb-24">
          {/* Left — Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-700">
                Trusted by 2,000+ homeowners
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Transform your home into a{" "}
              <span className="text-amber-600">masterpiece</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-xl">
              From kitchen remodels to full-home renovations, we bring
              craftsmanship and attention to detail to every project. Quality
              materials, expert teams, and results that last a lifetime.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/contact"
                className="rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="/portfolio"
                className="group flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold text-zinc-700 hover:border-amber-300 hover:bg-amber-50 transition-colors"
              >
                View Our Work
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "2,000+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
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
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Licensed & Insured</p>
                  <p className="text-xs text-zinc-500">Fully bonded professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
