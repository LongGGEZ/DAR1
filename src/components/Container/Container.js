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
          router={"action"}
          fetchData={requests.fetchActionMovies}
          genre_id="28"
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Hoạt Hình"}
          router={"animation"}
          fetchData={requests.fetchAnimationMovies}
          genre_id="16"
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Hài"}
          router={"comedy"}
          fetchData={requests.fetchComedyMovies}
          genre_id="35"
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Kinh Dị"}
          router={"horor"}
          fetchData={requests.fetchHorrorMovies}
          genre_id="27"
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Tình Cảm"}
          router={"romance"}
          fetchData={requests.fetchRomanceMovies}
          genre_id="10749"
          posterMovieUrl={posterMovieUrl}
        />
        <ListFilm
          title={"Phim Tài Liệu"}
          router={"document"}
          fetchData={requests.fetchDocumentaries}
          genre_id="99"
          posterMovieUrl={posterMovieUrl}
        />
      </div>
    </div>
  );
}
export default Content;
