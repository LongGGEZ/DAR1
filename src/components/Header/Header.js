import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import requests from "../../FecthDataMovie/FecthDataAll";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import ReactLoading from "react-loading";
import { ModalContext } from "../../Context/ModalContext";
import { MenuMobileContext } from "../../Context/MenuMobileContext";
import "./Header.css";

function Header({ isSignedIn }) {
  const posterMovieUrl = process.env.REACT_APP_POSTER_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keywords, setKeyWords] = useState("");
  const [show, setShow] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [genres, setGenres] = useState([]);
  const context = useContext(ModalContext);
  const contextMenuMobile = useContext(MenuMobileContext);

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
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };
    if (keywords.trim().length !== 0) {
      setIsLoading(true);
      fetchMovie();
    }
    return () => {
      clearTimeout();
    };
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

  const menuProfile = useRef();

  const handleClickOutSideMenuProfile = (e) => {
    if (menuProfile.current && !menuProfile.current.contains(e.target)) {
      context.handleCloseModal();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutSideMenuProfile);
    return () => {
      document.removeEventListener("click", handleClickOutSideMenuProfile);
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
    <div className="search-label">Kh??ng t??m th???y k???t qu??? t??m ki???m!</div>
  );
  const results = <div className="search-label">K???t qu??? t??m ki???m: </div>;
  const ResultSearch = () => {
    if (keywords && movies.length !== 0) {
      return results;
    } else if (keywords && movies.length === 0) {
      return noResults;
    } else {
      return null;
    }
  };

  const handleHover = () => {
    setIsHover(true);
  };
  const handleLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <div className="header">
        <div
          onClick={contextMenuMobile.handleShowMenuMobile}
          className="menu-mobile"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/24/000000/menu-rounded.png"
            alt="Menu"
          />
        </div>
        <div className="logo">
          <a href={"/"}>
            <img
              src="https://img.icons8.com/cotton/50/000000/cinema-.png"
              alt="Logo"
            />
          </a>
        </div>

        <div className="menu-bar">
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="menu-children"
          >
            <span>Th??? lo???i</span>
            {isHover && (
              <div className="menulist">
                {genres &&
                  genres.map((genre) => (
                    <ul key={genre.id}>
                      <li>
                        <Link onClick={handleLeave} to={`/genre/${genre.id}`}>
                          {genre.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
              </div>
            )}
          </div>
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="menu-children"
          >
            <span>Qu???c gia</span>
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
            {isHover && (
              <div className="menulist">
                <ul>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim Trung Qu???c
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim Nh???t B???n
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim Th??i Lan
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim ???n ?????
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim H??n Qu???c
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim ??u M???
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim ????i Loan
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      Phim Phim H???ng K??ng
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="menu-children"
          >
            <span>N??m ph??t h??nh</span>
            {isHover && (
              <div className="menulist">
                <ul className="list-year">
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2022
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2021
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2020
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2019
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2018
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2017
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2016
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2015
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2014
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2013
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2012
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2011
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2010
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLeave} to={"#"}>
                      2009
                    </Link>
                  </li>
                </ul>
              </div>
            )}
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
                    <ResultSearch />
                    {movies
                      .filter((movie) => movie.media_type !== "person")
                      .slice(0, 7)
                      .map((movie) => (
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
                              {movie.name ||
                                movie.title ||
                                movie.original_title}
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
              alt="Th??ng b??o"
            />
          </div>
          <div className="language" href="/">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/geography.png"
              alt="Languege"
            />
          </div>
          {isSignedIn ? (
            <>
              <div
                ref={menuProfile}
                onClick={context.handleShowModal}
                className="user-profile"
              >
                <img
                  src="https://img.icons8.com/fluency/24/000000/user-male-circle.png"
                  alt="Profile"
                />
                {context.showModal && (
                  <div className="menu-profile">
                    <ul>
                      <li className="display-user">
                        <span>Hello, </span>
                        {firebase.auth().currentUser.displayName}!
                      </li>
                      <hr />
                      <li>Trang c?? nh??n</li>
                      <hr />
                      <li>List phim y??u th??ch</li>
                      <hr />
                      <li>C??i ?????t</li>
                      <li onClick={() => firebase.auth().signOut()}>
                        ????ng Xu???t
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link className="login" to="/login">
              <div className="user_login">Login</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
