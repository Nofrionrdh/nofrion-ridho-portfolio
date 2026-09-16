import { motion } from "motion/react";
import { Send, FileText, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { Contact } from "../types";

interface ContactProps {
  contactsList: Contact[];
}

export default function ContactSection({ contactsList }: ContactProps) {
  return (
    <section id="contact" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-transparent to-zinc-950/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-blue-400 text-xs font-bold tracking-widest uppercase"
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Saya terbuka untuk kolaborasi tim, peluang kerja penuh waktu, proyek lepas, atau sekadar berdiskusi teknis. Silakan sapa saya!
          </motion.p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactsList.map((contact, idx) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex items-center gap-5 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
            >
              {/* Styled Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-all duration-300 shrink-0">
                <i className={`${contact.faIcon} text-lg`} />
              </div>

              {/* Text Fields */}
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">{contact.label}</div>
                <div className="text-sm text-zinc-300 font-semibold group-hover:text-white transition-colors duration-200 truncate">
                  {contact.value}
                </div>
              </div>

              {/* Arrow right link indicator */}
              <ArrowUpRight className="w-4 h-4 text-zinc-650 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
            </motion.a>
          ))}
        </div>

        {/* Center Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/CV_ATS_NOFRION_RIDHO.pdf"
            download="CV_ATS_NOFRION_RIDHO.pdf"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-xl shadow-blue-950/40 focus:outline-none"
          >
            <FileText className="w-4.5 h-4.5" />
            <span>Download CV</span>
            <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
