"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Globe, ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "FRED FRENCHY",
    role: "Founder & CEO",
    email: "fred@4ward.com",
    phone: "+6123 456 789",
    gradient: "from-purple-600/20 to-purple-800/10"
  },
  {
    name: "PATO ALVAREZ", 
    role: "Co-Founder & Creative Director",
    email: "pato@4ward.com",
    phone: "+6123 456 789",
    gradient: "from-blue-600/20 to-blue-800/10"
  }
];

export default function ContactTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-black to-black" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white/90"
            whileHover={{ scale: 1.02 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-white/60"
            whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Connect with our team to bring your vision to life
          </motion.p>
        </motion.div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group"
            >
              <motion.div
                className={`p-8 rounded-3xl bg-gradient-to-br ${member.gradient} backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden h-full`}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  backgroundColor: "rgba(147, 51, 234, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  {/* Dot pattern */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
                    backgroundSize: "20px 20px"
                  }} />
                </div>

                {/* Contact badge */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30 text-purple-300"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    backgroundColor: "rgba(147, 51, 234, 0.3)"
                  }}
                >
                  <span className="text-sm font-bold">
                    {index === 0 ? "F" : "P"}
                  </span>
                </motion.div>

                <div className="relative z-10">
                  {/* Name and role */}
                  <motion.h3 
                    className="text-2xl md:text-3xl font-black mb-2 group-hover:text-purple-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-white/60 mb-8 group-hover:text-white/80 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {member.role}
                  </motion.p>

                  {/* Contact info */}
                  <div className="space-y-4">
                    {/* Email */}
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group/link"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Mail size={18} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <p className="text-white/90 group-hover/link:text-white transition-colors">
                          {member.email}
                        </p>
                      </div>
                      
                      <motion.div
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                      >
                        <ArrowUpRight size={16} className="text-purple-400" />
                      </motion.div>
                    </motion.a>

                    {/* Phone */}
                    <motion.a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group/link"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Phone size={18} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <p className="text-white/90 group-hover/link:text-white transition-colors">
                          {member.phone}
                        </p>
                      </div>
                      
                      <motion.div
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                      >
                        <ArrowUpRight size={16} className="text-purple-400" />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Website section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://www.4ward.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              backgroundColor: "rgba(147, 51, 234, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center text-purple-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Globe size={20} />
            </motion.div>
            
            <div className="text-left">
              <p className="text-white/60 text-sm">Visit our website</p>
              <p className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                www.4ward.com
              </p>
            </div>
            
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <ArrowUpRight size={20} className="text-purple-400" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-40 right-32 w-5 h-5 bg-purple-400/30 rounded-full"
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
        className="absolute bottom-40 left-20 w-3 h-3 bg-white/20 rounded-full"
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
    </section>
  );
} 