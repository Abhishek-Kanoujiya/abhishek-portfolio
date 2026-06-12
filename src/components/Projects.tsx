"use client";

import React from "react";
import { ExternalLink, Activity, Volume2, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-indigo-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A showcase of my software applications, ranging from medical artificial intelligence prototypes to desktop automation scripts.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Project 1 */}
          <div className="rounded-xl p-6 human-card flex flex-col justify-between border-amber-950/30 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-950/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded text-amber-400 bg-amber-500/10 border border-amber-500/20">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  AI EHR &amp; Imaging Detection System
                </h3>
              </div>

              <p className="text-slate-355 text-xs sm:text-sm leading-relaxed">
                An advanced, intelligent healthcare prototype integrating digital{" "}
                <span className="text-amber-350 font-medium">Electronic Health Records (EHR)</span>{" "}
                with an{" "}
                <span className="text-amber-300 font-medium">AI-powered medical imaging</span>{" "}
                diagnostic tool. It analyzes clinical scans and patient histories to detect anomalies seamlessly, improving report accuracy and reducing manual data entry time.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Python", "OpenAI API", "Azure", "Next.js", "Tailwind CSS", "Secure Data"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-medium px-2.5 py-1 rounded bg-slate-950 border border-amber-950/65 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 mt-6 border-t border-amber-955/20 text-xs font-medium">
              <a
                href="https://github.com/Abhishek-Kanoujiya/AI-EHR-Imaging-Detection"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Source Code
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors ml-auto"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-xl p-6 human-card flex flex-col justify-between border-orange-950/30 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-950/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded text-orange-400 bg-orange-500/10 border border-orange-500/20">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  Text to Audio Converter
                </h3>
              </div>

              <p className="text-slate-355 text-xs sm:text-sm leading-relaxed">
                A sleek, modular desktop utility application built using{" "}
                <span className="text-orange-355 font-medium">Object-Oriented Programming (OOP)</span>{" "}
                in Python. Converts raw text files into{" "}
                <span className="text-orange-300 font-medium">high-fidelity speech</span>{" "}
                with customized user controls for rate, volume, and voice modulation, interfaced with the pyttsx3 library.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Python", "pyttsx3", "OOP Principles", "Desktop GUI", "Audio Rendering"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-medium px-2.5 py-1 rounded bg-slate-950 border border-orange-950/65 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 mt-6 border-t border-orange-955/20 text-xs font-medium">
              <a
                href="https://github.com/Abhishek-Kanoujiya"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Source Code
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-colors ml-auto"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Placeholder Card for Upcoming Projects */}
          <div className="rounded-xl p-6 bg-amber-950/5 border border-dashed border-amber-900/30 flex flex-col items-center justify-center text-center hover:border-amber-700 transition-all min-h-[300px]">
            <div className="space-y-4 max-w-[220px]">
              <div className="w-10 h-10 rounded-full bg-slate-955 border border-amber-900/40 flex items-center justify-center mx-auto text-slate-450">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-350">
                  Upcoming Projects
                </h3>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                  Web development and AI/ML model integration scripts currently in the pipeline.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-block text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-950 border border-amber-950/60 text-amber-500/80">
                  Planned
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
