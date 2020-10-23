import React from "react";
import topBG from "../../pictures/topBG.png";

function Home_Three() {
  const imageContents = [
    {
      key: 1,
      image: topBG,
      header: "First slide label",
      content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      key: 2,
      image: topBG,
      header: "First slide label",
      content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      key: 3,
      image: topBG,
      header: "First slide label",
      content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      key: 4,
      image: topBG,
      header: "First slide label",
      content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      key: 5,
      image: topBG,
      header: "First slide label",
      content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];
  return (
    <div className="home__three">
      <p className="home__three__header">Image Gallery</p>
      <div className="d-flex justify-content-center">
        <hr width="250px" color="black" />
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          {imageContents.map((item) => {
            if (item.key != 1) {
              return (
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to={item.key}
                ></li>
              );
            }
          })}
        </ol>
        <div className="carousel-inner">
          {imageContents.map((item, index) => {
            return (
              <div
                key={item.key}
                className={`carousel-item ${item.key === 1 ? "active" : ""}`}
              >
                <img
                  src={item.image}
                  className="d-block w-100 image"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.header}</h5>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home_Three;
