import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Droplets, Wrench, Thermometer, Search, ShieldCheck, Zap, ArrowRight, Phone } from "lucide-react";
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};
export function ServicesPage() {
  const allServices = [
    { name: "Drain Cleaning", slug: "drain-cleaning", icon: Search, price: "From $99", desc: "Industrial-grade hydro-jetting and precision snaking for residential and commercial main lines." },
    { name: "Pipe Repair", slug: "pipe-repair", icon: Wrench, price: "From $149", desc: "Detection and repair of burst copper pipes, PEX leaks, and underground main line restoration." },
    { name: "Water Heaters", slug: "water-heaters", icon: Thermometer, price: "Install & Repair", desc: "Energy-efficient tankless solutions and traditional gas/electric tank installations." },
    { name: "Sump Pumps", slug: "sump-pumps", icon: Zap, price: "Basement Protection", desc: "Battery backup systems and high-capacity pump installations to keep your basement dry." },
    { name: "Emergency Dispatch", slug: "emergency", icon: ShieldCheck, price: "24/7 Priority", desc: "Immediate response for plumbing catastrophes, floods, and hazardous sewage backups." },
    { name: "Toilet Repair", slug: "toilet-repair", icon: Droplets, price: "From $89", desc: "Fixing internal leaks, stubborn clogs, and full modern toilet suite replacements." },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 space-y-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Service <span className="text-primary text-glow">Standard</span></h1>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
          Uncompromising quality for Mississauga homeowners. Every service is performed by a licensed Red Seal Master Plumber with upfront pricing guaranteed.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <GlassCard className="flex flex-col h-full group hover:translate-y-[-8px] transition-all duration-500 hover:border-primary/30 p-8">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-tight">{service.name}</h3>
                  <p className="text-primary text-sm font-black uppercase tracking-widest mt-1">{service.price}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-lg">
                {service.desc}
              </p>
              <Link to={`/services/${service.slug}`} className="w-full">
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 h-14 rounded-xl gap-3 text-lg group">
                  Service Details <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-[3rem] bg-destructive p-8 md:p-16 flex flex-col lg:row items-center justify-between gap-12 shadow-2xl shadow-destructive/20 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <ShieldCheck className="w-64 h-64" />
        </div>
        <div className="space-y-4 text-center lg:text-left relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Emergency Now?</h2>
          <p className="text-white/80 text-xl font-medium max-w-xl">
            Don't waste time browsing. Our emergency dispatchers are available 24/7 to send a technician to your door.
          </p>
        </div>
        <a href="tel:6475504003" className="relative z-10 w-full lg:w-auto">
          <Button className="w-full lg:w-auto bg-white text-destructive hover:bg-white/90 text-3xl font-black py-10 px-16 rounded-[2rem] h-auto shadow-2xl group transition-all">
            <Phone className="w-8 h-8 mr-4 fill-destructive animate-pulse" /> (647) 550-4003
          </Button>
        </a>
      </motion.div>
    </div>
  );
}