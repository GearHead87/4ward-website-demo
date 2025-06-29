"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" }
  ];

  return (
    <footer ref={ref} className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="relative w-48 h-24"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img    
                  src="/4ward_logo.png"
                  alt="4WARD Entertainment Logo"
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-white/70 leading-relaxed mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                color: "rgba(255, 255, 255, 0.9)",
                transition: { duration: 0.2 }
              }}
            >
              Moving culture forward through innovative event planning, 
              production, and unforgettable entertainment experiences.
            </motion.p>

            {/* Purple accent line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ 
                width: 120,
                height: 6,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h4 
              className="text-xl font-bold text-white mb-6"
              whileHover={{ x: 5, color: "#a855f7" }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-white/70 hover:text-purple-300 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 10 }}
                  >
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h4 
              className="text-xl font-bold text-white mb-6"
              whileHover={{ x: 5, color: "#a855f7" }}
            >
              Connect
            </motion.h4>
            
            {/* Contact info */}
            <div className="space-y-4 mb-6">
              <motion.div
                className="flex items-center gap-3 text-white/70"
                whileHover={{ x: 5, color: "rgba(255, 255, 255, 0.9)" }}
              >
                <motion.span 
                  className="text-purple-400"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  📧
                </motion.span>
                <span>hello@4ward.com</span>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-white/70"
                whileHover={{ x: 5, color: "rgba(255, 255, 255, 0.9)" }}
              >
                <motion.span 
                  className="text-purple-400"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  📞
                </motion.span>
                <span>+6123 456 789</span>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                    backgroundColor: "rgba(147, 51, 234, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p 
            className="text-white/50 text-sm"
            whileHover={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            © 2024 4WARD Entertainment. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex gap-6 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            <motion.a
              href="#"
              className="text-white/50 hover:text-purple-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-white/50 hover:text-purple-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-8 right-20 w-3 h-3 bg-purple-400/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-8 left-20 w-2 h-2 bg-white/20 rounded-full"
        animate={{
          y: [0, 8, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </footer>
  );
};

export default Footer;