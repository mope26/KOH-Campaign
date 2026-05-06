import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-bold text-2xl">
                K
              </div>
              <div className="font-bold leading-tight">
                <div className="text-xl">Kadir Obafemi Hamzat</div>
                <div className="text-sm uppercase tracking-wider text-green-400">Lagosians in Diaspora</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6 text-lg leading-relaxed">
              Bringing together proud sons and daughters of Lagos from across the globe to power a homecoming campaign for a man we believe in. Eko o ni baje.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Chapters</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>London, UK</li>
              <li>New York, USA</li>
              <li>Toronto, Canada</li>
              <li>Atlanta, USA</li>
              <li>Dubai, UAE</li>
              <li>Berlin, Germany</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#vision" className="hover:text-white transition-colors">The Vision</a></li>
              <li><a href="#movement" className="hover:text-white transition-colors">Why Diaspora Matters</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Town Halls</a></li>
              <li><a href="#join" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#join" className="hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Lagosians in Diaspora for Dr. Kadir Obafemi Hamzat. All rights reserved.</p>
          <div className="px-6 py-3 border border-white/20 rounded uppercase tracking-widest text-xs font-bold">
            Paid for by Lagosians in Diaspora for Dr. Kadir Obafemi Hamzat
          </div>
        </div>
      </div>
    </footer>
  );
}
