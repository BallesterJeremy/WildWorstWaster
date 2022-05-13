import HeaderG from "@components/HeaderG";
import React from "react";
import { Link } from "react-router-dom";
import fleur from "../assets/fleur.jpg";
import "./HomeGreta.css";

const HomeGreta = () => {
  return (
    <div className="homegreta">
      <HeaderG />
      <div className="Home-greta">
        <h1 className="greta-title">
          Choose the place where to live, if you want very green
        </h1>
        <Link className="Fleur" to="/ApiGreta">
          <button className="fleurbutton">
            <img className="fleur" src={fleur} alt="fleur" />
          </button>
          <p className="Gretapara">Let's Go</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeGreta;
