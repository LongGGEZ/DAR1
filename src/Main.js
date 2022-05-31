import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import FormLogin from "./Login/FormLogin";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import { MenuMobileContext } from "./Context/MenuMobileContext";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);
function Main() {
  const context = useContext(MenuMobileContext);

  // const widthScreen = window.innerWidth;
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        // const token = user.getIdToken();
        // console.log(token)
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
                {context.showMenuMobile && (
                  <MenuMobile isSignedIn={isSignedIn} />
                )}
                <Header isSignedIn={isSignedIn} />
                <Home />
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
