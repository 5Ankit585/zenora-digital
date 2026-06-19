import {
  DollarSign,
  Zap,
  BrainCircuit,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Professional solutions without agency-level costs.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Most projects completed within 1–2 weeks.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered",
    desc: "Automation and AI tools built directly into workflows.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "We stay available even after project delivery.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Why Choose Zenora
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Built For Business Growth
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We focus on results, speed and long-term business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-violet-500/30 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-5">
                  <Icon className="text-violet-400" size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

