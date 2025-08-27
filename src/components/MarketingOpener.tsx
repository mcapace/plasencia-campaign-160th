"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer-motion";

const MarketingOpener = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-gradient-to-r from-gold/20 to-tobacco/20 border border-gold/30 rounded-full mb-8 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <span className="text-sm uppercase tracking-wider font-medium text-gold">
              THE ALIGNMENT
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gradient"
            variants={fadeInUp}
          >
            Why Cigar Aficionado × Plasencia:
            <span className="block font-bold text-gradient bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
              The Definitive Partnership
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed mb-12"
            variants={fadeInUp}
          >
            Cigar Aficionado doesn&apos;t just reach cigar enthusiasts—we define the conversation. Our audience doesn&apos;t buy cigars; they invest in experiences, collect stories, and celebrate craftsmanship.
          </motion.p>
        </motion.div>

        {/* Partnership Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Benefit 1 */}
          <motion.div
            className="bg-gradient-to-br from-gold/5 to-tobacco/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-tobacco rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              🎯
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Market Authority</h3>
            <p className="opacity-80 leading-relaxed">
              The 500,000 readers who drove $847 million in luxury purchases last year. The 250,000 digital subscribers who spend 18 minutes per session exploring our content.
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            className="bg-gradient-to-br from-gold/5 to-tobacco/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-tobacco rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              📈
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Precision Marketing</h3>
            <p className="opacity-80 leading-relaxed">
              Every dollar traceable. Every impression measurable. Every story authentic. We don&apos;t just sell advertising—we craft market leadership.
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            className="bg-gradient-to-br from-gold/5 to-tobacco/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-tobacco rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              🌟
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Authentic Heritage</h3>
            <p className="opacity-80 leading-relaxed">
              Plasencia offers what money can&apos;t manufacture: authenticity. From Nestor Sr.&apos;s daily drive between Nicaragua and Honduras to the third-generation rollers whose grandfathers taught their fathers.
            </p>
          </motion.div>

          {/* Benefit 4 */}
          <motion.div
            className="bg-gradient-to-br from-gold/5 to-tobacco/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-tobacco rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              🔗
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Market Position</h3>
            <p className="opacity-80 leading-relaxed">
              The world&apos;s only OCIA-certified organic tobacco company. The grower behind the industry&apos;s most celebrated brands finally telling their own story. Six generations when most can barely document two.
            </p>
          </motion.div>

          {/* Benefit 5 */}
          <motion.div
            className="bg-gradient-to-br from-gold/5 to-tobacco/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-tobacco rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              🎨
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Innovation</h3>
            <p className="opacity-80 leading-relaxed">
              Our 12-page flip cover innovation transforms your story into editorial art. Our #160Moments campaign creates 365 days of engagement, not just insertion dates.
            </p>
          </motion.div>

          {/* Benefit 6 */}
          <motion.div
            className="bg-gradient-to-br from-gold/5 to-tobacco/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-tobacco rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              🏆
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Market Dominance</h3>
            <p className="opacity-80 leading-relaxed">
              Position Plasencia where it belongs: not as another premium option, but as the standard by which premium is measured. The brand that transformed from the industry&apos;s best-kept secret to its most celebrated story.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg opacity-70 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            Your competitors have marketing budgets. You have marketing truth. Your competitors have brand stories. You have brand evidence. Your competitors have heritage claims. You have heritage names—real people, real fields, real mastery.
          </motion.p>
          <motion.p
            className="text-lg opacity-70 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            The question isn&apos;t whether to tell your story. It&apos;s whether you&apos;re ready to own the entire conversation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingOpener;
