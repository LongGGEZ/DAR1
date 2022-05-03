import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import FormLogin from "./Login/FormLogin";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { LoadingProvider } from "./Context/LoadingContext";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);
function Main() {
  // const widthScreen = window.innerWidth;
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        // const token = user.getIdToken();
      });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<FormLogin />} />
          <Route
            path="*"
            element={
              <>
                <Header isSignedIn={isSignedIn} />
                <LoadingProvider>
                  <Home />
                </LoadingProvider>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}
export default Main;
