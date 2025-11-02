import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoriteMovies");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle add/remove
  function toggleFavorite(movie) {
    setFavorites((prev) => {
      const isFav = prev.some((f) => f.imdbID === movie.imdbID);
      if (isFav) {
        return prev.filter((f) => f.imdbID !== movie.imdbID);
      } else {
        return [...prev, movie];
      }
    });
  }

  // Check if a movie is favorite
  function isFavorite(movieId) {
    return favorites.some((f) => f.imdbID === movieId);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
