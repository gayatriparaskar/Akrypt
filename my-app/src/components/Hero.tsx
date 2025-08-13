import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium tracking-wide text-pink-300 bg-pink-500/10 border border-pink-500/30 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          Empowering Businesses Through Technology
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]">
          Transform Your <span className="text-pink-400">Digital Future</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Innovative solutions designed to drive your business forward with
          cutting-edge technology and creative expertise.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="#services"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg shadow-pink-500/30 transition-all"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
