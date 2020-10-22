import React from "react";
import "./login.css";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_header">
      <Navbar />
      <div className="wrapper">
        <div className="title">EventHub</div>
        <form action="#">
          <div className="field">
            <input type="text" required />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <Link to="/">Forgot password?</Link>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            <Link to="/">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
