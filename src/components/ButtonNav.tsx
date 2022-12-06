import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenNav } from "../utils/handleOpenNav";

const ButtonNav = () => {
  const dispatch = useAppDispatch();
  const openHeader = useAppSelector((state) => state.reponsive.openHeader);
  return (
    <div id="buttonNav" className="buttonNav" data-testid="buttonNav">
      <button
        className="button__navbar"
        data-testid="navigation-button"
        aria-label="Open nav"
        onClick={() => handleOpenNav(dispatch, openHeader)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default ButtonNav;
