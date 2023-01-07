import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenNav } from "../utils/handleOpenNav";

/**
 * Component to view navigation button
 * @component
 * @return {JSX.Element}
 */
const ButtonNav = (): JSX.Element => {
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
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default ButtonNav;
