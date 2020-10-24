import React from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./registration2.css";

function RegisterationPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 offset-2 offset-sm-5 col-sm-3 registeration-page-registrationform">
            <p id="h"> CREATE YOUR ACCOUNT</p>
            <form action="">
              <label for="Name">Name:</label>
              <br />
              <input
                type="text"
                name="Name"
                placeholder="Enter your Name"
                id="Name"
              />
              <br />
              <label for="DOB">Mobile Number:</label>
              <br />
              <input
                type="text"
                name="MOB"
                placeholder="Enter your contact"
                id="MOB"
              />
              <br />
              <label for="Email">Email:</label>
              <br />
              <input
                type="email"
                name="Email"
                placeholder="Enter your email"
                id="Email"
              />
              <br />
              <label for="Password">Password:</label>
              <br />
              <input
                type="password"
                name="Password"
                placeholder="Enter your password"
                id="Password"
              />
              <br />
              <label for="Cpassword">Confirm your password:</label>
              <br />
              <input
                type="password"
                name="Cpassword"
                placeholder="Confirm your password"
                id="Cpassword"
              />
              <br />
              <input
                type="submit"
                name="Submit"
                value="Create my account"
                id="Submit"
              />
            </form>
            <p>
              <a href="login.html"> Already have account?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterationPage;
