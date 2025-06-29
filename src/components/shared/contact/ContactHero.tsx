"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function ContactHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black text-white relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-black" />
      
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-purple-600/3 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <motion.span 
                className="block mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                LET'S CREATE
              </motion.span>
              
              <motion.span 
                className="block mb-4"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                SOMETHING
              </motion.span>
              
              <motion.span 
                className="block relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
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
                  ICONIC
                </span>
                
                {/* Purple underline effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                  whileHover={{ 
                    height: 12,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.span>
              
              {/* 4WARD logo */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full border border-purple-500/30 text-purple-300 font-black text-2xl ml-8 mt-4"
                initial={{ opacity: 0, rotate: -180, scale: 0 }}
                animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
                transition={{ duration: 1, delay: 1.0, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  backgroundColor: "rgba(147, 51, 234, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                4
              </motion.div>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            Ready to transform your vision into an unforgettable experience? 
            Let's collaborate and create something extraordinary together.
          </motion.p>

          {/* Floating elements */}
          <motion.div
            className="absolute top-32 left-32 w-4 h-4 bg-purple-400/40 rounded-full"
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
            className="absolute bottom-32 right-40 w-3 h-3 bg-white/30 rounded-full"
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
            className="absolute top-1/2 right-20 w-2 h-2 bg-purple-300/50 rounded-full"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
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
    </section>
  );
} 