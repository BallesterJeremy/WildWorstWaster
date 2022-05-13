import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Polute from "./Polute";
const Appel = () => {
  const [data, setData] = useState([]);
  // const [selectedRadio, setSelectedRadio] = useState("co");
  const cities = [
    "london",
    "paris",
    "shanghai",
    "beijing",
    "amsterdam",
    "bangalore",
    "bombay",
    "madrid",
    "berlin",
    "bruxelles",
    "rome",
    "tokyo",
    "lima",
    "washington",
    "san-francisco",
    "san-diego",
    "seoul",
    "dallas",
    "bogota",
  ];
  const [searchValue, setSearchValue] = useState("Paris");

  const launchSearch = (event) => {
    event.preventDefault();
    if (searchValue) {
      const city = cities.find((item) => searchValue.toLowerCase() === item);
      console.warn(city);

      if (city) {
        axios
          .get(
            `https://api.waqi.info/feed/${city}/?token=a9cc6c8ba6e8494a0ce4721a5e4788476a00b97a`
          )
          .then((res) => {
            let items = res.data.data;
            console.warn([items]);
            setData([items]);
            // console.warn(data);
          });
      }
    }
  };

  return (
    <div>
      <ul>
        {data.map((item) => {
          console.log(item);
          console.log(item.aqi);
          console.log(item.city.name);
          return (
            <div
              className="grid-container"
              style={{ backgroundColor: item.aqi >= 50 ? "green" : "red" }}
            >
              <h1 className="grid-item cityName">{item.city.name}</h1>
              <h2 className="grid-item cityAqi">IQA: {item.aqi}</h2>
              <p className="grid-item co">CO: {item.iaqi.co.v}</p>
              <p className="grid-item humidity">Humidity: {item.iaqi.h.v}</p>
              <p className="grid-item no2">NO2: {item.iaqi.no2.v}</p>
              <p className="grid-item o3">O3 (ozone): {item.iaqi.o3.v}</p>
              <p className="grid-item pm10">pm10: {item.iaqi.pm10.v}</p>
              <p className="grid-item pm25">pm25: {item.iaqi.pm25.v}</p>
              <p className="grid-item so2">SO2: {item.iaqi.so2.v}</p>
              <p className="grid-item atmos">
                Atmospheric pressure: {item.iaqi.p.v}
              </p>
              <p className="grid-item wind">Wind speed: {item.iaqi.w.v}</p>
            </div>
          );
        })}
      </ul>
      {/* const radios = ["co", "h", "no2", "o3", "p", "pm10", "pm25", "so2", "t", */}
      {/* "w"]; */}
      <form action="">
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          launchSearch={launchSearch}
        />
      </form>
    </div>
  );
};

export default Appel;
