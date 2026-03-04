import { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  Globe,
  Zap,
  ChevronDown,
  Check,
  Mail,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, ProductCategory } from "@/data/products";

const categoryAccent: Record<
  ProductCategory,
  { gradient: string; accentLabel: string }
> = {
  men: {
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    accentLabel: "Tailored excellence",
  },
  women: {
    gradient: "from-rose-900 via-fuchsia-900 to-purple-900",
    accentLabel: "Runway curation",
  },
  accessories: {
    gradient: "from-amber-900 via-orange-900 to-stone-900",
    accentLabel: "Collectors' edit",
  },
  "tech-gear": {
    gradient: "from-indigo-950 via-slate-900 to-black",
    accentLabel: "Creator-grade rig",
  },
  workspace: {
    gradient: "from-emerald-950 via-cyan-950 to-black",
    accentLabel: "Motion studios",
  },
  "creator-studio": {
    gradient: "from-purple-950 via-indigo-950 to-black",
    accentLabel: "Cinematic build",
  },
  "smart-tools": {
    gradient: "from-blue-950 via-slate-950 to-black",
    accentLabel: "Field innovation",
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = useMemo(() => products.find((item) => item.id === id), [id]);

  const galleryImages = useMemo(() => {
    if (!product) {
      return [];
    }
    const combined = [
      product.image,
      product.hoverImage,
      ...(product.imageGallery ?? []),
    ].filter(Boolean) as string[];
    return Array.from(new Set(combined));
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) {
      return [];
    }
    return products
      .filter(
        (item) => item.category === product.category && item.id !== product.id
      )
      .slice(0, 4);
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [specExpanded, setSpecExpanded] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) {
      return;
    }
    const handleScroll = () => {
      const offset = window.scrollY;
      node.style.setProperty("--hero-shift", `${offset * 0.05}px`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="section-container relative z-10 space-y-6 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Product archive
            </p>
            <h1 className="text-4xl font-serif lg:text-5xl max-w-3xl">
              This configuration is currently in curation
            </h1>
            <p className="max-w-2xl text-white/80">
              Our sourcing team is crafting the perfect showcase. Navigate back
              home or speak directly with us for bespoke recommendations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Return home
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Contact advisors
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const accent = categoryAccent[product.category];

  const specs = [
    { label: "Lead time", value: "4-6 weeks" },
    { label: "MOQ", value: "25 units" },
    { label: "Warranty", value: "24 months" },
    { label: "Compliance", value: "ISO 9001, SGS" },
  ];

  const featureList =
    product.category === "tech-gear"
      ? ["OLED-ready hardware", "Dual thermal architecture", "Carbon composite"]
      : product.category === "men"
      ? ["Italian wool blend", "Hand-finished seams", "Adaptive vents"]
      : product.category === "women"
      ? ["Architectural drape", "Micro-pleated detailing", "Gallery-grade dyes"]
      : product.category === "accessories"
      ? ["Vegetable-tanned leather", "Modular hardware", "RFID shielding"]
      : product.category === "workspace"
      ? ["Height memory presets", "Anti-glare glass", "Cable armor channels"]
      : product.category === "creator-studio"
      ? ["Hydra gimbal system", "Neodymium monitors", "Field-ready case"]
      : ["Encrypted telemetry", "Weatherized shell", "Multi-band sensors"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section ref={heroRef} className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryImages[activeImageIndex] || product.image}
            alt={product.name}
            className="h-full w-full object-cover opacity-40"
            style={{ transform: "translateY(calc(var(--hero-shift,0px)))" }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-90`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
          <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)] animate-hero-pan" />
        </div>
        <div className="section-container relative z-10 py-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to={`/category/${product.category}`}
              className="hover:text-white transition-colors"
            >
              {product.category.replace("-", " ")}
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 rounded-[40px] border border-white/20 bg-white/90 text-foreground backdrop-blur-3xl p-8 lg:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                {accent.accentLabel}
              </div>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl lg:text-5xl leading-tight text-foreground">
                  {product.name}
                </h1>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.35em] text-muted-foreground">
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                  {product.rating.toFixed(1)} rating
                </div>
                {product.isNew && (
                  <span className="rounded-full border border-border px-4 py-2 text-foreground">
                    New drop
                  </span>
                )}
                {product.onSale && (
                  <span className="rounded-full border border-border px-4 py-2 text-foreground">
                    Limited promo
                  </span>
                )}
                <span className="rounded-full border border-border px-4 py-2">
                  Ships worldwide
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Request catalog
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="gap-2 text-foreground hover:text-foreground/70"
                  onClick={() => navigate(`/category/${product.category}`)}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to category
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-white/70 p-4 text-foreground"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-black/40 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[3/4]">
                  <img
                    src={galleryImages[activeImageIndex]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                      Frame {activeImageIndex + 1} / {galleryImages.length}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      Immersive detail
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 p-4">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      tabIndex={0}
                      aria-pressed={activeImageIndex === index}
                      aria-label={`View image ${index + 1}`}
                      onClick={() => setActiveImageIndex(index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActiveImageIndex(index);
                        }
                      }}
                      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        activeImageIndex === index
                          ? "border-white opacity-100"
                          : "border-white/20 opacity-60 hover:opacity-90"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-16 space-y-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Verified sourcing",
              copy: "Multi-point QC, third-party inspections, and blockchain-ready ledgers.",
            },
            {
              icon: Globe,
              title: "Global logistics",
              copy: "Door-to-door coverage across 85+ countries with bonded warehousing.",
            },
            {
              icon: Zap,
              title: "Priority support",
              copy: "Dedicated concierge with live telemetry across every shipment.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-[32px] border border-border bg-card/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-muted-foreground">{card.copy}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[36px] border border-border bg-card/80 p-10 space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl">Behind the craft</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
            <ul className="space-y-3">
              {featureList.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-border px-4 py-3 text-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="grid gap-4 md:grid-cols-3">
              {["Concept", "Production", "Delivery"].map((phase, index) => (
                <div
                  key={phase}
                  className="rounded-2xl border border-border bg-background/60 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    Phase {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{phase}</p>
                  <div className="mt-3 h-1 rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${((index + 1) / 3) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-border bg-card/80 p-8">
              <button
                type="button"
                onClick={() => setSpecExpanded((prev) => !prev)}
                className="flex w-full items-center justify-between text-left"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    Technical dossier
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Specification sheet
                  </h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    specExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-500 ${
                  specExpanded
                    ? "max-h-[900px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  {[
                    {
                      label: "Dimensions",
                      value: "Standard EU sizing / Customizable",
                    },
                    { label: "Weight", value: "1.2kg packaged" },
                    {
                      label: "Material",
                      value: "Premium composites & natural fibers",
                    },
                    { label: "Care", value: "Dry clean / anti-static wipe" },
                    {
                      label: "Energy",
                      value: "45W max draw (tech categories)",
                    },
                    { label: "Certifications", value: "CE, FCC, RoHS" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-2xl border border-border px-4 py-3"
                    >
                      <span className="text-foreground">{row.label}</span>
                      <span className="text-right text-muted-foreground">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-border bg-gradient-to-br from-foreground/10 via-card to-background/80 p-8 space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Bespoke briefing
              </p>
              <h3 className="text-3xl font-serif leading-tight">
                Need private adjustments or capsule-exclusive edits?
              </h3>
              <p className="text-muted-foreground">
                Plug directly into our sourcing strategists. We can adapt
                fabrics, colors, firmware, or packouts within 10 business days.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Schedule briefing
                </Button>
                <Button variant="outline" className="gap-2">
                  <PhoneCall className="h-4 w-4" />
                  Speak now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section-container pb-24 space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Related edits
              </p>
              <h2 className="font-serif text-3xl">Curated for your palette</h2>
            </div>
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() => navigate(`/category/${product.category}`)}
            >
              View full category
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} {...item} hidePrice />
            ))}
          </div>
        </section>
      )}

      <style>{`
        @keyframes hero-pan {
          0% { transform: translateX(-10%) }
          50% { transform: translateX(10%) }
          100% { transform: translateX(-10%) }
        }

        .animate-hero-pan {
          animation: hero-pan 16s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
