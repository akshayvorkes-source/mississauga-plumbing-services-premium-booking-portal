import React from "react";
import { Phone, Clock, ShieldAlert, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
export function EmergencyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive font-black text-sm uppercase animate-pulse">
            <ShieldAlert className="w-4 h-4" /> Priority 24/7 Emergency Service
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Need a Plumber <span className="text-destructive">Right Now?</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Don't wait. Water damage gets worse every minute. Our emergency units are stationed across Mississauga for immediate dispatch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard className="border-destructive/30">
              <Clock className="w-8 h-8 text-destructive mb-3" />
              <h4 className="font-bold">Average ETA</h4>
              <p className="text-2xl font-bold">22 Minutes</p>
            </GlassCard>
            <GlassCard>
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold">Serving</h4>
              <p className="text-2xl font-bold">All Mississauga</p>
            </GlassCard>
          </div>
          <div className="p-8 bg-destructive rounded-3xl text-center space-y-4">
            <p className="text-white font-bold text-lg uppercase tracking-widest">Immediate Hotline</p>
            <a href="tel:9050000000" className="block text-4xl md:text-6xl text-white font-black hover:scale-105 transition-transform">
              (905) 555-0123
            </a>
            <p className="text-white/80">Press to Call - Dispatching in Cooksville, Streetsville, Port Credit & more.</p>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-destructive/20 blur-[120px] rounded-full" />
          <img 
            src="https://images.unsplash.com/photo-1504148455328-497c5efdf156?auto=format&fit=crop&q=80&w=1000" 
            alt="Emergency Repair" 
            className="rounded-4xl relative z-10 border border-white/10 shadow-2xl grayscale"
          />
        </div>
      </div>
    </div>
  );
}