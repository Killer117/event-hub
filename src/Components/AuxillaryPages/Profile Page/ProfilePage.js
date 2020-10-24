import React from "react";
import "./Profile Page(css).css";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="profilePage-wrapper">
        <div className="profilePage-left">
          <img
            src="https://smsi.ie/wp-content/uploads/2020/01/blank-profile-pic.png"
            alt="user"
          />
          <h4>Name</h4>
        </div>
        <div className="profilePage-right">
          <div className="profilePage-info">
            <h3>My Profile</h3>
            <div className="profilePage-info_data">
              <div className="profilePage-data">
                <br />
                <br />
                <h4>Email</h4>
                <h5>abc@gmail.com</h5>
                <br />
                <br />
                <h4>Phone</h4>
                <h5>0001-213-98765</h5>
                <br />
                <br />
                <h4>Password</h4>
                <h5>*******</h5>
              </div>

              <div className="profilePage-data profilePage-edit">
                <span>
                  <h2>Edit</h2>
                  <a href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCXodWd9Axpg00LLFOXCPMQXg4YCXk8NrSvg&usqp=CAU" />
                  </a>
                </span>
              </div>
            </div>

            <div className="profilePage-social_media">
              <br />
              <br />
              <br />
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default ProfilePage;
