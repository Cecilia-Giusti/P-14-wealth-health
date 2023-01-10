import formDate from "../../utils/formDate";

describe("Given the user is on the employees list page", () => {
  describe("When dates are displayed", () => {
    test("Then dates should be show with a special format : MM/DD/YYYY", async () => {
      const date = "10-04-90";

      const newDate = formDate(date);

      expect(newDate).toBe("10/4/1990");
    });
  });
});
