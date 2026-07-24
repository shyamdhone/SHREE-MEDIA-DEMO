import React from "react";
import ceoImage from "../assets/images/Bio.jpg";
import {
  FaInstagram,
  FaWhatsapp,
  FaPalette,
  FaBullhorn,
  FaPenNib,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Hero & CEO Section */}
      <section className="relative overflow-hidden bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* CEO Image Card - Using object-contain so nothing is cut */}
            <div className="relative flex justify-center group">
              <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-cyan-400/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 shadow-[0_25px_60px_rgba(0,0,0,0.08)] bg-slate-900 p-4 w-full max-w-[480px] flex items-center justify-center">
                <img
                  src={ceoImage}
                  alt="Founder & CEO"
                  className="w-full h-auto max-h-[650px] object-contain rounded-[24px]"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm tracking-wide shadow-sm">
                <FaCheckCircle size={14} /> About Us
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold mt-6 tracking-tight text-slate-900 leading-[1.15]">
                Meet the Founder of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Shrii Media
                </span>
              </h1>

              <div className="mt-6">
                <h2 className="text-2xl font-bold text-slate-900">Shrikant Awchar</h2>
                <p className="text-blue-600 font-medium text-base mt-1">Founder & Creative Director, Shrii Media</p>
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed text-lg font-normal">
                At <strong className="text-slate-900 font-semibold">Shrii Media</strong>, we believe every business deserves an exceptional digital presence. Our mission is to transform ideas into impactful brands through modern website development, creative design, branding, social media marketing, and digital innovation.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed text-lg font-normal">
                Under the leadership of our Founder & CEO, we strive to deliver premium-quality digital solutions that help businesses establish trust, attract customers, and achieve long-term growth.
              </p>

              {/* Social Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://www.instagram.com/shrii_media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-purple-500/25"
                >
                  <FaInstagram size={20} />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://wa.me/918080275214?text=Hello%20Shrii%20Media,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25"
                >
                  <FaWhatsapp size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Shrii Media
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              We combine creativity, storytelling, and digital strategy to build brands that attract attention and generate real business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <FaPalette size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Creative Design</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Eye-catching graphics, branding, reels, and visual content that make your business stand out.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FaBullhorn size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Social Media Marketing</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Strategic campaigns that grow followers, increase engagement, and generate quality leads.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <FaPenNib size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Scripting & Branding</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Powerful storytelling and brand strategies that leave a memorable impression on your audience.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <FaCalendarAlt size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Consistent Posting</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Keep your audience engaged with professionally planned and scheduled content every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="p-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600">100+</h2>
              <p className="mt-2 text-slate-600 font-medium">Happy Clients</p>
            </div>
            <div className="p-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-600">500+</h2>
              <p className="mt-2 text-slate-600 font-medium">Projects Completed</p>
            </div>
            <div className="p-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-600">5M+</h2>
              <p className="mt-2 text-slate-600 font-medium">Social Reach</p>
            </div>
            <div className="p-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-600">4+</h2>
              <p className="mt-2 text-slate-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="bg-slate-900 text-white rounded-[32px] p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl font-extrabold relative z-10">Our Mission</h2>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto relative z-10 font-normal">
            Our mission is to empower startups, entrepreneurs, and established businesses with innovative digital solutions that enhance brand visibility, build customer trust, and accelerate sustainable business growth. We focus on delivering quality, creativity, and measurable results in every project we undertake.
          </p>
        </div>
      </section>

    </div>
  );
}