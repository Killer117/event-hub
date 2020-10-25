import React, { useEffect } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./registrationPage.css";

function RegisterationPage() {
  useEffect(() => {
    document.title = "Register";
  }, []);
  return (
    <div className="regPage">
      <Navbar />
      <div className="regPage-bg"></div>
    </div>
  );
}

export default RegisterationPage;
