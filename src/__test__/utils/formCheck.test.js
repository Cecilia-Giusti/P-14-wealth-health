import formCheck from "../../utils/formCheck";

jest.mock("../../service/user", () => {
  const postFn = jest.fn();
  const getFN = jest.fn(() => true);
  const thenFN = jest.fn();
  const catchFN = jest.fn();

  return {
    postUser: postFn,
    getUsers: getFN,
    thenFN,
    catchFN,
  };
});

describe("Given the user is on the form", () => {
  describe("When the form is correctly completed and sent", () => {
    test("Then form should be check and return true", async () => {
      const dispatch = jest.fn();
      const dataForm = {
        current: [
          { value: "Alicia" },
          { value: "Dupont" },
          { value: "10/08/1990" },
          { value: "3/1/2021" },
          { value: "Human Resources" },
          { value: "4090 Collier Falls" },
          { value: "La Mirada" },
          { value: "Arkansas" },
          { value: "82947/3293" },
        ],
      };
      const departementValue = "Human Resources";
      const stateValue = "Arkansas";

      const check = await formCheck(
        dataForm,
        departementValue,
        stateValue,
        dispatch
      );

      expect(check).toBeTruthy();
    });
  });

  describe("When the form is not correctly completed and sent", () => {
    test("Then form should be check and return false", async () => {
      const dispatch = jest.fn();
      const dataForm = {
        current: [
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
        ],
      };
      const departementValue = "";
      const stateValue = "";

      const check = await formCheck(
        dataForm,
        departementValue,
        stateValue,
        dispatch
      );

      expect(check).toBeFalsy();
    });
  });

  describe("When the departement field is not correctly completed and the form is sent", () => {
    test("Then form should be check and return false", async () => {
      const dispatch = jest.fn();
      const dataForm = {
        current: [
          { value: "Alicia" },
          { value: "Dupont" },
          { value: "10/08/1990" },
          { value: "3/1/2021" },
          { value: "Human Resources" },
          { value: "4090 Collier Falls" },
          { value: "La Mirada" },
          { value: "Arkansas" },
          { value: "82947/3293" },
        ],
      };
      const departementValue = "";
      const stateValue = "Arkansas";

      const check = await formCheck(
        dataForm,
        departementValue,
        stateValue,
        dispatch
      );

      expect(check).toBeFalsy();
    });
  });

  describe("When the states field is not correctly completed and the form is sent", () => {
    test("Then form should be check and return false", async () => {
      const dispatch = jest.fn();
      const dataForm = {
        current: [
          { value: "Alicia" },
          { value: "Dupont" },
          { value: "10/08/1990" },
          { value: "3/1/2021" },
          { value: "Human Resources" },
          { value: "4090 Collier Falls" },
          { value: "La Mirada" },
          { value: "Arkansas" },
          { value: "82947/3293" },
        ],
      };
      const departementValue = "Human Resources";
      const stateValue = "";

      const check = await formCheck(
        dataForm,
        departementValue,
        stateValue,
        dispatch
      );

      expect(check).toBeFalsy();
    });
  });

  describe("When the form is empty", () => {
    test("Then form should be check and return false", async () => {
      const dispatch = jest.fn();
      const dataForm = {
        current: null,
      };
      const departementValue = "Human Resources";
      const stateValue = "Arkansas";

      const check = await formCheck(
        dataForm,
        departementValue,
        stateValue,
        dispatch
      );

      expect(check).toBeUndefined();
    });
  });
});
