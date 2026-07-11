import React from 'react';
import { Link } from 'wouter';
import { BookOpen, Code, Terminal, BrainCircuit, Figma, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';

export default function Academy() {
  const courses = [
    {
      title: "Frontend Engineering",
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-500",
      desc: "Master modern UI development. Learn HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Build real-world interactive applications.",
      duration: "12 Weeks",
      level: "Beginner to Advanced"
    },
    {
      title: "Backend & Cloud",
      icon: <Terminal className="w-6 h-6" />,
      color: "text-green-500",
      desc: "Build scalable APIs and databases. Cover Node.js, PostgreSQL, Supabase, Docker, and deployment on Cloudflare and Vercel.",
      duration: "10 Weeks",
      level: "Intermediate"
    },
    {
      title: "AI Development",
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "text-purple-500",
      desc: "Integrate LLMs into apps. Learn prompt engineering, OpenAI APIs, Claude, and how to build AI chatbots and autonomous agents.",
      duration: "8 Weeks",
      level: "Intermediate to Advanced"
    },
    {
      title: "UI/UX Design",
      icon: <Figma className="w-6 h-6" />,
      color: "text-pink-500",
      desc: "Design beautiful, user-centered interfaces using Figma. Learn wireframing, prototyping, color theory, and modern web aesthetics.",
      duration: "6 Weeks",
      level: "Beginner"
    }
  ];

  return (
    <PageTransition>
      <section className="bg-secondary text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold mb-6 backdrop-blur-sm">
                <BookOpen className="w-4 h-4" />
                Chris Tech Academy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Learn Practical <br/><span className="text-accent">Technology Skills</span> <br/>From Industry Pros.
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Skip the outdated university curriculum. Learn the exact modern tech stack we use every day to build enterprise software for real clients.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent text-secondary hover:bg-white rounded-full">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 rounded-full bg-transparent">
                  View Syllabus
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="relative hidden lg:block">
            <Reveal delay={0.2}>
              <div className="glass-card bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10 backdrop-blur-md">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Project-Based</h4>
                      <p className="text-slate-400 text-sm">Build portfolio-ready applications.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Career Mentorship</h4>
                      <p className="text-slate-400 text-sm">Guidance on freelancing and job hunting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-24 bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">Our Learning Tracks</h2>
              <p className="text-slate-600 dark:text-slate-400">Comprehensive, up-to-date courses designed to take you from beginner to hirable developer.</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courses.map((course, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center ${course.color} shadow-inner`}>
                      {course.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</span>
                      <span className="text-sm font-semibold text-foreground bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{course.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{course.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{course.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-500">Level: <span className="text-foreground">{course.level}</span></span>
                    <Button variant="ghost" className="group/btn text-primary p-0 hover:bg-transparent">
                      Syllabus <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="py-24 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-foreground">The Chris Tech Advantage</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-8">
               {[
                 { t: "1-on-1 Mentorship", d: "Direct access to senior engineers working on live projects." },
                 { t: "Real-World Projects", d: "Don't just build to-do apps. Build full-stack SaaS clones." },
                 { t: "Internship Access", d: "Top performing students get priority for Chris Tech internships." }
               ].map((item, i) => (
                 <Reveal key={i} delay={i*0.1}>
                    <div className="flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                         <CheckCircle2 className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-sm">{item.d}</p>
                    </div>
                 </Reveal>
               ))}
            </div>
            
            <Reveal delay={0.4}>
              <div className="mt-16 bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div className="text-left">
                   <h3 className="font-display font-bold text-xl mb-1 text-foreground">Corporate Training Available</h3>
                   <p className="text-slate-500 text-sm">Need to upskill your entire IT department? We offer custom team workshops.</p>
                 </div>
                 <Button asChild className="rounded-full shrink-0">
                   <Link href="/contact?subject=corporate-training">
                     Inquire Now
                   </Link>
                 </Button>
              </div>
            </Reveal>
         </div>
      </section>
    </PageTransition>
  );
}