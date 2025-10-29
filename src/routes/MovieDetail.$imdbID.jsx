// routes/MovieDetail.$imdbID.tsx
import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

export const Route = createFileRoute("/MovieDetail/$imdbID")({
  component: MovieDetailComponent,
});

function MovieDetailComponent() {
  const { imdbID } = useParams({ from: Route.id });
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "b4aeadbb";

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
        );
        const data = await res.json();
        if (data.Response === "False");
        setMovie(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch movie");
        setMovie(null);
      }
    }
    fetchMovie();
  }, [imdbID]);

  if (error) return <p className="text-yellow-400 text-center">{error}</p>;
  if (!movie) return <Spinner />;

  return (
    <section className="min-h-screen bg-black text-yellow-300 p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center border-b border-yellow-400 pb-4">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p className="text-lg mt-2">
              {movie.Year} - {movie.Rated} - {movie.Runtime}
            </p>
            <p className="mt-2">{movie.Genre}</p>
          </div>

          {/* Poster + Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img
              src={movie.Poster === "N/A" ? "/placeholder.png" : movie.Poster}
              alt={movie.Title}
              className="w-full max-w-md mx-auto rounded-lg"
            />

            <div className="space-y-6 text-black bg-yellow-400 p-6 rounded-lg">
              <div>
                <h3 className="text-xl font-bold border-b border-black pb-1">
                  Plot
                </h3>
                <p className="mt-2">{movie.Plot}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold border-b border-black pb-1">
                  Writer
                </h3>
                <p className="mt-2">{movie.Writer}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold border-b border-black pb-1">
                  Actors
                </h3>
                <p className="mt-2">{movie.Actors}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold border-b border-black pb-1">
                  Language
                </h3>
                <p className="mt-2">{movie.Language}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-black pb-1">
                  Ratings
                </h3>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {movie.Ratings?.length > 0 ? (
                    movie.Ratings.map((r, i) => (
                      <div
                        key={i}
                        className="bg-black text-yellow-400 p-2 text-center rounded"
                      >
                        <p className="text-xs font-bold">{r.Source}</p>
                        <p className="text-sm">{r.Value}</p>
                      </div>
                    ))
                  ) : (
                    <p className="col-span-3 text-center">No ratings</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
