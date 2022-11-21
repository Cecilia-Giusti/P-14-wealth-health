import { DropdownMenu } from "@cecigiu2b/dropdown-menu-react";
import { useRef, useState } from "react";
import { departements } from "../data/departments";
import { states } from "../data/states";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import formCheck from "../utils/formCheck";

const CreateEmployee = () => {
  Modal.setAppElement("#root");
  const [errorForm, setErrorForm] = useState("");

  const [departementValue, setDepartementValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);

  const [birthday, setBirthday] = useState(new Date());
  const [startDay, setStartDay] = useState(new Date());

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({});

  const form = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    const formDOM = document.getElementById("form");

    if (form !== null) {
      const formElement = formDOM as HTMLFormElement;
      formElement.reset();
      setBirthday(new Date());
      setStartDay(new Date());
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //Vérification du formulaire
    const check = await formCheck(
      form,
      departementValue,
      stateValue,
      setNewEmployee,
      setErrorForm,
      errorForm
    );

    if (check && errorForm !== "error") {
      setModalIsOpen(true);
      console.log(check);
      // Ajout dans le tableau
      console.log(newEmployee);
    }
  };

  const handleCloseModal = () => {
    resetForm();
    setModalIsOpen(false);
  };

  return (
    <main>
      <h1>Create Employee</h1>
      <span id="errorMessage" className="error-message hidden">
        Please complete correctly all fields
      </span>
      <form id="form" ref={form} onSubmit={(e) => handleSubmit(e)}>
        <div className="form__content">
          <div className="form__content--left">
            <div className="firstName__content">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" autoFocus />
            </div>
            <div className="lastName__content">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" />
            </div>

            <div className="birthday__content">
              <label htmlFor="birthday">Birthday</label>
              <DatePicker
                className="dateInput"
                selected={birthday}
                onChange={(date: Date) => setBirthday(date)}
              />
              <i className="fa-regular fa-calendar dateInput__icon"></i>
            </div>

            <div className="startDay__content">
              <label htmlFor="startDay">Start day</label>
              <DatePicker
                className="dateInput"
                selected={startDay}
                onChange={(date: Date) => setStartDay(date)}
              />
              <i className="fa-regular fa-calendar dateInput__icon"></i>
            </div>
            <div className="departements__content">
              <label htmlFor="departments">Department</label>
              <DropdownMenu
                name="departements"
                options={departements}
                customClassSelect="selectDepartement"
                customClassOption="optionDepartement"
                getValue={setDepartementValue}
              />
            </div>
          </div>
          <div className="form__content--right">
            <div className="street__content">
              <label htmlFor="street">Street</label>
              <input type="text" name="street" />
            </div>
            <div className="city__content">
              <label htmlFor="city">City</label>
              <input type="text" name="city" />
            </div>
            <div className="states__content">
              <label htmlFor="states">State</label>
              <DropdownMenu
                name="states"
                options={states}
                customClassSelect="selectStates"
                customClassOption="optionStates"
                getValue={setStateValue}
              />
            </div>
            <div className="zipCode__content">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" name="zipCode" />
            </div>
          </div>
        </div>
        <div className="form__buttons">
          {" "}
          <input type="submit" value="SAVE" className="button" />
          <input type="submit" value="CANCEL" className="button" />
        </div>
      </form>

      <Modal isOpen={modalIsOpen} className="modal">
        <button onClick={handleCloseModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <p>Employee created</p>
      </Modal>
    </main>
  );
};

export default CreateEmployee;
