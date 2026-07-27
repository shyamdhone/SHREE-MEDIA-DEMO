import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaUserTie,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Primary Business WhatsApp Number (Shrii Media Team / General)
    const phoneNumber = "918080275214";

    // Format the form inputs into a structured WhatsApp message using encoded newlines (%0A)
    const text = `Hello Shrii Media,%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;

    // Open WhatsApp directly with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    // Optional success state feedback
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Website Development",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-5xl font-bold mt-4 leading-tight text-slate-900">
            Let’s make something <span className="text-blue-600">memorable.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Have a project in mind, looking to build an exceptional digital presence, or just want to chat? Reach out to the Shrii Media leadership and team today.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information & Leadership Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Direct Leadership & Channels
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Connect directly with our core team members via phone/WhatsApp, or fill out the form to instantly route your inquiry to our general desk.
            </p>

            <div className="mt-10 space-y-6">
              
              {/* Co-Founder: Piyush Gawai */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <FaUserTie size={20} />
                  </div>
                  <div>
                    <span className="text-xs bg-indigo-100 text-indigo-700 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Co-Founder</span>
                    <p className="text-lg font-bold text-gray-900 mt-1">Piyush Gawai</p>
                    <p className="text-sm text-gray-500 font-medium">+91 89997 26755</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+918999726755"
                    aria-label="Call Piyush Gawai"
                    className="w-10 h-10 rounded-xl bg-gray-50 text-gray-700 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    <FaPhoneAlt size={14} />
                  </a>
                  <a
                    href="https://wa.me/918999726755?text=Hi%20Piyush,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Shrii%20Media."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Piyush Gawai"
                    className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                </div>
              </div>

              {/* Manager: Gaju Sirsat */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <FaUserTie size={20} />
                  </div>
                  <div>
                    <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Manager</span>
                    <p className="text-lg font-bold text-gray-900 mt-1">Gaju Sirsat</p>
                    <p className="text-sm text-gray-500 font-medium">+91 99226 44776</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+919922644776"
                    aria-label="Call Gaju Sirsat"
                    className="w-10 h-10 rounded-xl bg-gray-50 text-gray-700 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    <FaPhoneAlt size={14} />
                  </a>
                  <a
                    href="https://wa.me/919922644776?text=Hi%20Gaju,%20I%20would%20like%20to%20get%20in%20touch%20with%20Shrii%20Media."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Gaju Sirsat"
                    className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                </div>
              </div>

              {/* Email */}
              <a
                href=" shrizdigital@gamail.com "
                className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-gray-900">shrizdigital@gmail.com</p>
                </div>
              </a>

              {/* Location & Hours Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Location</p>
                    <p className="text-sm font-bold text-gray-900">Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Working Hours</p>
                    <p className="text-sm font-bold text-gray-900">Mon - Sat: 9AM - 7PM</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Social quick links */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://www.instagram.com/shrii_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
              >
                <FaInstagram size={18} />
                Instagram
              </a>
              <a
                href="https://wa.me/918080275214?text=Hello%20Shrii%20Media,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 font-medium text-sm"
              >
                <FaWhatsapp size={18} />
                General WhatsApp
              </a>
            </div>

          </div>

          {/* Contact Form Card */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Message via WhatsApp</h3>
            <p className="text-gray-500 mb-6 text-sm">Fill out the fields below and click send to forward your inquiry directly to our primary team WhatsApp (+91 80802 75214).</p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center font-medium animate-fadeIn text-sm">
                Redirecting your message to WhatsApp...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 bg-gray-50/50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" shrizdigital@gamail.com "
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 bg-gray-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 bg-gray-50/50"
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Creative Design & Branding">Creative Design & Branding</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Scripting & Content Strategy">Scripting & Content Strategy</option>
                  <option value="Other Digital Solutions">Other Digital Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Project Details / Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your brand goals..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 bg-gray-50/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              >
                <FaWhatsapp size={22} />
                Send via WhatsApp
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}