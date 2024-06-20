import React from "react";
import Navbar from "./components/Navbar";
import DarkModeProvider from "./components/constant/DarkModeContext";
import Section from "./components/Section";
import Preview from "./components/Preview";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Navbar />
        <div className=" max-w-7xl mx-auto pt-10  px-4  ">
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/preview/:name" element={<Preview />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
