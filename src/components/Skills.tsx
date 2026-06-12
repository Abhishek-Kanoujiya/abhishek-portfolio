"use client";

import React from "react";
import { Terminal, Layout, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: Terminal,
    description: "Core languages for logic building and automation",
    skills: ["C++", "Python", "JavaScript", "SQL", "C", "Java"],
    colorTheme: "teal",
    iconColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    hoverBorder: "hover:border-teal-500/40",
    tagHover: "hover:text-teal-300 hover:border-teal-500/35",
  },
  {
    title: "Frontend & Web Technologies",
    icon: Layout,
    description: "Frameworks and styling tools for building modern UI/UX",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    colorTheme: "emerald",
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    tagHover: "hover:text-emerald-300 hover:border-emerald-500/35",
  },
  {
    title: "Developer Tools & Core CS",
    icon: Wrench,
    description: "Fundamental knowledge, databases, and version control",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOPs)",
      "AI/ML Integration",
      "DBMS & MySQL",
      "Operating Systems",
      "Computer Networks",
      "Git & GitHub",
      "VS Code",
    ],
    colorTheme: "cyan",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    tagHover: "hover:text-cyan-300 hover:border-cyan-500/35",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-indigo-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A verified directory of my programming capabilities, web development stack, and computer science fundamentals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`rounded-xl p-6 human-card ${category.hoverBorder}`}
              >
                <div className="space-y-6">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded border ${category.iconColor}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs px-3 py-1.5 rounded bg-slate-950 border border-indigo-950/60 text-slate-400 transition-all duration-200 ${category.tagHover}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
