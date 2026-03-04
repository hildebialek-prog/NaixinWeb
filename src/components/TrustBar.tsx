import { ShieldCheck, Award, MapPin, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TrustBar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation
    setIsVisible(true);

    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Auto-scroll marquee effect
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (marquee.scrollWidth > marquee.clientWidth) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= marquee.scrollWidth / 2) {
          scrollPosition = 0;
        }
        marquee.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after initial delay
    const startDelay = setTimeout(() => {
      animate();
    }, 2000);

    return () => {
      clearTimeout(startDelay);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const trustItems = [
    {
      icon: ShieldCheck,
      label: "Verified Company",
      value: "GUANGZHOU NAIXIN IMPORT AND EXPORT CO LIMITED",
    },
    {
      icon: Award,
      label: "BR Certificate",
      value: "77636628-000-01-25-7",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value:
        "8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai, Hong Kong",
    },
  ];

  return (
    <div
      className={`relative bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground overflow-hidden border-b border-primary-foreground/10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/5 to-primary animate-gradient-shift" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] animate-shimmer-slow" />
      </div>

      {/* Glowing particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-trust/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Left side - Trust badges */}
          <div
            className={`hidden lg:flex items-center gap-4 flex-shrink-0 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 backdrop-blur-sm group/verified hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover/verified:opacity-100 transition-opacity duration-500" />
              <CheckCircle2 className="relative h-3.5 w-3.5 text-accent animate-pulse-subtle group-hover/verified:animate-spin-slow" />
              <span className="relative text-xs font-medium tracking-wide animate-glow-text">
                VERIFIED
              </span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/20 animate-fade-in-delay" />
          </div>

          {/* Center - Scrolling content */}
          <div className="flex-1 min-w-0">
            <div
              ref={scrollContainerRef}
              className={`flex items-center gap-6 overflow-x-auto scrollbar-hide transition-all duration-500 ${
                isScrolling ? "opacity-90" : "opacity-100"
              }`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div
                ref={marqueeRef}
                className="flex items-center gap-6"
                style={{ willChange: "scroll-position" }}
              >
                {trustItems.map((item, index) => {
                  const Icon = item.icon;
                  const delay = 400 + index * 150;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 flex-shrink-0 group transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${delay}ms` }}
                    >
                      <div className="relative flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-500 group-hover:bg-primary-foreground/10 group-hover:border-primary-foreground/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30">
                        <div className="absolute inset-0 rounded-lg bg-accent/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Icon className="relative h-3.5 w-3.5 text-accent flex-shrink-0 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:text-accent animate-icon-float" />
                        <span className="relative text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 hidden sm:inline transition-all duration-300 group-hover:text-primary-foreground">
                          {item.label}:
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium whitespace-nowrap text-primary-foreground transition-all duration-300 group-hover:text-accent/80">
                        {index === 2 ? (
                          <span className="hidden xl:inline">{item.value}</span>
                        ) : (
                          item.value
                        )}
                      </span>
                      {index < trustItems.length - 1 && (
                        <div className="h-4 w-px bg-primary-foreground/20 flex-shrink-0 animate-pulse-vertical" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Additional trust indicator */}
          <div
            className={`hidden xl:flex items-center gap-2 flex-shrink-0 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="h-6 w-px bg-primary-foreground/20 animate-fade-in-delay" />
            <div className="relative flex items-center gap-1.5 px-2.5 py-1 bg-trust/20 rounded-full border border-trust/30 group/trusted hover:bg-trust/30 hover:border-trust/40 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-trust/30">
              <div className="absolute inset-0 rounded-full bg-trust/30 blur-xl opacity-0 group-hover/trusted:opacity-100 transition-opacity duration-500" />
              <Award className="relative h-3 w-3 text-trust animate-bounce-subtle group-hover/trusted:animate-spin-slow" />
              <span className="relative text-[10px] font-bold uppercase tracking-widest text-trust animate-glow-text-gold">
                Trusted
              </span>
            </div>
          </div>
        </div>

        {/* Mobile optimized layout */}
        <div
          className={`lg:hidden py-2 space-y-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent animate-pulse-subtle" />
            <span className="text-xs font-semibold animate-fade-in">
              GUANGZHOU NAIXIN IMPORT AND EXPORT CO LIMITED
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 text-[10px]">
            <div className="flex items-center gap-1 group">
              <Award className="h-3 w-3 text-accent transition-transform duration-300 group-hover:rotate-12" />
              <span className="transition-colors duration-300 group-hover:text-accent/80">
                BR: 77636628-000-01-25-7
              </span>
            </div>
            <div className="h-3 w-px bg-primary-foreground/20 animate-pulse-vertical" />
            <div className="flex items-center gap-1 group">
              <MapPin className="h-3 w-3 text-accent transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline transition-colors duration-300 group-hover:text-accent/80">
                Hong Kong
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%) translateY(0); }
          50% { transform: translateX(100%) translateY(0); }
          100% { transform: translateX(-100%) translateY(0); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(5px) translateX(-5px); }
          66% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes glow-text {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3); }
        }
        
        @keyframes glow-text-gold {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 193, 7, 0.4); }
          50% { text-shadow: 0 0 10px rgba(255, 193, 7, 0.6), 0 0 15px rgba(255, 193, 7, 0.4); }
        }
        
        @keyframes icon-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes pulse-vertical {
          0%, 100% { opacity: 0.2; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(1.2); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 8s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-glow-text {
          animation: glow-text 3s ease-in-out infinite;
        }
        
        .animate-glow-text-gold {
          animation: glow-text-gold 3s ease-in-out infinite;
        }
        
        .animate-icon-float {
          animation: icon-float 3s ease-in-out infinite;
        }
        
        .animate-pulse-vertical {
          animation: pulse-vertical 2s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 2s ease-out forwards;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
