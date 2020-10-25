import React from "react";

function Bottom() {
  return (
    <div>
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

export default Bottom;
