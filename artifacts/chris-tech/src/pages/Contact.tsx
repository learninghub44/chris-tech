import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';
import { whatsappLink } from '@/components/layout/WhatsAppButton';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, this would send an API request
    console.log("Form values:", values);
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for reaching out! A Chris Tech engineer will contact you shortly.",
    });
    form.reset();
  };

  return (
    <PageTransition>
      <section className="bg-secondary text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Let's Build Something Great</h1>
            <p className="text-lg text-slate-300">
              Whether you need a new enterprise website, a custom software solution, or a consultation, our team is ready to help you scale.
            </p>
          </Reveal>
        </div>
      </section>

      <AnimatedSection className="py-0 -mt-16 bg-transparent relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Reveal>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl h-full">
                  <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Contact Info</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-500 mb-1">Email Us</h4>
                        <a href="mailto:hello@christech.co.ke" className="text-foreground font-medium hover:text-primary transition-colors block">hello@christech.co.ke</a>
                        <a href="mailto:sales@christech.co.ke" className="text-foreground font-medium hover:text-primary transition-colors block">sales@christech.co.ke</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-500 mb-1">Call or WhatsApp</h4>
                        <a href="tel:+254701059192" className="text-foreground font-medium hover:text-accent transition-colors block">+254 701 059 192</a>
                        <p className="text-xs text-slate-500 mt-1">Mon-Fri, 8am-5pm EAT</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-500 mb-1">Location</h4>
                        <p className="text-foreground font-medium">Nairobi, Kenya</p>
                        <p className="text-xs text-slate-500 mt-1">Remote operations worldwide</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <Button asChild variant="outline" className="w-full gap-2 border-accent text-accent hover:bg-accent hover:text-secondary">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="w-4 h-4" /> Start WhatsApp Chat
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Reveal delay={0.2}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl">
                  <h3 className="text-2xl font-display font-bold mb-8 text-foreground">Request a Quote</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-slate-50 dark:bg-slate-800/50 h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company / Organization</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Inc." className="bg-slate-50 dark:bg-slate-800/50 h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" className="bg-slate-50 dark:bg-slate-800/50 h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="+254 700 000 000" className="bg-slate-50 dark:bg-slate-800/50 h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Interested In <span className="text-red-500">*</span></FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-50 dark:bg-slate-800/50 h-12">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="web-dev">Website Development</SelectItem>
                                  <SelectItem value="software">Custom Software/ERP</SelectItem>
                                  <SelectItem value="ai">AI Solutions & Automation</SelectItem>
                                  <SelectItem value="mobile">Mobile App Development</SelectItem>
                                  <SelectItem value="seo">SEO & Digital Marketing</SelectItem>
                                  <SelectItem value="academy">Chris Tech Academy</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estimated Budget <span className="text-red-500">*</span></FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-50 dark:bg-slate-800/50 h-12">
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="<15k">Under KSh 15,000</SelectItem>
                                  <SelectItem value="15k-35k">KSh 15,000 - KSh 35,000</SelectItem>
                                  <SelectItem value="35k-80k">KSh 35,000 - KSh 80,000</SelectItem>
                                  <SelectItem value="80k-150k">KSh 80,000 - KSh 150,000</SelectItem>
                                  <SelectItem value=">150k">Over KSh 150,000</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your project, goals, and any specific requirements..." 
                                className="bg-slate-50 dark:bg-slate-800/50 min-h-[150px] resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full rounded-xl h-14 text-base shadow-lg shadow-primary/20 gap-2">
                        Send Message <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  </Form>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
