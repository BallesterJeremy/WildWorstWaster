import { Link } from "react-router-dom";

const HeaderT = () => {
  return (
    <div>
      <ul>
        <Link to="/HomeTrump">
          <li>Home</li>
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
