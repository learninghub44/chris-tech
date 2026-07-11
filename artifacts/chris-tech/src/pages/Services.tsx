import React from 'react';
import { Link } from 'wouter';
import { Globe, Database, Bot, Smartphone, Cloud, LineChart, Code, Server, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';

export default function Services() {
  const services = [
    {
      id: "web-development",
      title: "Website Development",
      icon: <Globe className="w-8 h-8" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      intro: "We build high-performance, conversion-optimized websites that serve as the digital foundation for your business. From striking landing pages to complex e-commerce platforms, our sites are engineered for speed, SEO, and scalability.",
      benefits: ["Increases brand credibility and trust", "Drives organic traffic through SEO", "Provides a 24/7 sales engine for your business"],
      features: ["Custom UI/UX Design", "Responsive Mobile-First Build", "CMS Integration", "Performance Optimization", "Analytics Setup"],
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      price: "From KSh 8,000"
    },
    {
      id: "software",
      title: "Custom Software Development",
      icon: <Database className="w-8 h-8" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      intro: "Stop forcing your unique business processes into generic software. We develop bespoke web applications, ERPs, and management systems that align perfectly with how your team actually works.",
      benefits: ["Eliminates manual data entry", "Centralizes business operations", "Scales infinitely with your company"],
      features: ["School Management Systems", "Hospital ERPs", "POS & Inventory", "Custom Dashboards", "Role-based Access Control"],
      tech: ["Node.js", "PostgreSQL", "Supabase", "Prisma"],
      price: "From KSh 50,000"
    },
    {
      id: "ai-solutions",
      title: "AI Solutions & Automation",
      icon: <Bot className="w-8 h-8" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      intro: "Leverage the power of Artificial Intelligence to automate repetitive tasks, enhance customer support, and extract insights from your data. We integrate cutting-edge LLMs directly into your business workflows.",
      benefits: ["Reduces operational costs significantly", "Provides instant 24/7 customer support", "Accelerates content generation"],
      features: ["Custom AI Chatbots", "Workflow Automation", "AI Agents", "Document Processing (OCR)", "WhatsApp AI Integration"],
      tech: ["OpenAI API", "LangChain", "Vector Databases"],
      price: "Custom Quote"
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      intro: "Put your business directly in your customers' pockets. We design and build intuitive, fast, and native-feeling mobile applications for both Android and iOS platforms.",
      benefits: ["Increases customer engagement and retention", "Enables push notification marketing", "Provides offline capabilities"],
      features: ["Cross-platform Development", "Native API Integration", "Offline Sync", "In-App Purchases", "Push Notifications"],
      tech: ["React Native", "Flutter", "Firebase"],
      price: "Custom Quote"
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure Services",
      icon: <Cloud className="w-8 h-8" />,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
      intro: "Ensure your digital assets are secure, blazing fast, and always online. We handle complex cloud deployments, security configurations, and enterprise email setups.",
      benefits: ["Guarantees 99.9% uptime", "Protects against cyber attacks", "Professionalizes communication with business emails"],
      features: ["Cloudflare CDN & WAF Setup", "Business Email Hosting", "SSL Installation", "Server Migration", "Automated Backups"],
      tech: ["Cloudflare", "AWS", "Linux", "Docker"],
      price: "From KSh 5,000"
    },
    {
      id: "seo",
      title: "SEO & Digital Marketing",
      icon: <LineChart className="w-8 h-8" />,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      intro: "A beautiful website is useless if no one can find it. Our data-driven SEO and performance marketing strategies ensure your business ranks at the top of Google for keywords that matter.",
      benefits: ["Generates free, passive organic traffic", "Outranks local competitors", "Improves conversion rates"],
      features: ["Technical SEO Audits", "Keyword Strategy", "Google Business Setup", "Performance Analytics", "Speed Optimization"],
      tech: ["Google Analytics 4", "Search Console", "Ahrefs"],
      price: "From KSh 15,000/mo"
    }
  ];

  return (
    <PageTransition>
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive digital solutions engineered to automate operations, engage customers, and scale your business.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="py-20 bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} id={service.id} className="py-0 md:py-0">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Reveal>
                      <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6`}>
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">{service.title}</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        {service.intro}
                      </p>
                      
                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Key Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${service.color}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                        <Button asChild size="lg" className="rounded-full shadow-md">
                          <Link href={`/contact?service=${service.id}`}>
                            Request Quote
                          </Link>
                        </Button>
                        <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                          {service.price}
                        </span>
                      </div>
                    </Reveal>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Reveal delay={0.2}>
                      <div className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
                        <h4 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                          <Server className="w-5 h-5 text-slate-400" /> Included Features
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
                              <span className="font-medium text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <h4 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5 text-slate-400" /> Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-background border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-foreground">Our Development Process</h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-0.5 bg-slate-200 dark:bg-slate-800 z-0"></div>
            
            {[
              { step: "01", title: "Consultation", desc: "We analyze your requirements and business goals." },
              { step: "02", title: "Planning & Design", desc: "Creating UI/UX mockups and architecture architecture." },
              { step: "03", title: "Development", desc: "Agile engineering with regular progress updates." },
              { step: "04", title: "Deployment", desc: "Rigorous testing and seamless production launch." }
            ].map((process, i) => (
              <Reveal key={i} delay={i * 0.1} className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-primary text-primary flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{process.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{process.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need a custom solution not listed here?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">We build custom enterprise software tailored specifically to unique workflows.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 h-14 text-base shadow-xl">
            <Link href="/contact">
              Talk to an Engineer
            </Link>
          </Button>
        </Reveal>
      </section>
    </PageTransition>
  );
}