import React, { useEffect } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./registrationPage.css";
import one from "../../../pictures/one.jpg";
import two from "../../../pictures/two.jpg";
import three from "../../../pictures/three.jpg";
import four from "../../../pictures/four.jpg";

function RegisterationPage() {
  useEffect(() => {
    document.title = "Register";
  }, []);
  const imageContents = [
    {
      key: 1,
      image: one,
    },
    {
      key: 2,
      image: two,
    },
    {
      key: 3,
      image: three,
    },
    {
      key: 4,
      image: four,
    },
  ];
  return (
    <div className="regPage">
      <Navbar />
      <div className="regPage-content">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide regPage-corousel"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {imageContents.map((item) => {
              return (
                <div
                  key={item.key}
                  className={`carousel-item ${
                    item.key === 1 ? "active" : ""
                  } regpage-corousel-item`}
                  data-interval="10000"
                >
                  <img
                    src={item.image}
                    className="d-block regPage-Image"
                    alt="photos"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="regPage-form">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterationPage;
