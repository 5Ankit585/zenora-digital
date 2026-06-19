import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-900/20 via-black to-cyan-900/20 p-10 md:p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Scale Your Business?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Get a free consultation and discover how websites, SEO and AI automation
            can help your business grow faster.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition font-semibold"
          >
            Book Free Consultation
            <ArrowRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
}

