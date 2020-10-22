import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import Home_One from "./Home_One";
import Home_Two from "./Home_Two";

function Home() {
  return (
    <div className="home__header">
      <Navbar />
      <div className="home__body">
        <Home_One />
        <Home_Two />
      </div>
    </div>
  );
}
export default Home;
