import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

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

  // Optional: Sync if another tab updates storage
  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     const saved = localStorage.getItem("favoriteMovies");
  //     if (saved) {
  //       setFavorites(JSON.parse(saved));
  //     }
  //   };
  //   window.addEventListener("storage", handleStorageChange);
  //   return () => window.removeEventListener("storage", handleStorageChange);
  // }, []);

  return (
    <section className="min-h-screen p-6 text-black">
      <div className="container mx-auto w-56 mb-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">My favorites</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {favorites.length === 0 ? (
          <p className="text-center text-xl text-gray-600">No favorites yet.</p>
        ) : (
          <div className="grid grid-cols-6 justify-items-center gap-4">
            {favorites.map((movie, index) => (
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
                </div>

                <div className="grid grid-cols-2 items-center p-4 bg-[#0d0d0df1]">
                  <h3 className="text-lg font-semibold text-start text-yellow-300">
                    {movie.Title}
                  </h3>
                  <h3 className="text-lg font-bold text-end text-yellow-300">
                    {movie.Year}
                  </h3>

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
        )}
      </div>
    </section>
  );
}
