"use client";

import { motion } from "framer-motion";
import { campaignCards } from "@/lib/data/campaign-data";
import { staggerContainer } from "@/lib/animations/framer-motion";

const CampaignGrid = () => {
  return (
    <section id="strategy" className="py-24 px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Execution
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl opacity-75 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.75, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We don&apos;t just sell advertising. We craft market leadership. Every dollar traceable. Every impression measurable. Every story authentic.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {campaignCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-gradient-to-br from-gold/3 via-white/3 to-tobacco/3 p-8 rounded-2xl border border-gold/15 transition-all duration-400 relative overflow-hidden group hover:border-gold/25"
              whileHover={{ scale: 1.01, y: -5, boxShadow: "0 15px 35px rgba(212, 175, 55, 0.1)" }}
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-gold to-tobacco rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                {card.icon}
              </motion.div>
              <motion.h3
                className="text-2xl mb-4 font-semibold text-gradient"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="opacity-80 leading-relaxed mb-6 text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {card.description}
              </motion.p>
              <motion.div
                className="flex gap-4 pt-6 border-t border-gold/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {card.metrics.map((metric, metricIndex) => (
                  <div key={metric.label} className="flex-1 text-center">
                    <motion.div
                      className="text-2xl font-bold text-gradient mb-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 + metricIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {metric.value}
                    </motion.div>
                    <motion.div
                      className="text-xs opacity-60 uppercase font-medium tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.6 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 + metricIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {metric.label}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg opacity-70 max-w-2xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Together, we won&apos;t just celebrate 160 years—we&apos;ll define the next 160. The definitive luxury campaign of 2026. Not because we say so, but because no one else can prove otherwise.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-gold to-tobacco text-black font-semibold text-base uppercase tracking-wider rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See the Strategy
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignGrid;
