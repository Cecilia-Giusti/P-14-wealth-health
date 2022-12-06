import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenNav } from "../utils/handleOpenNav";

const Header = () => {
  const dispatch = useAppDispatch();
  const navOpen = useAppSelector((state) => state.reponsive.openHeader);
  return (
    <header data-testid="header">
      <button
        id="buttonNavClose"
        aria-label="Close"
        data-testid="button-close"
        onClick={() => handleOpenNav(dispatch, navOpen)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="banner">
        <img src="./assets/images/logo1.png" alt="Logo wealth health" />
        <p className="title">HRNET</p>
      </div>
      <nav>
        <ul>
          <li data-testid="create-employee">
            <NavLink to={"/P-14-wealth-health/"}>create employee</NavLink>
          </li>{" "}
          <li data-testid="current-employees">
            <NavLink to={"/P-14-wealth-health/current-employees"}>
              current employees
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
