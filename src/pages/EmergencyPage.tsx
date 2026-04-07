import React from "react";
import { motion } from "framer-motion";
import { Phone, Clock, ShieldAlert, MapPin, Activity, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};
export function EmergencyPage() {
  const recentDispatches = [
    { neighborhood: "Cooksville", issue: "Clogged Main Line", time: "8 mins ago" },
    { neighborhood: "Streetsville", issue: "Burst PEX Pipe", time: "22 mins ago" },
    { neighborhood: "Port Credit", issue: "Sump Pump Failure", time: "45 mins ago" },
    { neighborhood: "Erin Mills", issue: "Gas Line Shutoff", time: "1 hour ago" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive font-black text-xs uppercase tracking-widest animate-pulse"
          >
            <ShieldAlert className="w-4 h-4" /> Priority 24/7 Rapid Response
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tighter">
            Plumbing <span className="text-destructive text-glow block">Crisis?</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            Water damage doesn't wait. Our emergency units are strategically positioned across Mississauga for immediate deployment within 25 minutes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GlassCard className="border-destructive/30 bg-destructive/5 p-8 group">
              <Clock className="w-10 h-10 text-destructive mb-4 group-hover:rotate-12 transition-transform" />
              <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-widest mb-1">Response Time</h4>
              <p className="text-4xl font-bold">~22 Min</p>
            </GlassCard>
            <GlassCard className="border-primary/30 p-8 group">
              <MapPin className="w-10 h-10 text-primary mb-4 group-hover:translate-y-[-4px] transition-transform" />
              <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-widest mb-1">Local Coverage</h4>
              <p className="text-4xl font-bold">100% City</p>
            </GlassCard>
          </div>
          <div className="p-10 bg-destructive rounded-[2.5rem] text-center space-y-6 shadow-[0_20px_50px_rgba(239,68,68,0.3)] group">
            <p className="text-white/80 font-bold text-sm uppercase tracking-[0.3em]">Immediate Emergency Hotline</p>
            <a href="tel:6475504003" className="block text-4xl md:text-6xl text-white font-black hover:scale-105 transition-transform duration-300">
              (647) 550-4003
            </a>
            <div className="pt-2">
              <Button size="lg" className="bg-white text-destructive hover:bg-white/90 font-bold rounded-xl px-12 h-14 text-lg w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" /> Dispatch Technician Now
              </Button>
            </div>
            <p className="text-white/70 text-sm font-medium italic">Active Dispatching in All Mississauga Zones</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Activity className="text-destructive animate-pulse" /> Live Dispatch Feed
            </h3>
            <span className="text-xs font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">REGION: PEEL-WEST</span>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {recentDispatches.map((job, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{job.neighborhood}</h4>
                    <p className="text-sm text-muted-foreground">{job.issue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-primary font-bold">STATUS: RESOLVED</span>
                  <p className="text-[10px] text-muted-foreground uppercase mt-1">{job.time}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="aspect-video relative rounded-4xl overflow-hidden border border-white/10 group shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504148455328-497c5efdf156?auto=format&fit=crop&q=80&w=1000"
              alt="Emergency Repair"
              className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 w-24 h-24 bg-destructive rounded-full animate-ping opacity-40" />
                <div className="relative w-24 h-24 bg-destructive/20 border-2 border-destructive rounded-full flex items-center justify-center">
                  <Activity className="w-10 h-10 text-destructive" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
               <div className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white/90">MISSISSAUGA NORTH UNIT-04</span>
                  <span className="text-[10px] text-muted-foreground font-mono">GPS: 43.5890° N, 79.6441° W</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceAreaMap />
    </div>
  );
}