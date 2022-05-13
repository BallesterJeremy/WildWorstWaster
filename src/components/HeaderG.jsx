import { Link } from "react-router-dom";
import React from "react";
import "./HeaderG.css";

const HeaderG = () => {
  return (
    <div>
      <ul className="lien-Greta">
        <Link to="/">
          <li>Acceuil</li>
        </Link>
        <Link to="/HomeGreta">
          <li>Home</li>
        </Link>
        <Link to="/ApiGreta">
          <li>Api</li>
        </Link>
        <Link to="/ContactGreta">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderG;
