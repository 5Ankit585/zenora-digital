import { Zap, Mail, MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold">
                Zenora<span className="text-violet-400">.</span>
              </h3>
            </div>

            <p className="text-gray-400 max-w-md">
              Helping businesses grow through modern websites,
              SEO, AI automation and digital marketing.
            </p>
          </div>

          {/* Right */}
          <div className="md:text-right">

            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400">

              <div className="flex md:justify-end items-center gap-2">
                <Mail size={16} />
                hello@zenora.in
              </div>

              <div className="flex md:justify-end items-center gap-2">
                <MessageCircle size={16} />
                +91 98765 43210
              </div>

              <div className="flex md:justify-end items-center gap-2">
                <Globe size={16} />
                www.zenora.in
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zenora Digital. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

