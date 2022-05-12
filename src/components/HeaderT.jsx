const { Link } = require("react-router-dom");

const HeaderT = () => {
  <div>
    <ul>
      <Link to="/HomeT">
        <li>
          <p>Home</p>
        </li>
      </Link>
      <Link to="/ApiT">
        <li>
          <p>Api</p>
        </li>
      </Link>
      <Link to="/ContactT">
        <li>
          <p>Contact</p>
        </li>
      </Link>
    </ul>
  </div>;
};

export default HeaderT;
