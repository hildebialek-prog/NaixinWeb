import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  FileCheck,
  Sparkles,
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Clock,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const node = footerRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#04050a] pt-16 lg:pt-24 text-primary-foreground"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(12,17,38,0.9),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:220px_220px] opacity-40" />
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-accent/20 blur-[160px] footer-float-delay" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-trust/15 blur-[180px] footer-float" />
      </div>

      <div className="section-container relative z-10 py-16 lg:py-20">
        <div
          className={`grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] rounded-[32px] border border-white/10 bg-white/5/60 px-8 py-10 lg:px-12 lg:py-14 backdrop-blur-3xl shadow-[0_30px_120px_rgba(4,5,10,0.65)] transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 hover:shadow-[0_40px_140px_rgba(4,5,10,0.8)]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left column */}
          <div className="space-y-10">
            {/* Brand */}
            <div className="relative space-y-5 overflow-hidden rounded-[28px] border border-white/5 bg-white/5 p-6">
              <span className="pointer-events-none footer-orbit absolute -top-12 -left-16 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
              <span className="pointer-events-none footer-orbit-delay absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-trust/20 blur-2xl" />
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                Since 2025
                <Clock className="h-4 w-4 text-trust animate-pulse" />
              </div>
              <div>
                <h3 className="font-serif text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  NAIXIN
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 max-w-lg">
                  A global trading house curating fashion, technology, and
                  compliance-ready partnerships with unmatched credibility.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                  <ShieldCheck className="h-4 w-4 text-trust" />
                  Verified HK Entity
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                  <FileCheck className="h-4 w-4 text-accent" />
                  Documents on-demand
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575411725152", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-white"
                    >
                      <span className="absolute inset-0 rounded-full border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-trust/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation clusters */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Shop",
                  links: [
                    { label: "Clothing", href: "/shop/clothing" },
                    { label: "Technology", href: "/shop/technology" },
                    { label: "New Arrivals", href: "/shop/clothing/new" },
                    { label: "Sale", href: "/shop/clothing/sale" },
                  ],
                },
                {
                  title: "Information",
                  links: [
                    { label: "About Us", href: "/about" },
                    { label: "Verification Suite", href: "/compliance" },
                    { label: "Policies", href: "/policies" },
                    { label: "Contact", href: "/contact" },
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    { label: "Partner Portal", href: "#" },
                    { label: "Documentation", href: "/compliance" },
                    { label: "Lookbook", href: "#" },
                    { label: "Investor Desk", href: "#" },
                  ],
                },
              ].map((section, index) => (
                <div
                  key={section.title}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 120}ms` }}
                >
                  <h4 className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/60">
                    {section.title.toUpperCase()}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="group flex items-center gap-3 text-white/60 transition-all duration-300 hover:text-white"
                          onClick={handleNavigate}
                        >
                          <span className="footer-link-dot h-1.5 w-1.5 rounded-full bg-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                          <span className="relative">
                            {link.label}
                            <span className="footer-underline absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Contact & Verification */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-inner">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_70%)] opacity-70" />
              <div className="absolute -inset-1 footer-card-shimmer opacity-20" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.3em] text-white/60">
                      CONTACT
                    </p>
                    <p className="text-lg font-semibold text-white mt-2">
                      Dedicated Partner Desk
                    </p>
                  </div>
                  <div className="rounded-full border border-white/15 px-4 py-1 text-xs font-semibold text-white/70">
                    24/7 response
                  </div>
                </div>
                <div className="space-y-4 text-sm text-white/70">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <p>
                      8/F., China Hong Kong Tower,
                      <br />
                      8–12 Hennessy Road, Wan Chai, Hong Kong
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-trust">
                      <Mail className="h-4 w-4" />
                    </div>
                    <a
                      href="mailto:info@guangzhounaxinclothings.com"
                      className="text-white/80 hover:text-white transition"
                    >
                      info@guangzhounaxinclothings.com
                    </a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+44 7365 402 923</span>
                  </div>
                </div>
                <Link
                  to="/compliance"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition"
                  onClick={handleNavigate}
                >
                  Download verification pack
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Legal / Verification */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-xs text-white/70">
              <p className="mb-2 font-semibold text-white">
                GUANGZHOU NAIXIN IMPORT AND EXPORT CO LIMITED
              </p>
              <p className="mb-1">BR Cert No. 77636628-000-01-25-7</p>
              <p className="mb-1">
                Registered Address: 8/F., China Hong Kong Tower, 8–12 Hennessy
                Road, Wan Chai, Hong Kong
              </p>
              <p className="opacity-70">
                Valid 22 Jan 2025 — Issued by Companies Registry, The Government
                of the Hong Kong SAR
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 lg:flex-row">
          <p>
            © {new Date().getFullYear()} GUANGZHOU NAIXIN IMPORT AND EXPORT CO
            LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/60">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Compliance</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footer-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(12px); }
        }

        @keyframes footer-float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(12px) translateX(-10px); }
        }

        @keyframes footer-orbit {
          0% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 0.7; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.4; }
        }

        @keyframes footer-orbit-delay {
          0% { transform: rotate(0deg) scale(0.9); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.6; }
          100% { transform: rotate(360deg) scale(0.9); opacity: 0.3; }
        }

        @keyframes footer-card-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .footer-float {
          animation: footer-float 18s ease-in-out infinite;
        }

        .footer-float-delay {
          animation: footer-float-delay 20s ease-in-out infinite;
        }

        .footer-orbit {
          animation: footer-orbit 24s linear infinite;
        }

        .footer-orbit-delay {
          animation: footer-orbit-delay 28s linear infinite;
        }

        .footer-card-shimmer {
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0) 70%);
          background-size: 200% 100%;
          animation: footer-card-shimmer 8s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
