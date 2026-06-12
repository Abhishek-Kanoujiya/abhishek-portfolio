"use client";

import React from "react";
import { Briefcase, Award, GraduationCap, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Virtual Intern – AI/ML",
    company: "Infosys Springboard",
    location: "Remote",
    period: "Nov 2025 – Jan 2026",
    points: [
      <>Engineered industry-aligned <span className="text-indigo-300">AI/ML models</span> by completing high-intensity technical modules and coding assignments.</>,
      <>Collaborated on project development tasks, focusing on problem-solving through <span className="text-purple-300">Python-based automation</span> and data analysis.</>,
      <>Applied theoretical CS concepts to practical challenges, ensuring <span className="text-amber-400">code efficiency and scalability</span>.</>,
    ],
  },
];

const ACADEMICS = [
  {
    title: "GATE Qualified (CS & IT)",
    institution: "Graduate Aptitude Test in Engineering",
    description: (
      <>
        Qualified the national-level examination validating core competency in computer science fundamentals, including{" "}
        <span className="text-indigo-305">Data Structures, OS, Networks, DBMS, and Algorithms</span>.
      </>
    ),
    metric: "GATE 2026",
    metricColor: "text-amber-450 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Pranveer Singh Institute of Technology (PSIT), Kanpur",
    description: (
      <>
        Maintaining academic standing with an aggregate score of{" "}
        <span className="text-indigo-350 font-semibold">85.27% (8.8+ CGPA)</span>.{" "}
        <span className="text-emerald-450 font-semibold">Zero backlogs</span> (active/history).
      </>
    ),
    metric: "8.8+ CGPA",
    metricColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Class XII & X Board Exams",
    institution: "K.R. Education Centre, Kanpur (CBSE)",
    description: (
      <>
        Achieved <span className="text-purple-350 font-semibold">82.6% in Class XII</span> (2023) and{" "}
        <span className="text-indigo-350 font-semibold">88.0% in Class X</span> (2021).
      </>
    ),
    metric: "CBSE Boards",
    metricColor: "text-slate-400 bg-slate-900 border-indigo-950/60",
  },
];

const CERTIFICATIONS = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    badge: "AWS Certified",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    date: "April 2025",
    image: "/aws-cloud-practitioner.png",
  },
  {
    name: "Solutions Architecture Job Simulation",
    issuer: "AWS & Forage",
    badge: "Job Simulation",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    date: "August 2025",
    image: "/aws-solutions-architecture.png",
  },
  {
    name: "Introduction to Programming in C",
    issuer: "NPTEL (Swayam)",
    badge: "Elite + Silver Elite",
    badgeColor: "text-slate-400 bg-slate-900 border-indigo-950/60",
    date: "2024",
  },
  {
    name: "Generative AI Expert",
    issuer: "Infosys Springboard",
    badge: "GPT-3 & Gen Models",
    badgeColor: "text-slate-400 bg-slate-900 border-indigo-950/60",
    date: "2025",
  },
  {
    name: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    badge: "Part 1 & Part 2",
    badgeColor: "text-slate-400 bg-slate-900 border-indigo-950/60",
    date: "2025",
  },
  {
    name: "Node.js & JavaScript Developer Certificates",
    issuer: "HackerRank Academy",
    badge: "Verified Skill",
    badgeColor: "text-slate-400 bg-slate-900 border-indigo-950/60",
    date: "2025",
  },
];

export default function Achievements() {
  const [selectedCert, setSelectedCert] = React.useState<{ name: string; image: string } | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="achievements" className="relative py-20 border-b border-indigo-950/40 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A chronological timeline of my professional experience, academic standing, and industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Work Experience & Academics */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Experience Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                Work Experience
              </h3>
              
              <div className="relative pl-6 border-l border-indigo-900/30 space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.role} className="relative space-y-2">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span>{exp.company}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-550" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="list-disc pl-4 space-y-1.5 pt-2">
                      {exp.points.map((pt, idx) => (
                        <li key={idx} className="text-sm text-slate-450 leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academics Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                Academic Milestones
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {ACADEMICS.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl human-card flex items-start gap-4 justify-between hover:border-indigo-500/30"
                  >
                    <div className="space-y-1.5 pr-2">
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-550">{item.institution}</p>
                      <div className="text-xs sm:text-sm text-slate-450 leading-relaxed">{item.description}</div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-1 rounded border flex-shrink-0 ${item.metricColor}`}>
                      {item.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              Certifications &amp; Badges
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {CERTIFICATIONS.map((cert) => {
                const isClickable = !!cert.image;
                return (
                  <div
                    key={cert.name}
                    onClick={() => isClickable && setSelectedCert({ name: cert.name, image: cert.image! })}
                    className={`p-4 rounded-xl human-card flex items-center justify-between transition-all duration-200 group ${
                      isClickable
                        ? "cursor-pointer border-indigo-955 hover:border-indigo-500/40 hover:bg-indigo-950/10"
                        : "hover:border-indigo-500/20"
                    }`}
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                          {cert.name}
                        </h4>
                        {isClickable && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                            <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
                            View Cert
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-550 font-mono">
                        {cert.issuer} &bull; {cert.date}
                      </p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded border flex-shrink-0 ${cert.badgeColor}`}>
                      {cert.badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-55 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-pointer animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0a0915] border border-indigo-950/80 rounded-xl p-3 flex flex-col gap-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-indigo-950/20 pb-2">
              <h3 className="text-xs sm:text-sm font-bold text-white font-mono">{selectedCert.name}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-400 hover:text-white font-mono text-[10px] sm:text-xs px-2 py-1 bg-slate-900 border border-slate-800 rounded hover:bg-slate-850"
              >
                Close [ESC]
              </button>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg bg-slate-950/20 flex items-center justify-center max-h-[75vh]">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-h-[65vh] w-auto object-contain rounded border border-indigo-950/30"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
