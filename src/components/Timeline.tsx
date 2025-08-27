"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { timelineData } from "@/lib/data/campaign-data";
import { slideInLeft, slideInRight } from "@/lib/animations/framer-motion";
import { useRef } from "react";

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-charcoal to-black relative">
      <div ref={containerRef} className="max-w-6xl mx-auto relative">
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
            12-Month Journey
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Strategic narrative arc building momentum across the anniversary year
          </motion.p>
        </motion.div>

        {/* Timeline Track */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 transform -translate-x-1/2">
            <motion.div
              className="absolute left-0 top-0 w-full bg-gold transition-all duration-300"
              style={{ height: progressHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.quarter}
                className={`flex items-center relative ${index % 2 === 1 ? "flex-row-reverse" : ""} mb-16 md:mb-20`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Content - Fixed Width and Height */}
                <motion.div
                  className={`w-full max-w-md p-8 glass-card ${index % 2 === 1 ? "mr-8 md:mr-12" : "ml-8 md:ml-12"} min-h-[200px] flex flex-col justify-center`}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-xl md:text-2xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="opacity-80 leading-relaxed whitespace-pre-line text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.content}
                  </motion.p>
                </motion.div>

                {/* Timeline Date Badge */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 bg-gold text-black px-4 md:px-5 py-2 md:py-3 rounded-full font-bold z-10 text-sm md:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.quarter}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
