import { Link } from "react-router-dom";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "./Header.css";
function Header({ isSignedIn }) {
  // const logo= document.getElementsByClassName("logo")
  // const widthScreen =  window.innerWidth
  // if(widthScreen <768){
  //  //code
  // }
  // console.log(logo)
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
        {/* <div className="menu-mobile">
          <a href={"/"}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" alt="menu-mobile"/>
          </a>
        </div> */}
        <div className="menu-bar">
          <div className="menu-children"> 
            <span>Thể loại</span>
          </div>
          <div className="menu-children">
            <span>Quốc gia</span>
          </div>
          <div className="menu-children">
            <span>Năm phát hành</span>
          </div>
          <div className="search">
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>
        <div className="user">
          <div className="notification" href="/">
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/24/000000/external-bell-essentials-pack-tanah-basah-glyph-tanah-basah.png"
              alt="Thông báo"
            />
          </div>
          {isSignedIn === true ? (
            <>
              <div className="display-user">
                Hello, {firebase.auth().currentUser.displayName}!
              </div>
              <div
                className="logout"
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
