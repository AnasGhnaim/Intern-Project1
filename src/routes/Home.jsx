import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import Search from "../components/home/Search";
import MovieCard from "../components/home/MovieCard";
export const Route = createFileRoute("/Home")({
  component: Home,
});

function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <HeroSection />
      <Search search={search} setSearch={setSearch} />
      <MovieCard search={search} />
    </>
  );
}
