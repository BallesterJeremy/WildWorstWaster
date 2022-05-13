// import React, { useState } from "react";
// import Button from "./Button";

// const Search = () => {
//   const getParis = () => {
//     const [data, setData] = useState();
//     axios
//       .get(
//         "https://api.waqi.info/search/paris/?token=f053d455f3fc5dde0c880b11f835a9125dd24891"
//       )
//       .then((res) => {
//         let items = res.data.data;
//         console.warn(items);
//         setData(items);
//       })
//       .catch((err) => {
//         console.warn(err.message);
//       });
//     useEffect(() => {
//       getParis();
//     }, []);

//     return (
//       <div>
//         {data.map((things) => {
//           <Button name={things} />;
//         })}
//       </div>
//     );
//   };
// };

// export default Search;
