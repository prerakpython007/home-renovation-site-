import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              Get In Touch
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Ready to start your renovation?
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Tell us about your project and we&apos;ll get back to you within
              24 hours with a free, no-obligation estimate.
            </p>

            {/* Image */}
            <div className="mt-8 relative h-48 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=300&fit=crop"
                alt="Renovation team at work"
                fill
                className="object-cover"
              />
            </div>

            <dl className="mt-8 space-y-5">
              {[
                {
                  label: "Phone",
                  value: "(123) 456-7890",
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "hello@homereno.com",
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  label: "Location",
                  value: "Austin, TX & surrounding areas",
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    {item.icon}
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-zinc-500">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-zinc-900">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — Form */}
          <form className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                Project Type
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
                <option>Kitchen Remodel</option>
                <option>Bathroom Renovation</option>
                <option>Whole-Home Renovation</option>
                <option>Outdoor Living</option>
                <option>Flooring & Tiling</option>
                <option>Painting & Finishing</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-amber-600 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
