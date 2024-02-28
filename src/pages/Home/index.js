import React from "react";
import Tentang from "../Tentang";
import Layanan from "../Layanan";
import Kontak from "../Kontak";
import Banner from "../Banner";
import TimKami from "../TimKami";



const Home = () => {
  return (
    <div>
      <Banner/>
      <Tentang/>
      <Layanan/>
      <TimKami/>
      <Kontak/>
    </div>
  );
};

export default Home;