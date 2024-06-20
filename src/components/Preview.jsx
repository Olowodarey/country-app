import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import countryData from "./constant/data.json";

function Preview() {
  const { name } = useParams();
  const navigate = useNavigate();
  const country = countryData.find((c) => c.name === name);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="container   mx-auto pt-10 px-4">
      <div className="mb-10">
        <button
          onClick={() => navigate(-1)}
          className="bg-slate-600 py-2 px-4 rounded-md text-white"
        >
          Back
        </button>
      </div>

      <div className="pt-10 flex flex-col lg:flex-row gap-10 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
        <div>
        <img
          src={country.flag}
          alt={country.name}
          className="w-full lg:w-[300px] h-auto lg:h-[200px] object-cover"
        />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <div className="flex-1">
            <h1 className="font-bold text-3xl">{country.name}</h1>
            <p className="font-bold">Native Name: {country.nativeName}</p>
            <p className="font-bold pt-3">Population: {country.population}</p>
            <p className="font-bold">Region: {country.region}</p>
            <p className="font-bold">Sub Region: {country.subregion}</p>
            <p className="font-bold">Capital: {country.capital}</p>

            <div className="pt-10">
            <p className="font-bold">Border Countries: {country.borders.join(", ")}</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-bold">Top Level Domain: {country.topLevelDomain}</p>
            <p className="font-bold">
              Currency: {country.currencies.map(currency => `${currency.name} (${currency.symbol})`).join(", ")}
            </p>
            <p className="font-bold">
              Languages: {country.languages.map(language => `${language.name} (${language.nativeName})`).join(", ")}
            </p>

          
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
