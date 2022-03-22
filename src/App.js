import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { ModalContext } from "./Context/ModalContext";
import Modal from "./components/Modal/Modal";
import "./App.css";

function App() {
  const context = useContext(ModalContext);
  const widthScreen = window.innerWidth;

  return (
    <div className="App">
      {widthScreen > 1024 ? (
        <div>
          {context.showModal && <Modal />}
          <Header />
          <Home />
          <Footer />
        </div>
      ) : (
        <div
          style={{ position: "relative", textAlign: "center", color: "white" }}
        >
          <img
            style={{ width: "100%" }}
            src="https://upanh123.com/wp-content/uploads/2020/10/hinh-nen-dien-thoai-.jpg"
            alt="background"
          ></img>
          <h1 style={{ position: "absolute", top: "20%",left:"50%", transform:"translate(-50%,-50%)" }}>
            {" "}
            Website chưa hỗ trợ thiết bị di động!
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
