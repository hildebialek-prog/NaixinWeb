import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Filter,
  Grid2X2,
  Rows4,
  Sparkles,
  Star,
  ShieldCheck,
  Globe,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ProductCategory, products, productsByCategory } from "@/data/products";

type SortOption = "featured" | "rating" | "newest" | "alphabetical";

const collectionProfiles: Record<
  ProductCategory,
  {
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    gradient: string;
    highlights: string[];
  }
> = {
  men: {
    title: "Executive tailoring, modern silhouettes",
    subtitle: "Looks engineered for boardrooms, lounges, and red-eye flights.",
    description:
      "Cashmere suiting, modular trenches, and elevated weekenders curated for founders and deal-makers.",
    heroImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80",
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    highlights: ["Precision suiting", "Travel layers", "Statement coats"],
  },
  women: {
    title: "Sculpted statements for visionary leaders",
    subtitle: "Architectural dresses and sheer tailoring for gallery nights.",
    description:
      "Fluid silks, structured blazers, and handcrafted details for summits, launches, and private dinners.",
    heroImage:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1600&q=80",
    gradient: "from-rose-900 via-fuchsia-900 to-purple-900",
    highlights: ["Runway silhouettes", "Organza blazers", "Collector edits"],
  },
  accessories: {
    title: "Future-class finishing touches",
    subtitle: "Hand-finished leather, sculpted eyewear, luminous hardware.",
    description:
      "Accessories vetted for craftsmanship and versatility—engineered to travel well and age beautifully.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80",
    gradient: "from-amber-900 via-orange-900 to-stone-900",
    highlights: ["Italian leather", "Orbit eyewear", "Limited drops"],
  },
  "tech-gear": {
    title: "Creator-grade workstations",
    subtitle: "Pro laptops, audio hubs, and render-ready rigs.",
    description:
      "Vapor-chamber cooling, OLED panels, and carbon chassis curated for studios, traders, and touring teams.",
    heroImage:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1600&q=80",
    gradient: "from-indigo-950 via-slate-900 to-black",
    highlights: ["OLED setups", "Audio mastering", "Carbon chassis"],
  },
  workspace: {
    title: "Studios that move with you",
    subtitle: "Standing desks, tuned lighting, and ergonomic ecosystems.",
    description:
      "Motorized desks, gesture lighting, and cable-agnostic docks so remote HQs feel effortlessly premium.",
    heroImage:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1600&q=80",
    gradient: "from-emerald-950 via-cyan-950 to-black",
    highlights: ["Orbit desks", "Gesture lighting", "Cable armor"],
  },
  "creator-studio": {
    title: "Cinematic rigs & sonic monitors",
    subtitle: "For DPs, editors, and stadium-level creators.",
    description:
      "Hydra stabilizers, graphene monitors, and adaptive rigs that keep content-grade teams shipping from anywhere.",
    heroImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80",
    gradient: "from-purple-950 via-indigo-950 to-black",
    highlights: ["Hydra rigs", "Graphene audio", "Field-ready kits"],
  },
  "smart-tools": {
    title: "Precision equipment for field teams",
    subtitle: "Drones, toolsets, and diagnostics with live telemetry.",
    description:
      "Built for survey crews, agritech ops, and innovation labs demanding rugged hardware with encrypted data channels.",
    heroImage:
      "https://images.unsplash.com/photo-1504198266285-165a04b8e0d2?w=1600&q=80",
    gradient: "from-blue-950 via-slate-950 to-black",
    highlights: ["Atlas drones", "Flux toolsets", "Secure telemetry"],
  },
};

const Category = () => {
  const { slug } = useParams<{ slug: ProductCategory }>();
  const categoryKey = slug as ProductCategory | undefined;
  const meta = categoryKey ? collectionProfiles[categoryKey] : undefined;
  const inventory = categoryKey ? productsByCategory[categoryKey] ?? [] : [];

  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [onlyNew, setOnlyNew] = useState(false);
  const [onlyOnSale, setOnlyOnSale] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "row">("grid");

  const filteredProducts = useMemo(() => {
    const scoped = inventory.filter((product) => {
      if (onlyNew && !product.isNew) {
        return false;
      }
      if (onlyOnSale && !product.onSale) {
        return false;
      }
      if (minRating && product.rating < minRating) {
        return false;
      }
      return true;
    });

    const sorted = [...scoped];
    sorted.sort((a, b) => {
      if (sortOption === "rating") {
        return b.rating - a.rating;
      }
      if (sortOption === "newest") {
        return Number(b.isNew) - Number(a.isNew);
      }
      if (sortOption === "alphabetical") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return sorted;
  }, [inventory, sortOption, onlyNew, onlyOnSale, minRating]);

  if (!meta || !categoryKey) {
    return (
      <div className="section-container py-32 text-center space-y-6">
        <h1 className="text-4xl font-serif">Collection in curation</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our creative team is shaping this showcase. Head back home or speak
          with us directly for bespoke sourcing.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button>Return home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Talk to us</Button>
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    {
      label: "Pieces live",
      value: inventory.length.toString(),
    },
    {
      label: "Avg. rating",
      value: `${(
        inventory.reduce((sum, product) => sum + product.rating, 0) /
        (inventory.length || 1)
      ).toFixed(1)} / 5`,
    },
    {
      label: "New arrivals",
      value: `${inventory.filter((product) => product.isNew).length}`,
    },
  ];

  const heroSpotlight =
    [...inventory].sort((a, b) => b.rating - a.rating)[0] ?? inventory[0];
  const crossCategory = products
    .filter((item) => item.category !== categoryKey)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-white">
      <Hero meta={meta} stats={stats} />

      <section className="section-container -mt-16 lg:-mt-20 space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[36px] border border-border bg-gradient-to-br from-background via-background/90 to-background/70 backdrop-blur-2xl p-8 lg:p-10 space-y-8 shadow-[0_35px_120px_rgba(0,0,0,0.35)] text-foreground">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              {meta.highlights.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-card/80 px-4 py-1 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-3xl lg:text-4xl drop-shadow-2xl">
                {meta.subtitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {meta.description}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <FeatureChip
                icon={<ShieldCheck className="h-4 w-4" />}
                label="Verified supply chain"
              />
              <FeatureChip
                icon={<Globe className="h-4 w-4" />}
                label="Global fulfilment"
              />
              <FeatureChip
                icon={<Zap className="h-4 w-4" />}
                label="Express sourcing"
              />
            </div>
          </div>

          <div className="rounded-[36px] border border-border bg-gradient-to-br from-background via-background/85 to-background/60 backdrop-blur-2xl p-8 text-foreground shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
            <div className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Spotlight product
            </div>
            {heroSpotlight ? (
              <div className="mt-5 rounded-3xl overflow-hidden border border-border">
                <img
                  src={heroSpotlight.image}
                  alt={heroSpotlight.name}
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="p-6 space-y-4 bg-card/90 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {heroSpotlight.rating.toFixed(1)} rating
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {heroSpotlight.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {heroSpotlight.shortDescription}
                  </p>
                  <Link
                    to={`/product/${heroSpotlight.id}`}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-foreground/80 hover:text-foreground transition-colors"
                  >
                    View details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground mt-6">
                No spotlight available for this collection yet.
              </p>
            )}
            <div className="mt-8 border-t border-border pt-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                You might also explore
              </p>
              <div className="flex flex-wrap gap-3">
                {crossCategory.map((item) => (
                  <Link
                    key={item.id}
                    to={`/category/${item.category}`}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-16 space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              {filteredProducts.length} curated pieces
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground">
              Browse the catalog
            </h2>
          </div>
          <Toolbar
            sortOption={sortOption}
            setSortOption={setSortOption}
            onlyNew={onlyNew}
            setOnlyNew={setOnlyNew}
            onlyOnSale={onlyOnSale}
            setOnlyOnSale={setOnlyOnSale}
            minRating={minRating}
            setMinRating={setMinRating}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-[32px] border border-border bg-muted/40 p-12 text-center space-y-4">
            <h3 className="text-xl font-semibold">No matches just yet</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Adjust your filters or check back soon—our sourcing team refreshes
              this category weekly.
            </p>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "md:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) =>
              viewMode === "grid" ? (
                <ProductCard key={product.id} {...product} hidePrice />
              ) : (
                <div
                  key={product.id}
                  className="flex gap-5 rounded-3xl border border-border bg-card p-4 text-foreground shadow-lg"
                >
                  <div className="w-40 rounded-2xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <ProductCard {...product} hidePrice />
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
};

const Hero = ({
  meta,
  stats,
}: {
  meta: (typeof collectionProfiles)[ProductCategory];
  stats: { label: string; value: string }[];
}) => (
  <section className="relative min-h-[70vh] overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={meta.heroImage}
        alt={meta.title}
        className="h-full w-full object-cover opacity-30"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-90`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_60%)]" />
    </div>
    <div className="section-container relative z-10 py-20 space-y-10 text-white">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/70">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <span>{meta.title}</span>
      </div>
      <div className="space-y-6 rounded-[32px] border border-white/10 bg-background/70/[@supports(backdrop-filter:blur(0px))]:bg-background/60 backdrop-blur-xl p-8 lg:p-10 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.4em] text-foreground">
          <Sparkles className="h-4 w-4 text-accent animate-pulse" />
          curated drop
        </div>
        <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground drop-shadow-2xl">
          {meta.title}
        </h1>
        <p className="text-lg text-foreground/85 max-w-3xl">{meta.subtitle}</p>
        <p className="text-foreground/70 max-w-3xl leading-relaxed">
          {meta.description}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-lg text-foreground"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-black hover:text-white"
            >
              Request line sheet
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="ghost"
              size="lg"
              className="gap-2 text-foreground/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const FeatureChip = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground shadow-sm">
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
      {icon}
    </span>
    {label}
  </div>
);

const Toolbar = ({
  sortOption,
  setSortOption,
  onlyNew,
  setOnlyNew,
  onlyOnSale,
  setOnlyOnSale,
  minRating,
  setMinRating,
  viewMode,
  setViewMode,
}: {
  sortOption: SortOption;
  setSortOption: (value: SortOption) => void;
  onlyNew: boolean;
  setOnlyNew: (value: boolean) => void;
  onlyOnSale: boolean;
  setOnlyOnSale: (value: boolean) => void;
  minRating: number;
  setMinRating: (value: number) => void;
  viewMode: "grid" | "row";
  setViewMode: (value: "grid" | "row") => void;
}) => (
  <div className="flex flex-wrap items-center gap-3">
    <FilterChip
      active={onlyNew}
      label="New arrivals"
      onToggle={() => setOnlyNew(!onlyNew)}
    />
    <FilterChip
      active={onlyOnSale}
      label="In promotion"
      onToggle={() => setOnlyOnSale(!onlyOnSale)}
    />
    <FilterChip
      active={minRating === 4.5}
      label="4.5★ & up"
      onToggle={() => setMinRating(minRating === 4.5 ? 0 : 4.5)}
    />
    <div className="h-8 w-px bg-border" />
    <div className="flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm text-muted-foreground">
      <Filter className="h-4 w-4" />
      <select
        className="bg-transparent text-sm focus:outline-none"
        value={sortOption}
        onChange={(event) => setSortOption(event.target.value as SortOption)}
      >
        <option value="featured">Featured</option>
        <option value="rating">Highest rated</option>
        <option value="newest">Newest</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
    <div className="flex rounded-full border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => setViewMode("grid")}
        className={`px-3 py-2 text-sm transition ${
          viewMode === "grid"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground"
        }`}
      >
        <Grid2X2 className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setViewMode("row")}
        className={`px-3 py-2 text-sm transition ${
          viewMode === "row"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground"
        }`}
      >
        <Rows4 className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const FilterChip = ({
  active,
  label,
  onToggle,
}: {
  active: boolean;
  label: string;
  onToggle: () => void;
}) => (
  <button
    type="button"
    onClick={onToggle}
    className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
      active
        ? "border-accent/50 bg-accent/10 text-accent"
        : "border-border text-muted-foreground hover:text-foreground"
    }`}
  >
    {label}
  </button>
);

export default Category;
