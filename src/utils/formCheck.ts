import { RefObject } from "react";
import { dataErrorInt, newEmployeeInt } from "../types/models";
import errorMessage from "./errorMessage";
import formError from "./formError";

const formCheck = async (
  dataForm: RefObject<HTMLFormElement>,
  departmentValue: string | null,
  stateValue: string | null,
  setNewEmployee: React.Dispatch<React.SetStateAction<newEmployeeInt>>,
  setErrorForm: React.Dispatch<React.SetStateAction<string>>,
  errorForm: string
) => {
  if (dataForm.current !== null) {
    const firstNameInput = dataForm.current[0] as HTMLInputElement;
    const lastNameInput = dataForm.current[1] as HTMLInputElement;
    const birthdayInput = dataForm.current[2] as HTMLInputElement;
    const startdayInput = dataForm.current[3] as HTMLInputElement;
    const streetInput = dataForm.current[5] as HTMLInputElement;
    const cityInput = dataForm.current[6] as HTMLInputElement;
    const zipCodeInput = dataForm.current[8] as HTMLInputElement;

    const departement = departmentValue !== null ? departmentValue : "option 1";
    const state = stateValue !== null ? stateValue : "option 2";

    if (
      (firstNameInput.value &&
        lastNameInput.value &&
        birthdayInput.value &&
        startdayInput.value &&
        departement &&
        streetInput.value &&
        cityInput.value &&
        state &&
        zipCodeInput.value) !== "" &&
      birthdayInput.value < startdayInput.value
    ) {
      const newEmployee: newEmployeeInt = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        birthday: birthdayInput.value,
        startDay: startdayInput.value,
        departement: departement,
        street: streetInput.value,
        city: cityInput.value,
        state: state,
        zipCode: zipCodeInput.value,
      };

      setNewEmployee(newEmployee);

      const dataNoError: dataErrorInt = {
        firstName: false,
        lastName: false,
        birthday: false,
        startDay: false,
        departement: false,
        street: false,
        city: false,
        state: false,
        zipCode: false,
      };

      formError(dataNoError);
      setErrorForm("");
      errorMessage(errorForm);
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
        departement: departement === "" ? true : false,
        street: streetInput.value === "" ? true : false,
        city: cityInput.value === "" ? true : false,
        state: state === "" ? true : false,
        zipCode: zipCodeInput.value === "" ? true : false,
      };
      setErrorForm("error");

      formError(dataError);
      errorMessage(errorForm);
      return false;
    }
  }
};

export default formCheck;
