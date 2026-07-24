import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const containerRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Annual discount modifier (20% off)
  const calculatePrice = (monthlyPrice) => {
    return isAnnual ? Math.round(monthlyPrice * 0.8) : monthlyPrice;
  };

  // GSAP Entrance and Stagger Animations (safeguarded for layout stability)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from("[data-animate-hero]", {
      autoAlpha: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      clearProps: "all",
    })
    .from("[data-animate-card]", {
      autoAlpha: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.12,
      clearProps: "all",
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100 pt-16 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 text-center bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <span data-animate-hero className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/25">
            Investment Plans
          </span>
          
          <h1 data-animate-hero className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Transparent pricing for <br />
            <span className="text-blue-400">uncompromising growth.</span>
          </h1>

          <p data-animate-hero className="mt-4 sm:mt-6 text-slate-300 max-w-2xl mx-auto text-sm sm:text-lg">
            Choose the perfect package for your business and let Shrii Media help you grow your online presence.
          </p>

          {/* BILLING TOGGLE */}
          <div data-animate-hero className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 p-1.5 shadow-inner">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                !isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* Starter Package (Basic) */}
          <div data-animate-card className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-slate-700">
            <div>
              <span className="inline-block bg-blue-500/10 text-blue-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
                Starter Package
              </span>
              <h2 className="text-2xl font-bold text-white mt-6">Starter</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
                ₹{calculatePrice(7999).toLocaleString('en-IN')} <span className="text-xs text-slate-400">/mo</span>
              </h3>
              <p className="text-slate-400 mt-2 text-sm">Perfect for businesses looking to establish a professional online presence.</p>

              <ul className="mt-6 sm:mt-8 space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">✔ <span>6 Professional Reels</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Reel Scripting</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Professional Editing</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Caption Writing</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Hashtag Research</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Instagram Posting</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Basic Story Updates</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Monthly Content Planning</span></li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href="https://wa.me/918080275214?text=Hi%2C%20I%20am%20interested%20in%20the%20Starter%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-slate-800 hover:bg-slate-700 text-white py-3.5 rounded-xl font-semibold transition text-sm shadow-md active:scale-[0.98]"
              >
                Choose Plan
              </a>
            </div>
          </div>

          {/* Growth Package (Standard / Most Popular) */}
          <div data-animate-card className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white border-2 border-blue-400 md:-translate-y-4 flex flex-col justify-between shadow-2xl relative">
            <div>
              <span className="inline-block bg-white text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                Most Popular
              </span>
              <h2 className="text-2xl font-bold mt-6">Growth</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold mt-4">
                ₹{calculatePrice(9999).toLocaleString('en-IN')} <span className="text-xs text-blue-100">/mo</span>
              </h3>
              <p className="mt-2 text-blue-100 text-sm">Best for growing businesses ready to scale.</p>

              <ul className="mt-6 sm:mt-8 space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">✔ <span>8 Professional Reels</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Content Planning</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Reel Scripting</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Professional Editing</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Caption Writing</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Hashtag Research</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Instagram Posting</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Story Management</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Full Instagram Management</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Monthly Content Strategy</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Profile Optimization</span></li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href="https://wa.me/918080275214?text=Hi%2C%20I%20am%20interested%20in%20the%20Growth%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-blue-700 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition text-sm shadow-xl active:scale-[0.98]"
              >
                Choose Plan
              </a>
            </div>
          </div>

          {/* Premium Branding Package */}
          <div data-animate-card className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-slate-700">
            <div>
              <span className="inline-block bg-purple-500/10 text-purple-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
                Best For Serious Business Growth
              </span>
              <h2 className="text-2xl font-bold text-white mt-6">Premium Branding</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
                ₹{calculatePrice(14999).toLocaleString('en-IN')} <span className="text-xs text-slate-400">/mo</span>
              </h3>
              <p className="text-slate-400 mt-2 text-sm">Complete digital growth solution for category leaders.</p>

              <ul className="mt-6 sm:mt-8 space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">✔ <span>12 Professional Reels</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Content Planning & Calendar</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Reel Scripting</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Professional Editing</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Caption Writing & Hashtag Research</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Instagram Posting & Complete Story Management</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Full Instagram Management</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Profile Optimization</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Trend Research & Festival/Offer Creatives</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Monthly Growth Consultation</span></li>
                <li className="flex items-start gap-2.5">✔ <span>Priority Support & Advanced Strategy</span></li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href="https://wa.me/918080275214?text=Hi%2C%20I%20am%20interested%20in%20the%20Premium%20Branding%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-slate-800 hover:bg-slate-700 text-white py-3.5 rounded-xl font-semibold transition text-sm shadow-md active:scale-[0.98]"
              >
                Choose Plan
              </a>
            </div>
          </div>

        </div>

        {/* ADDITIONAL SERVICES & NOTES CARD */}
        <div className="mt-12 sm:mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Additional Services & Details</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">•</span> Travel charges applicable for locations outside Sultanpur.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">•</span> Extra Shoot: <strong className="text-white">₹2,000</strong> Per Shoot.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">•</span> Meta Ads Management: Available Separately.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-900/50 py-16 sm:py-20 border-t border-slate-800 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">Frequently Asked Questions</h2>

          <div className="mt-8 sm:mt-10 space-y-4">
            {[
              { q: "Can I customize a package?", a: "Yes. Every package can be tailored specifically according to your business needs." },
              { q: "Do you offer monthly plans?", a: "Yes, we provide flexible monthly payment options and discounted annual contracts." },
              { q: "How do I get started?", a: "Simply connect with us through WhatsApp and our strategy team will guide you." }
            ].map((faq, index) => (
              <div key={index} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-md">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left font-bold text-white text-sm sm:text-base focus:outline-none"
                >
                  {faq.q}
                  <span className="text-blue-400 text-lg font-bold ml-2">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-3 sm:pt-4">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 text-center bg-blue-600 text-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to Grow Your Business?</h2>
          <p className="mt-3 sm:mt-4 text-blue-100 text-sm sm:text-base">Let's create something amazing together.</p>
          <a
            href="https://wa.me/918080275214?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20Shrii%20Media!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 sm:mt-8 bg-white text-blue-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-xl hover:bg-slate-100 transition text-sm sm:text-base active:scale-[0.98]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}