import { useState, useEffect } from "react";
import { getMovieList } from "../api";

const SkeletonCard = () => (
  <div className="card bg-base-100 w-96 shadow-sm">
    <figure className="px-10 pt-10">
      <div className="skeleton h-64 w-full bg-gray-300 rounded-xl"></div>
    </figure>
    <div className="card-body items-center text-center">
      <div className="skeleton h-6 w-48 bg-gray-300 mb-2"></div>
      <div className="skeleton h-4 w-32 bg-gray-300 mb-2"></div>
      <div className="skeleton h-4 w-20 bg-gray-300"></div>
    </div>
  </div>
);

const MovieCard = ({ search = [], adult = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log({ adult });
        if (search.length > 0) {
          setMovies(search);
        } else {
          const movieList = await getMovieList();
          if (adult === true) {
            setMovies(movieList.filter((movie) => movie.adult));
          } else {
            setMovies(movieList.filter((movie) => !movie.adult));
          }
          // setMovies(movieList);
        }
      } catch (error) {
        console.error("Failed to fetch movie list:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search, adult]);
  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {movies.length > 0 ? (
            movies.map((movie, i) => (
              <div className="card bg-base-100 w-96 shadow-sm" key={i}>
                <figure className="px-10 pt-10">
                  <img
                    src={
                      movie.poster_path &&
                      `${import.meta.env.VITE_REACT_APP_BASEIMGURL}${
                        movie.poster_path
                      }`
                    }
                    alt={movie.title}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-center">{movie.title}</h2>
                  <p>{movie.release_date}</p>
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center h-64">
              <p className="p-4 text-lg">No movies found :(</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
