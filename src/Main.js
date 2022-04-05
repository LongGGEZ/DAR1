import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import FormLogin from "./Login/FormLogin";
function Main() {
  const widthScreen = window.innerWidth;
  return (
    <>
      {widthScreen > 1024 ? (
        <div>
          <Routes>
            <Route path="/login" element={<FormLogin />} />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      ) : (
        <div
          style={{ position: "relative", textAlign: "center", color: "white" }}
        >
          <img
            style={{ width: "100%" }}
            src="https://1.bigdata-vn.com/wp-content/uploads/2021/10/1633978977_780_Tong-Hop-Anh-Girl-Xinh-Viet-Nam-P1.jpg"
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
      )}
    </>
  );
}
export default Main;
