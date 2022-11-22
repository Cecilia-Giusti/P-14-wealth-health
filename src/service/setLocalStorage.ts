import { newEmployeeInt } from "../types/models";

const setLocalStorage = (data: newEmployeeInt) => {
  try {
    localStorage.setItem("key", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export default setLocalStorage;
