import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Notification from "./Notification";
import Chats from "./Chats";

function Navbar({ activeTab }) {
  console.log(activeTab);
  const navbarContentsLeft = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/about_us",
      name: "About Us",
    },
    {
      to: "/faqs",
      name: "FAQs",
    },
    {
      to: "/contact_us",
      name: "Contact us",
    },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <Link className="navbar-brand font-weight-bolder" to="/">
          <h1 className="name">Event Hub</h1>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto left">
            {navbarContentsLeft.map((item, index) => {
              return (
                <li
                  className={`nav-item ${
                    activeTab === item.name ? "active" : ""
                  } underlineOnHover`}
                  key={index}
                >
                  <Link
                    className={`nav-link ${
                      activeTab === item.name ? "underline" : ""
                    }`}
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr
            className="d-block d-xl-none d-lg-none w-75 m-auto "
            color="grey"
          />

          <div className="navbar-nav right d-flex flex-row">
            <Notification />
            <Chats />
            <Profile />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
