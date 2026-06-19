import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Let's Build Something Great
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help your business
            grow with websites, SEO and AI automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Side */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Mail className="text-violet-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">hello@zenora.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Phone className="text-violet-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-white">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <MapPin className="text-violet-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-violet-500/5 border border-violet-500/20">
              <p className="text-sm text-gray-400">
                🚀 Average response time: Less than 24 hours
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <form className="space-y-5">

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Project Details
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-violet-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 transition py-4 rounded-xl font-semibold"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-sm text-gray-500">
                Or WhatsApp us directly at +91 98765 43210
              </p>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

