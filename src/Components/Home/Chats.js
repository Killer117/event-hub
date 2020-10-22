import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Chats() {
  const [color, setColor] = useState(0);
  return (
    <div>
      <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30 ">
        <div className="dropleft">
          <BsFillEnvelopeFill
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
            <Link className="dropdown-item" to="/">
              Hello
            </Link>
            <Link className="dropdown-item" to="/">
              Manjot
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Chats;
