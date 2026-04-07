import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Calendar, Menu, Droplets, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-mesh-navy text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
              <Droplets className="w-8 h-8 text-primary" />
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
            <a href="tel:9050000000" className="hidden lg:flex items-center gap-2 text-primary font-bold hover:text-glow transition-all">
              <Phone className="w-4 h-4" />
              (905) 555-0123
            </a>
            <Button onClick={() => setIsBookingOpen(true)} className="btn-premium hidden sm:flex">
              Book Online
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                <li><Link to="/services" className="hover:text-primary transition-colors">Drain Cleaning</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Pipe Repair</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Water Heaters</Link></li>
                <li><Link to="/emergency" className="hover:text-primary transition-colors">Emergency Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Service Area</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Port Credit</li>
                <li>Streetsville</li>
                <li>Cooksville</li>
                <li>Erin Mills</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>123 Square One Dr, Mississauga</p>
                <p>Open 24/7 for Emergencies</p>
                <p className="text-primary font-bold">(905) 555-0123</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Mississauga Plumbing Pro. All rights reserved. Licensed Master Plumbers.</p>
            <p className="mt-2">Note: AI capabilities are subject to request limits across all sessions.</p>
          </div>
        </div>
      </footer>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden glass-panel border-t border-white/20 p-4 flex gap-4">
        <a href="tel:9050000000" className="flex-1">
          <Button variant="destructive" className="w-full h-12 font-bold gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </Button>
        </a>
        <Button onClick={() => setIsBookingOpen(true)} className="flex-1 h-12 btn-premium gap-2">
          <Calendar className="w-4 h-4" /> Book
        </Button>
      </div>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}