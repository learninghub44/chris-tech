import React from 'react';
import { Link } from 'wouter';
import { Check, X, Shield, Zap, Clock, Rocket, Crown, Gem, Globe, Mail as MailIcon, RefreshCw, LifeBuoy, GraduationCap, HeartPulse, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';

export default function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      icon: <Rocket className="w-6 h-6" />,
      price: "KSh 8,000",
      description: "Perfect for small businesses and freelancers establishing an online presence.",
      features: [
        "1-3 Pages Professional Design",
        "Mobile Responsive",
        "Contact Form Integration",
        "Basic SEO Setup",
        "Social Media Links",
        "1 Month Free Support"
      ],
      missing: ["CMS/Blog", "E-commerce Capabilities", "Custom User Accounts"],
      popular: false
    },
    {
      name: "Business Website",
      icon: <Gem className="w-6 h-6" />,
      price: "KSh 15,000",
      description: "Ideal for growing companies needing a strong corporate identity and lead generation.",
      features: [
        "Up to 10 Pages",
        "Premium UI/UX Design",
        "CMS (Blog) Integration",
        "Advanced SEO & Analytics",
        "WhatsApp Live Chat",
        "Google Maps Integration",
        "3 Months Free Support"
      ],
      missing: ["E-commerce Capabilities", "Complex Custom Workflows"],
      popular: true
    },
    {
      name: "Corporate / E-commerce",
      icon: <Crown className="w-6 h-6" />,
      price: "KSh 35,000",
      description: "Full-scale digital platforms for enterprises and online stores.",
      features: [
        "Unlimited Pages / Products",
        "M-Pesa & Card Payment Integration",
        "Inventory Management",
        "User Accounts & Dashboard",
        "Order Tracking System",
        "Advanced Security (WAF)",
        "Premium Speed Optimization",
        "6 Months Free Support"
      ],
      missing: [],
      popular: false
    }
  ];

  const hostingPlans = [
    {
      name: "Basic Hosting",
      price: "KSh 1,500",
      period: "/ month",
      features: ["1 Website", "5 GB SSD Storage", "Free SSL Certificate", "1 Business Email", "99.9% Uptime SLA", "Daily Backups"]
    },
    {
      name: "Pro Hosting",
      price: "KSh 3,000",
      period: "/ month",
      features: ["Up to 3 Websites", "20 GB SSD Storage", "Free SSL Certificate", "5 Business Emails", "99.9% Uptime SLA", "Daily Backups", "Priority Support"]
    },
    {
      name: "Business Hosting",
      price: "KSh 6,000",
      period: "/ month",
      features: ["Unlimited Websites", "50 GB SSD Storage", "Free SSL Certificate", "Unlimited Business Emails", "99.9% Uptime SLA", "Daily Backups + Cloudflare WAF", "24/7 Priority Support"]
    }
  ];

  const systems = [
    { icon: <GraduationCap className="w-6 h-6" />, name: "School Management System", price: "From KSh 60,000", desc: "Student records, fee tracking, grading, parent portal." },
    { icon: <HeartPulse className="w-6 h-6" />, name: "Hospital Management System", price: "From KSh 80,000", desc: "Patient records, billing, pharmacy inventory, appointments." },
    { icon: <Cog className="w-6 h-6" />, name: "Custom ERP/CRM", price: "From KSh 100,000", desc: "Bespoke operational software built to your exact workflow." }
  ];

  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-background pt-24 pb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">Transparent, Value-Driven Pricing</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No hidden fees. No surprise charges. High-quality engineering at prices that make sense for growing Kenyan businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <AnimatedSection className="py-10 bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 border ${plan.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-slate-200 dark:border-slate-800 shadow-lg'} h-full flex flex-col`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                    <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-500">From</span>
                      <span className="text-4xl font-black text-foreground">{plan.price}</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.missing.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-slate-400 shrink-0" />
                        <span className="text-slate-500 text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className={`w-full py-6 rounded-xl text-base ${plan.popular ? '' : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700'}`}>
                    <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Custom Systems & Software</h2>
              <p className="text-slate-600 dark:text-slate-400">Enterprise-grade solutions requiring advanced architecture and database design.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {systems.map((sys, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:border-accent transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    {sys.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{sys.name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{sys.desc}</p>
                  <p className="text-xl font-black text-primary">{sys.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button asChild variant="outline" size="lg" className="rounded-full">
               <Link href="/contact?service=software">
                 Request Custom System Quote
               </Link>
             </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-50 dark:bg-background border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center mb-12">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Hosting & Maintenance Plans</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Keep your site online, secure, and fast with a monthly hosting plan — SSL, backups, and business email included.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {hostingPlans.map((plan, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all h-full flex flex-col">
                  <h4 className="font-display font-bold text-xl mb-1 text-foreground">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-black text-primary">{plan.price}</span>
                    <span className="text-sm text-slate-500">{plan.period}</span>
                  </div>
                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-success shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-xl">
                    <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>Choose Plan</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="grid sm:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center gap-2">
                <MailIcon className="w-6 h-6 text-primary" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Free business email setup on every plan</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RefreshCw className="w-6 h-6 text-primary" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Automatic daily backups & renewals</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LifeBuoy className="w-6 h-6 text-primary" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Real support via WhatsApp & email</span>
              </div>
            </div>
          </Reveal>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-2">Secure by Default</h4>
                <p className="text-slate-400 text-sm">Every plan includes SSL, Cloudflare proxy, and enterprise-grade security headers.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <Zap className="w-12 h-12 text-amber-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">Blazing Fast</h4>
                <p className="text-slate-400 text-sm">Deployed on global CDNs. We optimize every image and script for 95+ Lighthouse scores.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-12 h-12 text-emerald-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">Long-Term Support</h4>
                <p className="text-slate-400 text-sm">We don't disappear after launch. We offer affordable maintenance packages to keep you online.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}