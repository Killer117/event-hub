import React from "react";
import { Link } from "react-router-dom";
import topBG from "../../pictures/topBG.png";

function Home_Two() {
  const cardsInfo = [
    { key: 1, image: { topBG }, title: "Birthday", content: "Happy birthday" },
    { key: 2, image: { topBG }, title: "Birthday", content: "Happy birthday" },
    { key: 3, image: { topBG }, title: "Birthday", content: "Happy birthday" },
    { key: 4, image: { topBG }, title: "Birthday", content: "Happy birthday" },
    { key: 5, image: { topBG }, title: "Birthday", content: "Happy birthday" },
    { key: 6, image: { topBG }, title: "Birthday", content: "Happy birthday" },
    { key: 7, image: { topBG }, title: "Birthday", content: "Happy birthday" },
    { key: 8, image: { topBG }, title: "Birthday", content: "Happy birthday" },
  ];
  return (
    <div className="home_two">
      <p className="text-center events_text mt-2">Our Events</p>
      <div className="d-flex justify-content-center">
        <hr width="20%" color="black" />
      </div>
      <div className="p-3 m-3 d-flex justify-content-center cardsSet">
        {cardsInfo.map((item) => {
          return (
            <div key={item.key} className="card p-3 m-2">
              <img src={topBG} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <Link to="/portfolio" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home_Two;
