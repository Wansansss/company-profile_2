import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BottomLine } from "../../../components";
import { useInView } from "react-intersection-observer";
import { sectionBodyAnimation } from "../../../hooks/useAnimation";

const Tentang = () => {
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
    <div className="parent bg-gray-400">
      <div className="pt-16">
        <motion.div
          className="mb-12"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h1 className="text-4xl font-semibold text-center drop-shadow-md">
            Tentang <span className="text-purple-700">Kami</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="items-center px-5 pt-4 text-center sm:px-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={sectionBodyAnimation}
          >
            <p className="font-medium text-2xl text-accent">
            Sinergi Mandiri Lestari adalah perusahaan penyedia berbagai macam produk elektronik untuk keperluan sehari-hari anda,Menyajikan lingkungan belanja yang nyaman dan menyenangkan baik di toko offline ataupun platfrom online,Pengiriman Cepat,Fasilitas Untuk Menguji Produk dan Memberikan kebijakan garansi pengembalian produk.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
