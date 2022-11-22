import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setOpenHeader } from "../feature/responsiveSlice";

export const handleOpenNav = (
  dispatch: Dispatch<AnyAction>,
  navOpen: boolean
) => {
  if (!navOpen) {
    dispatch(setOpenHeader(true));
    document.querySelector("header")?.classList.add("show", "header--tablet");
    document.querySelector("main")?.classList.add("open");
    document.querySelector("main")?.classList.remove("close");
  } else {
    dispatch(setOpenHeader(false));
    document.querySelector("header")?.classList.remove("show");
    document.querySelector("header")?.classList.remove("header--tablet");
    document.querySelector("main")?.classList.remove("open");
    document.querySelector("main")?.classList.add("close");
  }
};
