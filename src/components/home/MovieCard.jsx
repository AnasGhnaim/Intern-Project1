import { useState, useEffect } from "react";
import { HeartPlus, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Spinner from "../Spinner";
import { useFavorites } from "../../context/FavoritesContext";

function MovieCard({ search }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toggleFavorite, isFavorite } = useFavorites();

  const API_KEY = "b4aeadbb";
  //movie search effect
  useEffect(() => {
    setLoading(true);
    async function callMovies() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
        );
        const data = await res.json();
        if (data.Search) {
          setMovies(data.Search);
          setError(null);
        } else {
          setMovies([]);
          setError("No movies found.");
        }
      } catch {
        setMovies([]);
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    }

    callMovies();
  }, [search]);

  return (
    <section className="bg-white w-full py-10 dark:bg-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Movie List</h2>
      </div>

      {error && <p className="text-center text-yellow-400">{error}</p>}

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-5 auto-rows-fr justify-items-center gap-6">
          {movies.map((movie) => (
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
                <div className="flex flex-col flex-1 p-4 text-yellow-300 justify-between">
                  <button
                    className="absolute text-yellow-400 hover:text-red-500 transition-colors"
                    onClick={() => toggleFavorite(movie)}
                  >
                    {isFavorite(movie.imdbID) ? (
                      <Heart size={22} fill="red" />
                    ) : (
                      <HeartPlus size={22} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between flex-1 p-4 text-yellow-300">
                <div className="flex flex-row justify-between w-full">
                  <h3 className="text-lg font-semibold text-start">
                    {movie.Title}
                  </h3>
                  <span className="text-lg font-bold">{movie.Year}</span>
                </div>

                <div className="inline-block text-center w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition">
                  <Link to={`/MovieDetail/${movie.imdbID}`} className="">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieCard;
