import NavigationBar from "./components/NavigationBar";
import MovieCard from "./components/MovieCard";
import { useState } from "react";
import { searchMovie } from "./api";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setSearch(e);
    if (e.length > 0) {
      try {
        const query = await searchMovie(e);
        setResults(query || []);
      } catch (error) {
        console.error("Failed to search movies:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };
  return (
    <>
      <NavigationBar name="FilmApp" />
      <div className="max-w-6xl mx-auto p-4 flex flex-col gap-y-10 items-center">
        <h1 className="text-5xl font-bold text-center">Arel Movie Mania</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for movies..."
          className="border rounded-4xl px-3 py-2 w-full max-w-md"
        />
        <MovieCard search={results} />
        <p>Made with &#10084; by Arel</p>
      </div>
    </>
  );
}

export default App;
