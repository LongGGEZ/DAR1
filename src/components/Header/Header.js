import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href={"/"}>
            <img
              src="https://img.icons8.com/stickers/50/000000/pixar-lamp.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="user">
          {/* <div className="notification" href="/">
            <img
              src="https://img.icons8.com/material-sharp/28/ffffff/bell.png"
              alt="Thông báo"
            />
          </div> */}
          <Link to={"/login"}>
            <div className="user_info">
              {/* <img
              src="https://img.icons8.com/ios-glyphs/34/ffffff/user--v1.png"
              alt="User"
            /> */}
              Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
