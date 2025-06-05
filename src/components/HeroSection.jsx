import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-16 md:py-24 relative overflow-hidden">
      <div className="flex flex-col max-w-7xl mx-auto px-4 md:flex-row justify-center items-center">
      <motion.div
        className="text-center md:text-left md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
          The #1 Platform for Modern{" "}
          <span className="text-indigo-600">Work Management</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
          GoodDay empowers teams to connect goals, strategy, and execution,
          transforming productivity with clarity and agility.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <motion.a
            href="/sign-up"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started Free
          </motion.a>
          <motion.a
            href="/request-demo"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Request a Demo
          </motion.a>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          No credit card required. Free for up to 15 users.
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Replace with image/video */}
        <img
          src="https://via.placeholder.com/600x400?text=Hero+Image" // Placeholder
          alt="GoodDay Work Management Platform PICTURE"
          className="rounded-lg shadow-xl"
        />
      </motion.div>
      </div>
      {/* Optional: Add some decorative background elements if present on GoodDay.work */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
