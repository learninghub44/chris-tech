import React from 'react';
import { Link } from 'wouter';
import { Code, Server, Shield, CheckCircle2, ArrowRight, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';
import { whatsappLink } from '@/components/layout/WhatsAppButton';

const PHONE_NUMBER = '+254701059192';
const CONTACT_EMAIL = 'hello@christech.co.ke';

export default function Services() {
  const services = [
    {
      id: "web-development",
      illustration: "/illustrations/web-development.svg",
      title: "Website Development",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      intro: "We build high-performance, conversion-optimized websites that serve as the digital foundation for your business. From striking landing pages to complex e-commerce platforms, our sites are engineered for speed, SEO, and scalability.",
      benefits: ["Increases brand credibility and trust", "Drives organic traffic through SEO", "Provides a 24/7 sales engine for your business"],
      features: ["Custom UI/UX Design", "Responsive Mobile-First Build", "CMS Integration", "Performance Optimization", "Analytics Setup"],
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    },
    {
      id: "software",
      illustration: "/illustrations/custom-software.svg",
      title: "Custom Software Development",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      intro: "Stop forcing your unique business processes into generic software. We develop bespoke web applications, ERPs, and management systems that align perfectly with how your team actually works.",
      benefits: ["Eliminates manual data entry", "Centralizes business operations", "Scales infinitely with your company"],
      features: ["School Management Systems", "Hospital ERPs", "POS & Inventory", "Custom Dashboards", "Role-based Access Control"],
      tech: ["Node.js", "PostgreSQL", "Supabase", "Prisma"],
    },
    {
      id: "ai-solutions",
      illustration: "/illustrations/ai-solutions.svg",
      title: "AI Solutions & Automation",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      intro: "Leverage the power of Artificial Intelligence to automate repetitive tasks, enhance customer support, and extract insights from your data. We integrate cutting-edge LLMs directly into your business workflows.",
      benefits: ["Reduces operational costs significantly", "Provides instant 24/7 customer support", "Accelerates content generation"],
      features: ["Custom AI Chatbots", "Workflow Automation", "AI Agents", "Document Processing (OCR)", "WhatsApp AI Integration"],
      tech: ["OpenAI API", "LangChain", "Vector Databases"],
    },
    {
      id: "cloud",
      illustration: "/illustrations/cloud-infrastructure.svg",
      title: "Cloud & Infrastructure Services",
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
      intro: "Ensure your digital assets are secure, blazing fast, and always online. We handle complex cloud deployments, security configurations, and enterprise email setups.",
      benefits: ["Guarantees 99.9% uptime", "Protects against cyber attacks", "Professionalizes communication with business emails"],
      features: ["Cloudflare CDN & WAF Setup", "Business Email Hosting", "SSL Installation", "Server Migration", "Automated Backups"],
      tech: ["Cloudflare", "AWS", "Linux", "Docker"],
    },
    {
      id: "seo",
      illustration: "/illustrations/seo-marketing.svg",
      title: "SEO & Digital Marketing",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      intro: "A beautiful website is useless if no one can find it. Our data-driven SEO and performance marketing strategies ensure your business ranks at the top of Google for keywords that matter.",
      benefits: ["Generates free, passive organic traffic", "Outranks local competitors", "Improves conversion rates"],
      features: ["Technical SEO Audits", "Keyword Strategy", "Google Business Setup", "Performance Analytics", "Speed Optimization"],
      tech: ["Google Analytics 4", "Search Console", "Ahrefs"],
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
                      <div className={`w-20 h-20 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 overflow-hidden`}>
                        <img src={service.illustration} alt={service.title} className="w-full h-full object-contain p-1" />
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="lg" className="rounded-full shadow-md gap-2">
                              Contact Us <ChevronDown className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" className="w-56">
                            <DropdownMenuItem asChild className="gap-2 cursor-pointer">
                              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="w-4 h-4 text-[#25D366]" /> WhatsApp
                              </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="gap-2 cursor-pointer">
                              <a href={`tel:${PHONE_NUMBER}`}>
                                <Phone className="w-4 h-4 text-accent" /> Call Us
                              </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="gap-2 cursor-pointer">
                              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Inquiry: ${service.title}`)}&body=${encodeURIComponent(`Hi Chris Tech,\n\nI'd like to know more about your ${service.title} service.\n\n`)}`}>
                                <Mail className="w-4 h-4 text-primary" /> Email Us
                              </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="gap-2 cursor-pointer">
                              <Link href={`/contact?service=${service.id}`}>
                                <MessageCircle className="w-4 h-4 text-purple-500" /> Send Message
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </Reveal>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Reveal delay={0.2}>
                      <div className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300">
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
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">How We Work</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-16 text-foreground">Our Development Process</h3>
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