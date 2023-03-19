import { RefObject, Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { dataErrorInt, newEmployeeInt } from "../types/models";
import {
  setErrorForm,
  setErrorMessage,
  updateDataNoError,
} from "../feature/errorFormSlice";
import { postUser } from "../service/user";

const formCheck = async (
  dataForm: RefObject<HTMLFormElement>,
  departmentValue: string | null,
  stateValue: string | null,
  dispatch: Dispatch<AnyAction>
) => {
  if (dataForm.current !== null) {
    const firstNameInput = dataForm.current[0] as HTMLInputElement;
    const lastNameInput = dataForm.current[1] as HTMLInputElement;
    const birthdayInput = dataForm.current[2] as HTMLInputElement;
    const startdayInput = dataForm.current[3] as HTMLInputElement;
    const streetInput = dataForm.current[5] as HTMLInputElement;
    const cityInput = dataForm.current[6] as HTMLInputElement;
    const zipCodeInput = dataForm.current[8] as HTMLInputElement;

    const departementSelect =
      departmentValue !== null && departmentValue !== ""
        ? departmentValue
        : null;
    const stateSelect =
      stateValue !== null && stateValue !== "" ? stateValue : null;

    if (
      (firstNameInput.value &&
        lastNameInput.value &&
        birthdayInput.value &&
        startdayInput.value &&
        streetInput.value &&
        cityInput.value &&
        zipCodeInput.value) !== "" &&
      birthdayInput.value < startdayInput.value &&
      departementSelect &&
      stateSelect
    ) {
      const newEmployee: newEmployeeInt = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        birthday: new Date(birthdayInput.value).toJSON(),
        startDay: new Date(startdayInput.value).toJSON(),
        department: departementSelect,
        street: streetInput.value,
        city: cityInput.value,
        state: stateSelect,
        zipCode: zipCodeInput.value,
      };

      postUser(newEmployee, dispatch);

      return true;
    } else {
      const dataError: dataErrorInt = {
        firstName: firstNameInput.value === "" ? true : false,
        lastName: lastNameInput.value === "" ? true : false,
        birthday:
          birthdayInput.value === "" ||
          birthdayInput.value >= startdayInput.value
            ? true
            : false,
        startDay: startdayInput.value === "" ? true : false,
        department: departementSelect === null ? true : false,
        street: streetInput.value === "" ? true : false,
        city: cityInput.value === "" ? true : false,
        state: stateSelect === null ? true : false,
        zipCode: zipCodeInput.value === "" ? true : false,
      };

      dispatch(setErrorForm(true));
      dispatch(updateDataNoError(dataError));
      dispatch(setErrorMessage(true));

      return false;
    }
  }
};

export default formCheck;
