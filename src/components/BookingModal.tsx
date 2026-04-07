import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Clock, Loader2 } from "lucide-react";
const bookingSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid 10-digit phone number required"),
  email: z.string().email("Invalid email address format"),
  serviceType: z.string().min(1, "Please select a service category"),
  isEmergency: z.boolean(),
  preferredDate: z.string().optional(),
});
type BookingValues = z.infer<typeof bookingSchema>;
interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      isEmergency: false,
      preferredDate: "",
    },
  });
  const isEmergency = form.watch("isEmergency");
  async function onSubmit(data: BookingValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Booking Dispatch:", data);
    toast.success("Request Successfully Dispatched!", {
      description: data.isEmergency
        ? "Priority alert sent. A technician will call you in less than 5 minutes."
        : "Booking request confirmed. Our scheduling team will reach out shortly.",
      duration: 6000,
    });
    setIsSubmitting(false);
    onOpenChange(false);
    form.reset();
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] glass-panel border-white/20 text-foreground backdrop-blur-2xl p-0 overflow-hidden rounded-[2rem]">
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold tracking-tight">Professional Booking</DialogTitle>
            <DialogDescription className="text-muted-foreground text-lg leading-snug">
              Secure your appointment with Mississauga's top-rated plumbers.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-destructive/10 border border-destructive/20 shadow-inner group">
                <div className="space-y-0.5">
                  <FormLabel className="text-destructive font-black text-sm uppercase tracking-widest">Emergency Priority?</FormLabel>
                  <p className="text-xs text-muted-foreground/80 italic font-medium">Immediate 24/7 Response Available</p>
                </div>
                <FormField
                  control={form.control}
                  name="isEmergency"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-destructive scale-110"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {isEmergency && (
                <Alert className="bg-destructive border-none text-white animate-pulse rounded-xl py-3 px-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0" />
                    <AlertDescription className="font-black uppercase text-xs tracking-widest">
                      High Priority Dispatch Initiated
                    </AlertDescription>
                  </div>
                </Alert>
              )}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    </FormControl>
                    <FormMessage className="text-[#ff4d4d] font-bold" />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(647) ..." {...field} className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-primary transition-all" />
                      </FormControl>
                      <FormMessage className="text-[#ff4d4d] font-bold" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@email.com" {...field} className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-primary transition-all" />
                      </FormControl>
                      <FormMessage className="text-[#ff4d4d] font-bold" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Required Service</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-primary transition-all">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="glass-panel backdrop-blur-3xl rounded-xl border-white/20">
                        <SelectItem value="drain">Drain Cleaning & Jetting</SelectItem>
                        <SelectItem value="repair">Pipe & Leak Repair</SelectItem>
                        <SelectItem value="heater">Water Heater Install/Fix</SelectItem>
                        <SelectItem value="sump">Sump Pump Protection</SelectItem>
                        <SelectItem value="other">General Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[#ff4d4d] font-bold" />
                  </FormItem>
                )}
              />
              {!isEmergency && (
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Preferred Schedule</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-primary transition-all" />
                      </FormControl>
                      <FormMessage className="text-[#ff4d4d] font-bold" />
                    </FormItem>
                  )}
                />
              )}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "w-full h-14 rounded-2xl text-xl font-black transition-all shadow-xl",
                  isEmergency 
                    ? "bg-destructive hover:bg-destructive/90 shadow-destructive/20" 
                    : "btn-premium shadow-primary/20"
                )}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-6 h-6 animate-spin" /> Dispatching...
                  </div>
                ) : (
                  isEmergency ? "ALERT EMERGENCY TEAM" : "CONFIRM BOOKING"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}