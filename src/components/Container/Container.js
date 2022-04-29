import { useEffect } from "react";
import SlideBanner from "../SlideBanner/SlideBanner";
import ListFilm from "./Contents/ListFilm";
import requests from "../../FecthDataMovie/FecthDataAll";
import "react-loading-skeleton/dist/skeleton.css";
import "../Container/Container.css";
function Content({ title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <div className="main-content">
      <SlideBanner />
      <div className="layout-content">
        {/* <ListFilm
          title={"Phim đề cử"}
          fetchData={requests.fetchNewMovies}
          posterMovieUrl={posterMovieUrl}
        /> */}
        <ListFilm
          title={"Phim Hành Động"}
          fetchData={requests.fetchActionMovies}
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Hoạt Hình"}
          fetchData={requests.fetchAnimationMovies}
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Hài"}
          fetchData={requests.fetchComedyMovies}
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Kinh Dị"}
          fetchData={requests.fetchHorrorMovies}
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Tình Cảm"}
          fetchData={requests.fetchRomanceMovies}
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Tài Liệu"}
          fetchData={requests.fetchDocumentaries}
          posterMovieUrl={posterMovieUrl}
        />
      </div>
    </div>
  );
}
export default Content;
