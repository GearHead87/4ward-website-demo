"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const festivalFeatures = [
  {
    title: "Large-scale festival planning and execution",
    description: "End-to-end management of massive international festivals and intimate cultural showcases"
  },
  {
    title: "International artist booking and local talent integration", 
    description: "Seamlessly blending world-renowned headliners with emerging local artists"
  },
  {
    title: "Sponsorship acquisition, brand partnerships, and media collaboration",
    description: "Strategic partnerships that enhance festival experience and drive commercial success"
  },
  {
    title: "Full operational oversight: logistics, security, crowd management",
    description: "Comprehensive festival operations ensuring safety, flow, and exceptional attendee experience"
  }
];

export default function FestivalOrganization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-black to-black" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="mb-8">
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span 
                  className="block text-gray-400"
                  style={{
                    background: "linear-gradient(45deg, #9CA3AF, #6B7280)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                  whileHover={{ 
                    background: "linear-gradient(45deg, #a855f7, #8b5cf6)",
                    transition: { duration: 0.3 }
                  }}
                >
                  FESTIVAL
                </motion.span>
                <motion.span 
                  className="block text-gray-400"
                  style={{
                    background: "linear-gradient(45deg, #9CA3AF, #6B7280)", 
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                  whileHover={{ 
                    background: "linear-gradient(45deg, #a855f7, #8b5cf6)",
                    transition: { duration: 0.3 }
                  }}
                >
                  ORGANIZATION
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-lg text-white/70 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              From massive international festivals to niche cultural showcases, we manage every 
              element—booking, branding, sponsorships, and logistics—with precision, creativity, 
              and crowd-tested expertise and brand identity through exclusive programming, 
              themed nights, and standout talent.
            </motion.p>

            {/* Purple accent line */}
            <motion.div
              className="w-32 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ 
                width: 160,
                height: 8,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {festivalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    backgroundColor: "rgba(147, 51, 234, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Number indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30 text-purple-300 font-bold text-sm"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      backgroundColor: "rgba(147, 51, 234, 0.3)"
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 pr-12"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-32 w-5 h-5 bg-purple-400/30 rounded-full"
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
        className="absolute bottom-20 left-20 w-3 h-3 bg-white/20 rounded-full"
        animate={{
          y: [0, 12, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Background gradient orb */}
      <motion.div
        className="absolute top-40 left-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"
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
    </section>
  );
} 