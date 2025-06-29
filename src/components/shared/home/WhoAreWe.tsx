"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function WhoAreWe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-purple-900/20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Who Are We text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                WHO
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                ARE
              </motion.span>
              <motion.span 
                className="block text-purple-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  color: "#a855f7",
                  transition: { duration: 0.2 }
                }}
              >
                WE?
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              className="space-y-6"
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <motion.p 
                className="text-lg text-purple-300 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                4WARD Entertainment is
              </motion.p>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                a premier event and entertainment company delivering world-class 
                experiences through innovative event planning, production, 
                talent booking, and festival organization.
              </motion.p>
              
              <motion.p 
                className="text-lg text-white/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Our passion is curating unforgettable moments that resonate with 
                audiences globally.
              </motion.p>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ 
                width: 120,
                height: 6,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-32 right-20 w-3 h-3 bg-purple-400/30 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-2 h-2 bg-white/20 rounded-full"
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </section>
  );
} 