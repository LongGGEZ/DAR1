import { useContext, useRef, useEffect } from "react";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "./MenuMobile.css";
import { MenuMobileContext } from "../../Context/MenuMobileContext";
import { NavLink, Link } from "react-router-dom";
function MenuMobile({ isSignedIn }) {
  const context = useContext(MenuMobileContext);
  const menuMobileRef = useRef();
  const handleCloseOutSide = (e) => {
    if (menuMobileRef && !menuMobileRef.current.contains(e.target)) {
      context.handleCloseMenuMobile();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseOutSide, true);

    return () => {
      document.removeEventListener("click", handleCloseOutSide, true);
    };
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
    context.handleCloseMenuMobile();
  };

  return (
    <div className="menu-mobile-custom">
      <div ref={menuMobileRef} className="wrapper">
        <div
          onClick={context.handleCloseMenuMobile}
          className="close-menu-mobile"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/32/000000/delete-sign.png"
            alt="Menu mobile"
          />
        </div>
        <ul id="menu-mobile-list">
          {isSignedIn ? (
            <>
              <li>
                <span>Hello, </span>
                {firebase.auth().currentUser.displayName}!
              </li>
              <hr />
              <li>
                <NavLink onClick={context.handleCloseMenuMobile} to="#">
                  <img
                    src="https://img.icons8.com/ios-filled/32/000000/identification-documents.png"
                    alt="Cá Nhân"
                  />
                  Trang cá nhân
                </NavLink>
              </li>
              <li>
                <NavLink onClick={context.handleCloseMenuMobile} to="#">
                  <img
                    src="https://img.icons8.com/pastel-glyph/32/000000/hearts--v2.png"
                    alt="Favourite"
                  />
                  List phim yêu thích
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <hr />
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/">
              <img
                src="https://img.icons8.com/material-outlined/32/000000/home--v2.png"
                alt="Icon Menu"
              />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/news">
              <img
                src="https://img.icons8.com/ios/32/000000/film-reel--v2.png"
                alt="Phim mới"
              />
              <span>Phim mới</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/trending">
              <img
                src="https://img.icons8.com/ios-glyphs/32/000000/fire-element--v1.png"
                alt="Phim thịnh hành"
              />
              <span> Phim thịnh hành</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/rank">
              <img
                src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/32/000000/external-ranking-sports-and-awards-smashingstocks-glyph-smashing-stocks.png"
                alt="Rank Movie"
              />
              <span>Xếp hạng phim</span>
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="#">
              <img
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/32/000000/external-setting-essentials-pack-tanah-basah-glyph-tanah-basah.png"
                alt="Setting"
              />
              <span>Cài đặt</span>
            </NavLink>
          </li>
          {isSignedIn && (
            <li onClick={handleLogout}>
              <a>
                <img
                  src="https://img.icons8.com/metro/32/000000/exit.png"
                  alt="Logout"
                />
                Đăng Xuất
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default MenuMobile;
