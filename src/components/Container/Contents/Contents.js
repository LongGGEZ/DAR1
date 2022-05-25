import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import apiMovie from "../../../api/axios";
import { APIKey } from "../../../api/apikey";
import MovieCard from "../../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "../../Container/Container.css";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../../Context/LoadingContext";

function Contents({ title, posterMovieUrl }) {
  const { genre_id } = useParams();
  const [pagesNumber, setPagesNumber] = useState(1);
  const [genres, setGenres] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const context = useContext(LoadingContext);
  useEffect(() => {
    document.title = genres.name;
  });

  //fecth new movie
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    context.setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/discover/movie/?api_key=${APIKey}&with_genres=${genre_id}&language=vi&page=${pagesNumber}`
        );
        setPageCount(data.total_pages);
        setMovies(data && data.results);
        setTimeout(() => {
          context.setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [pagesNumber]);
  
  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const { data } = await apiMovie.get(
          `genre/movie/list?api_key=${APIKey}&language=vi`
        );
        setGenres(
          data.genres.find((genre) => genre.id && String(genre.id) === genre_id)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenre();
  }, []);

  const handlePageClick = (page) => {
    setPagesNumber(page.selected + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="main-content">
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading type="bubbles" color={"black"} className="loading" />
        </div>
      ) : (
        <>
          <div className="title">
            <h1>{genres.name}</h1>
          </div>
          <div className="movie">
            <Grid container columns={{ xs: 4.8, sm: 9.6, md: 12 }}>
              {movies.map((movie) => (
                <Grid item xs={2.4} key={movie.id}>
                  <MovieCard
                    posterMovieUrl={posterMovieUrl}
                    movie_id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    release_date={movie.release_date}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
      <ReactPaginate
        className={`pagination ${context.isLoading && "display-none"}`}
        onPageChange={handlePageClick}
        nextLabel={
          <img
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            src="https://img.icons8.com/material-outlined/24/000000/right.png"
            alt="Next"
          />
        }
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount > 500 ? 500 : pageCount}
        previousLabel={
          <img
            src="https://img.icons8.com/material-outlined/24/000000/left.png"
            alt="Left"
          />
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default Contents;
