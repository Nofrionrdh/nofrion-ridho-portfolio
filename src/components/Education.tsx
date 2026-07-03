import { motion } from "motion/react";
import { GraduationCap, Calendar, CheckCircle2, Award } from "lucide-react";
import { Education } from "../types";

interface EducationProps {
  educationList: Education[];
}

export default function EducationSection({ educationList }: EducationProps) {
  return (
    <section id="education" className="relative z-10 px-6 lg:px-8 py-32 overflow-hidden">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-blue-400 text-xs font-bold tracking-widest uppercase"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Pendidikan</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white"
          >
            My Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Latar belakang akademis formal yang meletakkan landasan kuat untuk keterampilan rekayasa perangkat lunak saya.
          </motion.p>
        </div>

        {/* Education Card */}
        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500 shadow-xl"
            >
              {/* Colored top indicator */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

              <div className="p-8 md:p-10 space-y-8">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
                  <div className="flex items-center gap-5">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-all duration-300">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-zinc-950">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">{edu.school}</h3>
                      <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mt-1">{edu.major}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold px-4 py-2 rounded-xl shrink-0 shadow-inner">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{edu.years}</span>
                  </div>
                </div>

                {/* Main Content split into columns */}
                <div className="grid md:grid-cols-5 gap-8">
                  {/* Left Column - Description */}
                  <div className="md:col-span-3 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-blue-500 rounded-full" />
                      <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Tentang Pembelajaran</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                      {edu.description}
                    </p>
                  </div>

                  {/* Right Column - Tech stack list */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-indigo-500 rounded-full" />
                      <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Kombinasi Keterampilan</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-500/40 hover:text-white text-zinc-300 text-xs font-medium px-3 py-1.5 rounded-xl transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
