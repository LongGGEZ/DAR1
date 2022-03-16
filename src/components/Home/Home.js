import { Routes, Route } from "react-router-dom";
import RankMoviePage from "../Contents/RankMovie";
import NewsPage from "../Contents/News";
import TrendingPage from "../Contents/Trending";
import ContentPage from "../Contents/Content";
import SiderBar from "../SiderBar/SiderBar";
import { Grid } from "@mui/material";
import "./Home.css";

function Home() {
  const posterMovieUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="home">
      <Grid container>
          <SiderBar />
        <Grid xs={11}>
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
                path="/trending"
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
            </Routes>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
