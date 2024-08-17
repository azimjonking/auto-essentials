import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaCheck } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <form>
          <h1>Login</h1>

          <div className="form-group">
            <label htmlFor="username">Username or email address</label>
            <input type="text" id="username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <label>
            <input type="checkbox" />
            <span className="icon">
              <FaCheck />
            </span>
            <span className="text">Remember me</span>
          </label>

          <div className="links">
            <Link to="/" className="login-link">
              Login
            </Link>
            <Link to="/" className="forget-password">
              Lost Your Password?
            </Link>
          </div>
        </form>
      </div>

      <div className="register">
        <form>
          <h1>Register</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" />
          </div>

          <p>
            A link to set a new password will be sent to your email address.
          </p>

          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <Link to="/">privacy policy.</Link>
          </p>

          <Link to="/">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
