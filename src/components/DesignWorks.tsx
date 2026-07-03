import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Eye, X, ZoomIn } from "lucide-react";
import hqc from "../assets/images/hqc.png";
import img2 from "../assets/images/2.png";
import img10 from "../assets/images/10.png";
import img25 from "../assets/images/25.png";

interface DesignWork {
  id: number;
  image: string;
  title: string;
}

interface DesignWorksProps {
  designWorksList: DesignWork[];
}

export default function DesignWorksSection({ designWorksList }: DesignWorksProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Image mapping for imported modules
  const imageMap: { [key: string]: string } = {
    "hqc.png": hqc,
    "2.png": img2,
    "10.png": img10,
    "25.png": img25,
  };

  return (
    <section id="design" className="relative z-10 px-6 lg:px-8 py-32">
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
            <Palette className="w-3.5 h-3.5" />
            <span>Karya Desain</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white"
          >
            Design Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Koleksi karya antarmuka website & poster grafis komersial yang dirancang untuk kebutuhan internal perusahaan.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {designWorksList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden cursor-zoom-in hover:border-blue-500/30 transition-all duration-300 shadow-xl"
              onClick={() => setSelectedImage(imageMap[item.image] || `/images/${item.image}`)}
            >
              {/* Image element with lazy state & fallback */}
              <img
                src={imageMap[item.image] || `/images/${item.image}`}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fallback beautiful vector placeholder image with distinct seed
                  e.currentTarget.src = `https://picsum.photos/seed/design${item.id}/600/800`;
                }}
              />

              {/* Dynamic hover glassmorphism slide-up card */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                    <ZoomIn className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">{item.title}</h3>
                  <span className="text-[10px] text-blue-400 font-mono font-semibold uppercase tracking-wider">Expand Artwork</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-zinc-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6 cursor-zoom-out"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-350 hover:text-white transition-all cursor-pointer focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl max-h-[85vh] aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              <img
                src={selectedImage}
                alt="Selected Artwork Large Preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback match seed correctly
                  const idMatch = selectedImage.match(/\d+/);
                  const id = idMatch ? idMatch[0] : "1";
                  e.currentTarget.src = `https://picsum.photos/seed/design${id}/800/1100`;
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
