import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    popular: false,
    features: [
      "5 Page Website",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO Setup",
      "2 Free Revisions",
    ],
  },
  {
    name: "Growth",
    price: "₹9,999",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced SEO",
      "WhatsApp Integration",
      "Google Business Setup",
      "Priority Support",
    ],
  },
  {
    name: "AI Growth",
    price: "₹14,999+",
    popular: false,
    features: [
      "Website Development",
      "AI Chatbot",
      "WhatsApp Automation",
      "Lead Generation Setup",
      "Custom AI Solutions",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Pricing
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Simple Pricing
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees.
            Choose the package that fits your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "border-violet-500 bg-violet-500/10 scale-105"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="mb-5">
                  <span className="px-3 py-1 rounded-full text-xs bg-violet-600">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">
                {plan.name}
              </h3>

              <div className="text-4xl font-bold mb-8">
                {plan.price}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Check size={16} className="text-violet-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-violet-600 hover:bg-violet-500"
                    : "bg-white/10 hover:bg-white/15"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

