import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We understand your business goals and requirements.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "We create a modern design focused on conversions.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "We build your website with SEO and performance in mind.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We deploy, optimize and help you start growing.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Simple & Effective
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A streamlined process that keeps everything fast,
            transparent and focused on results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:border-violet-500/30 transition"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-violet-500/10 flex items-center justify-center mb-5">
                  <Icon className="text-violet-400" size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}