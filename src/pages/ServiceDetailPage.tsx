import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Hammer, DollarSign, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BookingModal } from "@/components/BookingModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const SERVICE_DATA: Record<string, any> = {
  "drain-cleaning": {
    title: "Expert Drain Cleaning Mississauga",
    hero: "https://images.unsplash.com/photo-1504148455328-497c5efdf156?auto=format&fit=crop&q=80&w=2000",
    description: "Professional snaking, hydro-jetting, and camera inspections for stubborn clogs in Mississauga homes.",
    problems: ["Slow draining sinks", "Main line backups", "Gurgling toilets", "Foul drain odors"],
    steps: ["CCTV Inspection", "Blockage Removal", "Line Flushing", "Final Testing"],
    pricing: "Starting from $99",
    faqs: [
      { q: "How often should I clean my drains?", a: "For Mississauga homes, we recommend a professional cleaning every 18-24 months." },
      { q: "Is hydro-jetting safe for old pipes?", a: "Our master plumbers assess pipe integrity before using high-pressure equipment." }
    ]
  },
  "pipe-repair": {
    title: "Precision Pipe Repair & Repiping",
    hero: "https://images.unsplash.com/photo-1585704032915-c3400ca1f965?auto=format&fit=crop&q=80&w=2000",
    description: "Emergency leak repair and full copper or PEX repiping services with 10-year warranties.",
    problems: ["Burst copper pipes", "Corroded plumbing", "Pin-hole leaks", "Noisy 'Water Hammer'"],
    steps: ["Leak Localization", "Precision Cut", "Section Replacement", "Pressure Check"],
    pricing: "Starting from $149",
    faqs: [
      { q: "Do you offer emergency pipe repair?", a: "Yes, we have 24/7 emergency dispatch units across Mississauga." },
      { q: "Can you fix polybutylene pipes?", a: "We specialize in replacing outdated polybutylene with modern PEX systems." }
    ]
  }
};
export function ServiceDetailPage() {
  const { slug } = useParams();
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const data = slug ? SERVICE_DATA[slug] : null;
  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Button asChild><a href="/services">View All Services</a></Button>
      </div>
    );
  }
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.hero} alt={data.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-display">{data.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{data.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => setIsBookingOpen(true)} className="btn-premium h-14 px-10 text-lg">
                Book This Service
              </Button>
              <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="font-bold">{data.pricing}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-primary" /> Common Problems We Solve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.problems.map((p: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Hammer className="text-primary" /> Our Professional Process
              </h2>
              <div className="space-y-4">
                {data.steps.map((s: string, i: number) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{s}</h4>
                      <p className="text-sm text-muted-foreground">Certified technician procedure following Mississauga code.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <GlassCard className="p-8 border-primary/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary" /> Service FAQs
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {data.faqs.map((faq: any, i: number) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                    <AccordionTrigger className="text-left font-bold py-4 hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
            <div className="rounded-3xl bg-primary/10 p-8 border border-primary/20 flex flex-col sm:flex-row items-center gap-6">
              <Clock className="w-12 h-12 text-primary" />
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-xl">Need Priority Help?</h4>
                <p className="text-muted-foreground italic">24/7 emergency dispatch available in your area.</p>
              </div>
              <Button onClick={() => setIsBookingOpen(true)} variant="outline" className="ml-auto border-primary/40 text-primary hover:bg-primary/10">
                Contact Dispatch
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}