import "./signup.css"

const SignUp = () => {
    return ( 
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
     );
}
 
export default SignUp ;