import React from "react";
import logo from "../../../assets/images/LogoSInergiMandiriLestari.png"
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="p-20 footer text-base-100 bg-indigo-100">
        <div>
          <Link to="/">
            <img src={logo} alt="Sinergi Mandiri Lestari " className="w-40 sm:w-46" />
          </Link>
          <h1 className="text-2xl font-bold text-black ">
            Sinergi Mandiri Lestari
          </h1>
          <span className="text-accent">4, Jl. Utama Raya No.11.f, RT.4/RW.3, Cengkareng Bar., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730</span>
          <div className="flex items-center my-1">
            <FaPhoneAlt className="mr-6 text-2xl text-accent"></FaPhoneAlt>
            <div className="flex flex-col">
              <a href="https://wa.me/6282137026688?text=Hallo Admin," className="font-medium text-purple-700">+62 821-3702-6688</a>
              <a href="https://wa.me/6282227000222?text=Hallo Admin," className="font-medium text-purple-700">+62 822-2700-0222</a>
              <a href="https://wa.me/6282250001666?text=Hallo Admin," className="font-medium text-purple-700">+62 822-5000-1666</a>
              <a href="https://wa.me/6281290844844?text=Hallo Admin," className="font-medium text-purple-700">+62 812-9084-4844</a>
            </div>
          </div>
          <div className="flex items-center my-1">
            <MdEmail className="mr-6 text-2xl text-accent"></MdEmail>
            <a href="mailto:Sinarlestari555@gmail.com"><h3 className="font-medium text-purple-700">Sinarlestari555@gmail.com</h3></a>
          </div>
        </div>
        {/* Tautan */}
        <div className="md:mt-12 md:pl-8">
          <span className="font-bold text-black text-xl">Tautan</span>
          <Link
            to="/"
            className="link link-hover hover:text-purple-700 text-accent"
          >
            <span>Beranda</span>
          </Link>
          <Link
            to="/tentang"
            className="link link-hover hover:text-purple-700 text-accent"
          >
            <span>Tentang</span>
          </Link>
          <Link
            to="/layanan"
            className="link link-hover hover:text-purple-700 text-accent"
          >
            <span>Layanan</span>
          </Link>
          <Link
            to="/kontak"
            className="link link-hover hover:text-purple-700 text-accent"
          >
            <span>Kontak</span>
          </Link>
        </div>
        {/* Fokus & Layanan */}
        <div className="md:mt-12 md:pl-8">
          <span className="font-bold text-black text-xl">Fokus & Layanan</span>
          <h1 className="text-accent">
            Menyediakan layanan pelanggan yang responsive untuk membantu
            pelanggan dalam pertanyaan, masalah, maupun bantuan teknis
          </h1>
        </div>
        <div className="flex items-center md:mt-12">
          <a
            href="/"
            target="blank"
            className="text-4xl text-accent hover:text-purple-700 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a
            href="/"
            target="blank"
            className="text-4xl text-accent hover:text-purple-700 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a
            href="/"
            target="blank"
            className="text-4xl text-accent hover:text-purple-700 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaInstagramSquare></FaInstagramSquare>
          </a>
        </div>
      </footer>
      <footer className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-gray-400 ">
        <div className="w-full h-[2px] bg-purple-900"></div>
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-black font-semibold">
          <p>
            &copy; Copyright 2022, PT. Sinergi Mandiri Lestari. All Rights
            Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
