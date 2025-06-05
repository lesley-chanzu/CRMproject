import React from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <section className="bg-purple-100 py-12 px-4 rounded-lg shadow-md text-center mx-auto mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation  */}
        <motion.div
        initial={{ opacity: 0, y: -30}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duarion: 0.8}}
        className="text-center mb-16"
        >
           <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Get Started with GoodDay CRM
        </h2>
        <p className="text-gray-700 mb-6">
          Organize your business, track your team's productivity and grow your
          Revenue with our all-in-one CRM solution.
        </p>
        </motion.div>
       
       <a
       href="/sign-up/"
       className="inline-block bg-purple-500 text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-purple-700 transition"
       >
        Create Your Free Account
       </a>
       <p className="mt-4 text-sm text-gray-500">
        Already have an account <a href="/login/" className="text-purple-600 hover:underline">Login Here</a>
       </p>
      </div>
    </section>
  );
};

export default GetStarted;
