import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <div className={`font-bold leading-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            <div className="text-lg">Kadir Obafemi Hamzat</div>
            <div className="text-xs uppercase tracking-wider opacity-80">Diaspora Movement</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("vision")} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>The Vision</button>
          <button onClick={() => scrollTo("movement")} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>The Movement</button>
          <button onClick={() => scrollTo("about")} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>About</button>
          <Button onClick={() => scrollTo("join")} variant="destructive" className="font-bold rounded-full px-6">
            Join Us
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-t">
          <button onClick={() => scrollTo("vision")} className="text-left py-2 font-medium text-foreground hover:text-primary">The Vision</button>
          <button onClick={() => scrollTo("movement")} className="text-left py-2 font-medium text-foreground hover:text-primary">The Movement</button>
          <button onClick={() => scrollTo("about")} className="text-left py-2 font-medium text-foreground hover:text-primary">About</button>
          <Button onClick={() => scrollTo("join")} variant="destructive" className="w-full font-bold mt-2">
            Join Us
          </Button>
        </div>
      )}
    </header>
  );
}
