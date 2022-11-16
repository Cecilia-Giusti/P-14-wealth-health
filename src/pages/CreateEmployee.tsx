import { DropdownMenu } from "@cecigiu2b/dropdown-menu-react";
import { useState } from "react";
import { departements } from "../data/departments";
import { states } from "../data/states";
import DatePicker from "react-datepicker";
import Modal from "react-modal";

const CreateEmployee = () => {
  const [departementValue, setDepartementValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);

  const [birthday, setBirthday] = useState(new Date());
  const [startDay, setStartDay] = useState(new Date());

  const [modalIsOpen, setIsOpen] = useState(true);

  console.log(departementValue);
  console.log(stateValue);
  console.log(birthday);

  const handleOpenModal = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <h1>Create Employee</h1>
      <form>
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
            <div>
              <label htmlFor="street">Street</label>
              <input type="text" name="street" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" />
            </div>
            <div>
              <label htmlFor="states">State</label>
              <DropdownMenu
                name="states"
                options={states}
                customClassSelect="selectStates"
                customClassOption="optionStates"
                getValue={setStateValue}
              />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" name="zipCode" />
            </div>
          </div>
        </div>
        <div className="form__buttons">
          {" "}
          <input
            type="submit"
            value="SAVE"
            className="button"
            onClick={(e) => {
              handleOpenModal(e);
            }}
          />
          <input type="submit" value="CANCEL" className="button" />
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        className="modal"
        contentLabel="Minimal Modal Example"
      >
        <button onClick={handleCloseModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <p>Employee created</p>
      </Modal>
    </main>
  );
};

export default CreateEmployee;
