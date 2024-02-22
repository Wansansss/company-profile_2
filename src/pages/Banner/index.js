import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../../assets/images/banner.jpg"
import "../shared/Shared.css"
import { SecondaryBtn } from "../../components";

const Banner = () => {
  return (
    <div className="parent min-h-screen mx-auto py-16 flex flex-col-reverse lg:flex-row items-center justify-between bghome">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-0 text-4xl font-bold text-black">Sinergi Mandiri Lestari</h1>
        <h2 className="my-6 text-2xl font-bold text-purple-700">
          Memberikan Produk Elektronik Yang Berkualitas Untuk Anda!
        </h2>
        <p className="max-w-md mb-10 font-medium text-accent">
          Sinergi Mandiri Lestari adalah perusahaan penyedia berbagai macam
          Produk Elektronik,Pengiriman Cepat,Fasilitas Untuk Menguji Produk dan Memberikan kebijakan garansi pengembalian produk.
        </p>

        <div className="flex items-center mb-20">
          <Link to="https://ecommercesl.vercel.app" className="ml-4">
            <SecondaryBtn>
              <span className="text-button-mobile ">Kunjungi Marketplace</span>
              <span>
                <FaAngleRight />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="order-1 pt-10 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0">
          <img src={bannerImg} alt="Banner SINERGI MANDIRI LESTARI" className="bg-transparent"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
