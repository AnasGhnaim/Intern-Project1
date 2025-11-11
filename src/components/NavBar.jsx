import { Link } from "@tanstack/react-router";
import { HeartPlus, SunMoon } from "lucide-react";
import logo from "../assets/logo.jpg";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white sticky top-0 z-50 backdrop-blur-md border-b shadow-sm dark:bg-black transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-3 h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <img
            src={logo}
            alt="Movie Logo"
            className="h-16 w-auto rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-2xl font-semibold tracking-wide text-foreground group-hover:text-yellow-400 dark:text-yellow-300">
            MovieHub
          </span>
        </Link>

        {/* Links & Theme Switch */}
        <div className="flex items-center space-x-6 text-lg font-medium  dark:text-yellow-300">
          <Link
            to="/Favorites"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-200"
          >
            <HeartPlus size={22} />
            <span>Favorites</span>
          </Link>

          <button
            // onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200"
          >
            <SunMoon size={22} />
            {/* <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span> */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
