import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
const NEIGHBORHOODS = [
  { name: "Port Credit", status: "Active", x: "70%", y: "85%" },
  { name: "Streetsville", status: "Available", x: "20%", y: "30%" },
  { name: "Cooksville", status: "Busy", x: "60%", y: "60%" },
  { name: "Erin Mills", status: "Active", x: "25%", y: "65%" },
  { name: "Square One", status: "Available", x: "55%", y: "45%" },
  { name: "Malton", status: "Available", x: "85%", y: "15%" },
];
export function ServiceAreaMap() {
  return (
    <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3 h-3" /> Mississauga Coverage
          </div>
          <h2 className="text-4xl font-bold font-display">Local Presence, <br/><span className="text-primary">Rapid Response</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our fleet is strategically stationed across Mississauga's core neighborhoods. We don't just serve the city; we live here. Expect a technician at your door in under 30 minutes for emergencies.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {NEIGHBORHOODS.slice(0, 4).map((area, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className={`w-2 h-2 rounded-full ${area.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-primary'}`} />
                <span className="font-medium text-sm">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square lg:aspect-video rounded-4xl overflow-hidden bg-zinc-900 border border-white/10 shadow-glass group">
          {/* Radar background effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
            <motion.div 
              animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/30 rounded-full"
            />
          </div>
          {/* Interactive Neighborhood Pings */}
          {NEIGHBORHOODS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="absolute z-20 cursor-default"
              style={{ top: area.y, left: area.x }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping" />
                <div className="relative bg-background/80 backdrop-blur-md border border-primary/50 p-2 rounded-lg flex items-center gap-2 shadow-lg hover:scale-110 transition-transform">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-black uppercase whitespace-nowrap">{area.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute bottom-6 left-6 right-6 z-30">
            <GlassCard className="py-3 px-6 border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase">Live Dispatch Status: Optimal</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-mono">PLUMB_ID: MISS_REGION_01</span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}