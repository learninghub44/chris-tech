import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';

export default function Portfolio() {
  const projects = [
    {
      title: "FinTech Dashboard Platform",
      category: "Custom Software",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      desc: "A comprehensive analytics dashboard for a regional financial institution, handling real-time transaction data and automated reporting.",
      tags: ["React", "Node.js", "PostgreSQL", "Recharts"]
    },
    {
      title: "Modern E-Commerce Store",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1964",
      desc: "High-conversion storefront for a premium fashion brand featuring M-Pesa integration, dynamic inventory, and a headless CMS architecture.",
      tags: ["Next.js", "Stripe", "Tailwind", "Supabase"]
    },
    {
      title: "Healthcare Management ERP",
      category: "Custom Software",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
      desc: "Secure patient record and billing system connecting 3 hospital branches. Includes role-based access and pharmacy inventory tracking.",
      tags: ["React", "Express", "Prisma", "Docker"]
    },
    {
      title: "AI Customer Support Agent",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
      desc: "Custom LLM trained on company documentation to handle level 1 support tickets across website chat and WhatsApp, reducing ticket load by 60%.",
      tags: ["OpenAI", "Python", "Vector DB", "WhatsApp API"]
    },
    {
      title: "Real Estate Property Portal",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
      desc: "Property listing platform with interactive maps, virtual tours, and a robust admin panel for agents to manage listings and leads.",
      tags: ["Next.js", "Google Maps API", "Cloudflare"]
    },
    {
      title: "School Management App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
      desc: "Parent-teacher communication app featuring real-time grade tracking, attendance notifications, and secure fee payment gateways.",
      tags: ["React Native", "Firebase", "Node.js"]
    }
  ];

  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">Our Portfolio</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explore our recent work. We build scalable digital products that solve real business problems across East Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <AnimatedSection className="py-12 bg-slate-50 dark:bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
