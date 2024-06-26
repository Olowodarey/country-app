import { MoonIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { DarkModeContext } from "./constant/DarkModeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-8 border-b bg-white dark:bg-gray-800 dark:text-white shadow-md">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">Where in the world</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center bg-gray-300 hover:bg-blue-700 py-1 px-2 rounded-2xl"
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
