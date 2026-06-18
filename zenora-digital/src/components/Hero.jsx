import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <HeroBackground />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-6xl font-bold leading-tight">
          Helping Businesses
          <br />
          <span className="gradient-text">
            Grow with Websites, SEO
          </span>
          <br />
          & AI Automation
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          We build websites, generate leads, automate business
          workflows and help brands scale faster.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 bg-violet-600 rounded-full">
            Book Free Consultation
          </button>

          <button className="px-8 py-4 border border-white/20 rounded-full">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}