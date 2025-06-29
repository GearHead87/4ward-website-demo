"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-black to-black" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main tagline */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              <motion.span 
                className="block mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                MOVING CULTURE
              </motion.span>
              
              <motion.span 
                className="block relative"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <span 
                  className="relative z-10"
                  style={{
                    background: "linear-gradient(45deg, #a855f7, #8b5cf6, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  4WARD
                </span>
                
                {/* Purple underline effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 1.0 }}
                  whileHover={{ 
                    height: 8,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* 4WARD Entertainment branding */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-purple-600/30 to-purple-800/20 rounded-full flex items-center justify-center border border-purple-500/40 relative overflow-hidden"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                backgroundColor: "rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                  backgroundSize: "8px 8px"
                }} />
              </div>
              
              <motion.span 
                className="text-white text-3xl font-black relative z-10"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 30px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(168, 85, 247, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                4
              </motion.span>
            </motion.div>

            {/* Brand text */}
            <motion.div
              className="text-left"
              whileHover={{ x: 5 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-black text-white mb-1"
                whileHover={{ color: "#a855f7" }}
              >
                4WARD
              </motion.h3>
              <motion.p 
                className="text-white/60 tracking-wider text-sm"
                whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                ENTERTAINMENT
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Creating unforgettable experiences that resonate globally. 
            Let's push the boundaries of entertainment together.
          </motion.p>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-purple-400/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-20 right-32 w-3 h-3 bg-white/30 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          <motion.div
            className="absolute top-1/2 left-32 w-2 h-2 bg-purple-300/50 rounded-full"
            animate={{
              x: [0, 15, 0],
              y: [0, -15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>

      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 bg-purple-600/3 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-40 w-48 h-48 bg-purple-600/2 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.02, 0.08, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </section>
  );
} 