"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    title: "EVENT PLANNING",
    description: "End-to-end planning of high-end events, from concept to execution.",
  },
  {
    title: "EVENT PRODUCTION",
    description: "Full production capabilities including staging, sound, lighting, and technical operations.",
  },
  {
    title: "TALENT BOOKING",
    description: "Direct booking of international and regional artists, DJs, and speakers.",
  },
  {
    title: "ENTERTAINMENT CURATION FOR VENUES & CLUBS",
    description: "Designing tailored entertainment concepts that elevate venue experiences.",
  },
  {
    title: "FESTIVAL ORGANIZATION",
    description: "Complete management of music festivals, from ideation to post-event.",
  }
];

export default function CoreServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title and description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              <span className="block text-gray-300">OUR CORE</span>
              <span className="block text-white relative">
                SERVICES
                <motion.div
                  className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p 
              className="text-lg text-white/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We offer a full suite of services—event planning, production, 
              talent booking, and festival curation—designed to elevate 
              every experience from concept to curtain call with unmatched 
              creativity and operational excellence.
            </motion.p>
          </motion.div>

          {/* Right side - Services list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
                            fill="currentColor" />
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-40 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
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