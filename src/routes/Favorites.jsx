import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
// import MovieCard from "../components/home/MovieCard";

export const Route = createFileRoute("/Favorites")({
  component: RouteComponent,
});

function RouteComponent() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteMovies");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  //Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteMovies");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <section className="bg-white min-h-screen p-6 text-black dark:bg-black ">
      <div className="container mx-auto w-56 mb-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold dark:text-yellow-300">
            My favorites
          </h1>
        </div>
      </div>
      {/* <div>
        <MovieCard />
      </div> */}

      <div className="container mx-auto max-w-6xl px-4 py-10">
        {favorites.length === 0 ? (
          <p className="text-center text-xl text-gray-600">No favorites yet.</p>
        ) : (
          <div className="grid grid-cols-5 justify-items-center gap-4">
            {favorites.map((movie) => (
              <div
                key={movie.imdbID}
                className="flex flex-col rounded-lg  bg-[#1a1a1a] transition-transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="object-cover w-full h-72"
                  />
                </div>

                <div className="flex flex-col items-center justify-between flex-1 p-4 text-yellow-300">
                  <div className="flex flex-row">
                    <h3 className="text-lg font-semibold text-start ">
                      {movie.Title}
                    </h3>
                  </div>
                  <h3 className="text-lg font-bold text-end ">{movie.Year}</h3>

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
      </div>
    </section>
  );
}
