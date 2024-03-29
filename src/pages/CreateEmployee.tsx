import { DropdownMenu } from "@cecigiu2b/dropdown-menu-react";
import { useEffect, useRef, useState } from "react";
import { departements } from "../assets/data/departments";
import { states } from "../assets/data/states";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import formCheck from "../utils/formCheck";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { reset } from "../feature/errorFormSlice";
import formError from "../utils/formError";
import errorMessage from "../utils/errorMessage";
import { handleOpenNav } from "../utils/handleOpenNav";

/**
 * Component to display the form
 * @component
 * @return {JSX.Element}
 */
const CreateEmployee = (): JSX.Element => {
 Modal.setAppElement("#root");
  const dispatch = useAppDispatch();

  const dataNoError = useAppSelector((state) => state.errorForm.dataNoError);
  const errorMessageData = useAppSelector(
    (state) => state.errorForm.errorMessage
  );

  const openHeader = useAppSelector((state) => state.reponsive.openHeader);
  const errorServer = useAppSelector((state) => state.users.errorGetUser);

  const [departementValue, setDepartementValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);

  const [birthday, setBirthday] = useState(new Date());
  const [startDay, setStartDay] = useState(new Date());

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formError(dataNoError);

    if (errorServer) {
      errorMessage(errorServer);
    } else {
      errorMessage(errorMessageData);
    }
  }, [dataNoError, errorMessageData, errorServer]);

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

    if (!errorServer) {
      const check = await formCheck(
        form,
        departementValue,
        stateValue,
        dispatch
      );

      if (check) {
        dispatch(reset());
        setModalIsOpen(true);
      }
    }
  };

  const handleCloseModal = () => {
    resetForm();
    dispatch(reset());
    setModalIsOpen(false);
  };

  return (
    <main
    id="main"
      data-testid="main-createdEmployee"
      className={
        openHeader ? "main createEmployee" : "main createEmployee close"
      }
      onClick={() => {
        handleOpenNav(dispatch, true);
      }}
    >
      <h1>Create Employee</h1>
      <span
        id="errorMessage"
        className="error-message hidden"
        aria-hidden
        aria-disabled
        data-testid="errorMessage"
      >
        {errorServer
          ? "Please try again later "
          : "Please complete correctly all fields"}
      </span>
      <form
        id="form"
        data-testid="formNewEmployee"
        ref={form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form__content">
          <div className="form__content--left">
            <div className="firstName__content">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoFocus
                data-testid="firstName"
              />
            </div>
            <div className="lastName__content">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                data-testid="lastName"
                name="lastName"
                id="lastName"
              />
            </div>

            <div className="birthday__content">
              <label htmlFor="birthday">Birthday</label>
              <DatePicker
                className="dateInput"
                selected={birthday}
                id="birthday"
                onChange={(date: Date) => setBirthday(date)}
              />
              <i className="far fa-calendar dateInput__icon"></i>
            </div>

            <div className="startDay__content">
              <label htmlFor="startDay">Start day</label>
              <DatePicker
             
                className="dateInput"
                id="startDay"
                selected={startDay}
                onChange={(date: Date) => setStartDay(date)}
              />
              <i className="far fa-calendar dateInput__icon"></i>
            </div>
            <div className="departements__content">
              <label htmlFor="departements">Department</label>
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
              <input
                data-testid="street"
                type="text"
                name="street"
                id="street"
              />
            </div>
            <div className="city__content">
              <label htmlFor="city">City</label>
              <input data-testid="city" type="text" name="city" id="city" />
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
              <input
                type="text"
                data-testid="zipCode"
                name="zipCode"
                id="zipCode"
              />
            </div>
          </div>
        </div>
        <div className="form__buttons">
          {" "}
          <input
            type="submit"
            value="SAVE"
            className="button"
            data-testid="submit"
          />
          <input
            type="button"
            value="CANCEL"
            className="button"
            onClick={handleCloseModal}
            data-testid="button-cancel"
          />
        </div>
      </form>

      <Modal isOpen={modalIsOpen} className="modal">
        <button id="confirmationModale" data-testid="button-modal-close" onClick={handleCloseModal}>
          <i className="far fa-times-circle"></i>
        </button>
        <div className="modal__content">
          <i className="fas fa-check"></i> <p>Employee created</p>
        </div>
      </Modal>
    </main>
  );
};

export default CreateEmployee;
