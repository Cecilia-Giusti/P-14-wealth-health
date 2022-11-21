import { dataErrorInt } from "../types/models";

const formError = (dataError: dataErrorInt) => {
  const firstNameDOM = document.querySelector(".firstName__content input");
  const lastNameDOM = document.querySelector(".lastName__content input");
  const birthdayDOM = document.querySelector(".birthday__content input");
  const streetDOM = document.querySelector(".street__content input");
  const cityDOM = document.querySelector(".city__content input");
  const zipCodeDOM = document.querySelector(".zipCode__content input");

  dataError.firstName
    ? firstNameDOM?.setAttribute("style", "border-bottom: 1px solid red")
    : firstNameDOM?.removeAttribute("style");
  dataError.lastName
    ? lastNameDOM?.setAttribute("style", "border-bottom: 1px solid red")
    : lastNameDOM?.removeAttribute("style");
  dataError.birthday
    ? birthdayDOM?.setAttribute("style", "border-bottom: 1px solid red")
    : birthdayDOM?.removeAttribute("style");
  dataError.street
    ? streetDOM?.setAttribute("style", "border-bottom: 1px solid red")
    : streetDOM?.removeAttribute("style");
  dataError.city
    ? cityDOM?.setAttribute("style", "border-bottom: 1px solid red")
    : cityDOM?.removeAttribute("style");
  dataError.zipCode
    ? zipCodeDOM?.setAttribute("style", "border-bottom: 1px solid red")
    : zipCodeDOM?.removeAttribute("style");
};

export default formError;
