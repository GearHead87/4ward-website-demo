'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    title: 'EVENT PLANNING',
    description: 'End-to-end planning of high-end events, from concept to execution.',
    image: '/services/image.png',
    icon: 'M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z',
  },
  {
    title: 'EVENT PRODUCTION',
    description:
      'Full production capabilities including staging, sound, lighting, and technical operations.',
    image: '/services/image2.png',
    icon: 'M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z',
  },
  {
    title: 'TALENT BOOKING',
    description: 'Direct booking of international and regional artists, DJs, and speakers.',
    image: '/services/image3.png',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    title: 'ENTERTAINMENT CURATION FOR VENUES & CLUBS',
    description: 'Designing tailored entertainment concepts that elevate venue experiences.',
    image: '/services/image4.png',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
  },
  {
    title: 'FESTIVAL ORGANIZATION',
    description: 'Complete management of music festivals, from ideation to post-event.',
    image: '/services/image5.png',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  },
];

export default function CoreServices() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to control different phases
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [0, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15, 0.35], [0.8, 1, 0.8]);

  // Background image transitions
  const backgroundOpacity1 = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
  const backgroundOpacity2 = useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 0]);
  const backgroundOpacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const backgroundOpacity4 = useTransform(scrollYProgress, [0.65, 0.75, 0.85], [0, 1, 0]);
  const backgroundOpacity5 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 0]);

  // Simplified service animations - focus on Y movement, keep opacity simple
  const service1Y = useTransform(scrollYProgress, [0.35, 0.45], [30, 0]);
  const service2Y = useTransform(scrollYProgress, [0.45, 0.55], [30, 0]);
  const service3Y = useTransform(scrollYProgress, [0.55, 0.65], [30, 0]);
  const service4Y = useTransform(scrollYProgress, [0.65, 0.75], [30, 0]);
  const service5Y = useTransform(scrollYProgress, [0.75, 0.85], [30, 0]);

  // Simple on/off opacity for services
  const service1Opacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const service2Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const service3Opacity = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
  const service4Opacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const service5Opacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);

  // Show services grid when any service should be visible
  const showServicesGrid = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);

  const serviceAnimations = [
    { y: service1Y, opacity: service1Opacity },
    { y: service2Y, opacity: service2Opacity },
    { y: service3Y, opacity: service3Opacity },
    { y: service4Y, opacity: service4Opacity },
    { y: service5Y, opacity: service5Opacity },
  ];

  const backgroundOpacities = [
    backgroundOpacity1,
    backgroundOpacity2,
    backgroundOpacity3,
    backgroundOpacity4,
    backgroundOpacity5,
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[500vh] overflow-hidden bg-black text-white"
    >
      {/* Background Images */}
      {services.map((service, index) => (
        <motion.div
          key={`bg-${index}`}
          className="fixed inset-0 z-0"
          style={{ opacity: backgroundOpacities[index] }}
        >
          <div className="absolute inset-0 z-10 bg-black/60" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.8), rgba(88, 28, 135, 0.3)), url(${service.image})`,
            }}
          />
        </motion.div>
      ))}

      {/* Sticky Content Container */}
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
          {/* Initial Title and Description - Centered */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center"
            style={{
              opacity: titleOpacity,
              scale: titleScale,
            }}
          >
            <div className="max-w-4xl">
              <motion.h2 className="mb-8 text-6xl font-black leading-tight md:text-7xl lg:text-8xl">
                <span className="mb-4 block text-gray-300">OUR CORE</span>
                <span className="relative block text-white">
                  SERVICES
                  <motion.div
                    className="absolute -bottom-4 left-1/2 h-2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-purple-500 to-purple-700"
                    style={{ width: '200px' }}
                  />
                </span>
              </motion.h2>

              <motion.p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
                We offer a full suite of services—event planning, production, talent booking, and
                festival curation—designed to elevate every experience from concept to curtain call
                with unmatched creativity and operational excellence.
              </motion.p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid h-full items-center gap-8 md:grid-cols-2 lg:grid-cols-3"
            style={{ opacity: showServicesGrid }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                style={{
                  y: serviceAnimations[index].y,
                  opacity: serviceAnimations[index].opacity,
                }}
              >
                <motion.div
                  className="relative h-full min-h-[320px] rounded-3xl border-2 border-white/40 bg-black/90 p-8 backdrop-blur-md transition-all duration-500 hover:border-purple-500/60 hover:bg-black/95"
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-purple-500/50 bg-purple-600/40"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: 'rgba(147, 51, 234, 0.6)',
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-purple-200"
                    >
                      <path d={service.icon} fill="currentColor" />
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.h3
                      className="mb-6 text-xl font-black text-white md:text-2xl"
                      whileHover={{ scale: 1.02 }}
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                      }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-base leading-relaxed text-white"
                      whileHover={{ scale: 1.01 }}
                      style={{
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)"
                      }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Strong border glow on hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-purple-500/20 to-purple-700/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(88, 28, 135, 0.1))"
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-30"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-purple-500/30 bg-black/20 backdrop-blur-sm">
          <motion.div
            className="h-2 w-2 rounded-full bg-purple-500"
            style={{
              scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
            }}
          />
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="fixed left-10 top-1/4 z-20 h-4 w-4 rounded-full bg-purple-500/40"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))',
        }}
      />

      <motion.div
        className="fixed right-10 top-3/4 z-20 h-3 w-3 rounded-full bg-white/30"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </section>
  );
}
