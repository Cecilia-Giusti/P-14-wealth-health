import { screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import CreateEmployee from "../../pages/CreateEmployee";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the user is on the form", () => {
  describe("When the form is visible", () => {
    test("Then the title should be visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <HashRouter>
          <CreateEmployee />
        </HashRouter>,
        { store }
      );

      //Title

      const title = screen.getElementByTagName("h1");
      expect(title).toBeTruthy();
      expect(title).toHaveTextContent("Create Employee");
    });
  });
});
