import { Link } from "react-router-dom";
import React from "react";
import "./HeaderG.css";

const HeaderG = () => {
  return (
    <div className="HeaderG">
      /*
      <img
        className="headeralogo"
        src="https://www.flaticon.com/fr/icones-gratuites/fleur"
      ></img>
      */
      <ul classname="headerButton">
        <Link to="/HomeGreta">
          <li className="headeraG">Home</li>
        </Link>

        <Link to="/ApiGreta">
          <li className="headeraG">Api</li>
        </Link>
        <Link to="/ContactGreta">
          <li className="headeraG">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderG;
