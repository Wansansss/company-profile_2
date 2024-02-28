import React, { useEffect, useState } from "react";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { headingAnimation, kontakAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

const Kontak = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
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
    <div className="py-16 parent bg-gray-400">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h1 className="pt-16 text-4xl font-semibold text-center drop-shadow-md">
          Hubungi <span className="text-purple-700">Kami</span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="grid grid-cols-1 gap-20 mt-8 md:grid-cols-2">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={kontakAnimation}
        >
          <div>
            <h1 className="font-extrabold text-2xl">Sinergi Mandiri Lestari</h1>
            <br />
            <p>
              Terima kasih sudah berkunjung! Jika kamu memiliki pertanyaan seputar
              Sinergi Mandiri Lestari, Silahkan hubungi kami melalui kontak di
              laman ini.
            </p>
          </div>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={kontakAnimation}
        >
          <div className="flex items-center my-6">
            <FaMapMarkerAlt className="mr-8 text-4xl duration-300 cursor-pointer hover:text-purple-700"></FaMapMarkerAlt>
            <h3 className="font-medium text-purple-700">4, Jl. Utama Raya No.11.f, RT.4/RW.3, Cengkareng Bar., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730</h3>
          </div>
          <div className="flex items-center my-6">
            <a href={"https://wa.me/6282227000222?text=Hallo Admin,"}>
              <FaPhoneAlt className="mr-8 text-2xl duration-300 cursor-pointer hover:text-purple-700" />
            </a>
            <a href={"https://wa.me/6282227000222?text=Hallo Admin,"}><h3 className="font-medium text-purple-700">+62 822-2700-0222</h3></a>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="mr-8 text-2xl duration-300 cursor-pointer hover:text-purple-700"></MdEmail>
            <a href="mailto:Sinarlestari555@gmail.com"><h3 className="font-medium text-purple-700">Sinarlestari555@gmail.com</h3></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Kontak;
