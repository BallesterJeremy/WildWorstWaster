<<<<<<< HEAD
import "../components/headerG.css";

const { Link } = require("react-router-dom");
=======
import { Link } from "react-router-dom";
>>>>>>> dev

const HeaderT = () => {
  return (
    <div>
      <ul>
        <Link to="/HomeTrump">
          <li>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/ApiTrump">
          <li>
            <p>Api</p>
          </li>
        </Link>
        <Link to="/ContactTrump">
          <li>
            <p>Contact</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderT;
