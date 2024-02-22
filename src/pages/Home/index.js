import React from "react";
import Tentang from "../Tentang";
import Layanan from "../Layanan";
import Kontak from "../Kontak";
import Banner from "../Banner";


const Home = () => {
  return (
    <div>
      <Banner/>
      <Tentang/>
      <Layanan/>
      <Kontak/>
    </div>
  );
};

export default Home;