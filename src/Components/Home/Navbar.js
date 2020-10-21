import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  BsPeopleCircle,
  BsFillBellFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

function Navbar() {
  const navbarContentsLeft = [
    {
      to: "/home",
      name: "Home",
    },
    {
      to: "/about",
      name: "About",
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
                <li className="nav-item active" key={index}>
                  <Link className="nav-link underlineOnHover" to={item.to}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr className="d-xl-none w-75 m-auto " color="grey" />
          <div className="navbar-nav right d-flex flex-row">
            <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30">
              <BsFillBellFill size="25px" color="white" />
              <label>Notification</label>
            </Link>
            <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30">
              <BsFillEnvelopeFill size="25px" color="white" />
              <label>Chats</label>
            </Link>
            <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30">
              <div className="dropleft">
                <BsPeopleCircle
                  size="25px"
                  color="white"
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/">
                    Profile
                  </Link>
                  <Link className="dropdown-item" to="/">
                    sign out
                  </Link>
                </div>
              </div>
              <label>Account</label>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
