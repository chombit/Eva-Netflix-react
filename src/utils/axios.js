import axios from "axios";

// Create an Axios instance with TMDB base URL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
