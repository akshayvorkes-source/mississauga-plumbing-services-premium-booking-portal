import React from "react";
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
import { Clock } from "lucide-react";
const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address"),
  serviceType: z.string().min(1, "Please select a service"),
  isEmergency: z.boolean().default(false),
  preferredDate: z.string().optional(),
});
type BookingValues = z.infer<typeof bookingSchema>;
interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      isEmergency: false,
    },
  });
  const isEmergency = form.watch("isEmergency");
  async function onSubmit(data: BookingValues) {
    console.log("Booking Data:", data);
    toast.success("Request Sent!", {
      description: data.isEmergency 
        ? "Emergency dispatch initiated. We will call you in < 5 mins."
        : "Your booking request is confirmed. We'll contact you shortly.",
    });
    onOpenChange(false);
    form.reset();
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] glass-panel border-white/20 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book a Service</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Professional plumbing in Mississauga. Fill out the details below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="space-y-0.5">
                <FormLabel className="text-destructive font-bold">Emergency Request?</FormLabel>
                <p className="text-xs text-muted-foreground italic">24/7 Dispatch Available</p>
              </div>
              <FormField
                control={form.control}
                name="isEmergency"
                render={({ field }) => (
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-destructive"
                    />
                  </FormControl>
                )}
              />
            </div>
            {isEmergency && (
              <Alert className="bg-destructive/20 border-destructive/30 text-white animate-pulse">
                <Clock className="h-4 w-4 text-white" />
                <AlertDescription className="font-bold">
                  High Priority: Emergency plumbers dispatched immediately.
                </AlertDescription>
              </Alert>
            )}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(905) ..." {...field} className="bg-white/5 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} className="bg-white/5 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Required</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="glass-panel">
                      <SelectItem value="drain">Drain Cleaning</SelectItem>
                      <SelectItem value="repair">Pipe Repair</SelectItem>
                      <SelectItem value="heater">Water Heater</SelectItem>
                      <SelectItem value="leak">Leak Detection</SelectItem>
                      <SelectItem value="other">Other / Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isEmergency && (
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="bg-white/5 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Button type="submit" className={isEmergency ? "w-full bg-destructive hover:bg-destructive/90 h-12" : "w-full btn-premium h-12"}>
              {isEmergency ? "Request Emergency Dispatch" : "Confirm Booking"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}