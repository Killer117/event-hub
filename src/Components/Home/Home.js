import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  const contents = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    4,
    4,
    56645,
    7457,
    7,
    658,
    8,
    56,
    45,
    446,
    456,
    567,
    56,
    7567,
    4,
    7565,
    7,
    646,
    5,
    6756,
    7,
    74573454,
    745,
    7,
    457,
    57,
    57,
    57,
    57,
    745,
  ];
  return (
    <div>
      <Navbar />
      <div className="mt-100">
        <ul>
          {contents.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
