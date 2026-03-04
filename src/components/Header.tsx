import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  ChevronDown,
  Sparkles,
  Cpu,
  Monitor,
  Video,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const clothingMenu = [
    { label: "Men", to: "/category/men", icon: "👔" },
    { label: "Women", to: "/category/women", icon: "👗" },
    { label: "Accessories", to: "/category/accessories", icon: "👜" },
    // { label: "New Arrivals", to: "/shop/clothing/new", icon: "✨" },
    // { label: "Sale", to: "/shop/clothing/sale", icon: "🔥" },
  ];

  const technologyMenu = [
    {
      label: "Tech Gear",
      to: "/category/tech-gear",
      icon: <Cpu className="h-4 w-4 text-accent" />,
    },
    {
      label: "Workspace",
      to: "/category/workspace",
      icon: <Monitor className="h-4 w-4 text-foreground/80" />,
    },
    {
      label: "Creator Studio",
      to: "/category/creator-studio",
      icon: <Video className="h-4 w-4 text-trust" />,
    },
    {
      label: "Smart Tools",
      to: "/category/smart-tools",
      icon: <Wrench className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/98 backdrop-blur-md shadow-lg shadow-black/5 border-b border-border/50"
            : "bg-background/95 backdrop-blur-sm border-b border-border"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-trust to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-lg" />
                <div className="relative font-serif text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:via-trust group-hover:to-accent transition-all duration-500 group-hover:scale-105">
                  NAIXIN
                </div>
              </div>
              <Sparkles className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Clothing Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("clothing")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to="/category/men"
                  className="relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group/nav"
                  activeClassName="text-accent"
                >
                  <span className="relative z-10">CLOTHING</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-trust group-hover/nav:w-full transition-all duration-300" />
                  <ChevronDown
                    className={`inline-block h-3 w-3 ml-1 transition-transform duration-300 ${
                      activeDropdown === "clothing" ? "rotate-180" : ""
                    }`}
                  />
                </NavLink>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-300 ${
                    activeDropdown === "clothing"
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-card/95 backdrop-blur-md border border-border/50 shadow-2xl rounded-xl p-4 w-72 mt-2 space-y-1">
                    {clothingMenu.map((item, index) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent/10 transition-all duration-300 group/item"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="text-lg group-hover/item:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="flex-1 font-medium text-sm group-hover/item:text-accent transition-colors duration-300">
                          {item.label}
                        </span>
                        <div className="w-0 h-0.5 bg-accent group-hover/item:w-8 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("technology")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to="/category/tech-gear"
                  className="relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group/nav"
                  activeClassName="text-accent"
                >
                  <span className="relative z-10">TECHNOLOGY</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-trust group-hover/nav:w-full transition-all duration-300" />
                  <ChevronDown
                    className={`inline-block h-3 w-3 ml-1 transition-transform duration-300 ${
                      activeDropdown === "technology" ? "rotate-180" : ""
                    }`}
                  />
                </NavLink>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-300 ${
                    activeDropdown === "technology"
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-card/95 backdrop-blur-md border border-border/50 shadow-2xl rounded-xl p-4 w-72 mt-2 space-y-1">
                    {technologyMenu.map((item, index) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent/10 transition-all duration-300 group/item"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="text-lg group-hover/item:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="flex-1 font-medium text-sm group-hover/item:text-accent transition-colors duration-300">
                          {item.label}
                        </span>
                        <div className="w-0 h-0.5 bg-accent group-hover/item:w-8 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              {[
                { to: "/about", label: "ABOUT" },
                { to: "/compliance", label: "COMPLIANCE" },
                { to: "/contact", label: "CONTACT" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group/nav"
                  activeClassName="text-accent"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-trust group-hover/nav:w-full transition-all duration-300" />
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="relative hidden lg:block">
                {searchOpen ? (
                  <div className="flex items-center gap-2 animate-slide-in-right">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search products..."
                        className="w-64 pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                        onBlur={handleSearchClose}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") handleSearchClose();
                        }}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleSearchClose}
                      className="h-9 w-9"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSearchToggle}
                    className="h-10 w-10 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                  >
                    <Search className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </Button>
                )}
              </div>

              {/* Shopping Cart */}
              {/* <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
              >
                <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute top-1 right-1 h-4 w-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  0
                </span>
              </Button> */}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-10 w-10 relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-0 rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t border-border bg-background/98 backdrop-blur-md overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="section-container py-6 space-y-1">
            {/* Clothing Mobile Menu */}
            <div className="space-y-1">
              <Link
                to="/category/men"
                className="block px-4 py-3 text-base font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clothing
              </Link>
              <div className="pl-6 space-y-1">
                {clothingMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground rounded-lg hover:bg-accent/5 hover:text-foreground transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Technology Mobile Menu */}
            <div className="space-y-1">
              <Link
                to="/category/tech-gear"
                className="block px-4 py-3 text-base font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <div className="pl-6 space-y-1">
                {technologyMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground rounded-lg hover:bg-accent/5 hover:text-foreground transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            {[
              { to: "/about", label: "About" },
              { to: "/compliance", label: "Compliance & Verification" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-base font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
