import { useEffect, useContext } from "react";
import SlideBanner from "../SlideBanner/SlideBanner";
import ListFilm from "./Contents/ListFilm";
import requests from "../../FecthDataMovie/FecthDataAll";
import "react-loading-skeleton/dist/skeleton.css";
import "../Container/Container.css";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../Context/LoadingContext";
function Content({ title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  const context = useContext(LoadingContext);
  return (
    <div className="main-content">
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading
            type="bubbles"
            color={"black"}
            className="loading"
          />
        </div>
      ) : (
        <>
          <SlideBanner />
          <div className="layout-content">
            <ListFilm
              title={"Phim Hành Động"}
              fetchData={requests.fetchActionMovies}
              genre_id="28"
              posterMovieUrl={posterMovieUrl}
            />
            <ListFilm
              title={"Phim Hoạt Hình"}
              fetchData={requests.fetchAnimationMovies}
              genre_id="16"
              posterMovieUrl={posterMovieUrl}
            />
            <ListFilm
              title={"Phim Hài"}
              fetchData={requests.fetchComedyMovies}
              genre_id="35"
              posterMovieUrl={posterMovieUrl}
            />
            <ListFilm
              title={"Phim Kinh Dị"}
              fetchData={requests.fetchHorrorMovies}
              genre_id="27"
              posterMovieUrl={posterMovieUrl}
            />
            <ListFilm
              title={"Phim Lãng Mạn"}
              fetchData={requests.fetchRomanceMovies}
              genre_id="10749"
              posterMovieUrl={posterMovieUrl}
            />
            <ListFilm
              title={"Phim Tài Liệu"}
              fetchData={requests.fetchDocumentaries}
              genre_id="99"
              posterMovieUrl={posterMovieUrl}
            />
          </div>
        </>
      )}
    </div>
  );
}
export default Content;
