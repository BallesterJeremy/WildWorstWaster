import HeaderG from "@components/HeaderG";
import React from "react";
import { Link } from "react-router-dom";

const HomeGreta = () => {
  return (
    <>
      <HeaderG />
      <div>
        <h1 className="greta-title">
          Choose the place where to live, if you want very green
        </h1>
        <Link to="/ApiGreta">
          <button>LET'S GO</button>
        </Link>
      </div>
    </>
  );
};

export default HomeGreta;
