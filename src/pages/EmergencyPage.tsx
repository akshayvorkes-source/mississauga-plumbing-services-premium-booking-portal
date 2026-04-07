import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Clock, 
  ShieldAlert, 
  MapPin, 
  Activity, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  Flame,
  Droplet
} from "lucide-react";
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
    { neighborhood: "Cooksville", issue: "Main Line Burst", time: "4 mins ago" },
    { neighborhood: "Streetsville", issue: "Sewer Backup", time: "12 mins ago" },
    { neighborhood: "Port Credit", issue: "Flood Management", time: "28 mins ago" },
    { neighborhood: "Erin Mills", issue: "Gas Leak Shutoff", time: "45 mins ago" },
  ];
  const emergencySteps = [
    { title: "Immediate Dispatch", desc: "Technician leaves within 5 minutes of your call.", icon: Zap },
    { title: "Source Control", desc: "Our first priority is stopping water flow and damage.", icon: Droplet },
    { title: "Master Repair", desc: "Red Seal certified solutions following Ontario Code.", icon: ShieldCheck },
    { title: "Restoration", desc: "We ensure your home is dry and secure before leaving.", icon: Flame },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16 lg:py-24 space-y-24">
        {/* Urgent Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive font-black text-xs uppercase tracking-widest animate-pulse"
            >
              <ShieldAlert className="w-4 h-4" /> 24/7 Priority Emergency Dispatch
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tighter">
              Plumbing <span className="text-destructive text-glow block">Crisis?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Water damage happens fast. Our emergency units are strategically positioned across Mississauga for immediate deployment within <span className="text-white font-bold underline underline-offset-4 decoration-destructive">25 minutes</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GlassCard className="border-destructive/30 bg-destructive/5 p-8 group">
                <Clock className="w-10 h-10 text-destructive mb-4 group-hover:rotate-12 transition-transform" />
                <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-widest mb-1">Mississauga Response</h4>
                <p className="text-4xl font-bold">~22 Min</p>
              </GlassCard>
              <GlassCard className="border-primary/30 p-8 group">
                <MapPin className="w-10 h-10 text-primary mb-4 group-hover:translate-y-[-4px] transition-transform" />
                <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-widest mb-1">Local Coverage</h4>
                <p className="text-4xl font-bold">Peel Region</p>
              </GlassCard>
            </div>
            <div className="p-10 bg-destructive rounded-[3rem] text-center space-y-6 shadow-[0_20px_50px_rgba(239,68,68,0.4)] group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
              <p className="text-white/80 font-bold text-sm uppercase tracking-[0.3em] relative z-10">Emergency Hotline Active</p>
              <a href="tel:6475504003" className="block text-4xl md:text-7xl text-white font-black hover:scale-105 transition-transform duration-300 relative z-10">
                (647) 550-4003
              </a>
              <div className="pt-2 relative z-10">
                <Button size="lg" className="bg-white text-destructive hover:bg-white/90 font-black rounded-2xl px-12 h-16 text-xl w-full sm:w-auto shadow-2xl animate-bounce">
                  <Phone className="w-6 h-6 mr-2" /> CALL DISPATCH NOW
                </Button>
              </div>
            </div>
          </div>
          {/* Right Column: Live Data Feed */}
          <div className="space-y-12">
            <div className="space-y-6">
               <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Activity className="text-destructive animate-pulse" /> Mississauga Live Feed
                </h3>
                <span className="text-xs font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase">Peel West Zone</span>
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
                      <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{job.neighborhood}</h4>
                        <p className="text-sm text-muted-foreground">{job.issue}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest block">Unit Active</span>
                      <p className="text-[10px] text-muted-foreground font-mono mt-1">{job.time}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Emergency Process */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {emergencySteps.map((step, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Priority Area List for SEO */}
        <section className="p-12 md:p-20 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-10 text-center">Mississauga Priority Service Wards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Ward 1: Port Credit", "Ward 2: Clarkson", "Ward 3: Rathwood", "Ward 4: City Centre",
                "Ward 5: Malton", "Ward 6: Erindale", "Ward 7: Cooksville", "Ward 8: Erin Mills",
                "Ward 9: Meadowvale", "Ward 10: Churchill Meadows", "Ward 11: Streetsville", "Lorne Park"
              ].map((ward, i) => (
                <div key={i} className="text-center p-4 bg-background/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                  <span className="text-sm font-bold group-hover:text-primary transition-colors">{ward}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ServiceAreaMap />
      </div>
    </div>
  );
}