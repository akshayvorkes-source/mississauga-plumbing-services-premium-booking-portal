import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Activity } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
const NEIGHBORHOODS = [
  { name: "Port Credit", status: "Active", x: "70%", y: "82%" },
  { name: "Streetsville", status: "Available", x: "18%", y: "28%" },
  { name: "Cooksville", status: "Busy", x: "58%", y: "58%" },
  { name: "Erin Mills", status: "Active", x: "22%", y: "62%" },
  { name: "Square One", status: "Available", x: "52%", y: "42%" },
  { name: "Malton", status: "Available", x: "82%", y: "12%" },
];
export function ServiceAreaMap() {
  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest"
          >
            <Navigation className="w-3 h-3" /> Live Mississauga Coverage
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight">
            Local Presence,<br/><span className="text-primary text-glow">Rapid Dispatch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            Our specialized fleet is strategically stationed across Mississauga's core residential hubs. From Port Credit to Streetsville, we guarantee a technician on-site in under 25 minutes.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-6">
            {NEIGHBORHOODS.slice(0, 4).map((area, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                <div className={`w-3 h-3 rounded-full ${area.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-primary'}`} />
                <span className="font-bold text-base">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden bg-[#0A192F] border border-white/10 shadow-glass group">
          {/* Radar background effect */}
          <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15)_1.5px,transparent_1px)] bg-[length:45px_45px]" />
            {/* Main Radar Pulse */}
            <motion.div
              animate={{ opacity: [0, 0.4, 0], scale: [0.6, 1.4, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-primary/40 rounded-full"
            />
            {/* Secondary Ripple */}
            <motion.div
              animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.8, 0.8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full"
            />
          </div>
          {/* Interactive Neighborhood Pings */}
          {NEIGHBORHOODS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="absolute z-20"
              style={{ top: area.y, left: area.x }}
            >
              <div className="relative flex items-center justify-center p-4">
                <div className="absolute w-14 h-14 bg-primary/20 rounded-full animate-ping opacity-60" />
                <div className="relative bg-background/90 backdrop-blur-xl border border-primary/40 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-2xl hover:scale-125 hover:border-primary transition-all cursor-default min-w-[40px] min-h-[40px] justify-center">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-tighter whitespace-nowrap text-white">{area.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute bottom-8 left-8 right-8 z-30">
            <GlassCard className="py-4 px-8 border-white/10 bg-black/50 backdrop-blur-2xl flex items-center justify-between rounded-2xl shadow-2xl" hoverable={false}>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                  <div className="w-3 h-3 bg-green-500 rounded-full relative z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-white">Technicians Online: 08</span>
                  <span className="text-[10px] text-green-400 font-bold">READY FOR DISPATCH</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter">NetID: MISS_PEEL_G3</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}