import React from 'react';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';
import { ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: '1. Introduction',
    body: `Chris Tech ("we", "us", "our") provides website development, custom software, AI solutions, cloud services, and digital marketing to clients in Kenya and worldwide. This Privacy Policy explains how we collect, use, store, and protect personal data when you visit christech.co.ke, contact us, or engage us for services. We process personal data in accordance with Kenya's Data Protection Act, 2019.`
  },
  {
    title: '2. Information We Collect',
    body: `We may collect: (a) contact details you provide via our contact form, email, or WhatsApp, such as your name, email address, and phone number; (b) project information you share when requesting a quote or briefing us on a project; (c) payment-related information when you engage M-Pesa or other payment channels for our services (we do not store full M-Pesa PINs or card numbers — these are processed by the relevant payment provider); and (d) technical data such as IP address, browser type, and pages visited, collected automatically through standard web analytics.`
  },
  {
    title: '3. How We Use Your Information',
    body: `We use the information we collect to respond to enquiries and prepare quotes, deliver and support the websites, software, and services we build for you, process payments and issue invoices, send project updates via email or WhatsApp, and improve our website and service offering. We do not sell your personal data to third parties.`
  },
  {
    title: '4. Sharing of Information',
    body: `We may share limited information with trusted third parties strictly to deliver our services — for example, hosting providers (such as Cloudflare), payment processors (such as Safaricom M-Pesa or Paystack), and email delivery services. These providers are only given the information necessary to perform their function and are expected to handle it securely.`
  },
  {
    title: '5. Data Retention',
    body: `We retain client and project data for as long as needed to deliver services, meet legal and tax obligations, and maintain a reasonable support history. You may request deletion of your personal data at any time, subject to any legal retention requirements.`
  },
  {
    title: '6. Cookies & Analytics',
    body: `Our website may use basic cookies or similar technologies to understand site usage and improve performance. You can disable cookies through your browser settings; this may affect some site functionality.`
  },
  {
    title: '7. Data Security',
    body: `We apply reasonable technical and organizational measures — including HTTPS/SSL, access controls, and secure hosting — to protect the personal data we hold. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.`
  },
  {
    title: '8. Your Rights',
    body: `Under the Data Protection Act, 2019, you have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, and object to certain processing. To exercise any of these rights, contact us using the details below.`
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised date.`
  },
  {
    title: '10. Contact Us',
    body: `If you have questions about this Privacy Policy or how your data is handled, contact us at hello@christech.co.ke or +254 701 059 192.`
  },
];

export default function Privacy() {
  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Privacy Policy</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: July 2026. This policy explains how Chris Tech collects, uses, and protects your information.
            </p>
          </Reveal>
        </div>
      </section>

      <AnimatedSection className="py-12 bg-white dark:bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-10">
            {sections.map((s, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div>
                  <h2 className="text-xl font-display font-bold mb-3 text-foreground">{s.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
