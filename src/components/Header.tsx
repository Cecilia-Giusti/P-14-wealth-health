import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenNav } from "../utils/handleOpenNav";

/**
 * Component to view header
 * @component
 * @return {JSX.Element}
 */
const Header = (): JSX.Element => {
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
        <i className="fas fa-times"></i>
      </button>
      <div className="banner">
        <img
          src="./assets/images/logo1_compressed.png"
          alt="Logo wealth health"
        />
        <p className="title">HRNET</p>
      </div>
      <nav>
        <ul>
          <li data-testid="create-employee">
            <NavLink to={"/"}>create employee</NavLink>
          </li>{" "}
          <li data-testid="current-employees">
            <NavLink to={"/current-employees"}>current employees</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
