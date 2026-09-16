import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FileText, ArrowRight, Code2, Sparkles, Server, Laptop, Award } from "lucide-react";
import profileImage from "../assets/images/foto_diri-nobg.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Web Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length + 5) {
        index = 0;
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center px-6 lg:px-8 pt-28 pb-16 hero-grid-bg overflow-hidden"
    >
      {/* Background glow animations */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] animate-pulse duration-10000" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-900/5 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] animate-pulse duration-7000" />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-slate-900 via-slate-800/10 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-slate-900 via-slate-800/10 to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/10 text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm shadow-inner badge-shimmer">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span>Available for Work</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.05]">
              <span className="block text-zinc-500 font-light text-2xl sm:text-3xl tracking-normal mb-2">
                Halo, saya
              </span>
              Nofrion <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="block filter drop-shadow-[0_2px_10px_rgba(59,130,246,0.15)]"
              >
                Ridho
              </span>
            </h1>

            {/* Subheading / Typed role */}
            <div className="h-8 flex items-center">
              <span className="text-blue-400 font-mono font-bold text-lg md:text-xl flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                <span>{typedText}</span>
                <span className="w-1 h-5 bg-blue-500 animate-pulse" />
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-350 text-base md:text-lg leading-relaxed max-w-xl">
            Fresh graduate dari <span className="text-blue-400 font-semibold">SMK Negeri 1 Cibinong</span> (SIJA). 
            Berpengalaman magang selama <span className="text-blue-400 font-semibold">10 bulan</span> di industri sebagai web developer, membangun backend handal menggunakan <span className="text-indigo-300 font-semibold font-mono">Laravel</span> & <span className="text-indigo-300 font-semibold font-mono">CodeIgniter</span>, serta gemar mendesain antarmuka modern.
          </p>

          {/* Core Tech badging */}
          <div className="space-y-2.5">
            <span className="text-xs text-zinc-650 font-bold uppercase tracking-wider block">Tech Stack Utama:</span>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "CodeIgniter", "MySQL", "Tailwind CSS", "React", "Linux"].map((tech, idx) => (
                <span
                  key={tech}
                  className="bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-xl hover:border-blue-500/50 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => onNavigate("projects")}
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-blue-600/25 focus:outline-none cursor-pointer"
            >
              <Laptop className="w-4 h-4" />
              <span>Lihat Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-6 py-3.5 rounded-2xl font-bold text-sm border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-blue-500/40 hover:text-white hover:bg-zinc-900 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
            <a
              href="/CV_ATS_NOFRION_RIDHO.pdf"
              download="CV_ATS_NOFRION_RIDHO.pdf"
              className="px-6 py-3.5 rounded-2xl font-bold text-sm border border-zinc-850 text-zinc-450 hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-900/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Beautiful Profile Visual with animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Animated decorative circular rings */}
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-blue-500/10 animate-spin duration-30000 pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border border-indigo-500/10 -rotate-45 duration-20000 pointer-events-none" />
          
          {/* Glowing gradient background orbit */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/10 blur-[60px] pointer-events-none" />

          {/* Photo frame container with multi-layered design */}
          <div className="relative w-72 h-72 md:w-85 md:h-85 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-zinc-800/80 group">
            {/* Soft tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/10 via-transparent to-indigo-950/10 z-10 transition-opacity duration-300 group-hover:opacity-0" />
            
            {/* The Image */}
            {!imageError ? (
              <img
                src={profileImage}
                alt="Nofrion Ridho"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={() => setImageError(true)}
              />
            ) : (
              // Stunning customized visual if real image isn't in workspace yet
              <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-zinc-950" />
                <div className="w-24 h-24 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 relative z-10 animate-pulse">
                  <Server className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white relative z-10 font-sans tracking-tight">Nofrion Ridho</h3>
                <p className="text-zinc-500 text-xs mt-1 relative z-10 uppercase tracking-widest font-mono font-medium">SIJA Developer</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-blue-400 font-mono font-semibold bg-blue-950/30 border border-blue-900/30 px-3 py-1 rounded-full relative z-10">
                  <Sparkles className="w-3 h-3 text-blue-300" />
                  <span>Interactive Portfolio</span>
                </div>
              </div>
            )}
            
            {/* Soft decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
          </div>

          {/* Floating Widget 1 - Total Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -top-4 -right-4 bg-zinc-900/95 border border-zinc-800 rounded-2xl px-5 py-3.5 z-20 shadow-xl shadow-black/40 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5 font-sans">Projects Selesai</div>
            <div className="text-2xl font-black text-white flex items-center gap-1.5 font-sans">
              <span>5+</span>
              <Code2 className="w-4 h-4 text-blue-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Floating Widget 2 - PKL Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-4 -left-4 bg-zinc-900/95 border border-zinc-800 rounded-2xl px-5 py-3.5 z-20 shadow-xl shadow-black/40 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5 font-mono">PKL Intern</div>
            <div className="text-sm font-extrabold text-white leading-tight font-sans">
              PT. Inovasi Inti <br />
              <span className="text-indigo-400 font-bold font-mono text-xs">10 Bulan Magang</span>
            </div>
          </motion.div>

          {/* Floating Widget 3 - Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-6 -right-6 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 border border-blue-500/40 rounded-2xl px-4 py-3 z-20 shadow-xl shadow-black/40 backdrop-blur-sm flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Award className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <div className="text-[9px] text-blue-200 font-bold uppercase tracking-widest leading-none mb-0.5">Sertifikasi</div>
              <div className="text-xs text-white font-extrabold">6 Professional Certs</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
