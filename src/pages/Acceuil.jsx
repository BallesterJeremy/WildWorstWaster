import React from "react";
import { Link } from "react-router-dom";
import trump from "../assets/trump.jpg";
import greta from "../assets/greta.jpg";
import "./Acceuil.css";

const Acceuil = () => {
  return (
    <div className="acceuil">
      <h1 className="title"> WORLD WORST WASTER</h1>
      <div className="button-choice">
        <Link to="/HomeTrump">
          <button className="Trump">
            <img className="trump" src={trump} alt="trump" />
            <h2>Trump</h2>
          </button>
        </Link>
        <h2>Choose your path!!!</h2>
        <Link to="/HomeGreta">
          <button className="Greta">
            <img className="greta" src={greta} alt="greta" />
            <h2>Greta</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Acceuil;
