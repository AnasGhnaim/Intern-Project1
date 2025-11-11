import { HeartPlus, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Spinner from "../Spinner";
import { useFavorites } from "../../context/FavoritesContext";
import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchMovies = async (search) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "can not fetch data from the api ");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("something went wrong", error);
  }
};

function MovieCard({ search }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies", search],
    queryFn: () => fetchMovies(search),
  });
  const movies = data?.Search || [];

  if (isLoading) return <Spinner />;
  if (isError) return <h3 className="text-red-500">{error.message}</h3>;

  return (
    <section className="bg-white w-full py-10 dark:bg-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Movie List</h2>
      </div>

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
    </section>
  );
}

export default MovieCard;
