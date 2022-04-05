import axios from "axios";
const apiPoster = axios.create({
  baseURL: "https://image.tmdb.org/t/p/w500",
});
export default apiPoster;