import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <motion.div
      className="bg-blue-100 p-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">
        Find the Best Activity for your Child!
      </h1>
      <div className="mt-4">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          For Academies
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-4">
          Sign Up in your Area
        </button>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
