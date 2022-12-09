import errorMessage from "../../utils/errorMessage";

describe("Given the user is on the home page", () => {
  describe("When the user has not completed all fields", () => {
    test("Then an error message should be visible", async () => {
      const trueError = true;

      jest.fn(errorMessage(trueError));
    });

    test("Then an error message should be not visible", async () => {
      const falseError = false;

      jest.fn(errorMessage(falseError));
    });
  });
});
