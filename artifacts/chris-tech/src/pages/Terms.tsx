import React from 'react';
import { Reveal, AnimatedSection } from '@/components/ui/animations';
import PageTransition from '@/components/layout/PageTransition';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Agreement to Terms',
    body: `These Terms of Service govern your use of christech.co.ke and any engagement with Chris Tech ("we", "us", "our") for website development, custom software, AI solutions, cloud services, digital marketing, or Chris Tech Academy training. By using our website or engaging our services, you agree to these terms.`
  },
  {
    title: '2. Our Services',
    body: `We provide website and software development, AI automation, cloud/hosting services, SEO and digital marketing, and technical training. Specific project scope, deliverables, and timelines are agreed with each client individually, typically via a written quote or proposal before work begins.`
  },
  {
    title: '3. Quotes & Payment Terms',
    body: `Pricing is provided after an initial consultation and depends on project complexity. Unless otherwise agreed in writing, projects follow a milestone-based payment structure: an upfront deposit to commence work, a further installment upon design or milestone approval, and a final payment before launch or handover. Payments may be made via M-Pesa, bank transfer, or other agreed channels. Work is paused if agreed payment milestones are not met.`
  },
  {
    title: '4. Project Timelines',
    body: `Estimated timelines are communicated before a project starts. Timelines depend on the client providing timely feedback, content, and approvals; delays in client input may extend delivery dates accordingly.`
  },
  {
    title: '5. Intellectual Property',
    body: `Upon full payment, ownership of the final deliverables (such as source code or designs created specifically for the client) transfers to the client, unless otherwise agreed. Chris Tech retains the right to showcase completed work in its portfolio unless the client requests confidentiality in writing. Third-party tools, libraries, and frameworks used in a project remain subject to their own licenses.`
  },
  {
    title: '6. Hosting & Maintenance',
    body: `Where we provide hosting, domain registration, or ongoing maintenance, these are subject to the specific plan agreed with the client and may be billed separately (e.g., annually or monthly). We are not responsible for downtime caused by third-party infrastructure providers outside our control.`
  },
  {
    title: '7. Client Responsibilities',
    body: `Clients are responsible for providing accurate project requirements, timely content and feedback, and ensuring they have the rights to any content, logos, or materials they supply for use in a project.`
  },
  {
    title: '8. Limitation of Liability',
    body: `Chris Tech will make reasonable efforts to deliver reliable, secure, and functional solutions, but we do not guarantee that any website, software, or system will be entirely error-free or uninterrupted. To the extent permitted by law, our liability for any claim relating to our services is limited to the amount paid by the client for the relevant project.`
  },
  {
    title: '9. Cancellations & Refunds',
    body: `Deposits paid to commence work are generally non-refundable once work has started, as they cover time and resources already committed. If a project is cancelled partway through, work completed up to that point will be invoiced accordingly.`
  },
  {
    title: '10. Chris Tech Academy',
    body: `For training and mentorship programs, enrollment terms (fees, schedule, and certificate eligibility) are communicated at the time of registration. Certificates of completion are issued to students who meet the course's completion requirements.`
  },
  {
    title: '11. Governing Law',
    body: `These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or our services will first be addressed through good-faith discussion between the parties.`
  },
  {
    title: '12. Changes to These Terms',
    body: `We may update these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.`
  },
  {
    title: '13. Contact Us',
    body: `Questions about these Terms can be sent to hello@christech.co.ke or +254 701 059 192.`
  },
];

export default function Terms() {
  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Terms of Service</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: July 2026. Please read these terms carefully before using our website or services.
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
