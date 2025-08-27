"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#strategy", label: "Strategy" },
    { href: "#campaign", label: "Campaign" },
    { href: "#packages", label: "Packages" },
    { href: "#roi", label: "ROI" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full px-6 md:px-12 py-4 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/95 backdrop-blur-md"
          : "py-4 bg-black/90 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center gap-4 md:gap-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-center w-20 h-16 md:w-28 md:h-20">
            <img
              src="/assets/images/Plasencia_logo_WHITE.png"
              alt="Plasencia Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <span className="text-gold text-lg md:text-xl font-bold">×</span>
          <div className="flex items-center justify-center w-20 h-16 md:w-28 md:h-20">
            <img
              src="/assets/images/CA_logo_WHITE.png"
              alt="Cigar Aficionado Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </motion.div>
        
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.li key={item.href}>
              <motion.a
                href={item.href}
                className="text-white text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold"
                onClick={(e) => handleSmoothScroll(e, item.href)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
