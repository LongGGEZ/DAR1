import { useContext, useRef, useEffect } from "react";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "./MenuMobile.css";
import { MenuMobileContext } from "../../Context/MenuMobileContext";
import { NavLink } from "react-router-dom";
function MenuMobile() {
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

  return (
    <div className="menu-mobile-custom">
      <div ref={menuMobileRef} className="wrapper">
        <div
          onClick={context.handleCloseMenuMobile}
          className="close-menu-mobile"
        >
          <img src="https://img.icons8.com/ios-glyphs/24/000000/delete-sign.png" alt="Menu mobile" />
        </div>
        <ul id="menu-mobile-list">
          <li>
            <span>Hello, </span>
            {/* {firebase.auth().currentUser.displayName}! */}
          </li>
          <hr />
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="#">
              Trang cá nhân
            </NavLink>
          </li>
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="#">
              List Phim yêu thích
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/news">
              Phim mới
            </NavLink>
          </li>
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/trending">
              Phim thịnh hành
            </NavLink>
          </li>
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="/rank">
              Xếp hạng phim
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink onClick={context.handleCloseMenuMobile} to="#">
              Cài đặt
            </NavLink>
          </li>
          <li
            onClick={context.handleCloseMenuMobile}
            // onClick={() => firebase.auth().signOut()}
          >
            Đăng Xuất
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MenuMobile;
