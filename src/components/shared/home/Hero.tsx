"use client";

import { motion } from "motion/react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 p-2"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background_low.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay - Purple/Black Theme */}
      <div className="absolute inset-0 bg-black/60 z-1" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-black/70 z-2" />

      {/* Animated Dot Pattern Background */}
      <motion.div
        className="absolute inset-0 z-3"
        style={{
          backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, rgba(168, 85, 247, 0.15) 0.5px, transparent 0)',
          backgroundSize: '12px 12px',
          backgroundRepeat: 'repeat',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '12px 12px', '0px 0px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Secondary Dot Layer for Depth */}
      <motion.div
        className="absolute inset-0 z-3"
        style={{
          backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, rgba(147, 51, 234, 0.08) 0.5px, transparent 0)',
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '-20px -20px', '0px 0px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Glowing Accent Dots */}
      <motion.div
        className="absolute inset-0 z-3"
        style={{
          backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, rgba(196, 181, 253, 0.25) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 0px', '0px 40px', '40px 40px', '0px 0px'],
          opacity: [0.3, 0.6, 0.4, 0.8, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Background Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-purple-900/30 z-4"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(88, 28, 135, 0.3) 100%)",
            "linear-gradient(to bottom right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(147, 51, 234, 0.35) 100%)",
            "linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(88, 28, 135, 0.3) 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
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
          {/* 4WARD Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div
              className="relative"
            //   style={{
            //     filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.2))"
            //   }}
            //   animate={{
            //     filter: [
            //       "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.2))",
            //       "drop-shadow(0 0 40px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 80px rgba(168, 85, 247, 0.3))",
            //       "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.2))"
            //     ]
            //   }}
            //   transition={{
            //     duration: 4,
            //     repeat: Infinity,
            //     ease: "easeInOut"
            //   }}
            >
              <Image
                src="/4ward_big_logo.png"
                alt="4WARD Entertainment"
                width={600}
                height={200}
                className="w-auto h-32 md:h-40 lg:h-56 object-contain"
                priority
              />
            </motion.div>
          </motion.div>
          
          {/* <motion.div
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
          </motion.div> */}
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
            className="h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto shadow-lg"
            style={{ 
              width: "200px",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
            }}
            whileHover={{ 
              width: "300px",
              height: "8px",
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
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
            className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg relative overflow-hidden group shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{
              boxShadow: "0 4px 20px rgba(168, 85, 247, 0.2)"
            }}
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
              borderColor: "rgba(168, 85, 247, 0.6)",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span className="relative z-10">
              Get In Touch
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-purple-600/20"
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

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-purple-500/40 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-white/30 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400/50 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          boxShadow: "0 0 12px rgba(196, 181, 253, 0.6)"
        }}
      />

      {/* Corner Accent Dots */}
      <motion.div
        className="absolute top-1/4 right-20 w-2 h-2 bg-purple-300/40 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/50 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </section>
  );
}
