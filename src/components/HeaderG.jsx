import { Link } from "react-router-dom";

const HeaderG = () => {
  return (
    <div>
      <ul>
        <Link to="/HomeGreta">
          <li>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/ApiGreta">
          <li>
            <p>Api</p>
          </li>
        </Link>
        <Link to="/ContactGreta">
          <li>
            <p>Contact</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderG;
