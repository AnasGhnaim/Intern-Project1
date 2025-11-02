import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.jpg";

function Footer() {
  const links = [
    { Name: "Home", to: "/" },
    { Name: "Favorites", to: "/Favorites" },
  ];

  return (
    <footer className="bg-white border-t border-black text-black dark:bg-black dark:text-yellow-300 p-4 dark:border-yellow-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-14 text-xl">
            {links.map((link, index) => (
              <div key={index} className="flex items-center">
                <Link to={link.to}>{link.Name}</Link>
              </div>
            ))}
          </div>

          <div className="flex">
            <img
              src={logo}
              alt="logo image"
              className="h-16 w-auto rounded-full shadow-md mb-2"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl text-center">Movie Hub</h1>
            <div className="border-t border-gray-500">
              <p className="text-lg text-start text-gray-500 dark:text-gray-600">
                All rights reserved © Movie Hub 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
