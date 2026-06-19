import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 50, suffix: '+', label: 'Clients Served', color: '#8b5cf6' },
  { value: 98, suffix: '%', label: 'Retention Rate', color: '#00d4ff' },
  { value: 3, suffix: 'x', label: 'Average ROI', color: '#10b981' },
  { value: 10, suffix: ' Days', label: 'Avg. Delivery', color: '#f59e0b' },
];

function CountUp({ to, suffix, color, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (to / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span className="stat-number text-5xl md:text-6xl">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 px-6">
      {/* Horizontal gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/20 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center"
          >
            <CountUp to={s.value} suffix={s.suffix} color={s.color} inView={inView} />
            <div className="text-[#555] text-sm mt-1">{s.label}</div>
            <div className="w-8 h-0.5 mx-auto mt-3 rounded-full" style={{ background: s.color, opacity: 0.5 }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
