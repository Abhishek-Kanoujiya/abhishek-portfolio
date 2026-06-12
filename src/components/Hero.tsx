"use client";

import React from "react";
import { Mail, ArrowRight, Download, Award, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#projects");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-indigo-950/40 bg-[#030014]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-indigo-650/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-purple-650/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
            {/* Status Badge */}
            <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/30 border border-indigo-900/30 text-xs sm:text-sm text-indigo-300 font-medium font-mono">
              <Cpu className="w-4 h-4 text-indigo-400" />
              open_to_sde_intern = <span className="text-amber-400 font-semibold">true</span>;
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Abhishek Kanoujiya
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-350 leading-relaxed max-w-2xl">
                B.Tech Computer Science Engineering Student &amp; Aspiring Software Engineer
              </h2>
            </div>

            {/* Bio with custom-colored text highlights */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              I am a <span className="text-amber-400 font-semibold">GATE qualified</span> CSE student at <span className="text-white font-semibold">Pranveer Singh Institute of Technology (PSIT), Kanpur</span> (85.27% aggregate / 8.8+ CGPA). I specialize in <span className="text-indigo-300 font-semibold">C++ and Python</span>, focusing on crafting logic-driven web applications and integrating advanced <span className="text-purple-300 font-semibold">AI/ML systems</span> to build scalable software solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleScrollToProjects}
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all cursor-pointer shadow-lg shadow-indigo-950/20"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-semibold hover:bg-slate-850 transition-all"
              >
                Get in Touch
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Socials - with official brand colors */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800 max-w-sm">
              <a
                href="https://github.com/Abhishek-Kanoujiya"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 hover:text-white hover:border-slate-500 hover:scale-105 transition-all"
                title="GitHub Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/abhishekkanoujiya-40712532a"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-[#0a66c2]/10 border border-[#0a66c2]/30 text-[#0a66c2] hover:text-[#0077b5] hover:border-[#0a66c2] hover:scale-105 transition-all"
                title="LinkedIn Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:abhishek.kanoujiya.cs@gmail.com"
                className="p-3 rounded-lg bg-[#ea4335]/10 border border-[#ea4335]/30 text-[#ea4335] hover:text-[#c5221f] hover:border-[#ea4335] hover:scale-105 transition-all"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile & Visual Stats Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-end w-full">
            
            {/* Profile Card */}
            <div className="relative w-full max-w-md overflow-hidden bg-[#0a0915] rounded-xl p-4 border border-indigo-950/40 flex items-center gap-4 hover:border-indigo-500/20 transition-all duration-300">
              {/* Subtle ambient highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl pointer-events-none" />
              
              <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-indigo-900/30 flex-shrink-0 bg-slate-905">
                <img
                  src="/abhishek.jpg"
                  alt="Abhishek Kanoujiya"
                  className="w-full h-full object-cover object-top scale-105"
                />
                {/* Active indicator badge */}
                <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-[#0a0915] rounded-full animate-pulse" />
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">Abhishek Kanoujiya</h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    CSE
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">B.Tech Candidate @ PSIT</p>
                <p className="text-[11px] text-slate-500 font-mono">Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>

            {/* abhishek.json Panel */}
            <div className="relative w-full max-w-md">
              <div className="relative bg-[#0a0915] rounded-xl p-6 sm:p-8 space-y-6 border border-indigo-950/40">
                <div className="flex items-center gap-3 pb-4 border-b border-indigo-950/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="text-xs text-indigo-400/60 ml-auto font-mono">abhishek.json</span>
                </div>

                {/* Fully syntax-highlighted json representation */}
                <div className="space-y-3.5 font-mono text-xs sm:text-sm leading-relaxed">
                  <div>
                    <span className="text-pink-500 font-semibold">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-amber-300">&#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">name</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-emerald-300">&apos;Abhishek Kanoujiya&apos;</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">role</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-emerald-300">&apos;Software Engineer&apos;</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">status</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-emerald-350">&apos;GATE Qualified&apos;</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">education</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-300">&#123;</span>
                    <div className="pl-4">
                      <span className="text-purple-400 font-medium">degree</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-emerald-300">&apos;B.Tech CSE&apos;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400 font-medium">institute</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-emerald-300">&apos;PSIT Kanpur&apos;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400 font-medium">cgpa</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-indigo-400 font-semibold">8.8</span>
                    </div>
                    <span className="text-amber-300">&#125;</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">coreSkills</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-300">[</span>
                    <span className="text-emerald-300">&apos;C++&apos;</span>
                    <span className="text-slate-400">,</span>{" "}
                    <span className="text-emerald-350">&apos;Python&apos;</span>
                    <span className="text-slate-400">,</span>{" "}
                    <span className="text-emerald-300">&apos;DSA&apos;</span>
                    <span className="text-slate-400">,</span>{" "}
                    <span className="text-emerald-300">&apos;OOPs&apos;</span>
                    <span className="text-amber-300">]</span>
                  </div>
                  <div>
                    <span className="text-amber-300">&#125;</span>
                    <span className="text-slate-400">;</span>
                  </div>
                </div>

                {/* Micro Cards / Badges inside Hero - colored symbols */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-indigo-950/20">
                  <div className="p-3 rounded-lg bg-slate-955/40 border border-amber-500/20 flex flex-col items-center text-center hover:border-amber-500/40 transition-all duration-200">
                    <Award className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-[10px] text-slate-500 font-mono">GATE 2026</span>
                    <span className="text-xs font-bold text-amber-300">Qualified (CS &amp; IT)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-955/40 border border-indigo-500/20 flex flex-col items-center text-center hover:border-indigo-500/40 transition-all duration-200">
                    <ShieldCheck className="w-5 h-5 text-indigo-400 mb-1" />
                    <span className="text-[10px] text-slate-500 font-mono">B.Tech CSE GPA</span>
                    <span className="text-xs font-bold text-indigo-300">85.27% / 8.8+</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
