import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Star, ArrowRight, Wrench, Thermometer, Search, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BookingModal } from "@/components/BookingModal";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { Link } from "react-router-dom";
export function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const stats = [
    { label: "Emergency Response", value: "< 30 Min" },
    { label: "Licensed Plumbers", value: "15+" },
    { label: "Satisfied Clients", value: "5000+" },
    { label: "Years in Mississauga", value: "12" },
  ];
  const services = [
    { title: "Drain Cleaning", slug: "drain-cleaning", desc: "Professional unclogging for kitchens, baths, and main lines.", icon: Search },
    { title: "Pipe Repair", slug: "pipe-repair", desc: "Emergency leak fixing and full copper/PEX repiping.", icon: Wrench },
    { title: "Water Heaters", slug: "water-heaters", desc: "Installation and repair of tanked and tankless systems.", icon: Thermometer },
    { title: "Emergency Dispatch", slug: "emergency", desc: "24/7 priority service for floods and bursts.", icon: Clock },
  ];
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            alt="Plumbing Work"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm tracking-wide uppercase"
            >
              <Shield className="w-4 h-4" />
              Licensed & Insured Mississauga Plumbers
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              Mississauga’s Trusted <span className="text-primary text-glow">24/7 Plumbing</span> Experts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              From emergency leaks to major installations, our master plumbers deliver premium service across Mississauga. Quality guaranteed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={() => setIsBookingOpen(true)} className="btn-premium text-lg h-14 px-10">
                Book Professional Now
              </Button>
              <a href="tel:9050000000">
                <Button variant="outline" className="h-14 px-10 text-lg border-white/20 hover:bg-white/5">
                  Call Emergency: (905) 555-0123
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <p className="text-4xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold">Premium Plumbing Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for residential and commercial properties in the Mississauga area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <GlassCard key={idx} className="space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <Link to={`/services/${service.slug}`} className="block">
                  <Button variant="link" className="p-0 text-primary h-auto group font-bold">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      {/* Service Area Map Integration */}
      <ServiceAreaMap />
      {/* Emergency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-destructive p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Clock className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Emergency in Mississauga?</h2>
              <p className="text-white/80 text-lg max-w-xl">
                Bursted pipes, backed up drains, or zero hot water? We have technicians on standby 24/7 across the city.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="tel:9050000000" className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-white text-destructive hover:bg-white/90 text-xl font-bold py-8 px-12 rounded-2xl h-auto">
                  (905) 555-0123
                </Button>
              </a>
              <p className="text-white text-center text-sm font-medium animate-pulse">Dispatching Now - 25 Min ETA</p>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Factors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Why Choose Mississauga Plumbing Pro?</h2>
              <div className="space-y-6">
                {[
                  { t: "Licensed Master Plumbers", d: "Our team consists strictly of Red Seal certified experts with decades of local experience." },
                  { t: "Upfront Fixed Pricing", d: "No hidden fees or hourly surprises. We provide clear quotes before any work begins." },
                  { t: "Modern Technology", d: "We use HD camera inspections and high-pressure jetting for the most effective results." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
               <GlassCard className="h-full flex items-center justify-center border-white/20 p-12" hoverable={false}>
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Award className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight italic">"The highest rated plumbing firm in the Peel region, three years running."</h3>
                    <p className="font-bold text-muted-foreground uppercase tracking-widest text-sm">— Ontario Trade Excellence</p>
                  </div>
               </GlassCard>
            </div>
          </div>
        </div>
      </section>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}