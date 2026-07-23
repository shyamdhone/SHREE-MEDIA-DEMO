import React, { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-16">
      
      {/* HERO SECTION */}
      <section className="relative px-6 py-20 text-center bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            Investment Plans
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Transparent pricing for <br />
            <span className="text-blue-400">uncompromising growth.</span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Choose the perfect package for your business and let Shrii Media help you grow your online presence.
          </p>

          {/* BILLING TOGGLE */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 p-1.5">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                !isAnnual ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                isAnnual ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {/* Basic Plan */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-blue-500/10 text-blue-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
                Starter
              </span>
              <h2 className="text-2xl font-bold text-white mt-6">Basic</h2>
              <h3 className="text-4xl font-extrabold mt-4 text-white">
                {isAnnual ? '₹3,999' : '₹4,999'} <span className="text-xs text-slate-400">/mo</span>
              </h3>
              <p className="text-slate-400 mt-2 text-sm">Perfect for small businesses starting out online.</p>

              <ul className="mt-8 space-y-4 text-sm text-slate-200">
                <li>✔ 5 Social Media Posts</li>
                <li>✔ 1 Promotional Reel</li>
                <li>✔ Basic Branding Guidelines</li>
                <li>✔ Monthly Performance Report</li>
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/918080275214?text=Hi%2C%20I%20am%20interested%20in%20the%20Basic%20Plan."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-slate-800 hover:bg-slate-700 text-white py-3.5 rounded-xl font-semibold transition text-sm"
              >
                Choose Plan
              </a>
            </div>
          </div>

          {/* Standard Plan (Featured) */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white border-2 border-blue-400 md:-translate-y-4 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="inline-block bg-white text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
                Most Popular
              </span>
              <h2 className="text-2xl font-bold mt-6">Standard</h2>
              <h3 className="text-4xl font-extrabold mt-4">
                {isAnnual ? '₹7,999' : '₹9,999'} <span className="text-xs text-blue-100">/mo</span>
              </h3>
              <p className="mt-2 text-blue-100 text-sm">Best for growing businesses ready to scale.</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>✔ 15 Social Media Posts</li>
                <li>✔ 4 Promotional Reels</li>
                <li>✔ Complete Branding Overhaul</li>
                <li>✔ Full Social Media Management</li>
                <li>✔ Priority 24-Hour Support</li>
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/918080275214?text=Hi%2C%20I%20am%20interested%20in%20the%20Standard%20Plan."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-blue-700 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition text-sm shadow-lg"
              >
                Choose Plan
              </a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-purple-500/10 text-purple-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
                Enterprise
              </span>
              <h2 className="text-2xl font-bold text-white mt-6">Premium</h2>
              <h3 className="text-4xl font-extrabold mt-4 text-white">
                {isAnnual ? '₹15,999' : '₹19,999'} <span className="text-xs text-slate-400">/mo</span>
              </h3>
              <p className="text-slate-400 mt-2 text-sm">Complete digital growth solution for category leaders.</p>

              <ul className="mt-8 space-y-4 text-sm text-slate-200">
                <li>✔ Unlimited Posts & Content</li>
                <li>✔ Professional Cinematic Reels</li>
                <li>✔ Website Design & Optimization</li>
                <li>✔ Dedicated Growth Team</li>
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/918080275214?text=Hi%2C%20I%20am%20interested%20in%20the%20Premium%20Plan."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-slate-800 hover:bg-slate-700 text-white py-3.5 rounded-xl font-semibold transition text-sm"
              >
                Choose Plan
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-900/50 py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white text-center">Frequently Asked Questions</h2>

          <div className="mt-10 space-y-4">
            {[
              { q: "Can I customize a package?", a: "Yes. Every package can be tailored specifically according to your business needs." },
              { q: "Do you offer monthly plans?", a: "Yes, we provide flexible monthly payment options and discounted annual contracts." },
              { q: "How do I get started?", a: "Simply connect with us through WhatsApp and our strategy team will guide you." }
            ].map((faq, index) => (
              <div key={index} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left font-bold text-white"
                >
                  {faq.q}
                  <span className="text-blue-400">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-4 text-sm text-slate-300 border-t border-slate-800 pt-4">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Grow Your Business?</h2>
          <p className="mt-4 text-blue-100">Let's create something amazing together.</p>
          <a
            href="https://wa.me/918080275214?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20Shrii%20Media!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-slate-100 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}