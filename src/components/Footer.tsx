import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Kitchen Remodeling", href: "/services" },
    { label: "Bathroom Renovation", href: "/services" },
    { label: "Whole-Home Renovation", href: "/services" },
    { label: "Outdoor Living", href: "/services" },
    { label: "Flooring & Tiling", href: "/services" },
    { label: "Painting & Finishing", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/contact" },
    { label: "Warranty", href: "/about" },
    { label: "Financing Options", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-sm">
                HR
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">
                HomeReno<span className="text-amber-600">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Premium home renovation services in Austin, TX and surrounding
              areas. Licensed, bonded, and insured.
            </p>
            <div className="mt-6 flex gap-4">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-zinc-500 transition-colors hover:border-amber-500 hover:text-amber-600"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-zinc-900">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-amber-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} HomeReno. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-zinc-500 transition-colors hover:text-zinc-700"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
