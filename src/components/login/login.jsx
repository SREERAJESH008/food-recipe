import"./login.css"
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../components/firebase/firebase.js";
import React, { useState } from "react";



const Login = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if ( !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    // Additional validation or sign-up logic can be added here

    alert("SIGN UP SUCCESS !");
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      navigate("/slide");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      alert("Google sign-in failed. Please try again.");
    }
  }
  };



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
 
export default Login;