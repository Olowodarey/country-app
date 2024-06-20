import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import countryData from "./constant/data.json";

function Section() {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCountries(countryData);
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
      country.name.toLowerCase().includes(inputValue) &&
      (selectedRegion ? country.region === selectedRegion : true)
    );
  });

  return (
    <div className="">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-10">
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
                className="flex w-full justify-between p-0 hover:bg-gray-200 cursor-pointer rounded-r-lg border-r-transparent hover:border-l-white dark:hover:bg-gray-400"
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

      <div className="flex flex-wrap justify-center gap-10 pt-10">
        {filteredData.map((country, index) => (
          <div
            key={index}
            className="bg-gray-200 w-[300px] h-[350px] sm:w-1/2 lg:w-1/5 dark:bg-gray-500"
            onClick={() => handleImageClick(country.name)}
          >
            <div className="">
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-[200px] object-cover"
              />
            </div>
            <div className="pt-5 pl-5">
              <h1 className="font-bold">{country.name}</h1>
            </div>
            <div className="pt-5 pl-5">
              <p className="font-bold">Population: {country.population}</p>
              <p className="font-bold">Region: {country.region}</p>
              <p className="font-bold">Capital: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
