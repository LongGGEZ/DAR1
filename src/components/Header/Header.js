import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import ReactLoading from "react-loading";
import "./Header.css";
function Header({ isSignedIn }) {
  // const logo= document.getElementsByClassName("logo")
  // const widthScreen =  window.innerWidth
  // if(widthScreen <768){
  //  //code
  // }
  // console.log(logo)
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keywords, setKeyWords] = useState("");
  // console.log(context.isLoading)
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/search/movie?api_key=${APIKey}&language=vi&page=1&include_adult=false&query=${keywords}`
        );
        setMovies(data && data.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        // console.log(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (keywords !== "") {
      setIsLoading(true);
      fetchMovie();
    }
  }, [keywords]);
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
            <div className="input-search">
              <input
                value={keywords}
                onChange={(e) => {
                  setKeyWords(e.target.value);
                  if (keywords !== "") {
                    setMovies([]);
                  }
                }}
                type="text"
                placeholder="Search..."
              ></input>{" "}
            </div>
            <div className="search-results">
              {isLoading ? (
                <div className="isloading-search">
                  <ReactLoading
                    type="bubbles"
                    color={"black"}
                    className="loading"
                  />
                </div>
              ) : (
                <>
                  {movies.slice(0, 7).map((movie, index) => (
                    <Link
                      className="search-results-item"
                      to={`/movie/${movie.id}`}
                      key={index}
                    >
                      <img
                        style={{ width: "10%" }}
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "http://hoahieu.com.vn/wp-content/themes/kutetheme/images/placeholder.jpg"
                        }
                        alt="Poster"
                      />
                      <div className="search-results-title">
                        {movie.original_title}
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
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
