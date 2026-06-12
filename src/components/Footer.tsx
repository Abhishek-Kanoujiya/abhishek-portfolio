"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/5 py-8 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Credits */}
          <div className="text-zinc-500 text-sm text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Abhishek Kanoujiya.</span>{" "}
            <span className="block sm:inline mt-1 sm:mt-0 text-zinc-600">
              Built with Next.js (App Router, TypeScript) &amp; Tailwind CSS.
            </span>
          </div>

          {/* Quick link actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
