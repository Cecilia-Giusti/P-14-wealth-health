import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenNav } from "../utils/handleOpenNav";
import ButtonDataCreate from "./ButtonDataCreate";

const Header = () => {
  const dispatch = useAppDispatch();
  const navOpen = useAppSelector((state) => state.reponsive.openHeader);
  return (
    <header>
      <button
        id="buttonNavClose"
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
          <NavLink to={"/P-14-wealth-health/"}>
            <li>create employee</li>
          </NavLink>
          <NavLink to={"/P-14-wealth-health/current-employees"}>
            <li>current employees</li>
          </NavLink>
        </ul>
        <ButtonDataCreate />
      </nav>
    </header>
  );
};

export default Header;
