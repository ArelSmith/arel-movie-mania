import NavigationBar from "./components/NavigationBar";
import MovieCard from "./components/MovieCard";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e);
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
        <div className="flex flex-row">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  );
}

export default App;
