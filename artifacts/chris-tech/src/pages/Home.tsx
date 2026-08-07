import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Code, Bot, Cloud, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const services = [
  {
    href: '/services#web-development',
    image: '/illustrations/web-development.svg',
    title: 'Web Development',
    hoverClass: 'hover:bg-primary',
    desc: 'High-performance corporate websites, e-commerce stores, and landing pages optimized for speed, SEO, and conversion.',
    items: ['Business Websites', 'E-commerce Platforms', 'Portfolio Sites'],
    iconClass: 'text-primary',
  },
  {
    href: '/services#software',
    image: '/illustrations/custom-software.svg',
    title: 'Custom Software',
    hoverClass: 'hover:bg-accent',
    desc: 'Bespoke management systems built precisely for your workflow. No more fighting with generic SaaS tools.',
    items: ['School Management', 'Hospital ERPs', 'POS Systems'],
    iconClass: 'text-accent',
  },
  {
    href: '/services#ai-solutions',
    image: '/illustrations/ai-solutions.svg',
    title: 'AI Solutions',
    hoverClass: 'hover:bg-indigo-500',
    desc: 'Automate repetitive tasks and improve customer service with custom AI chatbots and workflow automation.',
    items: ['Customer Support Bots', 'Workflow Automation', 'AI Agents'],
    iconClass: 'text-indigo-500',
  },
];

function ServicesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!api) return;
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: 'start' }}
      className="w-full"
      onMouseEnter={() => clearInterval(autoplayRef.current)}
      onMouseLeave={() => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => api?.scrollNext(), 3000);
      }}
    >
      <CarouselContent>
        {services.map((service, i) => (
          <CarouselItem key={service.title} className="sm:basis-1/2 lg:basis-1/3">
            <Reveal delay={0.1 * i}>
              <div className={`bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl ${service.hoverClass} transition-all duration-300 border border-slate-100 dark:border-slate-800 group h-full flex flex-col`}>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-white/95 transition-colors duration-300 mb-6 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-36 object-contain p-2" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-white transition-colors duration-300">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/90 mb-6 flex-1 transition-colors duration-300">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 group-hover:text-white/90 transition-colors duration-300">
                      <CheckCircle2 className={`w-4 h-4 ${service.iconClass} group-hover:text-white transition-colors duration-300`} /> {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" className="w-full group/btn group-hover:text-white group-hover:hover:bg-white/15 transition-colors duration-300">
                  <Link href={service.href}>
                    Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function Home() {
  return (
    <PageTransition className="pt-0 pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 bg-mesh opacity-60"></div>
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 text-foreground tracking-tight">
                  Building Modern <br/>
                  <span className="text-gradient">Digital Solutions</span> <br/>
                  for Growing Businesses.
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
                  We empower organizations through innovative enterprise websites, custom software, and AI integrations that drive measurable growth.
                </p>
              </Reveal>
              
              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button asChild size="lg" className="rounded-full px-8 h-14 text-base gap-2 shadow-lg shadow-primary/25 group">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Link href="/portfolio">
                      View Portfolio
                    </Link>
                  </Button>
                </div>
              </Reveal>
              
            </div>
            
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <Reveal delay={0.2} className="w-full h-full">
                <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[600px]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square">
                    <div className="absolute inset-0 glass-card rounded-2xl shadow-2xl overflow-hidden border-t border-l border-white/40 dark:border-slate-700/50 flex flex-col z-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                      <div className="h-12 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center px-4 gap-2 bg-slate-50/50 dark:bg-slate-800/50">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="mx-auto bg-white/60 dark:bg-slate-900/60 h-6 w-1/2 rounded-md shadow-inner border border-slate-200 dark:border-slate-700"></div>
                      </div>
                      <div className="flex-1 p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                            <div className="h-8 w-32 bg-primary/20 dark:bg-primary/30 rounded"></div>
                          </div>
                          <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-accent -rotate-45" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-12 top-20 w-48 glass-card p-4 rounded-xl shadow-xl z-30 animate-[bounce_6s_infinite] border border-white/50">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="w-4 h-4 text-primary" />
                        <span className="text-xs font-mono font-bold">app.tsx</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                        <div className="h-2 w-4/5 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        <div className="h-2 w-3/5 bg-primary/40 rounded"></div>
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                      </div>
                    </div>

                    <div className="absolute -right-8 bottom-24 w-56 glass-card p-4 rounded-xl shadow-xl z-30 animate-[bounce_7s_infinite_reverse] border border-white/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">AI Integration</p>
                          <p className="text-xs text-green-500 font-medium">Status: Active</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-slate-500 mb-8">POWERED BY INDUSTRY LEADING TECHNOLOGIES</p>
        </div>
        <div className="relative flex overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {[0, 1].map((dupe) => (
            <div key={dupe} aria-hidden={dupe === 1} className="flex shrink-0 items-center gap-16 px-8 animate-[marquee_22s_linear_infinite]">
              {['React', 'Next.js', 'Node.js', 'Supabase', 'Cloudflare', 'PostgreSQL'].map((tech) => (
                <div key={tech} className="text-xl font-display font-bold text-slate-800 dark:text-slate-300 whitespace-nowrap">
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <AnimatedSection className="bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Services</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
                End-to-End Digital Solutions
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                From simple landing pages to complex enterprise AI systems, we have the technical expertise to build what your business needs to scale.
              </p>
            </Reveal>
          </div>

          <ServicesCarousel />
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full shadow-md">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Expertise highlights */}
      <AnimatedSection className="bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
                Unmatched Technical Expertise with Years of Experience
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                From website and software development to AI integrations and cloud infrastructure, we deliver results-driven engineering to help your business grow.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'Web Development',
                  'Custom Software',
                  'AI & Automation',
                  'Cloud & Hosting',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm font-semibold text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Cloud, label: 'Global Reach' },
                  { icon: CheckCircle2, label: '24/7 Support' },
                  { icon: Star, label: 'Customer-Centric' },
                  { icon: Code, label: 'Award-Winning Team' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm text-center flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us — numbered cards, matches jrmhd.tech's "01 / 02 / 03" layout */}
      <AnimatedSection className="bg-slate-50 dark:bg-slate-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
                Why Our Clients Trust Us
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                We deliver exceptional digital solutions by leveraging the latest technologies and maintaining a customer-centric approach.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Cutting-Edge Technologies', desc: 'We use the latest tools and frameworks so your product stays ahead of the competition.' },
              { num: '02', title: 'Customized Solutions', desc: 'Every build is tailor-made to your workflow, not a bolted-together template.' },
              { num: '03', title: 'Transparent, Reliable Delivery', desc: 'Clear pricing, agile milestones, and long-term support after launch.' },
            ].map((item, i) => (
              <Reveal key={item.num} delay={0.1 * i}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 h-full">
                  <span className="block text-5xl font-display font-extrabold text-primary/15 mb-2">{item.num}</span>
                  <h4 className="text-xl font-display font-bold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Why Chris Tech</h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  We don't just write code.<br />We build businesses.
                </h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Choosing a technology partner is a critical business decision. At Chris Tech, we combine engineering excellence with deep business acumen to deliver solutions that actually impact your bottom line.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Modern Tech Stack", desc: "Built on React, Next.js, and Cloudflare for maximum speed and security." },
                  { title: "Transparent Pricing", desc: "No hidden fees. You know exactly what you're paying for." },
                  { title: "Fast Delivery", desc: "Agile methodologies ensure your product ships on schedule." },
                  { title: "Long-term Support", desc: "We maintain and update your systems long after deployment." }
                ].map((feature, i) => (
                  <Reveal key={i} delay={0.1 * i}>
                    <div className="flex flex-col gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="relative">
              <Reveal delay={0.2}>
                <div className="glass-card bg-slate-900/60 border-slate-700 p-8 rounded-2xl shadow-2xl">
                  <h3 className="text-2xl font-display font-bold mb-6">Request a Free Consultation</h3>
                  <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Name</label>
                        <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email</label>
                        <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Project Type</label>
                      <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                        <option>Website Development</option>
                        <option>Custom Software</option>
                        <option>AI Solutions</option>
                        <option>Cloud & Hosting</option>
                      </select>
                    </div>
                    <Button className="w-full py-6 text-base mt-2 shadow-lg shadow-primary/20">
                      Get My Free Proposal
                    </Button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-secondary/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join hundreds of businesses growing faster with Chris Tech digital solutions. Let's discuss your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 h-14 text-base font-bold shadow-xl">
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-full px-8 h-14 text-base bg-transparent">
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}