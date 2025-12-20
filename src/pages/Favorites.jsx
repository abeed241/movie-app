import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container">
        <h2>No favorites yet ❤️</h2>
        <p>Go back and add some movies to your favorites.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">

      {favorites.map((movie) => (
        <div key={movie.imdbID} className="movie-card favorite-card">
          <img src={movie.Poster} alt={movie.Title} />

          <div className="movie-details">
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>

            <button onClick={() => removeFavorite(movie.imdbID)}>
              remove
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Favorites;
