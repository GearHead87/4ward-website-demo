"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white">LET'S CREATE</span>
            <span className="block text-white">SOMETHING</span>
            <span className="block text-purple-400">ICONIC</span>
          </motion.h2>

          <motion.p
            className="text-lg text-purple-300 font-light tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            MOVING CULTURE 4WARD
          </motion.p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Fred Frenchy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/20">
              <p className="text-purple-300 text-sm font-medium mb-2">CONTACT</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">FRED FRENCHY</h3>
              <div className="space-y-3 text-white/70">
                <p>EMAIL@ADDRESS.COM</p>
                <p>+6123 456 789</p>
                <p>WWW.4WARD.COM</p>
              </div>
            </div>
          </motion.div>

          {/* Pato Alvarez */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/20">
              <p className="text-purple-300 text-sm font-medium mb-2">CONTACT</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">PATO ALVAREZ</h3>
              <div className="space-y-3 text-white/70">
                <p>EMAIL@ADDRESS.COM</p>
                <p>+6123 456 789</p>
                <p>WWW.4WARD.COM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4WARD logo */}
        {/* <motion.div
          className="text-right mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-4xl md:text-5xl font-black text-white">
            4WARD
            <span className="block text-lg font-light text-purple-300 tracking-wider">
              ENTERTAINMENT
            </span>
          </h3>
        </motion.div> */}
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-32 left-20 w-4 h-4 bg-purple-500/30 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-32 w-3 h-3 bg-white/20 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2],
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