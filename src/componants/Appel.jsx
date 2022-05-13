import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "@components/Search";

const Appel = () => {
  const [data, setData] = useState([]);
  // const [selectedRadio, setSelectedRadio] = useState("co");
  // const radios = ["co", "h", "no2", "o3", "p", "pm10", "pm25", "so2", "t", "w"];
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
  const [searchValue, setSearchValue] = useState("");

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
      <div>{data.map((item) => {})}</div>
      <form action="">
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          launchSearch={launchSearch}
        />
      </form>
      <ul></ul>
    </div>
  );
};

export default Appel;
