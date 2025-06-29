"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const highlights = [
  "20+ YEARS OF INDUSTRY EXPERIENCE",
  "INTERNATIONAL NETWORK OF TALENT AND PARTNERS",
  "PROVEN ABILITY TO EXECUTE COMPLEX, HIGH-PROFILE EVENTS",
  "CULTURALLY SENSITIVE, REGIONALLY ADAPTABLE STRATEGIES"
];

export default function Why4Ward() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black to-black" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Why 4Ward title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                WHY
              </motion.span>
              <motion.span 
                className="block relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-white">4WARD</span>
                <span className="text-purple-400">?</span>
                
                {/* Purple accent stroke */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-500 to-purple-700"
                  style={{ clipPath: "polygon(0 50%, 100% 0%, 100% 100%, 0% 100%)" }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Right side - Key highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    backgroundImage: "linear-gradient(to right, rgba(147, 51, 234, 0.1), transparent)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Number indicator */}
                  <motion.div
                    className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30 text-purple-300 font-bold"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(147, 51, 234, 0.3)",
                      borderColor: "rgba(147, 51, 234, 0.5)"
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Content */}
                  <motion.div className="flex-1">
                    <motion.h3 
                      className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight"
                      whileHover={{ x: 5 }}
                    >
                      {highlight}
                    </motion.h3>
                  </motion.div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-32 w-4 h-4 bg-purple-400/40 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-3 h-3 bg-white/30 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
} 