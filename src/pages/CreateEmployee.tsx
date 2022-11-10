// import { useState } from "react";
// import ReactDateInputs from "react-date-inputs";

import { DropdownMenu } from "@cecigiu2b/dropdown-menu-react";
import { departements } from "../data/departments";
import { states } from "../data/states";
// const dateInput = () => {};

const CreateEmployee = () => {
  // const [birthday, setBirthday] = useState(new Date());
  // const birthdayFor = { htmlFor: "birthday" };

  return (
    <main>
      <h1>Create Employee</h1>
      <form>
        <div className="form__content">
          <div className="form__content--left">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" autoFocus />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" />
            </div>
            {/* <div> */}
            {/* <label htmlFor="birthday">Birthday</label> */}
            {/* <ReactDateInputs
                className="dateInput"
                label="birthday"
                value={birthday}
                onChange={setBirthday}
                labelComponentProps={birthdayFor}
              />
            </div> */}
            <div>
              <label htmlFor="birthday">Birthday</label>
              <input type="date" name="birthday" />
            </div>

            <div>
              <label htmlFor="startDay">Start day</label>
              <input type="date" name="startDay" />
            </div>
            <div>
              <label htmlFor="departments">Department</label>

              <DropdownMenu
                name="departements"
                options={departements}
                customClassSelect="selectDepartement"
                customClassOption="optionDepartement"
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
          <input type="submit" value="SAVE" className="button" />
          <input type="submit" value="CANCEL" className="button" />
        </div>
      </form>
    </main>
  );
};

export default CreateEmployee;
