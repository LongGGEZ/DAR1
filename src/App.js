import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { ModalContext } from "./Context/ModalContext";
import Modal from "./components/Modal/Modal";
import "./App.css";

function App() {
  const context = useContext(ModalContext);
  return (
    <div className="App">
      {context.showModal && <Modal />}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
