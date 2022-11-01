import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="banner">
        <img src="./assets/images/logo1.png" alt="Logo wealth health" />
        <p className="title">HRNET</p>
      </div>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>create employee</li>
          </NavLink>
          <NavLink to={"/current-employees"}>
            <li>current employees</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
