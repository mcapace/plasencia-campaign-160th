"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/lib/data/campaign-data";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer-motion";

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/assets/images/plasencia-logo.png"
      >
        <source src="/assets/videos/Girl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Enhanced Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40 z-1" />
      
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-tobacco/5 z-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-20 h-20 bg-gold rounded-full blur-[50px] z-10 opacity-40"
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[75%] right-[12%] w-28 h-28 bg-tobacco rounded-full blur-[70px] z-10 opacity-35"
        animate={{
          y: [0, 12, 0],
          x: [0, -8, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Badge */}
        <motion.div
          className="inline-block px-8 py-3 bg-gradient-to-r from-gold/20 to-tobacco/20 border border-gold/40 rounded-full mb-8 backdrop-blur-sm"
          variants={fadeInUp}
        >
          <span className="text-sm uppercase tracking-wider font-medium text-gold">
            THE DEFINITIVE PARTNERSHIP
          </span>
        </motion.div>

        {/* Enhanced Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight"
          variants={fadeInUp}
        >
          <span className="block text-white mb-2">160 Years of</span>
          <span className="font-bold text-gradient bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
            PROVEN HERITAGE
          </span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light mb-6 opacity-90 max-w-4xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          In luxury marketing, heritage is claimed. With Plasencia, it&apos;s proven.
        </motion.p>

        {/* Enhanced Description */}
        <motion.p
          className="text-base md:text-lg opacity-75 mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          While others celebrate purchased histories and borrowed legacies, Plasencia stands alone—160 years, one family, five active generations still working the fields. This isn&apos;t just another anniversary campaign. It&apos;s the convergence of the industry&apos;s only true multi-generational story with the world&apos;s most influential premium cigar platform.
        </motion.p>

        {/* Fixed Stats Grid - Uniform Box Sizes */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-5xl mx-auto"
          variants={fadeInUp}
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="bg-gradient-to-br from-gold/10 to-tobacco/10 rounded-xl p-5 border border-gold/20 backdrop-blur-sm h-24 flex flex-col justify-center items-center"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)"
                }}
              >
                <motion.span
                  className="block text-3xl md:text-4xl font-bold text-gradient mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  {stat.number}
                </motion.span>
                <motion.span
                  className="text-xs uppercase tracking-wider opacity-75 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  {stat.label}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="px-10 py-3 bg-gradient-to-r from-gold to-tobacco text-black font-semibold text-base uppercase tracking-wider rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Own the Conversation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
