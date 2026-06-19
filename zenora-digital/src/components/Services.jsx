import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Search, Share2, Film, Target, MessageCircle, Bot, Cpu
} from 'lucide-react';

const services = [
  {
    icon: Globe, label: 'Website Development',
    desc: 'High-converting websites built for speed, SEO, and sales. From landing pages to full web apps.',
    color: '#8b5cf6', glow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: Search, label: 'SEO',
    desc: 'Rank on page one. We architect search strategies that drive qualified organic traffic month after month.',
    color: '#00d4ff', glow: 'rgba(0,212,255,0.15)',
  },
  {
    icon: Share2, label: 'Social Media Marketing',
    desc: 'Build brand authority and grow engaged audiences across Instagram, LinkedIn, Twitter and beyond.',
    color: '#f59e0b', glow: 'rgba(245,158,11,0.15)',
  },
  {
    icon: Film, label: 'Video Editing',
    desc: 'Scroll-stopping short-form and long-form video production — Reels, ads, YouTube, and brand films.',
    color: '#ec4899', glow: 'rgba(236,72,153,0.15)',
  },
  {
    icon: Target, label: 'Lead Generation',
    desc: 'Systematic funnels and outreach campaigns that fill your pipeline with ready-to-buy prospects.',
    color: '#10b981', glow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: MessageCircle, label: 'WhatsApp Automation',
    desc: 'Automate follow-ups, onboarding, and support via WhatsApp. Convert more leads with less effort.',
    color: '#22c55e', glow: 'rgba(34,197,94,0.15)',
  },
  {
    icon: Bot, label: 'AI Chatbots',
    desc: 'Deploy intelligent chatbots that qualify leads, answer questions, and book calls — 24/7, zero downtime.',
    color: '#6366f1', glow: 'rgba(99,102,241,0.15)',
  },
  {
    icon: Cpu, label: 'AI Agents',
    desc: 'Custom AI agents that automate complex workflows, research, outreach, and repetitive business tasks.',
    color: '#f97316', glow: 'rgba(249,115,22,0.15)',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl glass-card p-6 overflow-hidden cursor-default"
      style={{ '--glow': service.glow }}
    >
      {/* Hover glow bg */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 30% 30%, ${service.glow} 0%, transparent 70%)` }}
      />

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1px ${service.color}33` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
        >
          <Icon className="w-5.5 h-5.5" style={{ color: service.color }} strokeWidth={1.8} />
        </div>

        <h3 className="font-display font-semibold text-white text-base mb-2 group-hover:text-white transition-colors">
          {service.label}
        </h3>
        <p className="text-[#6b6b8a] text-sm leading-relaxed group-hover:text-[#9999bb] transition-colors duration-300">
          {service.desc}
        </p>

        {/* Arrow indicator */}
        <div className="mt-5 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
          style={{ color: service.color }}
        >
          Learn more →
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08081880] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 block"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Services built for{' '}
            <span className="gradient-text-purple">modern growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#666] max-w-xl mx-auto"
          >
            Every service we offer connects directly to revenue. We don't build
            vanity metrics — we build pipelines.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"> 
          {services.map((s, i) => (
            <ServiceCard key={s.label} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}