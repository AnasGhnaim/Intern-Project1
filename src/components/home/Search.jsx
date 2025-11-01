import { Search } from "lucide-react";

function Searchcomponent({ search, setSearch }) {
  return (
    <section className="bg-white p-12  flex items-center justify-center dark:bg-black">
      <div className="max-w-xl w-full mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400 tracking-wide">
          Search
        </h2>

        <div className="relative flex items-center bg-white/10 backdrop-blur-lg rounded-full shadow-lg border border-yellow-300/40 px-4 py-3 ">
          <Search className="text-yellow-300 mr-2" size={20} />
          <input
            type="text"
            placeholder="Type to find..."
            className="w-full bg-transparent focus:outline-none text-gray-400 "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <p className="mt-4 text-gray-400 text-sm">
          Search through your content quickly and easily.
        </p>
      </div>
    </section>
  );
}

export default Searchcomponent;
