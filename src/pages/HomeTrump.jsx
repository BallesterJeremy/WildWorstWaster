import React from "react";
import HeaderT from "@components/HeaderT";
import { Link } from "react-router-dom";
import "./HomeTrump.css";
import pneu from "../assets/pneu.png";
const HomeTrump = () => {
  return (
    <div className="Hometrump">
      <HeaderT />
      <div className="Home-trump">
        <h1 className="trump-title">
          Choose the place where to live, if you want to be not green
        </h1>
        <Link className="Pneu" to="/ApiTrump">
          <button className="pneubutton">
            <img className="pneu" src={pneu} alt="pneu" />
          </button>
          <p className="Homepara">Let's Go</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeTrump;
