import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { setUsersData, addUser } from "../feature/usersSlice";

import { newEmployeeInt } from "../types/models";

const ADRESSE = "http://localhost:3004";

export const setUsers = (users: Array<newEmployeeInt>) => {
  users.forEach((user) => {
    try {
      axios.post(`${ADRESSE}/users`, user);
    } catch (error) {
      console.error(error);
    }
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

export const postUser = (
  userData: newEmployeeInt,
  dispatch: Dispatch<AnyAction>
) => {
  try {
    axios.post(`${ADRESSE}/users`, userData).then((res) => {
      dispatch(addUser(res.data));
      getUsers(dispatch);
    });
  } catch (error) {
    console.error(error);
  }
};
