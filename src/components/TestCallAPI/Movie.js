import React from "react";
import axios from "axios";
let imageUrl = "https://image.tmdb.org/t/p/w500";
class Movie extends React.Component {
  state = {
    listMovies: [],
  };
  async componentDidMount() {
    // axios.get("https://api.themoviedb.org/3/movie/550?api_key=b4537afeaad3af17fa8676533391f855").then((res) => {
    //   console.log("check api", res.data);
    // });
    let res = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=b4537afeaad3af17fa8676533391f855"
    );
    this.setState({ listMovies: res && res.data ? res.data : [] });
    console.log(res.data);
    // console.log(`${imageUrl}${res.data.poster_path}`)
  }
  render() {
    let { listMovies } = this.state;
    // console.log(this.state);
    return (
      <div className="list-movie">
        <div className="title-movie">
          Fetch all list Movie
          <div className="list-movie">
            {listMovies &&
              listMovies.length > 0 &&
              listMovies.map((movie) => {
                return (
                  <div key={movie.id} className="movie">
                    <img src={`${imageUrl}${movie.poster_path}`} alt="poster" />
                    <div>{movie.original_title}</div>
                    <div>Releases:{movie.release_date}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
