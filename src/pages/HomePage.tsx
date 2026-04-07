import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Award, 
  Star, 
  ArrowRight, 
  Wrench, 
  Thermometer, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Snowflake,
  Activity
} from "lucide-react";
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
  const featuredServices = [
    { title: "Emergency Plumber", slug: "emergency-plumbing", desc: "Priority dispatch for floods and pipe bursts.", icon: ShieldCheck },
    { title: "Drain Cleaning", slug: "drain-cleaning", desc: "Precision hydro-jetting for total blockage removal.", icon: Search },
    { title: "Pipe Repair", slug: "pipe-repair", icon: Wrench, desc: "Leak detection and trenchless pipe restoration.", slug_real: "pipe-repair" },
    { title: "Frozen Pipes", slug: "frozen-pipes", desc: "Winter care and safe thawing for Peel winters.", icon: Snowflake },
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
              Licensed Mississauga Master Plumbers
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight tracking-tight">
                Mississauga’s <br/><span className="text-primary text-glow">24/7 Experts</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Licensed, bonded, and insured. We provide premium plumbing solutions across Peel Region with a guaranteed <span className="text-foreground font-bold">30-minute emergency arrival time.</span>
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
              <a href="tel:6475504003" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full h-16 px-10 text-lg border-white/20 hover:bg-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
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
        className="py-16 border-y border-white/5 bg-white/5 backdrop-blur-md"
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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Precision plumbing for residential and commercial properties throughout Mississauga, from Port Credit to Meadowvale.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="h-full space-y-6 group hover:translate-y-[-12px] transition-all duration-500 hover:border-primary/50">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    {service.icon ? <service.icon className="w-7 h-7" /> : <Wrench className="w-7 h-7" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <Link to={`/services/${service.slug}`} className="block pt-4">
                    <Button variant="link" className="p-0 text-primary h-auto group font-bold hover:no-underline">
                      Service Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline" className="h-14 px-12 border-white/20 rounded-xl hover:bg-white/5 text-lg">
                View All Plumbing Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <ServiceAreaMap />
      {/* Trust & Testimonial Section */}
      <section className="py-24 bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Trusted by Homeowners <br/>Across Peel Region</h2>
              <div className="space-y-8">
                {[
                  { t: "Licensed Master Plumbers", d: "100% of our technicians are Red Seal certified with background clearances." },
                  { t: "Upfront Fixed Pricing", d: "Clear quotes provided before any work begins. No travel or surprise fees." },
                  { t: "Lifetime Craftsmanship Warranty", d: "We stand behind every wrench turn with an industry-leading service guarantee." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1 shrink-0 transition-transform group-hover:scale-125 duration-300">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.t}</h4>
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
              className="relative"
            >
              <GlassCard className="p-16 border-white/20 backdrop-blur-2xl rounded-4xl text-center space-y-8" hoverable={false}>
                <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-4 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold italic leading-snug">"The only plumbers in Mississauga we trust with our home. Rapid, clean, and professional."</h3>
                <div>
                  <p className="font-black text-primary uppercase tracking-[0.3em] text-sm">Mississauga Gold Standard</p>
                  <p className="text-muted-foreground font-medium">Peel Business Excellence 2024</p>
                </div>
                <div className="flex justify-center gap-1 pt-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-primary fill-primary" />)}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}