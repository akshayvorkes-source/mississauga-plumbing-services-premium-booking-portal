import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Droplets, Wrench, Thermometer, Search, ShieldCheck, Zap } from "lucide-react";
export function ServicesPage() {
  const allServices = [
    { name: "Drain Cleaning", icon: Search, price: "From $99", desc: "Complete snaking and hydro-jetting services." },
    { name: "Pipe Repair", icon: Wrench, price: "From $149", desc: "Expert leak detection and pipe restoration." },
    { name: "Water Heaters", icon: Thermometer, price: "Installation & Repair", desc: "Gas, electric, and tankless specialists." },
    { name: "Sump Pumps", icon: Zap, price: "Protect your basement", desc: "Battery backup and new installation." },
    { name: "Emergency Dispatch", icon: ShieldCheck, price: "24/7 Response", desc: "Immediate help for plumbing catastrophes." },
    { name: "Toilet Repair", icon: Droplets, price: "From $89", desc: "Fast fixes for leaks and clogs." },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Expert Services in Mississauga</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Whatever your plumbing challenge, our Red Seal team has the expertise to solve it permanently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, idx) => (
          <GlassCard key={idx} className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
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
            <Button className="w-full btn-premium">Book This Service</Button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}