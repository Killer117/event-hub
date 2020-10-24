import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";

function Profile() {
  const [color, setColor] = useState(0);
  return (
    <div>
      <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30 ">
        <div className="dropleft">
          <BsPeopleCircle
            size="25px"
            className="dropdown-toggle onHover"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            color={color === 1 ? "grey" : "white"}
            onMouseEnter={() => setColor(1)}
            onMouseLeave={() => setColor(0)}
          />

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/profile_page">
              Profile
            </Link>
            <Link className="dropdown-item" to="/login">
              sign in
            </Link>
            <Link className="dropdown-item" to="/registeration">
              register
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Profile;
