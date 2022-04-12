import "./FormLogin.css";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};
function FormLogin() {
  return (
    <>
      <div className="login-title">LOGIN</div>
      {/* <div className="form">
        <form>
          <div className="input-container">
            <label>Username: </label>
            <input type="text" name="username" required />
          </div>
          <div className="input-container">
            <label>Password: </label>
            <input type="password" name="password" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div> */}
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
}
export default FormLogin;
