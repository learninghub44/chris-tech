import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function FAQ() {
  const faqs = [
    {
      category: "General & Working With Us",
      items: [
        {
          q: "How much does a website cost?",
          a: "Our pricing depends on the complexity of the project. A basic starter website starts at KSh 8,000, while a robust corporate or e-commerce site starts at KSh 35,000. Custom software and ERPs start at KSh 50,000. We provide a detailed, transparent quote after our free initial consultation."
        },
        {
          q: "How long does it take to build a website?",
          a: "A standard business website typically takes 1-2 weeks. E-commerce platforms and complex portals take 3-4 weeks. Custom software systems (like a hospital ERP) can take 6-12 weeks depending on features. We always agree on a timeline before starting."
        },
        {
          q: "Do I need to pay the full amount upfront?",
          a: "No. We standardly operate on a milestone-based payment structure: 50% deposit to commence work, 25% upon design approval, and the final 25% right before launch."
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Absolutely. All our digital solutions are built 'mobile-first', ensuring they look and function perfectly on smartphones, tablets, and desktop computers."
        }
      ]
    },
    {
      category: "Technical & Hosting",
      items: [
        {
          q: "Do you provide web hosting and domain registration?",
          a: "Yes, we provide complete end-to-end services. We handle domain registration, enterprise-grade cloud hosting, SSL certificates, and professional business emails (e.g., info@yourcompany.com)."
        },
        {
          q: "What technologies do you use?",
          a: "We utilize modern, scalable enterprise technologies. For web apps, we use React and Next.js. For backends, Node.js, PostgreSQL, and Supabase. For infrastructure, we rely on Cloudflare and Vercel. We avoid bloated legacy systems."
        },
        {
          q: "Can I update the website content myself?",
          a: "Yes! If requested, we integrate an easy-to-use Content Management System (CMS) that allows you to add blog posts, update text, and change images without writing any code. We also provide training on how to use it."
        },
        {
          q: "Is my website secure?",
          a: "Security is paramount. We implement strict security headers, Cloudflare WAF (Web Application Firewall), automatic daily backups, and HTTPS/SSL on every site we build."
        }
      ]
    },
    {
      category: "AI & Custom Software",
      items: [
        {
          q: "What is an AI Chatbot and how can it help my business?",
          a: "An AI Chatbot is an automated assistant trained on your specific business data. It can answer customer questions 24/7 on your website or WhatsApp, handle appointment bookings, and capture lead information—saving you significant customer support costs."
        },
        {
          q: "Can you integrate M-Pesa into my website/software?",
          a: "Yes. We have extensive experience integrating M-Pesa STK Push, C2B, and B2C APIs natively into e-commerce stores, custom software, and mobile apps for seamless payments."
        },
        {
          q: "We have an existing system. Can you upgrade or fix it?",
          a: "We usually prefer to audit existing systems first. If the codebase is modern and maintainable, we can take over. However, often it is more cost-effective for the client to rebuild legacy systems using modern, scalable architecture."
        }
      ]
    },
    {
      category: "Chris Tech Academy",
      items: [
        {
          q: "Are the academy classes online or physical?",
          a: "We offer both! We have flexible online cohorts for remote learners and dedicated physical one-on-one mentorship sessions for those in Nairobi."
        },
        {
          q: "Do I get a certificate after completing a course?",
          a: "Yes, all graduates receive a verifiable Chris Tech Academy Certificate of Completion. However, our primary focus is ensuring you graduate with a strong portfolio of real projects to show employers."
        }
      ]
    }
  ];

  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Everything you need to know about working with Chris Tech, our services, pricing, and technology.
            </p>
          </Reveal>
        </div>
      </section>

      <AnimatedSection className="py-12 bg-white dark:bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="space-y-12">
            {faqs.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold mb-6 text-primary border-b border-slate-100 dark:border-slate-800 pb-2">{section.category}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-slate-200 dark:border-slate-800">
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pt-2 pb-6">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 bg-secondary text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Still have questions?</h3>
                <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                  Can't find the answer you're looking for? Reach out to our team directly and we'll be happy to help.
                </p>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 shadow-lg">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

        </div>
      </AnimatedSection>
    </PageTransition>
  );
}