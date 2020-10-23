import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import HomeOne from "./Home_One";
import HomeTwo from "./Home_Two";

function Home() {
  return (
    <div className="home__header">
      <Navbar />
      <div className="home__body">
        <HomeOne />
        <HomeTwo />
      </div>
    </div>
  );
}
export default Home;
