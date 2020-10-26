import React from "react";
import { Link } from "react-router-dom";
import topBG from "../../pictures/topBG.png";

function Home_Two({ page_two }) {
  const cardsInfo = [
    { key: 1, image: topBG, title: "Birthday", content: "Check it out" },
    { key: 2, image: topBG, title: "Birthday", content: "Check it out" },
    { key: 3, image: topBG, title: "Birthday", content: "Check it out" },
    { key: 4, image: topBG, title: "Birthday", content: "Check it out" },
    { key: 5, image: topBG, title: "Birthday", content: "Check it out" },
  ];
  return (
    <div className="home__two" ref={page_two}>
      <p className="text-center events_text mt-2">Our Events</p>
      <div className="d-flex justify-content-center">
        <hr width="250px" color="black" />
      </div>
      <div className="p-1 m-1 d-flex justify-content-center cardsSet">
        {cardsInfo.map((item) => {
          return (
            <div key={item.key} className="card p-3 m-3">
              <img src={item.image} className="card-img-top" alt="photos" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <Link to="/" className="btn btn-primary">
                  Go there
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
