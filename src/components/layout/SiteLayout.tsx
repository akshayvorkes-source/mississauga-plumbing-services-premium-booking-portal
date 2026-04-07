import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Calendar, Menu, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { cn } from "@/lib/utils";
export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-mesh-navy text-foreground">
      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled 
            ? "glass-panel bg-background/80 backdrop-blur-xl py-2 border-white/10" 
            : "bg-transparent py-4 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
              <Droplets className="w-7 h-7 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              Mississauga<span className="text-primary">Plumbing</span>Pro
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/emergency" className="text-destructive font-bold hover:opacity-80 transition-opacity">EMERGENCY</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:6475504003" className="hidden lg:flex items-center gap-2 text-primary font-bold hover:text-glow transition-all">
              <Phone className="w-4 h-4" />
              (647) 550-4003
            </a>
            <Button onClick={() => setIsBookingOpen(true)} className="btn-premium hidden sm:flex">
              Book Online
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden w-11 h-11">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 pt-16 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Droplets className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">PlumbingPro</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Premium plumbing solutions for Mississauga homeowners. Licensed, insured, and available 24/7 for your emergencies.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/services/drain-cleaning" className="hover:text-primary transition-colors">Drain Cleaning</Link></li>
                <li><Link to="/services/pipe-repair" className="hover:text-primary transition-colors">Pipe Repair</Link></li>
                <li><Link to="/emergency" className="hover:text-primary transition-colors text-destructive">Emergency Repair</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Service Area</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Port Credit & Lakeview</li>
                <li>Streetsville & Erin Mills</li>
                <li>Cooksville & City Centre</li>
                <li>Mississauga Valleys</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>123 Square One Dr, Mississauga, ON</p>
                <p>Open 24/7 for Emergencies</p>
                <a href="tel:6475504003" className="text-primary font-bold block">(647) 550-4003</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()} Mississauga Plumbing Pro. Licensed Master Plumbers.</p>
            <p className="mt-2 text-[10px] text-muted-foreground/40 uppercase tracking-widest">Global request limits may apply to AI-assisted features.</p>
          </div>
        </div>
      </footer>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden glass-panel border-t border-white/20 p-4 flex gap-4 animate-slide-up">
        <a href="tel:6475504003" className="flex-1">
          <Button variant="destructive" className="w-full h-12 font-bold gap-2 rounded-xl shadow-lg shadow-destructive/20">
            <Phone className="w-4 h-4" /> Call Now
          </Button>
        </a>
        <Button onClick={() => setIsBookingOpen(true)} className="flex-1 h-12 btn-premium gap-2 rounded-xl">
          <Calendar className="w-4 h-4" /> Book Online
        </Button>
      </div>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}