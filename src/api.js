import axios from "axios";

export const getMovieList = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`
    );
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
