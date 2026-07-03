import { useState } from "react";
import { motion } from "motion/react";
import { Award, Calendar, CheckCircle, ExternalLink, ShieldCheck, Trophy } from "lucide-react";
import { Certification } from "../types";

interface CertificationsProps {
  certificationsList: Certification[];
}

export default function CertificationsSection({ certificationsList }: CertificationsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative z-10 px-6 lg:px-8 py-32 bg-zinc-950/20">
      {/* Decorative vector background dots/blobs */}
      <div className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-indigo-400 text-xs font-bold tracking-widest uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Pelatihan & Sertifikasi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white"
          >
            Professional Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Koleksi sertifikasi resmi dan keahlian terverifikasi yang diakui secara nasional maupun internasional.
          </motion.p>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col justify-between bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Hover shimmer indicator */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

              <div className="space-y-4">
                {/* Header icon row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors duration-300">
                    <i className={`${cert.icon} text-lg`} />
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono font-semibold truncate max-w-[150px] bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                    ID: {cert.certId.split("/")[0]}
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">{cert.issuer}</p>
                </div>

                {/* Info Lines */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/80 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>{cert.date}</span>
                  </div>

                  {cert.hours && (
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span>{cert.hours}</span>
                    </div>
                  )}

                  {cert.score && (
                    <div className="flex items-center gap-2 bg-indigo-950/20 border border-indigo-900/30 text-indigo-300 px-2 py-1 rounded-md w-fit font-mono font-medium">
                      <Trophy className="w-3.5 h-3.5 text-indigo-400 shrink-0 mr-1 inline" />
                      <span>Score: {cert.score}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Download or view preview certificate link */}
              {cert.previewLink && (
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex justify-end">
                  <button
                    onClick={() => window.open(cert.previewLink, "_blank")}
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold tracking-wider uppercase focus:outline-none cursor-pointer group/link"
                  >
                    <span>Preview Cert</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
