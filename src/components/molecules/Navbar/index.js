import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../../assets/images/LogoSInergiMandiriLestari.png";
import { ImCross } from "react-icons/im";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../pages/shared/Shared.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Beranda", link: "/" },
    { title: "Tentang", link: "/tentang" },
    { title: "Layanan", link: "/layanan" },
    { title: "Kontak", link: "/kontak" },
  ];
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "purple",
    };
  };

  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`visible ${show && "nav-hidden"} shadow-md bg-indigo-100 
     z-50`}
    >
      <div className="flex items-center justify-between w-full px-3 py-3 md:px-24">
        <div>
          <Link to="/">
            <img
              className="pr-10"
              height={200}
              width={250}
              src={logo}
              alt="Logo Sinergi Mandiri Lestari"
            />
          </Link>
        </div>
        <div>
          <ul className="items-center hidden lg:flex">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="duration-300 font-semibold text-lg text-black hover:text-purple-800"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="block lg:hidden">
            <button onClick={toggleDrawer} className="hover:text-purple-700">
              <FaBars></FaBars>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: "#e5e7eb" }}
              className="flex flex-col justify-between pb-4 bla"
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <ImCross
                    className="duration-300 cursor-pointer hover:text-purple-700"
                    onClick={() => setIsOpen(!isOpen)}
                  ></ImCross>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center duration-300 text-accent hover:text-purple-700"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}