import { screen } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import { setupStore } from "../../app/store";
import CreateEmployee from "../../pages/CreateEmployee";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the user is on the form", () => {
  describe("When the form is visible", () => {
    test("Then the title should be visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <Route path="/P-14-wealth-health/" element={<CreateEmployee />} />
        </BrowserRouter>,
        { store }
      );

      //Title
      const title = screen.getElementByTagName("h1");
      expect(title).toBeTruthy();
      expect(title).toHaveTextContent("Create Employee");
    });
  });
});
