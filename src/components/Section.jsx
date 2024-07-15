import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

function Section() {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  const handleImageClick = (name) => {
    navigate(`/preview/${name}`);
  };

  const uniqueRegions = [...new Set(countries.map((country) => country.region))];

  const filteredData = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(inputValue) &&
      (selectedRegion ? country.region === selectedRegion : true)
    );
  });

  return (
    <div className=" sm:h-screen sm:items-center sm:justify-center px-8  pt-20 lg:h-screen w-full ">
      <div className="   flex flex-wrap justify-between items-center gap-10">
        <div className="relative flex items-center w-full sm:w-auto">
          <MagnifyingGlassIcon className="h-4 w-4 absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search any country"
            onChange={handleSearch}
            className="pl-10 py-2 border rounded-md focus:outline-none focus:border-black w-full sm:w-auto dark:text-black"
          />
        </div>
        <div className="relative flex flex-col items-center w-full sm:w-[250px]">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-gray-100 py-1 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wide border-4 
            border-transparent active:border-white duration-300 dark:bg-gray-600"
          >
            filter by region
            {!isOpen ? (
              <ArrowDownCircleIcon className="h-5" />
            ) : (
              <ArrowUpCircleIcon className="h-5" />
            )}
          </button>
          {isOpen && (
            <div className="bg-gray-100 absolute top-14 flex flex-col items-start rounded-lg p-2 w-full dark:bg-gray-600">
            {uniqueRegions.map((region, i) => (
              <div
                key={i}
                className="flex w-full justify-between p-0 hover:bg-gray-200 cursor-pointer  rounded-r-lg border-r-transparent hover:border-l-white dark:hover:bg-gray-400"
                onClick={() => {
                  setSelectedRegion(region);
                  setIsOpen(false);
                }}
              >
                <h3 className="font-bold">{region}</h3>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-12 pt-10 justify-center   ">
        {filteredData.map((country, index) => (
          <div
            key={index}
            className="bg-gray-200 w-[300px] h-[350px] sm:w-[80%] lg:w-1/6 dark:bg-gray-500
            "
            onClick={() => handleImageClick(country.name.common)}
          >
            <div className="">
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-full h-[150px] object-cover border-4 border-gray-500 cursor-pointer    "
              />
            </div>
            <div className="pt-5 pl-5 cursor-pointer ">
              <h1 className="font-bold">{country.name.common}</h1>
            </div>
            <div className="pt-5 pl-5 cursor-pointer ">
              <p className="font-bold">Population: {country.population}</p>
              <p className="font-bold">Region: {country.region}</p>
              <p className="font-bold">Capital: {country.capital}</p>
            </div>
          </div>    ))}
      </div>
    </div>
  );
}

export default Section;
