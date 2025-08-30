import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function CategoryPage({ title, items, onBack }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedIndex(null);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        fontFamily: "'Libertinus Serif Display', serif",
        backgroundColor: "#1A2421", // Deep green-black background
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl border border-[#D4AF37]
                   shadow-[0_6px_25px_rgba(0,0,0,0.4)]
                   bg-gradient-to-br from-[#1A2421] to-[#2A3834] p-6 flex flex-col relative"
      >
        {/* Ornamental corners */}
        <div className="absolute top-2 left-2 text-[#D4AF37] opacity-80 text-lg">✦</div>
        <div className="absolute top-2 right-2 text-[#D4AF37] opacity-80 text-lg">✦</div>
        <div className="absolute bottom-2 left-2 text-[#D4AF37] opacity-80 text-lg">✦</div>
        <div className="absolute bottom-2 right-2 text-[#D4AF37] opacity-80 text-lg">✦</div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-4 self-start rounded-full p-2 border border-[#D4AF37] 
                     bg-[#F4EDE4] text-[#1A2421] hover:bg-[#B5A642] hover:text-[#FAF3E0] 
                     shadow-[inset_0_2px_4px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.3)]
                     transition-all duration-300"
        >
          <ArrowLeft size={22} className="text-current" />
        </button>

        {/* Title */}
        <h3
          className="text-center text-2xl font-bold mb-6 tracking-wide drop-shadow-sm"
          style={{ color: "#FAF3E0" }}
        >
          {title}
        </h3>

        {/* Items List */}
        <div className="flex flex-col gap-4 flex-1">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#D4AF37] 
                         bg-[#F4EDE4] p-4 
                         shadow-[inset_0_2px_4px_rgba(0,0,0,0.08),0_3px_6px_rgba(0,0,0,0.3)] 
                         hover:bg-[#B5A642] hover:text-[#FAF3E0] transition-all group"
            >
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3">
                <div>
                  <div className="font-semibold text-[#1A2421] group-hover:text-[#FAF3E0]">
                    {item.name_english}
                  </div>
                  {item.description && (
                    <div className="text-sm text-[#FAF3E0] italic opacity-90 hidden group-hover:block">
                      {item.description}
                    </div>
                  )}
                </div>
                <div className="font-semibold text-[#1A2421] group-hover:text-[#FAF3E0] tabular-nums w-16 text-right justify-self-end">
                  {item.price ? `₹${item.price}` : ""}
                </div>
                <button
                  className="ml-3 h-8 w-8 rounded-full border border-[#D4AF37] 
                             text-[#1A2421] grid place-items-center bg-[#F4EDE4]
                             hover:bg-[#B5A642] hover:text-[#FAF3E0] transition-all"
                  aria-label="More info"
                  onClick={() => setSelectedIndex(index)}
                >
                  i
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ingredient Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="modal-overlay fixed inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
            >
              <motion.div
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                exit={{ y: 400 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="absolute inset-x-0 bottom-0 rounded-t-2xl 
                           bg-gradient-to-br from-[#1A2421] to-[#2A3834] 
                           border-t border-[#D4AF37] p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-bold text-[#FAF3E0]">
                      Ingredients for {items[selectedIndex].name_english}
                    </div>
                    <div className="mt-2 text-[#D4AF37] leading-relaxed">
                      {items[selectedIndex].ingredients
                        ? items[selectedIndex].ingredients
                        : "Will be listed soon..."}
                    </div>
                  </div>
                  <button
                    className="h-8 w-8 rounded-full grid place-items-center 
                               border border-[#D4AF37] text-[#FAF3E0] 
                               hover:bg-[#B5A642] hover:text-[#1A2421] transition-all"
                    aria-label="Close"
                    onClick={() => setSelectedIndex(null)}
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
