import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "design", label: "Design" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-xl shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="relative overflow-hidden flex items-center">
            <span className="font-sans font-black text-2xl tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
              Nofrion<span className="text-blue-500 font-medium">.R</span>
            </span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-3 py-2.5 backdrop-blur-sm shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 focus:outline-none cursor-pointer ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onNavigate("contact")}
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-1.5 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-zinc-900/80 bg-[#050505]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "text-blue-400 bg-blue-950/40 border border-blue-900/40"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                    }`}
                  >
                    <span>{item.label}</span>
                    <div className={`w-1.5 h-1.5 rounded-full bg-blue-500 transition-transform duration-300 ${isActive ? "scale-100" : "scale-0"}`} />
                  </button>
                );
              })}
              <button
                onClick={() => {
                  onNavigate("contact");
                  setMenuOpen(false);
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
