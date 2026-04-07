import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Hammer, DollarSign, HelpCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BookingModal } from "@/components/BookingModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const SERVICE_DATA: Record<string, any> = {
  "drain-cleaning": {
    title: "Expert Drain Cleaning Mississauga",
    hero: "https://images.unsplash.com/photo-1504148455328-497c5efdf156?auto=format&fit=crop&q=80&w=2000",
    description: "Professional snaking, hydro-jetting, and camera inspections for stubborn clogs in Mississauga homes. We restore flow perfectly.",
    problems: ["Slow draining sinks & tubs", "Main sewer line backups", "Gurgling toilet sounds", "Unpleasant drain odors"],
    steps: ["CCTV Video Inspection", "Blockage Localization", "High-Pressure Jetting", "Final Flow Verification"],
    pricing: "From $99",
    faqs: [
      { q: "How often should I clean my drains?", a: "For Mississauga homes, especially older ones in areas like Port Credit, we recommend professional cleaning every 24 months." },
      { q: "Is hydro-jetting safe for old pipes?", a: "Our master plumbers always perform a camera assessment to ensure pipe structural integrity before using high-pressure equipment." }
    ]
  },
  "pipe-repair": {
    title: "Pipe Repair & Repiping Experts",
    hero: "https://images.unsplash.com/photo-1585704032915-c3400ca1f965?auto=format&fit=crop&q=80&w=2000",
    description: "Emergency leak repair and full copper or PEX repiping services with industry-leading warranties and precision execution.",
    problems: ["Burst copper or PEX pipes", "Corroded plumbing joints", "Persistent pin-hole leaks", "Loud 'Water Hammer' noises"],
    steps: ["Acoustic Leak Detection", "Precision Section Removal", "Premium Grade Replacement", "System Pressure Testing"],
    pricing: "From $149",
    faqs: [
      { q: "Do you offer emergency pipe repair?", a: "Yes, we have emergency dispatch units stationed across Mississauga ready for immediate deployment 24/7." },
      { q: "Can you fix polybutylene pipes?", a: "We specialize in full system replacements for outdated polybutylene, upgrading your home to reliable PEX systems." }
    ]
  }
};
export function ServiceDetailPage() {
  const { slug } = useParams();
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const data = slug ? SERVICE_DATA[slug] : null;
  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-5xl font-bold">Service Not Found</h1>
        <p className="text-muted-foreground text-lg">We offer many other professional plumbing services in Mississauga.</p>
        <Button asChild className="btn-premium h-14 px-10"><Link to="/services">Explore All Services</Link></Button>
      </div>
    );
  }
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero}
            alt={data.title}
            className="w-full h-full object-cover opacity-20 grayscale"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl space-y-8"
          >
            <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight leading-none">{data.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Button onClick={() => setIsBookingOpen(true)} className="btn-premium h-16 px-12 text-xl rounded-2xl group shadow-2xl">
                Book Service <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <DollarSign className="w-6 h-6 text-primary" />
                <span className="font-black text-xl">{data.pricing}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold flex items-center gap-4 tracking-tight">
                <ShieldCheck className="text-primary w-10 h-10" /> Problems We Solve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.problems.map((p: string, i: number) => (
                  <GlassCard key={i} className="flex items-center gap-4 p-5 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 transition-colors" hoverable={false}>
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-bold text-lg">{p}</span>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold flex items-center gap-4 tracking-tight">
                <Hammer className="text-primary w-10 h-10" /> Professional Process
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-primary/50 to-transparent" />
                {data.steps.map((s: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 items-start relative z-10"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-primary/20">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-2xl mb-2">{s}</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Strict adherence to Ontario Plumbing Code and Mississauga local bylaws. Guaranteed professional standard.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-10 border-primary/20 backdrop-blur-3xl rounded-[2.5rem] shadow-glass">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <HelpCircle className="text-primary w-8 h-8" /> Service FAQs
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {data.faqs.map((faq: any, i: number) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                      <AccordionTrigger className="text-left font-bold py-5 text-xl hover:text-primary hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-4xl bg-primary/10 p-10 border border-primary/20 flex flex-col items-center text-center space-y-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <Clock className="w-16 h-16 text-primary relative z-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-3xl">Need Priority Help?</h4>
                <p className="text-muted-foreground text-lg italic">Our dispatchers are active in your area now.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button onClick={() => setIsBookingOpen(true)} className="flex-1 btn-premium h-14 rounded-xl text-lg">
                  Book Priority
                </Button>
                <a href="tel:6475504003" className="flex-1">
                  <Button variant="outline" className="w-full h-14 rounded-xl border-primary/40 text-primary hover:bg-primary/10 text-lg gap-2">
                    <Phone className="w-5 h-5" /> Call Dispatch
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}