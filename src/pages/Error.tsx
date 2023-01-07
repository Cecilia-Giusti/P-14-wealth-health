import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenNav } from "../utils/handleOpenNav";

/**
 * Component to display the error page 404
 * @component
 * @return {JSX.Element}
 */
const Error = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const openHeader = useAppSelector((state) => state.reponsive.openHeader);
  return (
    <main
      data-testid="main-errorPage"
      className={openHeader ? "main errorPage" : "main errorPage close"}
      onClick={() => {
        handleOpenNav(dispatch, true);
      }}
    >
      <h1> Error 404 </h1>
      <h2> Page not Found</h2>
    </main>
  );
};

export default Error;
