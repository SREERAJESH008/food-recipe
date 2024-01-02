import"./login.css"
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
    return (
      <div className="container">
        <form id="loginForm" className="form">
          <h2>Sign In</h2>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <button className="btn-1" type="submit">Sign In</button>
          <p className="message"> Don't Have an Account?</p>
        </form>
        <div className="container-2">
          <form id="signupForm" className="form">
            <h2>Sign Up</h2>
            <label htmlFor="newUsername">Username</label>
            <input type="text" id="newUsername" name="newUsername" />

            <label htmlFor="newPassword">Password</label>
            <input type="password" id="newPassword" name="newPassword" />

            <label htmlFor="newPassword"> Conform Password</label>
            <input type="password" id="newPassword" name="newPassword" />

            <button className="btn-1" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
}
 
export default Login;