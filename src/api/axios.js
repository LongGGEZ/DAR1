import axios from "axios";
const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default apiMovie;
