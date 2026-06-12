"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Code2, FolderGit2, GraduationCap, Mail, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Achievements", href: "#achievements", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  // Handle Navbar visibility on scroll (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true); // at the top
      }
      setLastScrollY(currentScrollY);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } human-navbar`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="font-bold text-sm sm:text-base tracking-tight text-white hover:text-indigo-400 transition-colors duration-200"
            >
              Abhishek Kanoujiya
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/30 border border-transparent"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 border-t border-slate-800 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } bg-zinc-950`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  isActive
                    ? "text-indigo-400 bg-indigo-500/10 border-l-2 border-indigo-500"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-850/40"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
