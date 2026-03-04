import {
  Building2,
  Globe,
  ShieldCheck,
  Users,
  Sparkles,
  Landmark,
  FileSearch,
  Activity,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

const timeline = [
  {
    year: "2025",
    label: "Incorporation in Hong Kong",
    copy: "Established as GUANGZHOU NAIXIN IMPORT AND EXPORT CO LIMITED with a mandate of radical transparency.",
  },
  {
    year: "2026",
    label: "Dual-vertical launch",
    copy: "Fashion and technology categories unified under a single compliance-first operating system.",
  },
  {
    year: "2027",
    label: "Global fulfilment grid",
    copy: "Expanded bonded warehousing and last-mile coverage to 85+ countries with real-time telemetry.",
  },
  {
    year: "2028",
    label: "Integrity pledge",
    copy: "Third-party audits, blockchain-ledgered shipments, and a concierge verification desk.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity Engineering",
    copy: "Every shipment is pre-verified with audit logs, ensuring zero compromise from sourcing to settlement.",
    tag: "Regulatory-first",
  },
  {
    icon: Globe,
    title: "Global Orchestration",
    copy: "Hong Kong roots with satellite partners in EMEA, ASEAN, and LATAM for synchronized launches.",
    tag: "85+ markets",
  },
  {
    icon: Users,
    title: "Client Centricity",
    copy: "Dedicated advisory pods, weekly pipeline reports, and direct access to sourcing leadership.",
    tag: "Concierge",
  },
  {
    icon: Building2,
    title: "Corporate Discipline",
    copy: "Body corporate structure, annual filings, and vetted board oversight maintain institutional trust.",
    tag: "ISO-ready",
  },
];

const credentials = [
  {
    label: "Company name",
    value: "GUANGZHOU NAIXIN IMPORT AND EXPORT CO LIMITED",
  },
  { label: "Registration no.", value: "77636628-000-01-25-7" },
  { label: "Legal form", value: "Body Corporate (CORP)" },
  {
    label: "Registered address",
    value:
      "8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai, Hong Kong",
  },
  { label: "Validity", value: "22 January 2025" },
  { label: "Issuing authority", value: "Companies Registry, HKSAR Government" },
];

const About = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute top-48 -left-32 h-96 w-96 rounded-full bg-trust/10 blur-[140px]" />
      </div>
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/90 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,transparent_45%)] animate-about-pan" />
        </div>
        <div className="section-container relative z-10 py-24 space-y-12 text-foreground">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/90 px-5 py-2 text-xs uppercase tracking-[0.4em] text-muted-foreground shadow-lg">
            <Sparkles className="h-4 w-4 text-accent" />
            Hong Kong Registered • 2025
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6 rounded-[40px] border border-border bg-white/95 p-8 lg:p-10 shadow-[0_45px_120px_rgba(2,6,23,0.35)]">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                Boutique sourcing power built on compliance and craft.
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl">
                NAIXIN connects couture-level apparel with creator-grade
                technology, operating out of Hong Kong with rigorous
                transparency.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { label: "Founded", value: "2025" },
                  { label: "Markets engaged", value: "24" },
                  { label: "Advisory partners", value: "12" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-border bg-background/70 p-5 backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/compliance"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold transition hover:bg-foreground/90"
                >
                  <FileSearch className="h-4 w-4" />
                  View compliance dossier
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/60"
                >
                  <Users className="h-4 w-4" />
                  Meet leadership
                </a>
              </div>
            </div>
            <div className="relative rounded-[40px] border border-white/25 bg-white/90 backdrop-blur-2xl p-8 space-y-6 shadow-[0_35px_110px_rgba(2,6,23,0.35)]">
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60 blur-3xl" />
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                Dual expertise
              </p>
              <h3 className="text-2xl font-serif text-foreground">
                Fashion ateliers & advanced technology labs in one streamlined
                stack.
              </h3>
              <p className="text-muted-foreground">
                From tailored suiting to smart tools, we build capsules, manage
                logistics, and maintain compliance with one concierge team.
              </p>
              <div className="grid gap-4">
                {[
                  {
                    icon: Landmark,
                    label: "Hong Kong HQ",
                    value: "Body corporate, audited annually",
                  },
                  {
                    icon: Activity,
                    label: "Live telemetry",
                    value: "Ledgered shipments + quality proofs",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-24 space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Our timeline
            </p>
            <h2 className="font-serif text-4xl text-foreground">
              Built on auditable milestones.
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Each stage of NAIXIN’s growth introduced deeper compliance
              measures, richer product ecosystems, and faster logistics.
            </p>
            <div className="relative pl-6 border-l border-border/60 space-y-10">
              {timeline.map((entry, index) => (
                <div
                  key={entry.year}
                  className="relative group animate-fade-rise"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {entry.year}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {entry.label}
                  </h3>
                  <p className="text-muted-foreground">{entry.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[36px] overflow-hidden border border-border bg-gradient-to-br from-background via-card to-background shadow-[0_35px_120px_rgba(2,6,23,0.3)]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt="Hong Kong skyline"
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Headquarters
              </p>
              <h3 className="text-3xl font-serif">
                Registered in the heart of Hong Kong’s corporate district.
              </h3>
              <p className="text-white/80 max-w-xl">
                8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai—where
                legal, sourcing, and client teams operate under one roof.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Operating thesis
              </p>
              <h2 className="font-serif text-3xl text-foreground">
                Four pillars anchoring NAIXIN.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-3xl">
              We merge boutique service with institutional-grade governance, so
              every collaboration feels bespoke yet secure.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative overflow-hidden rounded-[32px] border border-border bg-card/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition" />
                <div className="inline-flex items-center gap-3 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  <value.icon className="h-4 w-4 text-accent" />
                  {value.tag}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="rounded-[36px] border border-border bg-card/80 p-10 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-trust to-accent animate-gradient-flow" />
            </div>
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Governance
                </p>
                <h3 className="font-serif text-3xl text-foreground">
                  Compliance is our launchpad.
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground">
              Every contract, product drop, and cross-border shipment is backed
              by legal documentation and shared verification tools.
            </p>
            <div className="grid gap-4">
              {credentials.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-border/70 p-4 bg-background/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {row.label}
                  </span>
                  <span className="text-foreground text-sm sm:text-base">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/compliance"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:bg-foreground/90"
              >
                <ArrowRight className="h-4 w-4" />
                Verify instantly
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold"
              >
                Request documents
              </a>
            </div>
          </div>

          <div className="rounded-[36px] border border-border bg-gradient-to-br from-foreground/5 via-card to-background p-10 flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Leadership desk
            </p>
            <h3 className="font-serif text-3xl text-foreground">
              Prefer a private briefing?
            </h3>
            <p className="text-muted-foreground">
              Speak directly with our sourcing strategists. We’ll unlock catalog
              access, compliance files, and bespoke development timelines.
            </p>
            <form className="space-y-4">
              <div className="rounded-2xl border border-border px-4 py-3 bg-background/80">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full rounded-2xl bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:bg-accent/90"
              >
                Book a call
              </button>
            </form>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@naixin.global
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +852 5552 8890
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes about-pan {
          0% { transform: translateX(-8%); }
          50% { transform: translateX(6%); }
          100% { transform: translateX(-8%); }
        }
        .animate-about-pan {
          animation: about-pan 20s ease-in-out infinite;
        }
        @keyframes fade-rise {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-rise {
          animation: fade-rise 0.8s ease forwards;
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
