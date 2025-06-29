"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const services: Service[] = [
    {
      title: 'EVENT PLANNING',
      description: 'End-to-end planning of high-end events, from concept to execution.',
      image: '/services/image.png',
    },
    {
      title: 'EVENT PRODUCTION',
      description:
        'Full production capabilities including staging, sound, lighting, and technical operations.',
      image: '/services/image2.png',
    },
    {
      title: 'TALENT BOOKING',
      description: 'Direct booking of international and regional artists, DJs, and speakers.',
      image: '/services/image3.png',
    },
    {
      title: 'ENTERTAINMENT CURATION FOR VENUES & CLUBS',
      description: 'Designing tailored entertainment concepts that elevate venue experiences.',
      image: '/services/image4.png',
    },
    {
      title: 'FESTIVAL ORGANIZATION',
      description: 'Complete management of music festivals, from ideation to post-event.',
      image: '/services/image5.png',
    },
  ];

// Individual Service Card Component
function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <motion.div
        className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden shadow-2xl h-full"
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Service Image - Large Format */}
        <motion.div
          className="relative w-full h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Purple gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-600/20 to-transparent" />
          {/* Additional purple overlay for theme consistency */}
          <div className="absolute inset-0 bg-purple-600/20 mix-blend-multiply" />
        </motion.div>

        {/* Content */}
        <div className="p-6">
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
  );
}

export default function CoreServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Title and description */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="block text-gray-300">OUR CORE</span>
            <span className="block text-white relative">
              SERVICES
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "60%" } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We offer a full suite of services—event planning, production, 
            talent booking, and festival curation—designed to elevate 
            every experience from concept to curtain call with unmatched 
            creativity and operational excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
            />
          ))}
        </motion.div>
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