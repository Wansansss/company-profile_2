import React, { useState } from "react";
import Items from "../../utils/Items";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Layanan.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

const Layanan = () => {
  const [items] = useState(Items);
  const [ref] = useInView();
  return (
    <div className="pt-16 bg-gray-400">
      <div className="py-16 parent ">
        <motion.div
          initial="hidden"
          animate={"visible"}
          variants={headingAnimation}
        >
          <div className="mb-6">
            <h1 className="text-4xl font-semibold text-center text-purple-700">
              Layanan <span className="text-accent">Kami</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={"visible"}
          variants={sectionBodyAnimation}
        >
          {/* Items Card */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {items.map((item) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="flex flex-col p-3 duration-500 rounded-lg shadow-lg impactfull-card"
              >
                <h3 className="text-lg font-semibold text-center text-accent">
                  {item.Image}
                </h3>
                <div className="w-full h-[1px] bg-purple-700 inline-block align-bottom mb-4"></div>
                <div className="text-accent">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-600 ">{item.description}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Layanan;
