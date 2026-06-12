"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/abhishek.kanoujiya.cs@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
        })
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try emailing me directly at abhishek.kanoujiya.cs@gmail.com!");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try emailing me directly at abhishek.kanoujiya.cs@gmail.com!");
    } finally {
      setIsSubmitting(false);
    }

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 border-b border-indigo-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Feel free to reach out for internship opportunities, project collaborations, or just a quick chat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 human-card rounded-xl space-y-8 hover:border-rose-500/30">
            <div className="space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Contact Information
              </h3>
              <p className="text-slate-450 text-sm leading-relaxed">
                I am actively seeking Software Development Engineer (SDE) Intern + FTE roles. Drop a line, and I will get back to you within 24 hours.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-[#ea4335]/10 border border-[#ea4335]/30 text-[#ea4335] group-hover:border-[#ea4335] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-550 font-mono">Email Address</p>
                    <a
                      href="mailto:abhishek.kanoujiya.cs@gmail.com"
                      className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      abhishek.kanoujiya.cs@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] group-hover:border-[#25d366] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-550 font-mono">Phone Number</p>
                    <a
                      href="tel:+916391046463"
                      className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      +91 6391046463
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-[#4285f4]/10 border border-[#4285f4]/30 text-[#4285f4] group-hover:border-[#4285f4] transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-550 font-mono">Location</p>
                    <p className="text-sm font-semibold text-slate-200">
                      Kanpur Nagar, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-indigo-950/20 text-xs text-slate-550 leading-relaxed">
              * Dedicated to writing scalable, clean code and continuous learning.
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 human-card rounded-xl flex flex-col justify-between relative hover:border-rose-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Abhishek Kanoujiya"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-indigo-950/60 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="yourname@domain.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-955/60 border border-indigo-950/60 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hey Abhishek! Let's connect for an SDE role..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-indigo-950/60 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-rose-650 hover:bg-rose-600 disabled:bg-rose-800 text-white font-semibold shadow-lg shadow-rose-950/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Success Alert Overlay */}
            {submitSuccess && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-955/95 rounded-xl p-6 text-center animate-fade-in z-20">
                <div className="space-y-3 max-w-sm">
                  <CheckCircle2 className="w-12 h-12 text-emerald-450 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-550">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
