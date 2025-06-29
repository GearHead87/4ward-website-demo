"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const caseStudies = [
  {
    title: "GLOBAL TOURS AND EVENTS WITH TOP-TIER ARTISTS",
    category: "International Events",
    link: "SEE HERE >",
    color: "from-red-500 to-red-700"
  },
  {
    title: "SUCCESSFUL BEACH CLUB CONCEPTS AND CELEBRITY-DRIVEN EVENTS",
    category: "Venue Concepts",
    link: "SEE HERE >",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "MAJOR FESTIVAL PRODUCTIONS ACROSS CONTINENTS",
    category: "Festival Management",
    link: "SEE HERE >",
    color: "from-orange-500 to-orange-700"
  }
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="block text-gray-300">CASE STUDIES</span>
            <span className="block text-white relative">
              & EXPERIENCE
              <motion.div
                className="absolute -bottom-2 left-0 w-32 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h2>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Category */}
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-purple-300 mb-4">
                      {study.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight group-hover:text-purple-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {study.title}
                  </motion.h3>

                  {/* Link */}
                  <motion.div
                    className="flex items-center gap-3 text-purple-300 font-semibold group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>{study.link}</span>
                    <motion.svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-current"
                      whileHover={{ x: 5 }}
                    >
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats or additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
          >
            From intimate gatherings to massive international festivals, our portfolio 
            showcases decades of experience delivering exceptional entertainment experiences 
            across diverse markets and audiences.
          </motion.p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
} 