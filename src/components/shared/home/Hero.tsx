"use client";

import { motion } from "motion/react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Dot Pattern */}
      <DotPattern
        className="opacity-30"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        glow={true}
      />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-purple-900/20" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Introducing Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.p 
            className="text-white/70 text-lg md:text-xl font-light tracking-[0.2em] uppercase"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            Introducing
          </motion.p>
        </motion.div>

        {/* Main Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              4WARD
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="overflow-hidden"
          >
            <motion.p 
              className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 tracking-[0.3em] uppercase"
              whileHover={{ 
                letterSpacing: "0.4em",
                transition: { duration: 0.3 }
              }}
            >
              Entertainment
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.p 
            className="text-xl md:text-2xl text-white/80 font-light leading-relaxed"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Global leaders in event planning, production, talent booking and festival operations
          </motion.p>
        </motion.div>

        {/* Purple Accent Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mb-12"
        >
          <motion.div 
            className="h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto"
            style={{ width: "200px" }}
            whileHover={{ 
              width: "300px",
              height: "8px",
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ color: "#ffffff" }}
            >
              Our Services
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg backdrop-blur-sm relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span className="relative z-10">
              Get In Touch
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm uppercase tracking-wider mb-2">Scroll</span>
            <motion.div 
              className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
              whileHover={{ height: "2rem" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-purple-500/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-white/20 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400/40 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
}
