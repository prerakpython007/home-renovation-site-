import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — HomeReno",
  description:
    "Learn about HomeReno's story, our team, values, and what makes us Austin's most trusted home renovation company.",
};

const values = [
  {
    title: "Quality Craftsmanship",
    description: "We never cut corners. Every joint, every finish, every detail meets the highest standard.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprise costs. You get a detailed estimate upfront and we stick to it.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    description: "We respect your time. Our project management ensures work is completed when promised.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured so you have complete peace of mind throughout.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Michael Torres",
    role: "Founder & Lead Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Jessica Park",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    role: "Master Carpenter",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Williams",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our Story
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            About HomeReno
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-600 sm:text-lg">
            Building trust through exceptional craftsmanship since 2010
          </p>
        </div>
      </div>

      {/* Story section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-72 sm:h-96 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
              alt="Beautiful home renovation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              Who We Are
            </p>
            <h2 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
              15 years of transforming homes and lives
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              HomeReno was founded in 2010 by Michael Torres, a third-generation
              craftsman with a vision: to bring honest, high-quality renovation
              services to Austin homeowners without the headaches.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Since then, we&apos;ve grown from a two-person crew to a full-service
              renovation company with over 30 skilled professionals. But our
              values haven&apos;t changed — we treat every home like it&apos;s our own.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "2,000+", label: "Projects" },
                { value: "30+", label: "Team Members" },
                { value: "4.9", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-amber-600">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              Our Values
            </p>
            <h2 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
              What sets us apart
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our Team
          </p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
            Meet the people behind the craft
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl sm:h-40 sm:w-40">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-zinc-900 sm:text-base">
                {member.name}
              </h3>
              <p className="text-xs text-zinc-500 sm:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-amber-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Let&apos;s build something great together
          </h2>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg">
            Get in touch to discuss your project with our team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
