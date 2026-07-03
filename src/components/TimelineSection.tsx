import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Briefcase, FolderGit2, Shield, Calendar, ArrowUpRight, Github, ExternalLink, Sparkles, Layers } from "lucide-react";
import { Project } from "../types";
import projectEkskul from "../assets/images/project_ekskul.png";
import projectApotek from "../assets/images/project_apotek.png";
import aqiqah from "../assets/images/aqiqah.png";
import accounting from "../assets/images/acc.png";
import manufaktur from "../assets/images/manufaktur.png";

interface TimelineSectionProps {
  schoolProjects: Project[];
  internProjects: Project[];
}

// Custom hook to detect scroll progression of a single card for parallax
function useCardScrollParallax() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how close the card is to the center of the viewport
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = cardCenter - viewportCenter;
      
      // Map the distance to a slight translation (parallax)
      // Max movement of -15px to 15px
      const maxParallax = 20;
      const progress = distanceFromCenter / (viewportHeight / 2);
      const calculatedOffset = Math.max(Math.min(progress * maxParallax, maxParallax), -maxParallax);
      
      setOffsetY(calculatedOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { cardRef, offsetY };
}

// ── PROJECT CARD WITH TILT & SCROLL PARALLAX ──────────────────────────────
function ParallaxProjectCard({ project, index }: { project: Project; index: number; key?: string | number }) {
  const { cardRef, offsetY } = useCardScrollParallax();
  const [imageError, setImageError] = useState(false);
  
  // Mouse 3D tilt coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized cursor coordinates (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const handleCardClick = () => {
    if (project.github) {
      window.open(project.github, "_blank");
    }
  };

  // Calculate standard 3D rotation based on mouse coordinates
  const tiltX = coords.y * -15; // Max 15 degrees tilt
  const tiltY = coords.x * 15;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? "none" : "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-blue-900/10 hover:border-blue-500/30 transition-shadow duration-300"
    >
      {/* Dynamic light reflection glow based on mouse coordinates */}
      {isHovered && (
        <div
          style={{
            background: `radial-gradient(circle 200px at ${(coords.x + 0.5) * 100}% ${(coords.y + 0.5) * 100}%, rgba(59, 130, 246, 0.15), transparent)`,
          }}
          className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
        />
      )}

      {/* Card Image Container with Scroll Parallax */}
      <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
        <div
          style={{
            transform: `translateY(${offsetY}px) scale(1.15)`,
            transition: "transform 0.1s ease-out",
          }}
          className="absolute inset-0 w-full h-full"
        >
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            // Elegant placeholder pattern with glowing gradient
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-indigo-950/40" />
              <div className="text-center relative z-10 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <p className="text-xs text-zinc-500 font-mono">Mockup Screen</p>
              </div>
            </div>
          )}
        </div>

        {/* Hover image overlay tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />

        {/* Badge */}
        <div className="absolute top-4 right-4 z-20 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <i className={`${project.badgeIcon} text-[9px] text-blue-400`} />
          <span>{project.badge}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-black text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
            {project.desc}
          </p>
        </div>

        {/* Tech capsules */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-950/30 border border-blue-900/30 text-blue-300 font-mono text-[10px] px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action link */}
        {project.github && (
          <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
            <Github className="w-3.5 h-3.5" />
            <span>Lihat di GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:translate-y--0.5 transition-all duration-200" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── MAIN TIMELINE CONTAINER ───────────────────────────────────────────────
export default function TimelineSection({ schoolProjects, internProjects }: TimelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Image mapping for imported modules
  const imageMap: { [key: string]: string } = {
    "/images/project_ekskul.png": projectEkskul,
    "/images/project_apotek.png": projectApotek,
    "/images/aqiqah.png": aqiqah,
    "/images/acc.png": accounting,
    "/images/manufaktur.png": manufaktur,
  };

  // Transform project images to use imported modules
  const transformProjects = (projects: Project[]) => 
    projects.map(proj => ({
      ...proj,
      image: imageMap[proj.image] || proj.image,
    }));

  const transformedSchoolProjects = transformProjects(schoolProjects);
  const transformedInternProjects = transformProjects(internProjects);
  
  // Custom scroll tracking for the vertical needle pointer
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the scroll animation for the pointer
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Calculate indicator height / position
  const indicatorY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Decorative vertical timeline grid line */}
      <div className="absolute top-0 bottom-0 left-6 md:left-[calc(3rem+0.5px)] w-px bg-zinc-900/80 pointer-events-none" />

      {/* Moving progress bar path */}
      <div className="absolute top-0 bottom-0 left-6 md:left-[calc(3rem+0.5px)] w-[2px] bg-gradient-to-b from-blue-600/10 via-blue-500/20 to-indigo-600/10 pointer-events-none">
        <motion.div
          style={{ height: indicatorY }}
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_8px_rgba(59,130,246,0.5)] origin-top rounded-full"
        />
      </div>

      {/* Floating moving dynamic pointer */}
      <motion.div
        style={{ top: indicatorY }}
        className="absolute left-[19px] md:left-[calc(3rem-4px)] w-[11px] h-[11px] rounded-full bg-blue-400 border-2 border-zinc-950 z-20 pointer-events-none"
      >
        <span className="absolute -inset-2.5 rounded-full border border-blue-400/30 animate-ping duration-1500" />
        <span className="absolute -inset-1 bg-blue-500/20 rounded-full blur-[4px]" />
      </motion.div>

      {/* ───────────────────────────────────────────────────────────────────────
          1. EXPERIENCE SECTION
      ─────────────────────────────────────────────────────────────────────── */}
      <section id="experience" className="relative z-10 px-6 lg:px-8 pb-32">
        <div className="max-w-5xl mx-auto pl-8 md:pl-20">
          {/* Milestone side bullet */}
          <div className="absolute left-[18px] md:left-[calc(3rem-5px)] w-[11px] h-[11px] rounded-full bg-zinc-900 border-[3px] border-blue-500 shadow-md shadow-blue-500/30 z-10" />

          {/* Section Heading */}
          <div className="space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-blue-400 text-xs font-bold tracking-widest uppercase"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Pengalaman</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white"
            >
              My Experience
            </motion.h2>
          </div>

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-300 shadow-xl"
          >
            {/* Soft backdrop radial glow */}
            <div className="absolute inset-0 bg-radial-gradient from-blue-600/5 to-transparent pointer-events-none rounded-2xl" />

            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/80">
              <div className="space-y-1.5">
                <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors duration-200">
                  Web Developer Intern
                </h3>
                <div className="flex items-center gap-2 text-zinc-300 font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>PT. Inovasi Inti Digital</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 text-blue-300 text-xs font-bold px-4 py-2 rounded-xl">
                <Calendar className="w-3.5 h-3.5" />
                <span>10 Bulan Magang</span>
              </div>
            </div>

            {/* Body Description */}
            <p className="text-zinc-350 leading-relaxed text-sm sm:text-base mb-8">
              Mengembangkan berbagai sistem bisnis berbasis <span className="text-blue-400 font-bold">CodeIgniter</span> seperti modul accounting,
              purchasing, manufaktur, pengiriman, dan reporting PDF operasional perusahaan. Selain
              pengembangan backend, saya juga terlibat aktif dalam pembuatan desain tampilan website dan desain
              poster internal perusahaan.
            </p>

            {/* Accomplishments Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "fa-solid fa-cart-shopping", text: "Sistem Aqiqah (penjualan, produksi, pengiriman)" },
                { icon: "fa-solid fa-chart-line", text: "Accounting & Reporting Module" },
                { icon: "fa-solid fa-industry", text: "Manufacturing & Work Order System" },
                { icon: "fa-solid fa-file-pdf", text: "Laporan PDF kompleks menggunakan FPDF" },
                { icon: "fa-solid fa-desktop", text: "Web interface & dashboard design" },
                { icon: "fa-solid fa-swatchbook", text: "Desain poster kebutuhan internal" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3.5 text-xs sm:text-sm text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900/50 border border-zinc-800/40 flex items-center justify-center shrink-0 mt-0.5">
                    <i className={`${icon} text-xs text-blue-400`} />
                  </div>
                  <span className="leading-relaxed pt-1">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          2. PROJECTS SECTION
      ─────────────────────────────────────────────────────────────────────── */}
      <section id="projects" className="relative z-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-8 md:pl-20 space-y-24">
          
          {/* Milestone Bullet */}
          <div className="absolute left-[18px] md:left-[calc(3rem-5px)] w-[11px] h-[11px] rounded-full bg-zinc-900 border-[3px] border-indigo-500 shadow-md shadow-indigo-500/30 z-10" />

          {/* Section Heading */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-indigo-400 text-xs font-bold tracking-widest uppercase"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portofolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed"
            >
              Kumpulan proyek rekayasa perangkat lunak terpilih, dikembangkan dari bangku sekolah ke level kesiapan industri.
            </motion.p>
          </div>

          {/* School Projects subgroup */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-inner">
                <i className="fa-solid fa-school text-blue-400" />
                <span>School Projects</span>
              </div>
              <div className="flex-1 h-px bg-zinc-800/80" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {transformedSchoolProjects.map((project, idx) => (
                <ParallaxProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </div>

          {/* PKL Projects subgroup */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-indigo-400 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-inner">
                <i className="fa-solid fa-briefcase" />
                <span>PKL Projects — PT. Inovasi Inti Digital</span>
              </div>
              <div className="flex-1 h-px bg-zinc-800/80" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {transformedInternProjects.map((project, idx) => (
                <ParallaxProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
