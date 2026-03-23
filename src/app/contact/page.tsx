import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — HomeReno",
  description:
    "Get in touch with HomeReno for a free renovation consultation and quote. Serving Austin, TX and surrounding areas.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Get In Touch
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-600 sm:text-lg">
            Free consultations, honest estimates, zero pressure
          </p>
        </div>
      </div>

      {/* Contact info cards */}
      <div className="mx-auto max-w-7xl px-6 mt-8 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {[
            {
              label: "Call Us",
              value: "(123) 456-7890",
              sub: "Mon–Fri 8am–6pm, Sat 9am–2pm",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              ),
            },
            {
              label: "Email Us",
              value: "hello@homereno.com",
              sub: "We respond within 24 hours",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              ),
            },
            {
              label: "Visit Us",
              value: "Austin, TX",
              sub: "Serving the greater Austin metro",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-500">{item.label}</p>
                <p className="text-sm font-semibold text-zinc-900 truncate">{item.value}</p>
                <p className="text-xs text-zinc-400">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Info */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Tell us about your project
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Fill out the form and one of our renovation specialists will reach
              out within 24 hours to discuss your project, answer questions, and
              schedule a free on-site consultation.
            </p>

            {/* Process */}
            <div className="mt-10 space-y-6">
              {[
                {
                  step: "1",
                  title: "Submit your request",
                  description: "Share your project details through the form.",
                },
                {
                  step: "2",
                  title: "Free consultation",
                  description: "We visit your home to assess the project scope.",
                },
                {
                  step: "3",
                  title: "Detailed estimate",
                  description: "Receive a transparent, itemized quote.",
                },
                {
                  step: "4",
                  title: "Build begins",
                  description: "Our crew gets to work bringing your vision to life.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-10 relative h-48 sm:h-56 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=300&fit=crop"
                alt="Consultation meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — Form */}
          <form className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 h-fit">
            <h3 className="text-lg font-semibold text-zinc-900">
              Request a Free Quote
            </h3>
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
                Phone
              </label>
              <input
                type="tel"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                Project Type
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
                <option value="">Select a service...</option>
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
                Budget Range
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
                <option value="">Select budget range...</option>
                <option>Under $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000 – $50,000</option>
                <option>$50,000 – $100,000</option>
                <option>$100,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
                placeholder="Tell us about your project — what you'd like to change, your timeline, any inspiration..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-amber-600 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-colors"
            >
              Send Request
            </button>
            <p className="text-center text-xs text-zinc-400">
              No spam, no obligations. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
