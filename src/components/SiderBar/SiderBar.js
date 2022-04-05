import { NavLink } from "react-router-dom";
import "./SiderBar.css";
function SiderBar() {
  return (
    <div className="siderbar_left">
      <ul className="siderbar">
        <li className="siderbar-menu">
          <NavLink activeclassname="active" to="/">
              <img
                src="https://img.icons8.com/material-outlined/32/000000/home--v2.png"
                alt="Icon Menu"
              />
              Home
          </NavLink>
        </li>
        <li className="siderbar-menu">
          <NavLink activeclassname="active" to="/news">
            <img
              src="https://img.icons8.com/ios/32/000000/film-reel--v2.png"
              alt="Phim mới"
            />
            Phim mới
          </NavLink>
        </li>
        <li className="siderbar-menu">
          <NavLink activeclassname="active" to="/trending">
            <img
              src="https://img.icons8.com/ios-glyphs/32/000000/fire-element--v1.png"
              alt="Phim thịnh hành"
            />
            Phim thịnh hành
          </NavLink>
        </li>
        <li className="siderbar-menu">
          <NavLink activeclassname="active" to="/rank">
            <img
              src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/35/000000/external-ranking-sports-and-awards-smashingstocks-glyph-smashing-stocks.png"
              alt="Rank Movie"
            />
            Xếp hạng phim
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default SiderBar;
