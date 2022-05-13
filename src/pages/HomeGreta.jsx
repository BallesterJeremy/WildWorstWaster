import React from "react";
import Appel from "../componants/Appel";
import HeaderG from "../components/HeaderG";

const HomeGreta = () => {
  return (
    <>
      <div>
        <HeaderG />
        <h1 className="greta-title">
          Choose the place where to live, if you want very green
        </h1>
        <button>LET'S GO</button>
        <Appel />
      </div>
    </>
  );
};

export default HomeGreta;
