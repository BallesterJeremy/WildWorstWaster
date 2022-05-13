import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Polute from "./Polute";
const Appel = () => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("co");
  const radios = ["co", "h", "no2", "o3", "p", "pm10", "pm25", "so2", "t", "w"];
  const [searchValue, setSearchValue] = useState("london");

  useEffect(() => {
    axios
      .get(
        `https://api.waqi.info/feed/beijing/?token=25710564696528c24737436c8c87497a24008a84=${searchValue}`
      )
      .then((res) => {
        let items = res.data.data;
        // console.warn(items.iaqi);
        setData(items);
      });
  }, [selectedRadio]);

  return (
    <div>
      <ul>
        {radios.map((gas) => (
          <li>
            <input
              key={gas.idx}
              type="radio"
              id={gas}
              name="gasChoiceAward"
              checked={gas === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={gas}>{gas}</label>
          </li>
        ))}
      </ul>
      <div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div>
        <h3></h3>
      </div>
      <ul>
        {/* {data
          .filter(
            (item) =>
              !searchValue ||
              item.city.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(
            (polution) => (
              console.warn(polution), (<Polute polution={polution} />)
            )
          )} */}
      </ul>
    </div>
  );
};

export default Appel;
