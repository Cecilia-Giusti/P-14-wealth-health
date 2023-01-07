import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { setUsersData, addUser, setErrorGetUser } from "../feature/usersSlice";
import { User } from "../model/User";
import { newEmployeeInt } from "../types/models";

const ADRESSE = "http://localhost:3004";

/**
 * Function to get employees
 * @function
 * @param {Dispatch<AnyAction>} dispatch - const useAppDispatch
 * @return {Promise<void>}
 */
export const getUsers = (dispatch: Dispatch<AnyAction>): Promise<void> =>
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
      return dispatch(setUsersData(newDataUsers));
    })
    .catch((error) => {
      console.error(error);
      dispatch(setErrorGetUser(true));
    });

/**
 * Function to post employee
 * @function
 * @param {newEmployeeInt} userData - new user to post
 * @param {Dispatch<AnyAction>} dispatch - const useAppDispatch
 * @return {Promise<void>}
 */
export const postUser = (
  userData: newEmployeeInt,
  dispatch: Dispatch<AnyAction>
): Promise<void> =>
  axios
    .post(`${ADRESSE}/users`, userData)
    .then((res) => {
      dispatch(addUser(res.data));
      getUsers(dispatch);
    })
    .catch((error) => {
      console.error(error);
      console.log("erreur ici");
    });
