import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setOpenHeader } from "../feature/responsiveSlice";

export const handleOpenNav = (
  dispatch: Dispatch<AnyAction>,
  openHeader: boolean
) => {
  if (!openHeader) {
    dispatch(setOpenHeader(true));
    document.querySelector("header")?.classList.add("show", "header--tablet");
    document.querySelector("main")?.classList.add("open");
    document.querySelector("main")?.classList.remove("close");
    document.getElementById("buttonNav")?.classList.remove("buttonNav");
    document.getElementById("buttonNav")?.classList.add("buttonNav--notShow");
  } else {
    dispatch(setOpenHeader(false));
    document.querySelector("header")?.classList.remove("show");
    document.querySelector("header")?.classList.remove("header--tablet");
    document.querySelector("main")?.classList.remove("open");
    document.querySelector("main")?.classList.add("close");
    document
      .getElementById("buttonNav")
      ?.classList.remove("buttonNav--notShow");
    document.getElementById("buttonNav")?.classList.add("buttonNav");
  }
};
