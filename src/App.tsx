import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EducationSection from "./components/Education";
import CertificationsSection from "./components/Certifications";
import SkillsSection from "./components/Skills";
import TimelineSection from "./components/TimelineSection";
import DesignWorksSection from "./components/DesignWorks";
import ContactSection from "./components/Contact";
import { Building2, Code2, Layers } from "lucide-react";

import {
  skills,
  schoolProjects,
  internProjects,
  certifications,
  education,
  contacts,
  designWorks,
} from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const NAVBAR_OFFSET = 88;

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Section Tracking Scroll Observer
  useEffect(() => {
    const sections = [
      "home",
      "education",
      "certifications",
      "skills",
      "experience",
      "projects",
      "design",
      "contact",
    ];

    const handleScroll = () => {
      let currentSection = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top - NAVBAR_OFFSET <= 0) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic FontAwesome & Google Fonts Injection */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Hero Landing */}
        <Hero onNavigate={handleNavigate} />

        {/* ── STATS BAR ACCENT ── */}
        <div className="relative z-10 border-y border-zinc-900/60 bg-zinc-950/20 py-12 px-6 lg:px-8 shadow-inner">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 sm:gap-12 text-center">
            {[
              {
                value: "5+",
                label: "Projects Selesai",
                icon: Code2,
                desc: "Berbasis web modern",
              },
              {
                value: "10",
                label: "Bulan PKL",
                icon: Building2,
                desc: "PT. Inovasi Inti Digital",
              },
              {
                value: "12+",
                label: "Teknologi",
                icon: Layers,
                desc: "Framework & tools dikuasai",
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="group flex flex-col items-center">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform duration-300 shadow-sm mb-3.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-zinc-400 mt-2 tracking-wider uppercase font-sans">
                    {stat.label}
                  </div>
                  <div className="hidden sm:block text-[10px] text-zinc-500 font-medium mt-1 font-mono">
                    {stat.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <EducationSection educationList={education} />

        {/* Certifications Section */}
        <CertificationsSection certificationsList={certifications} />

        {/* Skills Tech Stack Section */}
        <SkillsSection skillsList={skills} />

        {/* Shared Experience & Projects timeline section with dynamic scrolling indicator & parallax cards */}
        <TimelineSection schoolProjects={schoolProjects} internProjects={internProjects} />

        {/* Design Works Section */}
        <DesignWorksSection designWorksList={designWorks} />

        {/* Contact Me Landing Section */}
        <ContactSection contactsList={contacts} />

        {/* Elegant Footer */}
        <footer className="relative z-10 border-t border-zinc-900 px-6 lg:px-8 py-10 bg-zinc-950/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-500 text-xs font-mono">
            <div>
              © 2026 <span className="text-zinc-300 font-sans font-bold">Nofrion Ridho</span>. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Handcrafted with React, Vite &amp; Tailwind CSS</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
