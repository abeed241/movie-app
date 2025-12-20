import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import "./Home.css";

function Home() {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  // 👉 Favorites Context
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovie = async () => {
    setError("");
    setData(null);

    if (!movie) {
      setError("Please enter a movie name");
      return;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`
    );

    const result = await response.json();

    if (result.Response === "True") {
      setData(result);
    } else {
      setError(result.Error);
    }
  };

  // 👉 Check if movie is already favorite
  const isFavorite =
    data && favorites.some((m) => m.imdbID === data.imdbID);

  return (
    <div className="container">
      <h1>🎬 Movie Finder</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter movie name"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <button onClick={fetchMovie}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {data && (
        <div className="movie-card">
          <img src={data.Poster} alt={data.Title} />

          <div className="movie-details">
            <h2>{data.Title}</h2>
            <p><strong>Year:</strong> {data.Year}</p>
            <p><strong>Genre:</strong> {data.Genre}</p>
            <p><strong>Director:</strong> {data.Director}</p>
            <p><strong>Actors:</strong> {data.Actors}</p>
            <p><strong>IMDb Rating:</strong> ⭐ {data.imdbRating}</p>
            <p><strong>Plot:</strong> {data.Plot}</p>

            {/* ⭐ Favorites button */}
            <button
              onClick={() =>
                isFavorite
                  ? removeFavorite(data.imdbID)
                  : addFavorite(data)
              }
            >
              {isFavorite ? "remove" : "❤️"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
