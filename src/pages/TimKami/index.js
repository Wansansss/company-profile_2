import React, { useEffect, useState } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine } from "../../components";
import Tim from "../../utils/Tim";

const TimKami = () => {
  const [Tims] = useState(Tim);
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  return (
    <div className="pt-16 bg-gray-400">
      <div className="py-16 parent ">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-6">
            <h1 className="text-4xl font-semibold text-center text-purple-700">
              Tim <span className="text-accent">Kami</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {/* Items Card */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {Tims.map((Tims) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration:0.3 },
                }}
                key={Tims.id}
                className="flex flex-col p-3 duration-300 rounded-lg shadow-lg impactfull-card"
              >
                <h3 className="text-lg font-semibold text-center text-accent">
                  {Tims.Image}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimKami;
