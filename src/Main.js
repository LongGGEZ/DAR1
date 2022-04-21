import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import FormLogin from "./Login/FormLogin";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);
function Main() {
  const widthScreen = window.innerWidth;
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
      {/* {widthScreen > 1024 ? ( */}
        <div>
          <Routes>
            <Route path="/login" element={<FormLogin />} />
            <Route
              path="*"
              element={
                <>
                  <Header isSignedIn={isSignedIn} />
                  <Home />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      {/* ) : (
        <div
          style={{ position: "relative", textAlign: "center", color: "white" }}
        >
          <img
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            src="https://kenh14cdn.com/2020/11/8/imtrang9712109129813622770707838456271325980026100454n-16024617771231272710555-16048463937491067453878.jpg"
            alt="background"
          ></img>
          <h1
            style={{
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              backgroundColor: "rgb(0, 0, 0, 0.4)",
              color: "white",
              fontSize: "18px",
            }}
          >
            Website chưa hỗ trợ thiết bị di động!
          </h1>
        </div>
      )} */}
    </>
  );
}
export default Main;
