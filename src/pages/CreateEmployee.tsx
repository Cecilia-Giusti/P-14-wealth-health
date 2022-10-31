// import { DateInput } from "datetimepicker-react-component";

// const dateInput = () => {};

const CreateEmployee = () => {
  return (
    <main>
      <h1>Create Employee</h1>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" />
          <label htmlFor="birthday"></label>
          <input type="date" name="birthday" />
          {/* <DateInput name="birthday" onChange={dateInput} /> */}
          <label htmlFor="startDay">Start day</label>
          <input type="date" name="startDay" />
          <select>Department</select>
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input type="text" name="street" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" />
          <select>State</select>
          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" name="zipCode" />
          <input type="submit" value="SAVE" />
          <input type="text" value="CANCEL" />
        </div>
      </form>
    </main>
  );
};

export default CreateEmployee;
