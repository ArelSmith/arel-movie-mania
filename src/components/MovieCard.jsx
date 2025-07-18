import { useState, useEffect } from "react";
import { getMovieList } from "../api";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await getMovieList();
        setMovies(movieList);
      } catch (error) {
        console.error("Failed to fetch movie list:", error);
      }
    };
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, i) => (
          <div className="card bg-base-100 w-96 shadow-sm" key={i}>
            <figure className="px-10 pt-10">
              <img
                src={
                  movie.poster_path
                    ? `${import.meta.env.VITE_REACT_APP_BASEIMGURL}${
                        movie.poster_path
                      }`
                    : "https://via.placeholder.com/150"
                }
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-center">{movie.title}</h2>
              <p>{movie.release_date}</p>
              <p>{movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
