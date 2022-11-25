import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { setUsersData } from "../feature/usersSlice";
import { newEmployeeInt } from "../types/models";

const ADRESSE = "http://localhost:3004";

export const setUsers = (users: Array<newEmployeeInt>) => {
  users.forEach((user) => {
    axios.post(`${ADRESSE}/users`, user);
  });
};

export const getUsers = (dispatch: Dispatch<AnyAction>) => {
  try {
    axios
      .get(`${ADRESSE}/users`)
      .then((res) => dispatch(setUsersData(res.data)));
  } catch (error) {
    console.error(error);
  }
};
