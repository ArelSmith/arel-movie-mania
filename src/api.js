import axios from "axios";

// const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;
const appToken = import.meta.env.VITE_REACT_APP_TOKEN;
const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${appToken}`,
      // "Content-Type": "application/json;charset=utf-8",
    },
  });
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(q);
  return;
};
