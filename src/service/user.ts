import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { setUsersData, addUser, setErrorGetUser } from "../feature/usersSlice";
import { User } from "../model/User";
import { newEmployeeInt } from "../types/models";

export const ADRESSE = "http://localhost:3004";

/**
 * Function to get employees
 * @function
 * @param {Dispatch<AnyAction>} dispatch - const useAppDispatch
 * @return {Promise<void>}
 */
export const getUsers = (dispatch: Dispatch<AnyAction>): Promise<boolean> =>
  axios
    .get(`${ADRESSE}/users`)
    .then((res) => {
      let newDataUsers: newEmployeeInt[] = [];
      let dataUsers = res.data;

      for (let i = 0; i < dataUsers.length; i++) {
        let newUser = new User(dataUsers[i]);
        newDataUsers.push(newUser.updateUser());
      }

      dispatch(setErrorGetUser(false));
      dispatch(setUsersData(newDataUsers));
      return true;
    })
    .catch((error) => {
      console.error(error);
      dispatch(setErrorGetUser(true));
      return false;
    });

/**
 * Function to post employee
 * @function
 * @param {newEmployeeInt} userData - new user to post
 * @param {Dispatch<AnyAction>} dispatch - const useAppDispatch
 * @return {Promise<boolean>}
 */
export const postUser = (
  userData: newEmployeeInt,
  dispatch: Dispatch<AnyAction>
): Promise<boolean> =>
  axios
    .post(`${ADRESSE}/users`, userData)
    .then((res) => {
      dispatch(addUser(userData));
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
