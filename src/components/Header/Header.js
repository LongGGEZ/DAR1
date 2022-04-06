import { Link } from "react-router-dom";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "./Header.css";
function Header({ isSignedIn }) {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href={"/"}>
            <img
              src="https://img.icons8.com/cotton/50/000000/cinema-.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="user">
          <div className="notification" href="/">
          <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/24/000000/external-bell-essentials-pack-tanah-basah-glyph-tanah-basah.png" alt="Thông báo"/>
          </div>

          {isSignedIn === true ? (
            <>
              <div style={{ marginRight: "10px" }}>
                Chào mừng {firebase.auth().currentUser.displayName}!
              </div>{" "}
              <div
                style={{ cursor: "pointer" }}
                onClick={() => firebase.auth().signOut()}
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/24/000000/logout-rounded--v1.png"
                  alt="Sign Out"
                />
              </div>
            </>
          ) : (
            <Link to={"/login"}>
              <div className="user_info">Login</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
