import { MoonIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { DarkModeContext } from "./constant/DarkModeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="sticky top-0 z-50 py-3 px-6 border-b bg-white dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-lg">Where in the world</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center bg-red-500 hover:bg-blue-700 py-1 px-2 rounded-2xl"
          >
            <MoonIcon className="h-4 w-6" />
            <span className="ml-2">{darkMode ? "Light" : "Dark"} Mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
