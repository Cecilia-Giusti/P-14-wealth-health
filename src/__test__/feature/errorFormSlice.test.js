import errorFormSlice, {
  setErrorForm,
  updateDataNoError,
  setErrorMessage,
  reset,
} from "../../feature/errorFormSlice";

describe("Given the form is sent", () => {
  describe("When the form is correctly completed", () => {
    test("Then the action setErrorForm and errorMessage should return false and change states", () => {
      const formNoErrorInit = {
        firstName: false,
        lastName: false,
        birthday: false,
        startDay: false,
        department: false,
        street: false,
        city: false,
        state: false,
        zipCode: false,
      };

      const nextState = errorFormSlice(
        {
          errorForm: true,
          dataNoError: formNoErrorInit,
          errorMessage: false,
        },
        setErrorForm(false)
      );

      expect(nextState).toEqual({
        errorForm: false,
        dataNoError: formNoErrorInit,
        errorMessage: false,
      });
    });

    test("Then the action updateDataNoError should return only false values", () => {
      const formErrorInit = {
        firstName: false,
        lastName: false,
        birthday: true,
        startDay: false,
        department: false,
        street: true,
        city: false,
        state: false,
        zipCode: false,
      };

      const formNoError = {
        firstName: false,
        lastName: false,
        birthday: false,
        startDay: false,
        department: false,
        street: false,
        city: false,
        state: false,
        zipCode: false,
      };

      const nextState = errorFormSlice(
        {
          errorForm: false,
          dataNoError: formErrorInit,
          errorMessage: false,
        },
        updateDataNoError(formNoError)
      );

      expect(nextState).toEqual({
        errorForm: false,
        dataNoError: formNoError,
        errorMessage: false,
      });
    });

    test("Then the action setErrorMessage should return false", () => {
      const formNoError = {
        firstName: false,
        lastName: false,
        birthday: false,
        startDay: false,
        department: false,
        street: false,
        city: false,
        state: false,
        zipCode: false,
      };

      const nextState = errorFormSlice(
        {
          errorForm: false,
          dataNoError: formNoError,
          errorMessage: true,
        },
        setErrorMessage(false)
      );

      expect(nextState).toEqual({
        errorForm: false,
        dataNoError: formNoError,
        errorMessage: false,
      });
    });

    test("Then the action reset should return initalState", () => {
      const initialState = {
        errorForm: false,
        dataNoError: {
          firstName: false,
          lastName: false,
          birthday: false,
          startDay: false,
          department: false,
          street: false,
          city: false,
          state: false,
          zipCode: false,
        },
        errorMessage: false,
      };

      const nextState = errorFormSlice(
        {
          errorForm: true,
          dataNoError: initialState.dataNoError,
          errorMessage: initialState.errorMessage,
        },
        reset()
      );

      expect(nextState).toEqual({
        errorForm: initialState.errorForm,
        dataNoError: initialState.dataNoError,
        errorMessage: initialState.errorMessage,
      });
    });
  });
});
