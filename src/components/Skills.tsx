import { motion } from "motion/react";
import { Cpu, Terminal, Sparkles, Server, Monitor, FileSpreadsheet, Compass } from "lucide-react";
import { SkillMap } from "../types";

interface SkillsProps {
  skillsList: SkillMap;
}

export default function SkillsSection({ skillsList }: SkillsProps) {
  // Map categories to specific visual styles & icons
  const categoryMeta: { [key: string]: { icon: any; gradient: string; border: string; glow: string } } = {
    "Backend Development": {
      icon: Server,
      gradient: "from-blue-600/10 to-indigo-600/5",
      border: "group-hover:border-blue-500/30",
      glow: "bg-blue-500/20",
    },
    "Frontend Development": {
      icon: Monitor,
      gradient: "from-indigo-600/10 to-purple-600/5",
      border: "group-hover:border-indigo-500/30",
      glow: "bg-indigo-500/20",
    },
    "Reporting & Business System": {
      icon: FileSpreadsheet,
      gradient: "from-teal-600/10 to-emerald-600/5",
      border: "group-hover:border-teal-500/30",
      glow: "bg-teal-500/20",
    },
    "Design & Tools": {
      icon: Compass,
      gradient: "from-amber-600/10 to-orange-600/5",
      border: "group-hover:border-amber-500/30",
      glow: "bg-amber-500/20",
    },
  };

  return (
    <section id="skills" className="relative z-10 px-6 lg:px-8 py-32 overflow-hidden">
      {/* Dynamic graphic background */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-blue-400 text-xs font-bold tracking-widest uppercase"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white"
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Kombinasi teknologi, pustaka, dan perangkat bantu yang saya gunakan untuk mewujudkan solusi digital yang tangguh.
          </motion.p>
        </div>

        {/* Skills Bento-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsList).map(([category, details], idx) => {
            const meta = categoryMeta[category] || {
              icon: Terminal,
              gradient: "from-zinc-600/10 to-zinc-800/5",
              border: "group-hover:border-zinc-500/30",
              glow: "bg-zinc-500/20",
            };
            const IconComponent = meta.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`group relative bg-gradient-to-b ${meta.gradient} to-zinc-950/95 border border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 ${meta.border}`}
              >
                {/* Visual header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-11 h-11 rounded-xl ${meta.glow} flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-bold text-sm text-zinc-100 group-hover:text-white transition-colors duration-200">
                    {category}
                  </h3>
                </div>

                {/* Skill items capsules */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                  {details.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + skillIdx * 0.05, duration: 0.3 }}
                      className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-800/80 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs px-2.5 py-1.5 rounded-xl transition-all duration-150 cursor-default shadow-sm font-mono font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
