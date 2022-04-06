import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import RankMoviePage from "../Container/Contents/RankMovie";
import NewsPage from "../Container/Contents/News";
import TrendingPage from "../Container/Contents/Trending";
import ContentPage from "../Container/Container";
import SiderBar from "../SiderBar/SiderBar";
import StickyBox from "react-sticky-box";
import "./Home.css";
import MovieDetail from "../MovieDetail/MovieDetail";

function Home() {
  const posterMovieUrl = "https://image.tmdb.org/t/p/w500";

  // useEffect(() => {
  //   const fetchPoster = async () => {
  //     try {
  //       const urlPoster= apiPoster.get(``)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }, []);

  return (
    <div className="home">
      <Grid container>
        <Grid
          item
          style={{ display: "flex", alignItems: "flex-start", width: "100px" }}
        >
          <StickyBox offsetTop={10}>
            <SiderBar />
          </StickyBox>
        </Grid>
        <Grid item style={{ width: "calc(100% - 100px)" }}>
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
              <Route
                path="/movie/:movie_id"
                element={<MovieDetail posterMovieUrl={posterMovieUrl} />}
              />
            </Routes>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
