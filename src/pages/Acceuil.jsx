import React from "react";
import { Link } from "react-router-dom";

const Acceuil = () => {
  return (
    <div className="acceuil">
      <h1 className="title"> WORLD WORST WASTER</h1>
      <h2>Choose your path</h2>
      <div className="button-choice">
        <Link to="/HomeTrump">
          <button className="Trump">trump</button>
        </Link>
        <Link to="/HomeGreta">
          <button className="Greta"> greta</button>
        </Link>
      </div>
    </div>
  );
};

export default Acceuil;
