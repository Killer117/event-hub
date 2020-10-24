import React from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./Aboutstyle.css";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div id="aboutPage-About">
        <h1 className="aboutPage-h1">About Us</h1>
        <div className="container-fluid">
          <div className="row">
            <p className="col-8" id="aboutPage-about-desc">
              EventHub is a platform dedicated to provide customers with a wide
              assortment of different event management service plans of
              different companies for all sorts of corporate and personal
              events. Be it live shows, star nights, product launches, theme
              parties, wedding events, birthday parties, fashion shows, ghazal
              nights or any other event.
            </p>
            <img
              className="col-4"
              id="aboutPage-about-img"
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="ERROR"
            />
          </div>
          <div className="row">
            <img
              className="col-4"
              id="aboutPage-about-img"
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="ERROR"
            />
            <p className="col-8" id="aboutPage-about-desc">
              It’s your go-to platform, if you want to organize an event and
              don’t know which organising company will be best suited for you.
              At EventHub you will find all available plans of Inmarket
              organising companies for different events according to your
              requirements at your very screen.
            </p>
          </div>
        </div>
      </div>
      <div id="aboutPage-contact">
        <h1>Contact Us</h1>
        <div className="container-fluid contact-desc ">
          <div className="row">
            <div className="col-2">
              <h5>Mail us at :</h5>
            </div>
            <div className="col-4">EventHub.org</div>
          </div>
          <div className="row">
            <div className="col-2">
              <h5>Ring us at :</h5>
            </div>
            <div className="col-4">
              -1234567890
              <br />
              -011 2345678
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <h5>Meet us at :</h5>
            </div>
            <div className="col-4">
              Nesci Lawns, NSUT, <br />
              Azad Hind Fauz Marg, sec-3 Dwarka, New Delhi.
            </div>
          </div>
        </div>

        <div className="container-fluid" id="aboutPage-contact-links">
          <i className="social-icon fab fa-facebook-f"></i>
          <i className="social-icon fab fa-twitter"></i>
          <i className="social-icon fab fa-instagram"></i>
          <i className="social-icon fas fa-envelope"></i>
          <p className="mt-3">© Copyright 2020 EventHub.org</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
