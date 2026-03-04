import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Award,
  CheckCircle2,
  Building2,
  FileCheck,
  Users,
  Globe,
  TrendingUp,
  Star,
  Clock,
  Package,
  Headphones,
  Mail,
  CheckCircle,
  Heart,
  Trophy,
  Cpu,
  Megaphone,
  MailOpen,
  BellRing,
  ClipboardCheck,
  Fingerprint,
  Layers,
  FileSearch,
  Lock,
  ThumbsUp,
  Quote,
  Monitor,
  Video,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { useEffect, useRef, useState } from "react";
import { ProductCategory, products, productsByCategory } from "@/data/products";

const categoryLabels: Record<ProductCategory, string> = {
  men: "Men's Collection",
  women: "Women's Collection",
  accessories: "Accessories",
  "tech-gear": "Tech Gear",
  workspace: "Workspace Essentials",
  "creator-studio": "Creator Studio",
  "smart-tools": "Smart Tools",
};

const featuredCategoryCards: Array<{
  key: ProductCategory;
  name: string;
  image: string;
  link: string;
  gradient: string;
  accentColor: "accent" | "trust";
  tagline: string;
}> = [
  {
    key: "men",
    name: "Elite Men's Tailoring",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=900&q=80",
    link: "/category/men",
    gradient: "from-blue-500/30 via-cyan-500/20 to-transparent",
    accentColor: "accent",
    tagline: "Precision suiting & executive layers",
  },
  {
    key: "women",
    name: "Modern Women's Atelier",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900&q=80",
    link: "/category/women",
    gradient: "from-pink-500/30 via-rose-500/20 to-transparent",
    accentColor: "accent",
    tagline: "Statement dresses & sculpted silhouettes",
  },
  {
    key: "accessories",
    name: "Sculpted Accessories",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=900&q=80",
    link: "/category/accessories",
    gradient: "from-amber-500/30 via-orange-500/20 to-transparent",
    accentColor: "accent",
    tagline: "Architectural bags & finishing details",
  },
  {
    key: "tech-gear",
    name: "Pro Tech Gear",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80",
    link: "/category/tech-gear",
    gradient: "from-purple-500/30 via-indigo-500/20 to-transparent",
    accentColor: "trust",
    tagline: "Creator-grade laptops & audio",
  },
  {
    key: "workspace",
    name: "Workspace Studio",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=900&q=80",
    link: "/category/workspace",
    gradient: "from-teal-500/30 via-emerald-500/20 to-transparent",
    accentColor: "trust",
    tagline: "Ergonomic desks & lighting systems",
  },
  {
    key: "creator-studio",
    name: "Creator Studio Lab",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&q=80",
    link: "/category/creator-studio",
    gradient: "from-indigo-500/30 via-fuchsia-500/20 to-transparent",
    accentColor: "trust",
    tagline: "Cinematic rigs & audio ecosystems",
  },
  {
    key: "smart-tools",
    name: "Intelligent Tools",
    image:
      "https://media.istockphoto.com/id/2195607659/fr/photo/technologie-dintelligence-artificielle-ia-pour-lanalyse-des-donn%C3%A9es-la-recherche-la.webp?a=1&b=1&s=612x612&w=0&k=20&c=AmIlrE1pUXHQKRotNMCnTPes6SCzKbVfyG5k4inBbnw=",
    link: "/category/smart-tools",
    gradient: "from-sky-500/30 via-blue-500/20 to-transparent",
    accentColor: "trust",
    tagline: "Field drones & precision kits",
  },
];

const techCategoryIcons: Partial<Record<ProductCategory, LucideIcon>> = {
  "tech-gear": Cpu,
  workspace: Monitor,
  "creator-studio": Video,
  "smart-tools": Wrench,
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [trustBannerVisible, setTrustBannerVisible] = useState(false);
  const [latestArrivalsVisible, setLatestArrivalsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const trustBannerRef = useRef<HTMLDivElement>(null);
  const latestArrivalsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const [newsletterVisible, setNewsletterVisible] = useState(false);
  const kycRef = useRef<HTMLDivElement>(null);
  const [kycVisible, setKycVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Trust banner entrance animation
    const timer1 = setTimeout(() => {
      setTrustBannerVisible(true);
    }, 500);

    // Latest Arrivals entrance animation
    const timer2 = setTimeout(() => {
      setLatestArrivalsVisible(true);
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Intersection Observer for Latest Arrivals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLatestArrivalsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (latestArrivalsRef.current) {
      observer.observe(latestArrivalsRef.current);
    }

    return () => {
      if (latestArrivalsRef.current) {
        observer.unobserve(latestArrivalsRef.current);
      }
    };
  }, []);

  // Intersection Observer for Stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Intersection Observer for Newsletter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNewsletterVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (newsletterRef.current) {
      observer.observe(newsletterRef.current);
    }

    return () => {
      if (newsletterRef.current) {
        observer.unobserve(newsletterRef.current);
      }
    };
  }, []);

  // Intersection Observer for KYC section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setKycVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (kycRef.current) {
      observer.observe(kycRef.current);
    }

    return () => {
      if (kycRef.current) {
        observer.unobserve(kycRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const highlightedNewProducts = products.filter((product) => product.isNew);
  const latestArrivals =
    highlightedNewProducts.length >= 8
      ? highlightedNewProducts.slice(0, 8)
      : products.slice(0, 8);
  const styleCollections = featuredCategoryCards.filter(({ key }) =>
    ["men", "women", "accessories"].includes(key)
  );
  const technologyCollections = featuredCategoryCards.filter(({ key }) =>
    ["tech-gear", "workspace", "creator-studio", "smart-tools"].includes(key)
  );
  const [techHero, ...techGrid] = technologyCollections;
  const styleCollectionsTotal = styleCollections.reduce(
    (total, category) =>
      total + (productsByCategory[category.key]?.length ?? 0),
    0
  );
  const technologyCollectionsTotal = technologyCollections.reduce(
    (total, category) =>
      total + (productsByCategory[category.key]?.length ?? 0),
    0
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dual Vertical with Modern Animations */}
      <section
        ref={heroRef}
        className="relative h-[70vh] lg:h-[85vh] overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 h-full">
          {/* Clothing Hero */}
          <div className="relative bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 flex items-center justify-center overflow-hidden group/hero isolate">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 animate-gradient-shift opacity-100" />

            {/* Parallax background image */}
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80')] bg-cover bg-center opacity-20 transition-all duration-1000 group-hover/hero:scale-110 group-hover/hero:opacity-30"
              style={{
                transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${
                  (mousePosition.y - 50) * 0.02
                }px)`,
              }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-trust/10 rounded-full blur-2xl animate-float-delayed" />
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] opacity-0 group-hover/hero:opacity-100 animate-shimmer-slow transition-opacity duration-500" />

            {/* Content */}
            <div
              className={`relative z-10 text-center px-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Subtitle with enhanced styling */}
              <div
                className={`inline-block mb-6 transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-background/60 backdrop-blur-md border border-accent/20 shadow-lg group/subtitle">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-trust/20 to-accent/20 blur-xl opacity-0 group-hover/subtitle:opacity-100 transition-opacity duration-500" />

                  <Sparkles className="relative h-4 w-4 text-accent animate-pulse z-10" />
                  <p className="relative text-sm tracking-[0.2em] uppercase font-bold text-foreground/90 z-10 animate-glow-text-subtitle">
                    Premium Fashion Collection
                  </p>
                  <Sparkles className="relative h-4 w-4 text-accent animate-pulse z-10" />
                </div>
              </div>

              {/* Main Heading with multiple layers for depth */}
              <h1
                className={`relative font-serif text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Text shadow layer for depth */}
                <span className="absolute inset-0 text-foreground/50 blur-[2px] translate-y-2 translate-x-1">
                  <span className="inline-block animate-slide-up">
                    Elevate Your
                  </span>
                  <br />
                  <span className="inline-block animate-slide-up-delayed">
                    Style
                  </span>
                </span>

                {/* Main gradient text */}
                <span className="relative inline-block">
                  <span className="inline-block bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent animate-slide-up transition-all duration-1000 group-hover/hero:from-accent group-hover/hero:via-trust group-hover/hero:to-accent animate-text-glow">
                    Elevate Your
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent animate-slide-up-delayed transition-all duration-1000 group-hover/hero:from-accent group-hover/hero:via-trust group-hover/hero:to-accent animate-text-glow-delayed">
                    Style
                  </span>
                </span>

                {/* Glow overlay */}
                <span className="absolute inset-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500">
                  <span className="inline-block bg-gradient-to-r from-accent/40 via-trust/40 to-accent/40 bg-clip-text text-transparent blur-sm animate-slide-up">
                    Elevate Your
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-accent/40 via-trust/40 to-accent/40 bg-clip-text text-transparent blur-sm animate-slide-up-delayed">
                    Style
                  </span>
                </span>
              </h1>

              {/* Description with enhanced readability */}
              <p
                className={`relative text-lg lg:text-xl text-foreground/90 mb-10 max-w-md mx-auto font-medium leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  textShadow:
                    "0 2px 10px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
              >
                <span className="relative z-10">
                  Curated clothing and accessories for the modern professional
                </span>
                {/* Decorative underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover/hero:opacity-100 group-hover/hero:w-32 transition-all duration-500" />
              </p>

              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Link to="/category/men">
                  <Button
                    size="lg"
                    className="btn-hero group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      SHOP CLOTHING
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-trust to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Technology Hero */}
          <div className="relative bg-gradient-to-br from-accent/5 via-accent/3 to-primary/5 flex items-center justify-center overflow-hidden group/hero isolate">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 animate-gradient-shift opacity-100" />

            {/* Parallax background image */}
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80')] bg-cover bg-center opacity-20 transition-all duration-1000 group-hover/hero:scale-110 group-hover/hero:opacity-30"
              style={{
                transform: `translate(${(mousePosition.x - 50) * -0.02}px, ${
                  (mousePosition.y - 50) * -0.02
                }px)`,
              }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-trust/10 rounded-full blur-3xl animate-float-delayed" />
              <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-accent/10 rounded-full blur-2xl animate-float" />
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] opacity-0 group-hover/hero:opacity-100 animate-shimmer-slow transition-opacity duration-500" />

            {/* Content */}
            <div
              className={`relative z-10 text-center px-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Subtitle with enhanced styling */}
              <div
                className={`inline-block mb-6 transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-background/60 backdrop-blur-md border border-trust/20 shadow-lg group/subtitle">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-trust/20 via-accent/20 to-trust/20 blur-xl opacity-0 group-hover/subtitle:opacity-100 transition-opacity duration-500" />

                  <Sparkles className="relative h-4 w-4 text-trust animate-pulse z-10" />
                  <p className="relative text-sm tracking-[0.2em] uppercase font-bold text-foreground/90 z-10 animate-glow-text-subtitle">
                    Cutting-Edge Technology
                  </p>
                  <Sparkles className="relative h-4 w-4 text-trust animate-pulse z-10" />
                </div>
              </div>

              {/* Main Heading with multiple layers for depth */}
              <h1
                className={`relative font-serif text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Text shadow layer for depth */}
                <span className="absolute inset-0 text-foreground/50 blur-[2px] translate-y-2 translate-x-1">
                  <span className="inline-block animate-slide-up">
                    Power Your
                  </span>
                  <br />
                  <span className="inline-block animate-slide-up-delayed">
                    Future
                  </span>
                </span>

                {/* Main gradient text */}
                <span className="relative inline-block">
                  <span className="inline-block bg-gradient-to-r from-foreground via-foreground to-trust bg-clip-text text-transparent animate-slide-up transition-all duration-1000 group-hover/hero:from-trust group-hover/hero:via-accent group-hover/hero:to-trust animate-text-glow">
                    Power Your
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-foreground via-foreground to-trust bg-clip-text text-transparent animate-slide-up-delayed transition-all duration-1000 group-hover/hero:from-trust group-hover/hero:via-accent group-hover/hero:to-trust animate-text-glow-delayed">
                    Future
                  </span>
                </span>

                {/* Glow overlay */}
                <span className="absolute inset-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500">
                  <span className="inline-block bg-gradient-to-r from-trust/40 via-accent/40 to-trust/40 bg-clip-text text-transparent blur-sm animate-slide-up">
                    Power Your
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-trust/40 via-accent/40 to-trust/40 bg-clip-text text-transparent blur-sm animate-slide-up-delayed">
                    Future
                  </span>
                </span>
              </h1>

              {/* Description with enhanced readability */}
              <p
                className={`relative text-lg lg:text-xl text-foreground/90 mb-10 max-w-md mx-auto font-medium leading-relaxed transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  textShadow:
                    "0 2px 10px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
              >
                <span className="relative z-10">
                  Premium devices and smart solutions for enhanced productivity
                </span>
                {/* Decorative underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-trust to-transparent opacity-50 group-hover/hero:opacity-100 group-hover/hero:w-32 transition-all duration-500" />
              </p>

              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Link to="/category/tech-gear">
                  <Button
                    size="lg"
                    className="btn-hero group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      SHOP TECHNOLOGY
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-trust via-accent to-trust opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-trust/30 to-transparent opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </section>

      {/* Trust Banner - Redesigned with Modern Animations */}
      <section
        ref={trustBannerRef}
        className="relative bg-gradient-to-r from-accent via-accent/95 to-accent text-accent-foreground py-8 lg:py-10 overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-shimmer-trust" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float-trust" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float-trust-delayed" />
        </div>

        <div className="section-container relative z-10">
          <div
            className={`flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 transition-all duration-1000 ${
              trustBannerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Main Trust Indicator */}
            <div className="flex items-center gap-4 group/trust">
              {/* Icon with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl scale-150 opacity-0 group-hover/trust:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-3 border-2 border-white/30 shadow-lg group-hover/trust:scale-110 transition-all duration-300">
                  <ShieldCheck className="h-6 w-6 lg:h-7 lg:w-7 text-white animate-pulse-subtle" />
                </div>
              </div>

              {/* Main Text */}
              <div className="text-center lg:text-left">
                <p className="text-sm lg:text-base font-semibold mb-1">
                  Fully Registered Hong Kong Company
                </p>
                <p className="text-xs lg:text-sm font-medium opacity-90">
                  BR Certificate No. 77636628-000-01-25-7
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-12 w-px bg-white/30" />

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
              {[
                {
                  icon: Award,
                  label: "Verified",
                  delay: "100ms",
                },
                {
                  icon: CheckCircle2,
                  label: "Certified",
                  delay: "200ms",
                },
                {
                  icon: Building2,
                  label: "Registered",
                  delay: "300ms",
                },
                {
                  icon: FileCheck,
                  label: "Compliant",
                  delay: "400ms",
                },
              ].map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className={`relative group/badge transition-all duration-700 ${
                      trustBannerVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: badge.delay }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />

                    {/* Badge */}
                    <div className="relative flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 shadow-md group-hover/badge:bg-white/25 group-hover/badge:scale-105 transition-all duration-300">
                      <Icon className="h-4 w-4 text-white animate-icon-bounce" />
                      <span className="text-xs font-semibold text-white">
                        {badge.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verify Link */}
            <div
              className={`transition-all duration-700 ${
                trustBannerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Link
                to="/compliance"
                className="group/link relative inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-sm font-semibold text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="relative z-10">Verify Company Details</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover/link:translate-x-1" />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </section>

      {/* Explore Our Collections - Immersive Showcase */}
      <section className="section-container py-20 xl:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-background/20" />
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-accent/10 rounded-full blur-[220px] animate-float" />
          <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-trust/10 rounded-full blur-[220px] animate-float-delayed" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:200px_260px] opacity-50 animate-slide-loop" />
        </div>

        <div className="relative z-10 space-y-12">
          <div className="text-center space-y-6">
            <div
              className={`inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-[0.4em] uppercase transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
              curated universe
              <Sparkles className="h-3.5 w-3.5 text-trust animate-pulse" />
            </div>
            <div className="space-y-4">
              <h2
                className={`font-serif text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Explore Our Collections
              </h2>
              <p
                className={`max-w-2xl mx-auto text-base lg:text-lg text-muted-foreground/90 transition-all duration-700 ${
                  isVisible
                    ? "opacity-90 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                A dual experience that pairs sartorial stories with our
                technology playground. Scroll, hover, and interact to preview
                the worlds our clients love most.
              </p>
            </div>
          </div>

          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            {/* Style Collections timeline */}
            <div className="relative rounded-[36px] border border-border/60 bg-gradient-to-br from-background/90 via-background/70 to-background/50 backdrop-blur-2xl p-6 lg:p-10 shadow-[0_35px_90px_rgba(15,23,42,0.25)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),transparent_60%)] pointer-events-none" />
              <div className="absolute left-8 top-32 bottom-12 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
              <div className="flex flex-wrap items-center justify-between gap-6 relative z-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">
                    Style universe
                  </p>
                  <h3 className="mt-2 font-serif text-3xl lg:text-4xl">
                    Timeless silhouettes, modern movement
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    curated looks
                  </p>
                  <p className="text-4xl font-bold text-accent">
                    {styleCollectionsTotal}
                  </p>
                </div>
              </div>
              <div className="mt-10 space-y-8 relative">
                {styleCollections.map((category, index) => {
                  const productCount =
                    productsByCategory[category.key]?.length ?? 0;
                  const badgeText =
                    ["Tailored drop", "Runway ready", "Collector edit"][
                      index
                    ] ?? "Signature";
                  return (
                    <Link
                      key={category.key}
                      to={category.link}
                      aria-label={`Explore ${category.name}`}
                      className={`group/style-card relative block rounded-[28px] border border-border/60 bg-white/[0.03] backdrop-blur-xl px-6 py-7 lg:px-8 lg:py-8 overflow-hidden transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                      style={{ transitionDelay: `${180 + index * 140}ms` }}
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.currentTarget.click();
                        }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-trust/5 opacity-0 group-hover/style-card:opacity-100 transition-opacity duration-500" />
                      <div className="absolute left-4 top-10 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(14,165,233,0.5)] hidden lg:block" />
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-center relative z-10">
                        <div className="flex flex-col gap-3 lg:flex-1">
                          <div className="inline-flex items-center gap-2">
                            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                              0{index + 1}
                            </span>
                            <span className="text-[0.6rem] uppercase tracking-[0.5em] text-accent">
                              {badgeText}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-serif text-2xl lg:text-3xl text-foreground group-hover/style-card:text-accent transition-colors">
                              {category.name}
                            </h3>
                            <p className="text-sm lg:text-base text-muted-foreground/90 mt-2 line-clamp-2">
                              {category.tagline}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-accent" />
                              {productCount} looks
                            </span>
                            <span className="flex items-center gap-2 text-foreground">
                              View capsule
                              <ArrowRight className="h-4 w-4 transition-transform group-hover/style-card:translate-x-1" />
                            </span>
                          </div>
                        </div>
                        <div className="relative w-full lg:w-48 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="h-48 w-full object-cover transition-all duration-700 group-hover/style-card:scale-110 group-hover/style-card:rotate-1"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover/style-card:opacity-60 transition-opacity" />
                        </div>
                      </div>
                      <div className="absolute inset-0 border border-white/0 rounded-[28px] group-hover/style-card:border-white/30 transition-all duration-500" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Technology playground */}
            <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-[#05060d] via-[#090f1d] to-[#020409] text-white p-6 lg:p-10 shadow-[0_40px_120px_rgba(2,6,23,0.55)] overflow-hidden">
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:220px_260px] opacity-50 animate-tech-grid" />
              <div className="flex flex-wrap items-center justify-between gap-6 relative z-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                    Tech playground
                  </p>
                  <h3 className="mt-2 font-serif text-3xl lg:text-4xl">
                    Systems engineered for performance
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    experiences
                  </p>
                  <p className="text-4xl font-bold text-trust">
                    {technologyCollectionsTotal}
                  </p>
                </div>
              </div>
              <div className="mt-10 space-y-8">
                {techHero && (
                  <Link
                    to={techHero.link}
                    aria-label={`Explore ${techHero.name}`}
                    className={`group/tech-hero relative block overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl min-h-[260px] transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.currentTarget.click();
                      }
                    }}
                  >
                    <img
                      src={techHero.image}
                      alt={techHero.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover/tech-hero:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#020617]/60 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(56,189,248,0.2)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />
                    <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-6">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
                        Flagship Drop
                        <span className="h-1 w-8 bg-gradient-to-r from-white/20 to-trust rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-serif text-3xl lg:text-4xl drop-shadow-2xl">
                          {techHero.name}
                        </h3>
                        <p className="mt-3 text-sm lg:text-base text-white/80 max-w-3xl">
                          {techHero.tagline}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
                        <span>
                          {productsByCategory[techHero.key]?.length ?? 0} units
                        </span>
                        <span className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-white transition-all duration-300 group-hover/tech-hero:bg-trust group-hover/tech-hero:text-trust-foreground">
                          Enter lab
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/tech-hero:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  {techGrid.map((category, index) => {
                    const productCount =
                      productsByCategory[category.key]?.length ?? 0;
                    const Icon = techCategoryIcons[category.key] ?? Sparkles;
                    return (
                      <Link
                        key={category.key}
                        to={category.link}
                        aria-label={`Explore ${category.name}`}
                        className={`group/tech-mini relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                        }`}
                        style={{ transitionDelay: `${280 + index * 140}ms` }}
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.currentTarget.click();
                          }
                        }}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover/tech-mini:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#020617]/60 to-transparent" />
                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[0.65rem] uppercase tracking-[0.4em] text-white/80 animate-pulse-glow">
                              <Icon className="h-4 w-4" />
                              {category.key.replace("-", " ")}
                            </div>
                            <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                              {productCount} units
                            </span>
                          </div>
                          <div>
                            <h3 className="font-serif text-2xl text-white drop-shadow-xl">
                              {category.name}
                            </h3>
                            <p className="mt-2 text-sm text-white/80 line-clamp-2">
                              {category.tagline}
                            </p>
                          </div>
                          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-white/70">
                            <span className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-trust" />
                              Live
                            </span>
                            <span className="inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover/tech-mini:translate-x-1">
                              View more
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                        <div className="absolute inset-0 border border-white/0 rounded-3xl group-hover/tech-mini:border-trust/60 transition-all duration-500 shadow-[0_0_40px_rgba(56,189,248,0.25)]" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Arrivals - Premium Redesign */}
      <section
        ref={latestArrivalsRef}
        className="section-container py-16 lg:py-24 bg-muted/30 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-trust/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%)] animate-shimmer-slow" />
        </div>

        <div className="relative z-10">
          {/* Enhanced Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 lg:mb-16 gap-6">
            <div className="flex-1">
              <div
                className={`inline-block mb-4 transition-all duration-1000 ${
                  latestArrivalsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="h-3 w-3 text-accent animate-pulse" />
                  New Products
                  <Sparkles className="h-3 w-3 text-accent animate-pulse" />
                </p>
              </div>
              <h2
                className={`font-serif text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent transition-all duration-1000 ${
                  latestArrivalsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                Latest Arrivals
              </h2>
              <div
                className={`w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full mt-4 transition-all duration-1000 ${
                  latestArrivalsVisible
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              />
            </div>

            {/* View All Button */}
            <div
              className={`transition-all duration-1000 ${
                latestArrivalsVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Link to="/shop/clothing/new">
                <Button
                  variant="ghost"
                  className="group relative overflow-hidden px-6 py-3 border-2 border-border hover:border-accent transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    VIEW ALL
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-trust/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Products Grid with Staggered Animations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {latestArrivals.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${
                  latestArrivalsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative group/product-wrapper">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-trust/20 to-accent/20 rounded-lg opacity-0 group-hover/product-wrapper:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                  {/* Enhanced Product Card */}
                  <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-lg group-hover/product-wrapper:shadow-2xl transition-all duration-500 group-hover/product-wrapper:scale-[1.02] group-hover/product-wrapper:-translate-y-1">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      category={categoryLabels[product.category]}
                      isNew={product.isNew}
                      onSale={product.onSale}
                      salePrice={product.salePrice}
                      hidePrice
                    />
                  </div>

                  {/* Floating indicator */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover/product-wrapper:opacity-100 transition-opacity duration-300 animate-pulse shadow-lg shadow-accent/50" />
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Bottom Line */}
          <div
            className={`mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-all duration-1000 ${
              latestArrivalsVisible
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          />
        </div>
      </section>

      {/* Statistics Section - Trust Building */}
      <section
        ref={statsRef}
        className="section-container py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-trust/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div
              className={`inline-block mb-4 transition-all duration-1000 ${
                statsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center justify-center gap-2">
                <TrendingUp className="h-3 w-3 text-accent animate-pulse" />
                Our Track Record
                <TrendingUp className="h-3 w-3 text-accent animate-pulse" />
              </p>
            </div>
            <h2
              className={`font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent transition-all duration-1000 ${
                statsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                value: "10K+",
                label: "Satisfied Customers",
                color: "accent",
                delay: "200ms",
                image:
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
              },
              {
                icon: Globe,
                value: "50+",
                label: "Countries Served",
                color: "trust",
                delay: "300ms",
                image:
                  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
              },
              {
                icon: Package,
                value: "100K+",
                label: "Products Delivered",
                color: "accent",
                delay: "400ms",
                image:
                  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              },
              {
                icon: Building2,
                value: "2025",
                label: "Established",
                color: "trust",
                delay: "500ms",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`relative group/stat transition-all duration-700 ${
                    statsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: stat.delay }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover/stat:opacity-100 blur-xl transition-opacity duration-500"
                    style={{
                      backgroundColor:
                        stat.color === "accent"
                          ? "hsl(var(--accent) / 0.2)"
                          : "hsl(var(--trust) / 0.2)",
                    }}
                  />

                  {/* Stat Card with Background Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover/stat:shadow-2xl transition-all duration-500 group-hover/stat:scale-105 group-hover/stat:-translate-y-1 border border-border">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={stat.image}
                        alt={stat.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/stat:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          stat.color === "accent"
                            ? "from-accent/90 via-accent/80 to-accent/90"
                            : "from-trust/90 via-trust/80 to-trust/90"
                        }`}
                      />
                      {/* Additional overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 lg:p-8 text-center min-h-[280px] lg:min-h-[320px] flex flex-col justify-between">
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div
                          className={`relative p-4 rounded-2xl backdrop-blur-md ${
                            stat.color === "accent"
                              ? "bg-white/20 border-2 border-white/30"
                              : "bg-white/20 border-2 border-white/30"
                          } group-hover/stat:scale-110 group-hover/stat:rotate-3 transition-all duration-300 shadow-lg`}
                        >
                          <Icon
                            className={`h-8 w-8 lg:h-10 lg:w-10 ${
                              stat.color === "accent"
                                ? "text-white"
                                : "text-white"
                            } drop-shadow-lg`}
                          />
                          <div
                            className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"
                            style={{
                              backgroundColor:
                                stat.color === "accent"
                                  ? "hsl(var(--accent) / 0.5)"
                                  : "hsl(var(--trust) / 0.5)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Value */}
                      <div className="mb-3">
                        <div
                          className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-white drop-shadow-2xl ${
                            stat.value === "2025" ? "tracking-wider" : ""
                          }`}
                          style={{
                            textShadow:
                              "0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          {stat.value}
                        </div>

                        {/* Label */}
                        <p
                          className="text-sm lg:text-base text-white/95 font-semibold uppercase tracking-wider drop-shadow-lg"
                          style={{
                            textShadow:
                              "0 2px 10px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          {stat.label}
                        </p>
                      </div>

                      {/* Shimmer Effect on Hover */}
                      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] opacity-0 group-hover/stat:opacity-100 translate-x-[-100%] group-hover/stat:translate-x-[100%] transition-all duration-1000" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-trust/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div
              className={`inline-block mb-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center justify-center gap-2">
                <Star className="h-3 w-3 text-trust animate-pulse" />
                Why Choose Us
                <Star className="h-3 w-3 text-trust animate-pulse" />
              </p>
            </div>
            <h2
              className={`font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-trust bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Verified & Certified",
                description:
                  "Fully registered Hong Kong company with official BR certificate and complete compliance documentation.",
                color: "accent",
                delay: "200ms",
                image:
                  "https://images.unsplash.com/photo-1613340204066-6d6ad710fc52?q=80&w=1171",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Serving customers across 50+ countries with reliable shipping and international trade expertise.",
                color: "trust",
                delay: "300ms",
                image:
                  "https://images.unsplash.com/photo-1759611325490-1e05282fbedb?q=80&w=1170",
              },
              {
                icon: Package,
                title: "Quality Assured",
                description:
                  "Rigorous quality control processes ensuring every product meets our high standards before delivery.",
                color: "accent",
                delay: "400ms",
                image:
                  "https://plus.unsplash.com/premium_photo-1682129824115-3e2afc832380?q=80&w=1632",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description:
                  "Dedicated customer service team available around the clock to assist with any inquiries or issues.",
                color: "trust",
                delay: "500ms",
                image:
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170",
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description:
                  "Efficient logistics network ensuring timely delivery to customers worldwide with tracking available.",
                color: "accent",
                delay: "600ms",
                image:
                  "https://plus.unsplash.com/premium_photo-1661962773421-6b97ceec1f0e?q=80&w=1147",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description:
                  "Award-winning company with trusted partnerships and commitment to excellence in every transaction.",
                color: "trust",
                delay: "700ms",
                image:
                  "https://plus.unsplash.com/premium_photo-1723291286550-7c11fa27463b?q=80&w=1170",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group/feature relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: feature.delay }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover/feature:opacity-100 blur-xl transition-opacity duration-500"
                    style={{
                      backgroundColor:
                        feature.color === "accent"
                          ? "hsl(var(--accent) / 0.2)"
                          : "hsl(var(--trust) / 0.2)",
                    }}
                  />

                  {/* Feature Card with Background Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover/feature:shadow-2xl transition-all duration-500 group-hover/feature:scale-105 group-hover/feature:-translate-y-1 border border-border h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/feature:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          feature.color === "accent"
                            ? "from-accent/85 via-accent/75 to-accent/85"
                            : "from-trust/85 via-trust/75 to-trust/85"
                        }`}
                      />
                      {/* Additional overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col min-h-[320px] lg:min-h-[360px]">
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl backdrop-blur-md ${
                            feature.color === "accent"
                              ? "bg-white/25 border-2 border-white/40"
                              : "bg-white/25 border-2 border-white/40"
                          } group-hover/feature:scale-110 group-hover/feature:rotate-3 transition-all duration-300 shadow-xl`}
                        >
                          <Icon
                            className={`h-8 w-8 lg:h-10 lg:w-10 text-white drop-shadow-lg`}
                          />
                          <div
                            className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300"
                            style={{
                              backgroundColor:
                                feature.color === "accent"
                                  ? "hsl(var(--accent) / 0.5)"
                                  : "hsl(var(--trust) / 0.5)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-serif text-xl lg:text-2xl xl:text-3xl font-bold mb-4 text-white drop-shadow-lg group-hover/feature:translate-x-1 transition-transform duration-300"
                        style={{
                          textShadow:
                            "0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-white/95 leading-relaxed flex-1 text-sm lg:text-base drop-shadow-md"
                        style={{
                          textShadow:
                            "0 2px 10px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {feature.description}
                      </p>

                      {/* Shimmer Effect on Hover */}
                      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] opacity-0 group-hover/feature:opacity-100 translate-x-[-100%] group-hover/feature:translate-x-[100%] transition-all duration-1000" />

                      {/* Corner Accent */}
                      <div
                        className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor:
                            feature.color === "accent"
                              ? "hsl(var(--accent))"
                              : "hsl(var(--trust))",
                          boxShadow:
                            feature.color === "accent"
                              ? "0 0 20px hsl(var(--accent) / 0.8)"
                              : "0 0 20px hsl(var(--trust) / 0.8)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container py-16 lg:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-trust/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div
              className={`inline-block mb-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center justify-center gap-2">
                <ThumbsUp className="h-3 w-3 text-accent animate-pulse" />
                Client Testimonials
                <ThumbsUp className="h-3 w-3 text-accent animate-pulse" />
              </p>
            </div>
            <h2
              className={`font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Fashion Retailer, Singapore",
                content:
                  "Outstanding quality and service. Our partnership with NAIXIN has been exceptional. Their attention to detail and reliability is unmatched.",
                rating: 5,
                delay: "100ms",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                country: "🇸🇬",
              },
              {
                name: "Michael Thompson",
                role: "Tech Distributor, UK",
                content:
                  "Professional, efficient, and trustworthy. They've consistently delivered on time with excellent product quality. Highly recommended for international trade.",
                rating: 5,
                delay: "200ms",
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                country: "🇬🇧",
              },
              {
                name: "Emma Rodriguez",
                role: "Boutique Owner, USA",
                content:
                  "The best supplier we've worked with. Their compliance documentation is thorough, and their customer service is responsive and helpful.",
                rating: 5,
                delay: "300ms",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                country: "🇺🇸",
              },
              {
                name: "James Wilson",
                role: "Import/Export Manager, Australia",
                content:
                  "Exceptional service and seamless transactions. NAIXIN's global network and expertise have significantly improved our supply chain efficiency.",
                rating: 5,
                delay: "400ms",
                avatar:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
                country: "🇦🇺",
              },
              {
                name: "Lisa Anderson",
                role: "E-commerce Director, Canada",
                content:
                  "Reliable partner with excellent communication. Their quality control and timely delivery have made them our preferred supplier for all international orders.",
                rating: 5,
                delay: "500ms",
                avatar:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
                country: "🇨🇦",
              },
              {
                name: "David Kim",
                role: "Retail Chain Owner, South Korea",
                content:
                  "Outstanding business partner. Their verified credentials and professional approach give us complete confidence in every transaction. Highly trustworthy.",
                rating: 5,
                delay: "600ms",
                avatar:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
                country: "🇰🇷",
              },
              {
                name: "Sophie Martin",
                role: "Fashion Brand Owner, France",
                content:
                  "Premium quality products and exceptional service. NAIXIN's attention to detail and commitment to excellence sets them apart from other suppliers.",
                rating: 5,
                delay: "700ms",
                avatar:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
                country: "🇫🇷",
              },
              {
                name: "Robert Taylor",
                role: "Supply Chain Manager, Germany",
                content:
                  "Professional, efficient, and reliable. Their comprehensive documentation and compliance standards make international trade smooth and worry-free.",
                rating: 5,
                delay: "800ms",
                avatar:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
                country: "🇩🇪",
              },
              {
                name: "Maria Garcia",
                role: "Business Owner, Spain",
                content:
                  "Excellent partnership experience. NAIXIN's global reach and quality assurance processes ensure we receive the best products and service every time.",
                rating: 5,
                delay: "900ms",
                avatar:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
                country: "🇪🇸",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`group/testimonial relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: testimonial.delay }}
              >
                {/* Animated Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-trust/20 to-accent/20 rounded-2xl opacity-0 group-hover/testimonial:opacity-100 blur-2xl transition-all duration-500 animate-pulse-slow" />

                {/* Floating particles on hover */}
                <div className="absolute -inset-4 overflow-hidden pointer-events-none opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" />
                  <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-trust rounded-full animate-float-delayed" />
                </div>

                {/* Testimonial Card */}
                <div className="relative bg-card border-2 border-border rounded-2xl p-6 lg:p-8 shadow-lg group-hover/testimonial:shadow-2xl transition-all duration-500 group-hover/testimonial:scale-[1.02] group-hover/testimonial:-translate-y-2 h-full flex flex-col overflow-hidden">
                  {/* Background decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-500" />

                  {/* Animated Quote Icon */}
                  <div className="mb-4 relative">
                    <Quote className="h-10 w-10 text-accent/30 group-hover/testimonial:text-accent/50 transition-all duration-300 group-hover/testimonial:scale-110 group-hover/testimonial:rotate-12" />
                    <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Animated Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-trust text-trust transition-all duration-300 group-hover/testimonial:scale-110 group-hover/testimonial:rotate-12"
                        style={{
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Content with animated text */}
                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed italic group-hover/testimonial:text-foreground transition-colors duration-300 relative">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-trust opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-300" />
                    <span className="pl-0 group-hover/testimonial:pl-4 transition-all duration-300 block">
                      "{testimonial.content}"
                    </span>
                  </p>

                  {/* Author Section with Avatar */}
                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-trust rounded-full opacity-0 group-hover/testimonial:opacity-100 blur-md transition-opacity duration-300" />
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="relative w-12 h-12 rounded-full object-cover border-2 border-border group-hover/testimonial:border-accent transition-all duration-300 group-hover/testimonial:scale-110 group-hover/testimonial:ring-2 group-hover/testimonial:ring-accent/20"
                        />
                        <div className="absolute -bottom-1 -right-1 text-lg opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-300 animate-bounce-subtle">
                          {testimonial.country}
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover/testimonial:text-accent transition-colors duration-300">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground group-hover/testimonial:text-foreground/80 transition-colors duration-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] opacity-0 group-hover/testimonial:opacity-100 translate-x-[-100%] group-hover/testimonial:translate-x-[100%] transition-all duration-1000" />

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-300 animate-ping" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="section-container py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-trust/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div
              className={`inline-block mb-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-bold mb-3 flex items-center justify-center gap-2">
                <Heart className="h-3 w-3 text-trust animate-pulse" />
                Our Core Values
                <Heart className="h-3 w-3 text-trust animate-pulse" />
              </p>
            </div>
            <h2
              className={`font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-trust bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Built on Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Trophy,
                title: "Excellence",
                description:
                  "Commitment to delivering the highest quality in every transaction",
                color: "accent",
                delay: "200ms",
                image:
                  "https://plus.unsplash.com/premium_photo-1682309806385-91127e81ef3f?q=80&w=1512",
              },
              {
                icon: ShieldCheck,
                title: "Trust",
                description:
                  "Transparent operations and verified credentials for peace of mind",
                color: "trust",
                delay: "300ms",
                image:
                  "https://plus.unsplash.com/premium_photo-1661962349501-10bf5556f79b?q=80&w=1170",
              },
              {
                icon: Cpu,
                title: "Innovation",
                description:
                  "Embracing modern solutions to enhance customer experience",
                color: "accent",
                delay: "400ms",
                image:
                  "https://plus.unsplash.com/premium_photo-1661302928231-f190734e9dfd?q=80&w=1170",
              },
              {
                icon: Headphones,
                title: "Service",
                description:
                  "Dedicated support ensuring customer satisfaction at every step",
                color: "trust",
                delay: "500ms",
                image:
                  "https://plus.unsplash.com/premium_photo-1661420178538-ea49d80e0163?q=80&w=1632",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group/value relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: value.delay }}
                >
                  {/* Animated Glow effect */}
                  <div
                    className="absolute -inset-3 rounded-3xl opacity-0 group-hover/value:opacity-100 blur-2xl transition-all duration-500 animate-pulse-slow"
                    style={{
                      backgroundColor:
                        value.color === "accent"
                          ? "hsl(var(--accent) / 0.3)"
                          : "hsl(var(--trust) / 0.3)",
                    }}
                  />

                  {/* Floating particles on hover */}
                  <div className="absolute -inset-4 overflow-hidden pointer-events-none opacity-0 group-hover/value:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full animate-float"
                      style={{
                        backgroundColor:
                          value.color === "accent"
                            ? "hsl(var(--accent))"
                            : "hsl(var(--trust))",
                      }}
                    />
                    <div
                      className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full animate-float-delayed"
                      style={{
                        backgroundColor:
                          value.color === "accent"
                            ? "hsl(var(--accent))"
                            : "hsl(var(--trust))",
                      }}
                    />
                  </div>

                  {/* Value Card with Background Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover/value:shadow-2xl transition-all duration-500 group-hover/value:scale-105 group-hover/value:-translate-y-2 border-2 border-border h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/value:scale-125 group-hover/value:rotate-2"
                      />
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          value.color === "accent"
                            ? "from-accent/80 via-accent/70 to-accent/80"
                            : "from-trust/80 via-trust/70 to-trust/80"
                        }`}
                      />
                      {/* Additional overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:25px_25px] opacity-20" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 lg:p-8 text-center h-full flex flex-col justify-between min-h-[320px] lg:min-h-[360px]">
                      {/* Icon with enhanced animation */}
                      <div className="mb-6 flex justify-center">
                        <div
                          className={`relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-2xl backdrop-blur-md ${
                            value.color === "accent"
                              ? "bg-white/30 border-2 border-white/50"
                              : "bg-white/30 border-2 border-white/50"
                          } group-hover/value:scale-125 group-hover/value:rotate-12 transition-all duration-500 shadow-2xl`}
                        >
                          <Icon
                            className={`h-12 w-12 lg:h-14 lg:w-14 text-white drop-shadow-2xl group-hover/value:scale-110 transition-transform duration-300`}
                          />
                          {/* Multiple glow layers */}
                          <div
                            className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover/value:opacity-100 transition-opacity duration-500"
                            style={{
                              backgroundColor:
                                value.color === "accent"
                                  ? "hsl(var(--accent) / 0.6)"
                                  : "hsl(var(--trust) / 0.6)",
                            }}
                          />
                          <div
                            className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover/value:opacity-50 transition-opacity duration-500"
                            style={{
                              backgroundColor:
                                value.color === "accent"
                                  ? "hsl(var(--accent) / 0.4)"
                                  : "hsl(var(--trust) / 0.4)",
                            }}
                          />
                          {/* Rotating ring */}
                          <div
                            className="absolute -inset-4 rounded-full border-2 opacity-0 group-hover/value:opacity-100 transition-opacity duration-500 animate-spin-slow"
                            style={{
                              borderColor:
                                value.color === "accent"
                                  ? "hsl(var(--accent) / 0.5)"
                                  : "hsl(var(--trust) / 0.5)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Title with animation */}
                      <div className="mb-4">
                        <h3
                          className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 text-white drop-shadow-2xl group-hover/value:translate-y-[-4px] transition-transform duration-300"
                          style={{
                            textShadow:
                              "0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 10px rgba(0, 0, 0, 0.4)",
                          }}
                        >
                          {value.title}
                        </h3>

                        {/* Decorative line */}
                        <div
                          className={`w-16 h-1 mx-auto rounded-full ${
                            value.color === "accent" ? "bg-accent" : "bg-trust"
                          } opacity-0 group-hover/value:opacity-100 group-hover/value:w-24 transition-all duration-500`}
                        />
                      </div>

                      {/* Description with animation */}
                      <p
                        className="text-white/95 text-sm lg:text-base leading-relaxed flex-1 flex items-center justify-center drop-shadow-lg group-hover/value:text-white transition-colors duration-300"
                        style={{
                          textShadow:
                            "0 2px 10px rgba(0, 0, 0, 0.5), 0 1px 5px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {value.description}
                      </p>

                      {/* Shimmer Effect on Hover */}
                      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] opacity-0 group-hover/value:opacity-100 translate-x-[-100%] group-hover/value:translate-x-[100%] transition-all duration-1000" />

                      {/* Corner Accents */}
                      <div
                        className="absolute top-4 left-4 w-3 h-3 rounded-full opacity-0 group-hover/value:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor:
                            value.color === "accent"
                              ? "hsl(var(--accent))"
                              : "hsl(var(--trust))",
                          boxShadow:
                            value.color === "accent"
                              ? "0 0 20px hsl(var(--accent) / 0.8)"
                              : "0 0 20px hsl(var(--trust) / 0.8)",
                        }}
                      />
                      <div
                        className="absolute bottom-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover/value:opacity-100 transition-opacity duration-300 animate-ping"
                        style={{
                          backgroundColor:
                            value.color === "accent"
                              ? "hsl(var(--accent))"
                              : "hsl(var(--trust))",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Stay Updated */}
      <section
        ref={newsletterRef}
        className="relative py-16 lg:py-24 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-trust/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-trust/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:180px_220px] opacity-40" />
        </div>

        <div className="section-container relative z-10">
          <div
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-card/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.25)] transition-all duration-1000 ${
              newsletterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* accent glows */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-trust/20 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:240px_240px] opacity-60" />

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] p-8 lg:p-12">
              {/* Content Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold text-foreground/80 uppercase tracking-[0.3em]">
                  <Megaphone className="h-4 w-4 text-accent animate-pulse" />
                  Stay Updated
                  <MailOpen className="h-4 w-4 text-trust animate-pulse" />
                </div>

                <div className="space-y-5">
                  <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                      Insights curated
                    </span>{" "}
                    <span className="relative inline-flex">
                      <span className="bg-gradient-to-r from-accent via-trust to-accent bg-clip-text text-transparent">
                        for visionaries
                      </span>
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover/value:opacity-100" />
                    </span>
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Receive curated market intel, product drops, and compliance
                    alerts—tailored for partners who value precision and
                    credibility.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    "Exclusive product briefs & sourcing tips",
                    "Compliance-ready documentation toolkit",
                    "Priority invitations to partner events",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 border border-accent/30 text-accent">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-sm lg:text-base text-foreground/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm font-semibold text-foreground/90">
                    <ShieldCheck className="h-4 w-4 text-trust" />
                    Verified HK Company
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm font-semibold text-foreground/90">
                    <FileCheck className="h-4 w-4 text-accent" />
                    Compliance Ready
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[
                        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
                      ].map((avatar, index) => (
                        <img
                          key={avatar}
                          src={avatar}
                          alt="subscriber avatar"
                          className={`h-10 w-10 rounded-full border-2 border-white object-cover ${
                            index === 0 ? "" : "shadow-lg"
                          }`}
                        />
                      ))}
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-foreground/10 flex items-center justify-center text-xs font-semibold text-foreground/80">
                        +48
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      12,400+ partners already subscribe
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Zero spam. Unsubscribe anytime.
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground via-foreground/95 to-background border border-white/10 shadow-2xl p-8">
                  {/* background accents */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:180px_180px]" />
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                      <BellRing className="h-4 w-4 text-accent" />
                      Priority Access
                    </div>

                    <form
                      className="space-y-4"
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <label className="block text-sm font-semibold text-white/80">
                        Business Email
                        <div className="mt-2 relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                          <input
                            type="email"
                            required
                            aria-label="Enter your business email"
                            placeholder="you@company.com"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 text-white placeholder:text-white/50 focus:border-accent focus:ring-2 focus:ring-accent/40 transition-all duration-300"
                          />
                          <span className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 focus-within:opacity-100 transition-opacity duration-300" />
                        </div>
                      </label>

                      <label className="block text-sm font-semibold text-white/80">
                        Interest Focus
                        <div className="mt-2 relative">
                          <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white focus:border-accent focus:ring-2 focus:ring-accent/40 transition-all duration-300 appearance-none">
                            <option value="default" className="text-foreground">
                              Select segment
                            </option>
                            <option value="fashion" className="text-foreground">
                              Fashion & Lifestyle
                            </option>
                            <option value="tech" className="text-foreground">
                              Technology & Gadgets
                            </option>
                            <option
                              value="compliance"
                              className="text-foreground"
                            >
                              Compliance & Documentation
                            </option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                        </div>
                      </label>

                      <button
                        type="submit"
                        className="group/button relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-accent via-trust to-accent px-6 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all duration-500 hover:shadow-accent/30 hover:-translate-y-0.5"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Subscribe Now
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-white/30 opacity-0 group-hover/button:opacity-100 animate-shine-sweep" />
                      </button>
                    </form>

                    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <Users className="h-6 w-6 text-accent" />
                          <span className="absolute inset-0 rounded-full border border-accent/40 animate-pulse-ring" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">12,480+</p>
                          <p className="text-xs text-white/70">
                            Active subscribers this quarter
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <ShieldCheck className="h-4 w-4 text-trust" />
                        Data encrypted & stored securely. We respect privacy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Suite - Premium CTA */}
      <section ref={kycRef} className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#05060b] via-[#070c16] to-[#010104]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(12,19,35,0.9),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:220px_220px] opacity-35" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/20 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-trust/15 rounded-full blur-[180px]" />
        </div>

        <div className="section-container relative z-10">
          <div
            className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 lg:p-14 shadow-[0_35px_120px_rgba(0,0,0,0.35)] transition-all duration-1000 ${
              kycVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left Column */}
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-[0.3em]">
                <ShieldCheck className="h-4 w-4 text-trust" />
                Verified Entity
                <Lock className="h-4 w-4 text-accent" />
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
                    Institutional Compliance Suite
                  </span>
                </h2>
                <p className="text-base lg:text-lg text-white/80 max-w-2xl">
                  Access notarized credentials, compliance attestations, and
                  financial assurance letters crafted for investment committees,
                  procurement teams, and global trade partners.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "Corporate Registry & BR Certificate",
                    desc: "Digitally notarized and timestamped for audit trails",
                  },
                  {
                    icon: FileSearch,
                    title: "Compliance Intelligence Dossier",
                    desc: "Beneficial ownership, director registry, and due diligence kit",
                  },
                  {
                    icon: Layers,
                    title: "Financial reference package",
                    desc: "Institution-ready statements with assurance metadata",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 lg:p-5"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
                  <Fingerprint className="h-6 w-6 text-trust" />
                  <div>
                    <p className="text-sm text-white/70 leading-tight">
                      Updated
                    </p>
                    <p className="text-base font-semibold">February 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
                  <Users className="h-6 w-6 text-accent" />
                  <div>
                    <p className="text-sm text-white/70 leading-tight">
                      Approved Partners
                    </p>
                    <p className="text-base font-semibold">600+ Institutions</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/compliance">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-accent via-trust to-accent px-8 py-5 text-base font-semibold text-accent-foreground shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Access Verification Suite
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-shine-sweep" />
                  </Button>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-4 text-sm font-semibold text-white/80 hover:text-white hover:border-white/40 transition"
                >
                  Request bespoke documents
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Digital Vault</p>
                    <p className="text-xl font-semibold text-white">
                      Secure Document Packet
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    <Lock className="h-3.5 w-3.5" />
                    Encrypted
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Business Registration Certificate",
                      code: "77636628-000-01-25-7",
                      status: "Verified",
                      accent: "accent",
                    },
                    {
                      label: "Integrity Compliance Kit",
                      code: "INTEGRITY-DOSSIER-NAIXIN",
                      status: "Auto-updated",
                      accent: "trust",
                    },
                    {
                      label: "Financial Reference Letter",
                      code: "FIN-REF-2025",
                      status: "Ready to share",
                      accent: "accent",
                    },
                  ].map((doc, index) => (
                    <div
                      key={doc.label}
                      className="group/doc relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover/doc:opacity-100 transition-opacity duration-500 bg-[linear-gradient(120deg,rgba(255,255,255,0.2),transparent)]" />
                      <div className="relative flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm text-white/70">{doc.label}</p>
                          <p className="text-lg font-semibold text-white">
                            {doc.code}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            doc.accent === "accent"
                              ? "bg-accent/15 text-accent"
                              : "bg-trust/15 text-trust-foreground"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-2xl">
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-accent/30 blur-3xl" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-trust" />
                    <div>
                      <p className="text-sm text-white/70 leading-tight">
                        Government Registry Link
                      </p>
                      <p className="text-lg font-semibold">
                        Hong Kong CR Portal
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">
                    Direct download of BR cert, Articles of Association, and
                    director registry in tamper-proof PDF format.
                  </p>
                  <Link
                    to="/compliance"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition"
                  >
                    View notarized files
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(8px);
          }
          66% {
            transform: translateY(8px) translateX(-8px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(8px) translateX(-8px);
          }
          66% {
            transform: translateY(-15px) translateX(8px);
          }
        }
        
        @keyframes shimmer-slow {
          0% {
            transform: translateX(-100%) translateY(0);
          }
          50% {
            transform: translateX(100%) translateY(0);
          }
          100% {
            transform: translateX(-100%) translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.1));
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.2));
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.1);
          }
        }
        
        @keyframes text-glow-delayed {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.1));
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.2));
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.1);
          }
        }
        
        @keyframes glow-text-subtitle {
          0%, 100% {
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.1);
          }
          50% {
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
          }
        }
        
        @keyframes shimmer-trust {
          0% {
            transform: translateX(-100%) translateY(0);
          }
          50% {
            transform: translateX(100%) translateY(0);
          }
          100% {
            transform: translateX(-100%) translateY(0);
          }
        }
        
        @keyframes float-trust {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-8px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-5px);
          }
        }
        
        @keyframes float-trust-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(5px) translateX(-5px);
          }
          66% {
            transform: translateY(-8px) translateX(5px);
          }
        }
        
        @keyframes icon-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes shine-sweep {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes tech-grid {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slide-loop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-40px, 10px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255,255,255,0.15);
            opacity: 0.85;
          }
          50% {
            box-shadow: 0 0 35px rgba(255,255,255,0.45);
            opacity: 1;
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animate-slide-up-delayed {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-text-glow-delayed {
          animation: text-glow-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-glow-text-subtitle {
          animation: glow-text-subtitle 2s ease-in-out infinite;
        }
        
        .animate-shimmer-trust {
          animation: shimmer-trust 4s ease-in-out infinite;
        }
        
        .animate-float-trust {
          animation: float-trust 6s ease-in-out infinite;
        }
        
        .animate-float-trust-delayed {
          animation: float-trust-delayed 8s ease-in-out infinite;
        }
        
        .animate-icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 1.5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2.5s ease-out infinite;
        }

        .animate-shine-sweep {
          animation: shine-sweep 1.5s ease-in-out infinite;
        }

        .animate-tech-grid {
          animation: tech-grid 14s ease-in-out infinite;
        }

        .animate-slide-loop {
          animation: slide-loop 22s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
