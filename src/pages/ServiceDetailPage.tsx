import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Hammer, 
  DollarSign, 
  HelpCircle, 
  Phone, 
  MapPin, 
  ChevronRight,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BookingModal } from "@/components/BookingModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SERVICE_DATA } from "@/config/services-data";
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
      {/* Dynamic SEO Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl space-y-8"
          >
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-xs">
              <span className="w-8 h-[2px] bg-primary" /> Verified Service
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight leading-none">
              {data.title.split('Mississauga')[0]}
              <span className="text-primary block md:inline"> Mississauga</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
              {data.shortDesc}
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Button onClick={() => setIsBookingOpen(true)} className="btn-premium h-16 px-12 text-xl rounded-2xl group shadow-2xl">
                Book Service <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <DollarSign className="w-6 h-6 text-primary" />
                <span className="font-black text-xl">{data.pricingTeaser}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Left Column: Deep SEO Content */}
          <div className="lg:col-span-8 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none space-y-8"
            >
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6">Expert Service Overview</h2>
              {data.longContent.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold flex items-center gap-4 tracking-tight">
                <ShieldCheck className="text-primary w-8 h-8" /> Issues We Fix Daily
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.problemsList.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-bold">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="space-y-10">
              <h2 className="text-3xl font-bold flex items-center gap-4 tracking-tight">
                <Hammer className="text-primary w-8 h-8" /> The Pro Dispatch Process
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-white/10" />
                {data.processSteps.map((s, i) => (
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
                      <h4 className="font-black text-xl mb-1">{s}</h4>
                      <p className="text-muted-foreground text-base">
                        Strict adherence to Ontario Plumbing Code and Mississauga local bylaws. Every step is verified by our senior technicians.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Neighborhood Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 space-y-6"
            >
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <MapPin className="text-primary" /> Neighborhood Priority Units
              </h2>
              <p className="text-muted-foreground">
                We have dedicated service units stationed in the following Mississauga neighborhoods to ensure the fastest possible arrival times:
              </p>
              <div className="flex flex-wrap gap-3">
                {data.localKeywords.map((neighborhood, i) => (
                  <span key={i} className="px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-bold text-primary">
                    {neighborhood}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Right Column: Sticky Widgets */}
          <div className="lg:col-span-4 space-y-10">
            <div className="sticky top-28 space-y-10">
              <GlassCard className="p-8 border-primary/20 backdrop-blur-3xl rounded-[2rem] shadow-glass">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle className="text-primary w-6 h-6" /> Local FAQs
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {data.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                      <AccordionTrigger className="text-left font-bold py-4 hover:text-primary transition-colors hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GlassCard>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-[2rem] bg-destructive p-8 text-center space-y-6 shadow-2xl shadow-destructive/20"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <Info className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-2xl text-white">Emergency Now?</h4>
                  <p className="text-white/80 font-medium">Don't wait for water damage.</p>
                </div>
                <a href="tel:6475504003" className="block">
                  <Button className="w-full h-14 bg-white text-destructive hover:bg-white/90 font-black text-lg rounded-xl">
                    <Phone className="w-5 h-5 mr-2" /> (647) 550-4003
                  </Button>
                </a>
              </motion.div>
              <GlassCard className="p-8 border-white/10">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                   <Clock className="w-4 h-4 text-primary" /> Hours & Service
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Emergency Response</span>
                    <span className="text-primary font-bold">24/7</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Standard Service</span>
                    <span className="text-white">7AM - 9PM</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Local Coverage</span>
                    <span className="text-white">Mississauga/Peel</span>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
      <div className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Restore Your Peace of Mind?</h2>
          <Button onClick={() => setIsBookingOpen(true)} className="btn-premium h-16 px-16 text-xl rounded-2xl">
            Book My Appointment Now
          </Button>
        </div>
      </div>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}