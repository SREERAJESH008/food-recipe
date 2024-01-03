import "./signup.css"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../components/firebase/firebase.js";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!password || !confirmPassword) {
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
  };
};

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