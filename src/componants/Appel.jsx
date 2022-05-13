import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Polute from "./Polute";
const Appel = () => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("co");
  const radios = ["co", "h", "no2", "o3", "p", "pm10", "pm25", "so2", "t", "w"];

  useEffect(() => {
    axios
      .get(
        "https://api.waqi.info/feed/London/?token=a9cc6c8ba6e8494a0ce4721a5e4788476a00b97a"
      )
      .then((res) => {
        let items = res.data.data;
        // console.warn(items.iaqi);
        setData(items);
      });
  }, [selectedRadio]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <ul>
        {radios.map((gas) => (
          <li>
            <input
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
            (polution) => ( */}
        {/* console.warn(polution), */}
        {/* <Polute polution={polution} />) */}
      </ul>
    </div>
  );
};

export default Appel;
