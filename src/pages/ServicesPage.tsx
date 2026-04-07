import React from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Droplets, Wrench, Thermometer, Search, ShieldCheck, Zap, ArrowRight, Phone } from "lucide-react";
export function ServicesPage() {
  const allServices = [
    { name: "Drain Cleaning", slug: "drain-cleaning", icon: Search, price: "From $99", desc: "Complete snaking and hydro-jetting services." },
    { name: "Pipe Repair", slug: "pipe-repair", icon: Wrench, price: "From $149", desc: "Expert leak detection and pipe restoration." },
    { name: "Water Heaters", slug: "water-heaters", icon: Thermometer, price: "Installation & Repair", desc: "Gas, electric, and tankless specialists." },
    { name: "Sump Pumps", slug: "sump-pumps", icon: Zap, price: "Protect your basement", desc: "Battery backup and new installation." },
    { name: "Emergency Dispatch", slug: "emergency", icon: ShieldCheck, price: "24/7 Response", desc: "Immediate help for plumbing catastrophes." },
    { name: "Toilet Repair", slug: "toilet-repair", icon: Droplets, price: "From $89", desc: "Fast fixes for leaks and clogs." },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Expert Services in Mississauga</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Whatever your plumbing challenge, our Red Seal team has the expertise to solve it permanently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, idx) => (
          <GlassCard key={idx} className="flex flex-col h-full group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary transition-transform group-hover:scale-110">
                <service.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-primary text-sm font-medium">{service.price}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
              {service.desc}
            </p>
            <Link to={`/services/${service.slug}`} className="w-full">
              <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 gap-2 group">
                View Details & Pricing <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </GlassCard>
        ))}
      </div>
      <div className="rounded-4xl bg-destructive p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">Emergency Situation?</h2>
          <p className="text-white/80">Don't search for individual services, call our 24/7 hotline now.</p>
        </div>
        <a href="tel:9050000000">
          <Button className="bg-white text-destructive hover:bg-white/90 text-2xl font-black py-8 px-12 rounded-2xl h-auto">
            <Phone className="w-8 h-8 mr-4 fill-destructive" /> (905) 555-0123
          </Button>
        </a>
      </div>
    </div>
  );
}