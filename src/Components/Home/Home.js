import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import HomeOne from "./Home_One";
import HomeTwo from "./Home_Two";
import HomeThree from "./Home_Three";
// import Bottom from "./Bottom";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <HomeOne />
        <HomeTwo />
        <HomeThree />
      </div>
    </div>
  );
}
export default Home;
