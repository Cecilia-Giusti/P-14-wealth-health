import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { setUsersData, addUser } from "../feature/usersSlice";

import { newEmployeeInt, userDataInt } from "../types/models";
import { User } from "../utils/model/User";

const ADRESSE = "http://localhost:3004";

export const getUsers = (dispatch: Dispatch<AnyAction>) => {
  try {
    axios.get(`${ADRESSE}/users`).then((res) => {
      let newDataUsers: newEmployeeInt[] = [];
      res.data.forEach((user: userDataInt) => {
        let newUser = new User(user);
        newDataUsers.push(newUser.updateUser());
      });

      return dispatch(setUsersData(newDataUsers));
    });
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
