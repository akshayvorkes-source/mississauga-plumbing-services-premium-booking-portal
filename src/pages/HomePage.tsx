import React from "react";
import { motion, type Variants } from "framer-motion";
import { Shield, Clock, Award, Star, ArrowRight, Wrench, Thermometer, Search, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BookingModal } from "@/components/BookingModal";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { Link } from "react-router-dom";
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};
const fadeTransition = { duration: 0.6, ease: "easeOut" as const };
export function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const stats = [
    { label: "Emergency Response", value: "< 25 Min" },
    { label: "Licensed Plumbers", value: "20+" },
    { label: "Verified Reviews", value: "1.2k" },
    { label: "Active in Mississauga", value: "12 Yrs" },
  ];
  const services = [
    { title: "Drain Cleaning", slug: "drain-cleaning", desc: "Advanced hydro-jetting and snaking for total blockage removal.", icon: Search },
    { title: "Pipe Repair", slug: "pipe-repair", desc: "Copper, PEX, and main line repairs with full diagnostic reports.", icon: Wrench },
    { title: "Water Heaters", slug: "water-heaters", desc: "Same-day installation for tankless and high-efficiency systems.", icon: Thermometer },
    { title: "24/7 Emergency", slug: "emergency", desc: "Priority dispatch for floods, bursts, and major sewage backups.", icon: Clock },
  ];
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            alt="Plumbing Work"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs tracking-widest uppercase"
            >
              <Shield className="w-4 h-4" />
              Certified Mississauga Master Plumbers
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight tracking-tight">
                Mississauga’s <span className="text-primary text-glow relative inline-block">
                  24/7 Experts
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  />
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Licensed, bonded, and insured. We provide premium plumbing solutions across Peel Region with a guaranteed <span className="text-foreground font-bold">30-minute emergency arrival.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={() => setIsBookingOpen(true)} className="btn-premium text-lg h-16 px-10 rounded-2xl group">
                Book Service Online <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="tel:6475504003">
                <Button variant="outline" className="h-16 px-10 text-lg border-white/20 hover:bg-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                  Call: (647) 550-4003
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        transition={fadeTransition}
        className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 group">
                <p className="text-5xl font-display font-bold text-primary group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            transition={fadeTransition}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Pro Standard</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Precision plumbing for residential and commercial properties throughout the Mississauga area.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="h-full space-y-6 group hover:translate-y-[-12px] transition-all duration-500 hover:border-primary/50">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <Link to={`/services/${service.slug}`} className="block pt-4">
                    <Button variant="link" className="p-0 text-primary h-auto group font-bold hover:no-underline">
                      View Service Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ServiceAreaMap />
      {/* Emergency Callout */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        transition={fadeTransition}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="rounded-[3rem] bg-destructive p-12 relative overflow-hidden shadow-2xl shadow-destructive/30">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Clock className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Active Leak?</h2>
              <p className="text-white/90 text-xl max-w-xl font-medium">
                Don't wait for water damage to escalate. Our dispatch team is on standby 24/7 in your neighborhood.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-auto items-center">
              <a href="tel:6475504003" className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-white text-destructive hover:bg-white/90 text-3xl font-black py-10 px-16 rounded-[2rem] h-auto shadow-2xl group transition-all">
                  (647) 550-4003
                </Button>
              </a>
              <div className="flex items-center gap-3 text-white/90 font-bold uppercase tracking-widest text-xs">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                Emergency Response Units Active
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Trust Factors */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              transition={fadeTransition}
              className="space-y-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">The Trusted Choice for <br/>Mississauga Homeowners</h2>
              <div className="space-y-8">
                {[
                  { t: "Licensed Master Plumbers", d: "100% of our technicians carry Red Seal certification and have cleared rigorous background checks." },
                  { t: "Upfront Transparent Pricing", d: "Clear flat-rate quotes provided before we even touch a wrench. No hidden travel or overtime fees." },
                  { t: "Lifetime Warranty", d: "We stand behind our work with industry-leading warranties on all parts and professional labor." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1 transition-transform group-hover:scale-125 duration-300">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.t}</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotateY: 20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="relative perspective-1000"
            >
               <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
               <motion.div
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               >
                 <GlassCard className="relative z-10 p-16 border-white/20 backdrop-blur-2xl rounded-4xl shadow-glass text-center space-y-8 overflow-hidden" hoverable={false}>
                    <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-4 rotate-12 transition-transform hover:rotate-0 duration-500">
                      <Award className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold italic leading-snug">"Unmatched response times and professional execution. They are the only ones we call."</h3>
                    <div className="space-y-1">
                      <p className="font-black text-primary uppercase tracking-[0.3em] text-sm">Mississauga Gold Standard</p>
                      <p className="text-muted-foreground font-medium">Home Improvement Excellence 2024</p>
                    </div>
                    <div className="flex justify-center gap-1 pt-4">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-primary fill-primary" />)}
                    </div>
                 </GlassCard>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}