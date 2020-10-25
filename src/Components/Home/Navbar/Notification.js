import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";

function Notification() {
  const [color, setColor] = useState(0);
  return (
    <div>
      <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30 ">
        <div className="dropleft">
          <BsFillBellFill
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
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Pranay</b>
                </h5>
                <p className="card-text">Hello Bhupender</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Bhupender</b>
                </h5>
                <p className="card-text">Hello Pranay</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Notification;
