import React from "react";

const Polute = ({ polution, index }) => {
  console.warn(polution, index);
  return (
    <div>
      <h1>hello</h1>
      {/* <h3>{(polution.city.name, index)}</h3> */}
    </div>
  );
};

export default Polute;
