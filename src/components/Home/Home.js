import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import RankMoviePage from "../Container/Contents/RankMovie";
import NewsPage from "../Container/Contents/News";
import TrendingPage from "../Container/Contents/Trending";
import ContentPage from "../Container/Container";
import SiderBar from "../SiderBar/SiderBar";
import StickyBox from "react-sticky-box";
import "./Home.css";
import MovieDetail from "../Details/MovieDetail";
import TvDetail from "../Details/TvDetail";
import NotFound from "../../NotFound";
import Contents from "../Container/Contents/Contents";

function Home() {
  const posterMovieUrl = process.env.REACT_APP_POSTER_URL;
  return (
    <div className="home">
      <Grid container>
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100px",
            boxSizing: "initial",
          }}
        >
          <StickyBox offsetTop={70}>
            <SiderBar />
          </StickyBox>
        </Grid>
        <Grid item className="right-home">
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <ContentPage title={"Home"} posterMovieUrl={posterMovieUrl} />
                }
              />
              <Route
                path="/news"
                element={
                  <NewsPage
                    title={"Phim mới"}
                    posterMovieUrl={posterMovieUrl}
                  />
                }
              />
              <Route
                path="/news/:currentPage"
                element={
                  <NewsPage
                    title={"Phim mới"}
                    posterMovieUrl={posterMovieUrl}
                  />
                }
              />
              <Route
                path="/trending"
                element={
                  <TrendingPage
                    title={"Phim thịnh hành"}
                    posterMovieUrl={posterMovieUrl}
                  />
                }
              />
              <Route
                path="/trending/:currentPage"
                element={
                  <TrendingPage
                    title={"Phim thịnh hành"}
                    posterMovieUrl={posterMovieUrl}
                  />
                }
              />
              <Route
                path="/rank"
                element={
                  <RankMoviePage
                    title={"Xếp hạng phim"}
                    posterMovieUrl={posterMovieUrl}
                  />
                }
              />
              <Route
                path="/movie/:movie_id"
                element={<MovieDetail posterMovieUrl={posterMovieUrl} />}
              />
              <Route
                path="/tv/:movie_id"
                element={<TvDetail posterMovieUrl={posterMovieUrl} />}
              />
              <Route
                path="/genre/:genre_id"
                element={<Contents posterMovieUrl={posterMovieUrl} />}
              />
              <Route
                path="/genre/:genre_id/:currentPage"
                element={<Contents posterMovieUrl={posterMovieUrl} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
