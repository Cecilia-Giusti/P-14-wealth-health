import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenNav } from "../utils/handleOpenNav";

const ButtonNav = () => {
  const dispatch = useAppDispatch();
  const navOpen = useAppSelector((state) => state.reponsive.openHeader);
  return (
    <div id="buttonNav" className="notShow">
      {!navOpen && (
        <button
          className="button__navbar"
          onClick={() => handleOpenNav(dispatch, navOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
    </div>
  );
};

export default ButtonNav;
