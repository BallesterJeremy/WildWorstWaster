import React from "react";
import HeaderT from "@components/HeaderT";
import { Link } from "react-router-dom";
const HomeTrump = () => {
  return (
    <>
      <HeaderT />
      <div>
        <h1 className="trump-title">
          Choose the place where to live, if you want to be not green
        </h1>
        <Link to="/ApiTrump">
          <button>LET'S GO</button>
        </Link>
      </div>
    </>
  );
};

export default HomeTrump;
