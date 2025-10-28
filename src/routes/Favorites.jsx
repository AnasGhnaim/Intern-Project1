import { createFileRoute } from "@tanstack/react-router";
import MovieCard from "../components/home/MovieCard";

export const Route = createFileRoute("/Favorites")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="min-h-screen  p-6 text-black">
      <div className="container mx-auto w-56 mb-10">
        {/* {Header} */}
        <div className=" text-center  ">
          <h1 className="text-4xl font-bold "> My favorites</h1>
        </div>
      </div>
      {/* {Favorites list} */}
      {/* <div className="container mx-auto max-w-6xl bg-white mt-10 "> */}
      <MovieCard />
      {/* </div> */}
    </section>
  );
}
