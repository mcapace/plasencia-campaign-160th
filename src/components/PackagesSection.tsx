"use client";

import { motion } from "framer-motion";
import { packages } from "@/lib/data/campaign-data";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer-motion";

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Investment Options
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Two strategic paths to owning the premium cigar conversation in 2026
          </motion.p>
        </motion.div>

        {/* Packages Grid - Fixed Height and Alignment */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`relative bg-gradient-to-br from-deep-brown to-black rounded-3xl overflow-visible transition-transform duration-400 border h-full flex flex-col ${
                pkg.featured
                  ? "border-2 border-gold scale-105"
                  : "border border-gold/30"
              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              initial="initial"
            >
              {/* Featured Badge - Fixed Positioning */}
              {pkg.featured && (
                <motion.div
                  className="absolute -top-4 -right-4 bg-gold text-black px-6 py-2 transform rotate-12 text-xs font-bold tracking-wider z-20 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  RECOMMENDED
                </motion.div>
              )}

              {/* Package Header */}
              <motion.div
                className="p-8 md:p-10 text-center bg-gradient-to-b from-gold/10 to-transparent flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-sm uppercase tracking-widest opacity-70 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {pkg.name}
                </motion.div>
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {pkg.price}
                </motion.div>
              </motion.div>

              {/* Package Body - Flex Grow to Fill Space */}
              <motion.div
                className="p-8 md:p-10 flex-1 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {/* Highlight */}
                <motion.div
                  className="bg-gold/10 border-l-4 border-gold p-4 mb-6 rounded-lg flex-shrink-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <strong className="text-sm md:text-base">{pkg.highlight}</strong>
                </motion.div>

                {/* Features List - Flex Grow to Fill Remaining Space */}
                <motion.ul
                  className="space-y-4 flex-1"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="py-3 border-b border-white/5 flex items-start flex-shrink-0"
                      variants={fadeInUp}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gold mr-3 text-lg flex-shrink-0">→</span>
                      <span className="opacity-80 leading-relaxed text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
