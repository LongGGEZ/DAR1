import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import requests from "../../FecthDataMovie/FecthDataAll";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import ReactLoading from "react-loading";
import "./Header.css";

function Header({ isSignedIn }) {
  const posterMovieUrl = process.env.REACT_APP_POSTER_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keywords, setKeyWords] = useState("");
  const [show, setShow] = useState(false);
  // const [showList, setShowList] = useState(false);
  const [genres, setGenres] = useState([]);
  // const [countries, setCountries] = useState([]);

  // const [menu, setMenu] = useState({
  //   genres: [],
  //   countries: [],
  // });

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          // `/search/movie?api_key=${APIKey}&language=vi&page=1&include_adult=false&query=${keywords}`
          `/search/multi?api_key=${APIKey}&language=vi&page=1&include_adult=false&query=${keywords}`
        );
        setMovies(data && data.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error(error);
      }
    };
    if (keywords.trim().length !== 0) {
      setIsLoading(true);
      fetchMovie();
    }
  }, [keywords]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await apiMovie.get(requests.fecthGenreMovie);
        setGenres(data && data.genres);
      } catch (error) {
        console.error(error);
      }
    };
    fetchList();
  }, []);

  // useEffect(() => {
  //   const fetchList = async () => {
  //     try {
  //       const { data } = await apiMovie.get(requests.fecthCountries);
  //       setCountries(data);
  //       // console.log(data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchList();
  // }, []);

  const listResult = useRef();
  const searchInput = useRef();
  const search = useRef();

  const handleClickOutside = (e) => {
    if (listResult.current && !listResult.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleFocusInput = () => {
    setShow(true);
  };
  const handleRemove = () => {
    setKeyWords("");
    setMovies([]);
    handleClose();
  };
  const noResults = (
    <div className="search-label">Không tìm thấy kết quả tìm kiếm.</div>
  );
  const results = <div className="search-label">Kết quả tìm kiếm: </div>;
  const ResultSearch = () => {
    if (keywords && movies.length !== 0) {
      return results;
    } else if (keywords && movies.length === 0) {
      return noResults;
    } else {
      return null;
    }
  };

  return (
    <>
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
            {
              <div className="menulist">
                {genres &&
                  genres.map((genre) => (
                    <ul key={genre.id}>
                      <li>{genre.name}</li>
                    </ul>
                  ))}
              </div>
            }
          </div>
          <div className="menu-children">
            <span>Quốc gia</span>
            {/* {
              <div className="menulist">
                {countries &&
                  countries.slice(0, 20).map((countrie, index) => (
                    <ul key={index}>
                      <li>{countrie.native_name}</li>
                    </ul>
                  ))}
              </div>
            } */}
            <div className="menulist">
              <ul>
                <li>Phim Trung Quốc</li>
                <li>Phim Nhật Bản</li>
                <li>Phim Thái Lan</li>
                <li>Phim Ấn Độ</li>
                <li>Phim Hàn Quốc</li>
                <li>Phim Âu Mỹ</li>
                <li>Phim Đài Loan</li>
                <li>Phim Phim Hồng Kông</li>
              </ul>
            </div>
          </div>
          <div className="menu-children">
            <span>Năm phát hành</span>
            <div className="menulist">
              <ul className="list-year">
                <li>2022</li>
                <li>2021</li>
                <li>2020</li>
                <li>2019</li>
                <li>2018</li>
                <li>2017</li>
                <li>2016</li>
                <li>2015</li>
                <li>2014</li>
                <li>2013</li>
                <li>2012</li>
                <li>2011</li>
                <li>2010</li>
              </ul>
            </div>
          </div>
          <div className="search">
            <div ref={search} className="input-search w3-large ">
              <i className="material-icons">search</i>
              <input
                ref={searchInput}
                value={keywords}
                onBlur={() => {
                  search.current.style = null;
                }}
                onFocus={() => {
                  search.current.style.border = "2px solid black";
                }}
                onClick={handleFocusInput}
                onChange={(e) => {
                  setKeyWords(e.target.value);
                  if (keywords.length !== 0) {
                    setMovies([]);
                  }
                }}
                type="text"
                placeholder="Search..."
              ></input>
              {keywords && (
                <i onClick={handleRemove} className="material-icons">
                  close
                </i>
              )}
            </div>
            {show && (
              <div ref={listResult} className="search-results">
                {isLoading ? (
                  <div className="isloading-search">
                    <ReactLoading
                      type="bubbles"
                      color="black"
                      className="loading"
                    />
                  </div>
                ) : (
                  <>
                    {/* {(keywords && movies.length === 0)|| (keywords.indexOf(' ') >= 0 && movies.length === 0)  && (
                      <div className="search-label">
                        Không tìm thấy kết quả tìm kiếm
                      </div>
                    )}
                    {keywords && movies.length > 0 && (
                      <div className="search-label">Kết quả tìm kiếm: </div>
                    )} */}
                    <ResultSearch />
                    {movies.filter((movie) =>
                      movie.media_type !== "person").slice(0,7).map((movie) => (
                      <div key={movie.id}>
                        <Link
                          onClick={handleClose}
                          className="search-item"
                          to={
                            movie.media_type === "tv"
                              ? `/tv/${movie.id}`
                              : `/movie/${movie.id}`
                          }
                        >
                          <img
                            src={
                              movie.poster_path
                                ? `${posterMovieUrl}${movie.poster_path}`
                                : "http://hoahieu.com.vn/wp-content/themes/kutetheme/images/placeholder.jpg"
                            }
                            alt="Poster"
                          />
                          <div className="search-results-title">
                            {movie.name || movie.title || movie.original_title}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
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
    </>
  );
}
export default Header;
