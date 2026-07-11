import React from 'react';
import { motion } from 'framer-motion';
import {
  Target, Lightbulb, Users, ShieldCheck, Globe2, Headphones, Award, HeartHandshake,
  Sparkles, Layers, TrendingUp, Code2, Smartphone, Palette, Server, Megaphone
} from 'lucide-react';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';

const stats = [
  { icon: <Globe2 className="w-7 h-7" />, title: "Nationwide Reach", desc: "Clients across Nairobi, Kisii, Mombasa & beyond" },
  { icon: <Headphones className="w-7 h-7" />, title: "Fast Support", desc: "Real humans on WhatsApp and email, same day" },
  { icon: <HeartHandshake className="w-7 h-7" />, title: "Customer-Centric", desc: "We build around your workflow, not a template" },
  { icon: <Award className="w-7 h-7" />, title: "Proven Delivery", desc: "Dozens of live platforms shipped and maintained" },
];

const expertise = [
  { icon: <Code2 className="w-5 h-5" />, label: "Web Development", value: 95 },
  { icon: <Server className="w-5 h-5" />, label: "Custom Software & ERPs", value: 90 },
  { icon: <Sparkles className="w-5 h-5" />, label: "AI Solutions & Automation", value: 88 },
  { icon: <Smartphone className="w-5 h-5" />, label: "Mobile App Development", value: 82 },
  { icon: <Palette className="w-5 h-5" />, label: "UI/UX Design", value: 85 },
  { icon: <Megaphone className="w-5 h-5" />, label: "SEO & Digital Marketing", value: 80 },
];

const whyUs = [
  {
    num: "01",
    icon: <Layers className="w-6 h-6" />,
    title: "Cutting-Edge Technologies",
    desc: "We build on modern, battle-tested stacks — React, Next.js, Node.js, and cloud-native infrastructure — so your platform stays fast, secure, and easy to extend."
  },
  {
    num: "02",
    icon: <Target className="w-6 h-6" />,
    title: "Customized Solutions",
    desc: "No cookie-cutter templates. Every engagement starts with understanding your workflow — from M-Pesa payment flows to CBC curriculum compliance — before we write a line of code."
  },
  {
    num: "03",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Strategic, Local Expertise",
    desc: "Deep familiarity with the Kenyan and East African market means what we ship actually converts — real payment rails, real hosting realities, real user behavior."
  },
];

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              About Chris Tech
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Transforming Businesses with Practical Technology</h1>
            <p className="text-xl text-slate-300">
              We are a premier technology company based in Kenya, driven by a singular mission: to empower growing businesses through websites, software, and AI that actually move the needle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <AnimatedSection className="bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Reveal>
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">Our Story & Philosophy</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Founded on the belief that world-class technology should be accessible to growing businesses in East Africa, Chris Tech has grown from a boutique web design practice into a full-service digital partner — building websites, custom software, and AI-driven systems for clients across Kenya and beyond.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Too many businesses struggle with generic software that doesn't fit their workflows, or poorly built websites that fail to convert visitors. We recognized a gap in the market for a technology partner that combines strong engineering with genuine local business understanding — M-Pesa payments that actually work, CBC-compliant school systems, and platforms designed for the realities of the Kenyan market.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Today, we build everything from high-converting marketing sites and e-commerce stores to trading platforms, hospital and school management systems, and AI-driven automation. Our philosophy is simple: write clean, maintainable code, focus obsessively on user experience, and build systems that move your business forward — not just look good in a demo.
              </p>
            </Reveal>
          </div>
        </div>
      </AnimatedSection>

      {/* Trust / Stats bar */}
      <AnimatedSection className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-accent">
                    {s.icon}
                  </div>
                  <h4 className="font-bold text-base">{s.title}</h4>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl font-display font-bold text-foreground">Our Core Values</h2>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8"/>, title: "Impact Over Output", desc: "We don't just ship features. We ship solutions that solve specific business problems." },
              { icon: <Lightbulb className="w-8 h-8"/>, title: "Continuous Innovation", desc: "We constantly research and adopt the latest proven technologies, like edge computing and AI." },
              { icon: <Users className="w-8 h-8"/>, title: "Customer Obsession", desc: "Your success is our success. We prioritize transparent communication and long-term partnerships." },
              { icon: <ShieldCheck className="w-8 h-8"/>, title: "Engineering Excellence", desc: "We never cut corners on security, performance, or code quality. We build things to last." }
            ].map((val, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-foreground">{val.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Expertise bars */}
      <AnimatedSection className="bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Unmatched Technical Expertise</h2>
              <p className="text-slate-600 dark:text-slate-400">Years of hands-on delivery across the full stack, tailored to real business needs.</p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {expertise.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <span className="text-primary">{e.icon}</span>
                      {e.label}
                    </div>
                    <span className="text-sm font-bold text-primary">{e.value}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${e.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why choose us */}
      <AnimatedSection className="bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Why Our Clients Trust Us</h2>
              <p className="text-slate-600 dark:text-slate-400">We combine the latest technology with a customer-centric approach to deliver results that matter.</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-4xl font-black text-primary/20">{item.num}</span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-foreground">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
