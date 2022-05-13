import axios from "axios";
import { useEffect } from "react";

const Call = () => {
  const getIntel = () => {
    axios
      .get(
        "https://api.waqi.info/feed/beijing/?token=f053d455f3fc5dde0c880b11f835a9125dd24891"
      )
      .then((res) => {
        console.log(res.data.data);
        return res.data;
      });

    //   .then((data) => {
    //     setIntel(data.results);
    //   });
  };
  useEffect(() => {
    getIntel();
  }, []);

  return <p>a</p>;
};

export default Call;
