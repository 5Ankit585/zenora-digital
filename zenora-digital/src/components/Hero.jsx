import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import HeroBackground from "./HeroBackground";

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Hero() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    if (!btn) return;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.15}px, ${
        y * 0.15
      }px)`;
    };

    const handleLeave = () => {
      btn.style.transform = "translate(0,0)";
    };

    btn.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-violet-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-xs text-gray-300 tracking-wide">
            AI Powered Growth Agency
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Helping Businesses
          <br />

          <span className="gradient-text">
            Grow with Websites,
          </span>

          <br />

          SEO & AI Automation
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
        >
          We build high-converting websites, generate leads,
          automate workflows, and help businesses scale faster
          with AI-powered solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            ref={btnRef}
            className="magnetic-btn btn-primary"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#services"
            className="btn-secondary"
          >
            <Play className="w-4 h-4" />
            View Services
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8"
        >
          {/* Avatars */}
          <div className="flex -space-x-3">
            {["A", "B", "C", "D", "E"].map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full border-2 border-[#04040f] flex items-center justify-center text-xs font-bold text-white"
                style={{
                  background: [
                    "#6c2fff",
                    "#8b5cf6",
                    "#00d4ff",
                    "#0891b2",
                    "#7c3aed",
                  ][index],
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <p className="text-white font-semibold">
              5.0
            </p>

            <p className="text-sm text-gray-400">
              Trusted by 50+ businesses
            </p>
          </div>

          <div className="hidden lg:block w-px h-12 bg-white/10" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              ["50+", "Projects"],
              ["98%", "Retention"],
              ["24h", "Response"],
            ].map(([num, label]) => (
              <div key={label}>
                <h3 className="text-2xl font-bold gradient-text">
                  {num}
                </h3>

                <p className="text-sm text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs tracking-[4px] uppercase text-gray-500">
          Scroll
        </span>

        <div className="w-px h-10 mt-2 bg-gradient-to-b from-violet-500 to-transparent" />
      </motion.div>
    </section>
  );
}