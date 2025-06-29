"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    title: "EVENT PLANNING",
    description: "From corporate galas to private celebrations, we deliver end-to-end planning that's bespoke, detail-oriented, and flawless, ensuring every event is immersive, on-brand, and unforgettable.",
    features: [
      "Bespoke corporate events, private parties, product launches",
      "Concept development, logistics coordination, venue management", 
      "On-site execution with attention to detail and luxury service standards"
    ],
    gradient: "from-purple-600/20 to-purple-800/10"
  },
  {
    title: "EVENT PRODUCTION", 
    description: "We transform ideas into sensory experiences through high-level production—stage design, AV, staffing, and creative direction—all executed with precision and innovation to impress at every touchpoint.",
    features: [
      "Technical production: stage design, audio-visual, special effects",
      "Vendor management: staffing, security, hospitality",
      "Creative production: themes, decor, branding, content creation"
    ],
    gradient: "from-blue-600/20 to-blue-800/10"
  },
  {
    title: "TALENT BOOKING",
    description: "Our global talent network gives clients access to world-renowned artists. We handle every detail—from negotiations to travel—ensuring seamless, star-studded performances every time.",
    features: [
      "Access to top-tier talent across music, sports, and entertainment",
      "Negotiation, contracting, and management of talent logistics", 
      "Long-standing relationships with global agents and managers"
    ],
    gradient: "from-green-600/20 to-green-800/10"
  },
  {
    title: "ENTERTAINMENT CONCEPTS FOR VENUES & CLUBS",
    description: "We curate signature experiences for high-end venues that drive engagement and brand identity through exclusive programming, themed nights, and standout talent.",
    features: [
      "Curating signature nights for luxury clubs and beach clubs",
      "Thematic experiences (e.g., 'Day N' Night' concept, cultural fusion events)",
      "Resident DJ programs and guest performer line-ups",
      "Enhancing venue identity through exclusive entertainment programming"
    ],
    gradient: "from-orange-600/20 to-orange-800/10"
  }
];

export default function DetailedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content */}
              <motion.div
                className={index % 2 === 1 ? "lg:order-2" : ""}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  whileHover={{ color: "#a855f7" }}
                >
                  {service.title}
                </motion.h2>

                <motion.p 
                  className="text-lg text-white/80 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  whileHover={{ color: "rgba(255, 255, 255, 0.95)" }}
                >
                  {service.description}
                </motion.p>

                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + featureIndex * 0.1 }}
                      className="group"
                    >
                      <motion.div
                        className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                        whileHover={{ x: 10, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                      >
                        {/* 4WARD icon */}
                        <motion.div
                          className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center border border-purple-500/30 text-purple-300 font-bold text-sm flex-shrink-0 mt-1"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          4
                        </motion.div>
                        
                        <motion.p 
                          className="text-white/70 group-hover:text-white/90 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {feature}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
              >
                <motion.div
                  className={`h-80 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    {/* Dot pattern */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                      backgroundSize: "20px 20px"
                    }} />
                  </div>

                  {/* Service icon */}
                  <motion.div
                    className="relative z-10 text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="w-24 h-24 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-500/50 mx-auto mb-4"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-white text-3xl font-black">4</span>
                    </motion.div>
                    <p className="text-white/80 font-medium">{service.title}</p>
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-3 h-3 bg-purple-400/40 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-8 left-8 w-2 h-2 bg-white/30 rounded-full"
                    animate={{
                      y: [0, 8, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 