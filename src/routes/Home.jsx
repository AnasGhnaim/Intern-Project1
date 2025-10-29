import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import Search from "../components/home/Search";
import MovieCard from "../components/home/MovieCard";
export const Route = createFileRoute("/Home")({
  component: Home,
  loader: ({ context }) => {
    return { film: context.film, setFilm: context.omar };
  },
});

function Home() {
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounce] = useState(search);
  // const data = Route.useLoaderData();

  useEffect(() => {
    const deb = setTimeout(() => {
      setDebounce(search);
    }, 500);

    return () => clearTimeout(deb);
  }, [search]);

  return (
    <>
      <HeroSection />
      <Search search={search} setSearch={setSearch} />
      <MovieCard
        search={debounceSearch}
        // film={data.film}
        // setFilm={data.setFilm}
      />
    </>
  );
}
