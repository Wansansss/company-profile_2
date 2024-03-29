import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
          <div className="items-center p-6 text-center sm:px-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={sectionBodyAnimation}
          >
            <p className="font-medium text-2xl text-accent">
            Kami memiliki tim yang profesional dan berpengalaman dalam bidangnya masing-masing. Dan karyawan adalah kekuatan untuk menjadi kunci kolaborasi agar selalu memberikan pelayanan terbaik kepada  pelanggan kami.
            </p>
          </motion.div>
          </div>
          {/* Items Card */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {Tims.map((Tims) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={Tims.id}
                className="flex flex-col p-3 duration-300 rounded-lg shadow-lg impactfull-card items-center justify-center"
              >
                {Tims.Image}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimKami;
