import HeaderG from "@components/HeaderG";
import React from "react";
import { Link } from "react-router-dom";
import Appel from "../componants/Appel";
import HeaderG from "../components/HeaderG";

const HomeGreta = () => {
  return (
    <>
      <HeaderG />
      <div>
        <HeaderG />
        <h1 className="greta-title">
          Choose the place where to live, if you want very green
        </h1>
        <Link to="/ApiGreta">
          <button>LET'S GO</button>
        </Link>
        <Appel />
      </div>
    </>
  );
};

export default HomeGreta;
