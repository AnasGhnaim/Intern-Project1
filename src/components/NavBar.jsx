import { Link } from "@tanstack/react-router";
import { HeartPlus, SunMoon } from "lucide-react";
import logo from "../assets/logo.jpg";

function NavBar() {
   
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3 h-20">
        {/*  Logo */}
        <Link
          to="/Home"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <img
            src={logo}
            alt="Movie Logo"
            className="h-16 w-auto rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-2xl font-semibold tracking-wide text-foreground group-hover:text-yellow-400">
            MovieHub
          </span>
        </Link>

        
        <div className="flex items-center space-x-6 text-lg font-medium">
          {/* Favorites */}
          <Link
            to="/fav"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-200"
          >
            <HeartPlus size={22} />
            <span>Favorites</span>
          </Link>

          {/* Theme Switch */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200">
            <SunMoon size={22} />
            <span className="hidden sm:inline">Switch Theme</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
