import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, PropNest Real Estate',
    avatar: 'RS',
    color: '#8b5cf6',
    rating: 5,
    text: "Zenora Digital transformed our entire online presence. Our lead generation went up 340% in the first 3 months. The website they built is absolutely premium — clients comment on it during every call. Best investment we've made for our business.",
    metric: '+340% leads',
  },
  {
    name: 'Priya Menon',
    role: 'CEO, IronPeak Fitness',
    avatar: 'PM',
    color: '#f59e0b',
    rating: 5,
    text: "We needed a website + WhatsApp automation that actually converted new gym members. Zenora delivered in 10 days flat. Our onboarding is now fully automated and memberships are up 180%. These guys don't just build websites — they build growth engines.",
    metric: '+180% memberships',
  },
  {
    name: 'Dr. Anjali Verma',
    role: 'Director, ClaraMed Clinic',
    avatar: 'AV',
    color: '#00d4ff',
    rating: 5,
    text: "The AI chatbot handles 90% of patient queries automatically — appointment booking, FAQs, follow-up reminders. Our staff focus on actual patient care now. The website is beautiful, loads instantly, and ranks on page one for our target keywords.",
    metric: '+60% bookings',
  },
  {
    name: 'Karan Patel',
    role: 'Co-Founder, TechFlow SaaS',
    avatar: 'KP',
    color: '#10b981',
    rating: 5,
    text: "Switched to Zenora after being burned by two agencies that took money and delivered nothing. Completely different experience. They're transparent, fast, and obsessive about results. Our SEO traffic tripled in 4 months and we're still climbing.",
    metric: '3x SEO traffic',
  },
  {
    name: 'Sneha Gupta',
    role: 'Owner, Luxe Boutique',
    avatar: 'SG',
    color: '#ec4899',
    rating: 5,
    text: "From social media marketing to the full website redesign — every piece of work is premium quality. Our Instagram went from 2K to 18K followers in 5 months. The Reels they produce for us consistently hit 100K+ views. Absolutely world-class team.",
    metric: '9x Instagram growth',
  },
];

const logoMarquee = [
  'PropNest', 'IronPeak', 'ClaraMed', 'TechFlow', 'Luxe Boutique',
  'UrbanEats', 'FinTrack', 'EduPrime', 'HealthFirst', 'NovaBuild',
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 block">
            Client Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-white"
          >
            Businesses that{' '}
            <span className="gradient-text">grew with us</span>
          </motion.h2>
        </div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          <div className="glass-card-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
              style={{ background: t.color }}
            />

            <div className="relative z-10">
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-violet-500 opacity-60" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl"
                >
                  "{t.text}"
                </motion.p>
              </AnimatePresence>

              {/* Author + metric */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-white shrink-0"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">{t.name}</div>
                      <div className="text-sm text-[#666]">{t.role}</div>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 rounded-full font-display font-bold text-sm"
                    style={{ background: `${t.color}18`, color: t.color, border: `1px solid ${t.color}30` }}
                  >
                    {t.metric}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    background: i === active ? '#8b5cf6' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Logo marquee */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 overflow-hidden"
        >
          <p className="text-center text-xs text-[#444] tracking-widest uppercase mb-6">Trusted by growing businesses</p>
          <div className="flex gap-0 overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap shrink-0">
              {[...logoMarquee, ...logoMarquee].map((name, i) => (
                <span key={i} className="text-[#2a2a3a] font-display font-bold text-sm tracking-wide hover:text-[#444] transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
