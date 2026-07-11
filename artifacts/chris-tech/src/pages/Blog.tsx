import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';

export default function Blog() {
  const articles = [
    {
      title: "Why Your Business Needs a Custom ERP in 2025",
      excerpt: "Stop forcing your team to use generic SaaS tools. Learn how a custom Enterprise Resource Planning system can save hundreds of hours per month.",
      category: "Software Development",
      date: "Jan 12, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
    },
    {
      title: "The Ultimate Guide to AI Automation for Kenyan SMEs",
      excerpt: "From WhatsApp chatbots to automated document processing, discover practical ways to integrate AI into your local business today.",
      category: "AI Solutions",
      date: "Feb 05, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070"
    },
    {
      title: "Next.js vs React: Which Should You Choose for Your Next Project?",
      excerpt: "A deep dive into the technical differences between building a standard React SPA and utilizing Next.js for server-side rendering and SEO.",
      category: "Web Development",
      date: "Mar 01, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070"
    },
    {
      title: "Securing Your E-commerce Store: Best Practices",
      excerpt: "Cyber threats are evolving. Learn the essential security headers, WAF configurations, and payment gateway protections every store needs.",
      category: "Cybersecurity",
      date: "Apr 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070"
    },
    {
      title: "Why Website Speed is Crucial for Conversion Rates",
      excerpt: "A 1-second delay in page load can cost you 7% of your conversions. Here's how we optimize websites to score 95+ on Google Lighthouse.",
      category: "SEO",
      date: "May 08, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
    },
    {
      title: "Starting a Career in Tech: The Chris Tech Academy Approach",
      excerpt: "University curriculums are falling behind. Why project-based, mentorship-driven learning is the fastest way to become a software engineer.",
      category: "Education",
      date: "Jun 22, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
    }
  ];

  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">Insights & Engineering</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Thoughts on software engineering, artificial intelligence, business growth, and technology trends from the Chris Tech team.
            </p>
          </Reveal>
        </div>
      </section>

      <AnimatedSection className="py-12 bg-slate-50 dark:bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" /> Admin
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">{article.readTime}</span>
                      <Button variant="ghost" className="p-0 text-primary hover:bg-transparent group/btn">
                        Read More <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button variant="outline" size="lg" className="rounded-full">Load More Articles</Button>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
