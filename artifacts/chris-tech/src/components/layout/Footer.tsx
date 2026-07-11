import React from 'react';
import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { whatsappLink } from '@/components/layout/WhatsAppButton';

export default function Footer() {
  return (
    <footer className="bg-secondary text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2 rounded-xl inline-flex w-48">
                <img src="/logo.png" alt="Chris Tech" className="h-8 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Building Modern Digital Solutions for Growing Businesses. We empower organizations through innovative websites, custom software development, AI solutions, and digital transformation.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-display font-semibold text-lg mb-2">Company</h4>
            <Link href="/about" className="text-slate-400 hover:text-primary transition-colors text-sm">About Us</Link>
            <Link href="/portfolio" className="text-slate-400 hover:text-primary transition-colors text-sm">Our Portfolio</Link>
            <Link href="/pricing" className="text-slate-400 hover:text-primary transition-colors text-sm">Pricing Plans</Link>
            <Link href="/academy" className="text-slate-400 hover:text-primary transition-colors text-sm">Chris Tech Academy</Link>
            <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm">Contact Us</Link>
            <Link href="/faq" className="text-slate-400 hover:text-primary transition-colors text-sm">FAQ</Link>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-display font-semibold text-lg mb-2">Services</h4>
            <Link href="/services#web-development" className="text-slate-400 hover:text-primary transition-colors text-sm">Website Development</Link>
            <Link href="/services#software" className="text-slate-400 hover:text-primary transition-colors text-sm">Custom Software</Link>
            <Link href="/services#ai-solutions" className="text-slate-400 hover:text-primary transition-colors text-sm">AI Solutions & Automation</Link>
            <Link href="/services#mobile-apps" className="text-slate-400 hover:text-primary transition-colors text-sm">Mobile App Development</Link>
            <Link href="/services#cloud" className="text-slate-400 hover:text-primary transition-colors text-sm">Cloud Services</Link>
            <Link href="/services#seo" className="text-slate-400 hover:text-primary transition-colors text-sm">SEO & Digital Marketing</Link>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h4 className="text-white font-display font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="mailto:hello@christech.co.ke" className="hover:text-primary transition-colors">hello@christech.co.ke</a>
                    <a href="mailto:sales@christech.co.ke" className="hover:text-primary transition-colors">sales@christech.co.ke</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+254701059192" className="hover:text-primary transition-colors">+254 701 059 192</a>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <FaWhatsapp className="w-5 h-5 text-primary shrink-0" />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Chat on WhatsApp</a>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Nairobi, Kenya<br/>Available Worldwide</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-display font-semibold text-sm mb-3">Subscribe to our newsletter</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-800/50 border-slate-700 focus-visible:ring-primary text-sm h-10"
                />
                <Button size="icon" type="submit" className="h-10 w-10 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Chris Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
