import { useState, useEffect } from "react";
import { HeartPlus } from "lucide-react";
import { Link } from "@tanstack/react-router";

function MovieCard({ search }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = "b4aeadbb";

  useEffect(() => {
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
      }
    }

    callMovies();
  }, [search]);

  return (
    <section className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Movie List</h2>
      </div>

      {error && <p className="text-center text-yellow-400">{error}</p>}

      <div className="grid grid-cols-6 justify-items-center gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-yellow-300 transition-transform hover:scale-105"
          >
            <div className="overflow-hidden">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="object-fill h-56 w-full"
              />
              <div className="flex justify-center space-x-6 py-2">
                <button className="text-gray-800 hover:text-yellow-600 transition-colors">
                  <HeartPlus size={22} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 items-center p-4 bg-[#0d0d0df1]">
              <h3 className="text-lg font-semibold text-start text-yellow-300">
                {movie.Title}
              </h3>
              <h3 className="text-lg font-bold text-end text-yellow-300">
                {movie.Year}
              </h3>
              {/*
              just for testing
             
             <h1>{movie.imdbID}</h1> 
             
             */}

              <div className="col-span-2 text-center mt-2">
                <Link
                  to={`/MovieDetail/${movie.imdbID}`}
                  className="text-yellow-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieCard;
