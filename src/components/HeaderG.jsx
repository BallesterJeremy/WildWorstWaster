import "../components/headerG.css";

const { Link } = require("react-router-dom");

const HeaderG = () => {
  <div>
    <ul>
      <Link to="/HomeG">
        <li>
          <p>Home</p>
        </li>
      </Link>
      <Link to="/ApiG">
        <li>
          <p>Api</p>
        </li>
      </Link>
      <Link to="/ContactG">
        <li>
          <p>Contact</p>
        </li>
      </Link>
    </ul>
  </div>;
};

export default HeaderG;
