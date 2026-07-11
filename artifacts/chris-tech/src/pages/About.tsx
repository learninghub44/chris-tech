import React from 'react';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">About Chris Tech</h1>
            <p className="text-xl text-slate-300">
              We are a premier technology company based in Kenya, driven by a singular mission: to empower businesses through innovative digital transformation.
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
                Founded on the belief that world-class technology should be accessible to growing businesses in East Africa, Chris Tech has grown from a boutique web design agency into a full-service enterprise software firm.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Too many businesses struggle with generic software that doesn't fit their workflows, or poorly built websites that fail to convert visitors. We recognized a gap in the market for a technology partner that combines high-end engineering talent with deep business understanding.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Today, we build everything from high-converting marketing sites to complex hospital ERPs and AI-driven automation systems. Our development philosophy is simple: write clean, maintainable code, focus obsessively on user experience, and build systems that actually move the needle on our clients' revenue.
              </p>
            </Reveal>
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
    </PageTransition>
  );
}
