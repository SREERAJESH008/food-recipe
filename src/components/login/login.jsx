import"./login.css"
import { useNavigate, Link } from "react-router-dom";

import React, { useState } from "react";







const Signin = () => {
    return (
      <div className="container">
        <form id="loginForm" className="form">
          <h2>Sign In</h2>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <button className="btn-1" type="submit">
            Sign In
          </button>

          <Link to={`/signup`}>
            <p className="message"> Don't Have an Account?</p>
          </Link>
        </form>
      </div>
    );
}
 
export default Signin;