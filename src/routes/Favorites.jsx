import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
// import { useFavorites } from "../context/FavoritesContext";
import { useFavorites } from "../hooks/useFavorites";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/Favorites")({
  component: FavoritesPage,
});

function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <section className="bg-white min-h-screen p-6 text-black dark:bg-black">
      <div className="container mx-auto w-56 mb-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold dark:text-yellow-300">
            My Favorites
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-10">
        {favorites.length === 0 ? (
          <p className="text-center text-xl text-gray-600 dark:text-yellow-300">
            No favorites yet.
          </p>
        ) : (
          <div className="grid grid-cols-5 justify-items-center gap-6">
            {favorites.map((movie) => (
              <div
                key={movie.imdbID}
                className="flex flex-col rounded-lg bg-[#1a1a1a] transition-transform hover:scale-105 h-[32rem] w-56"
              >
                <div className="relative">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="object-cover w-full h-72"
                  />
                  {/*  Remove button */}
                  <div className="flex flex-col flex-1 p-4 text-yellow-300 justify-between">
                    <button
                      className="absolute  text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => toggleFavorite(movie)}
                      title="Remove from favorites"
                    >
                      <Heart size={22} fill="red" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between flex-1 p-4 text-yellow-300">
                  <div className="flex flex-row justify-between w-full">
                    <h3 className="text-lg font-semibold text-start ">
                      {movie.Title}
                    </h3>
                    <span className="text-lg font-bold">{movie.Year}</span>
                  </div>

                  <div className="inline-block text-center w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition">
                    <Link to={`/MovieDetail/${movie.imdbID}`}>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
