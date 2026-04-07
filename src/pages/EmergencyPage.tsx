import React from "react";
import { motion } from "framer-motion";
import { Phone, Clock, ShieldAlert, MapPin, Activity, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
export function EmergencyPage() {
  const recentDispatches = [
    { neighborhood: "Cooksville", issue: "Clogged Main Line", time: "14 mins ago" },
    { neighborhood: "Streetsville", issue: "Burst Pipe", time: "38 mins ago" },
    { neighborhood: "Port Credit", issue: "Water Heater Failure", time: "1 hour ago" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive font-black text-sm uppercase animate-pulse">
            <ShieldAlert className="w-4 h-4" /> Priority 24/7 Emergency Service
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Need a Plumber <span className="text-destructive text-glow">Right Now?</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every minute counts when dealing with water damage. Our emergency response units are strategically positioned across Mississauga for immediate deployment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard className="border-destructive/30 bg-destructive/5">
              <Clock className="w-8 h-8 text-destructive mb-3" />
              <h4 className="font-bold text-sm text-muted-foreground uppercase">Average Arrival</h4>
              <p className="text-3xl font-bold">22 Minutes</p>
            </GlassCard>
            <GlassCard className="border-primary/30">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-sm text-muted-foreground uppercase">Service Area</h4>
              <p className="text-3xl font-bold">All Mississauga</p>
            </GlassCard>
          </div>
          <div className="p-8 bg-destructive rounded-3xl text-center space-y-4 shadow-2xl shadow-destructive/20">
            <p className="text-white font-bold text-lg uppercase tracking-widest">Immediate Hotline</p>
            <a href="tel:9050000000" className="block text-4xl md:text-6xl text-white font-black hover:scale-105 transition-transform">
              (905) 555-0123
            </a>
            <p className="text-white/80 font-medium">Click to Call • Dispatching in 250+ Mississauga Neighborhoods</p>
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Activity className="text-destructive" /> Live Dispatch Feed
          </h3>
          <div className="space-y-4">
            {recentDispatches.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{job.neighborhood}</h4>
                    <p className="text-xs text-muted-foreground">{job.issue}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground italic">{job.time}</span>
              </motion.div>
            ))}
          </div>
          <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1504148455328-497c5efdf156?auto=format&fit=crop&q=80&w=1000"
              alt="Emergency Repair"
              className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center animate-ping opacity-75" />
            </div>
          </div>
        </div>
      </div>
      <ServiceAreaMap />
    </div>
  );
}