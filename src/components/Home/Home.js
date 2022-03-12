import { Routes, Route, NavLink } from "react-router-dom";
import ComingSoonPage from "../Contents/ComingSoon";
import NewsPage from "../Contents/News";
import TrendingPage from "../Contents/Trending";
import ContentPage from "../Contents/Content";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="topnav">
        <ul className="navbar">
          <li className="nav-menu">
            <NavLink activeclassname="active" to="/">
              <img
                src="https://img.icons8.com/material-outlined/48/000000/home--v2.png"
                alt="Icon Menu"
              />
              Home
            </NavLink>
          </li>
          <li className="nav-menu">
            <NavLink activeclassname="active" to="/news">
              <img
                src="https://img.icons8.com/ios/48/000000/film-reel--v2.png"
                alt="Phim mới"
              />
              Phim mới
            </NavLink>
          </li>
          <li className="nav-menu">
            <NavLink activeclassname="active" to="/trending">
              <img
                src="https://img.icons8.com/ios-glyphs/48/000000/fire-element--v1.png"
                alt="Phim thịnh hành"
              />
              Phim thịnh hành
            </NavLink>
          </li>
          <li className="nav-menu">
            <NavLink activeclassname="active" to="/comingsoon">
              <img
                src="https://img.icons8.com/external-bearicons-glyph-bearicons/48/000000/external-Coming-Soon-miscellany-texts-and-badges-bearicons-glyph-bearicons.png"
                alt="Phim sắp chiếu"
              />
              Phim sắp chiếu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<ContentPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/comingsoon" element={<ComingSoonPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default Home;
