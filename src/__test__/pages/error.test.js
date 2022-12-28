import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import Error from "../../pages/Error";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the user is on the form", () => {
  describe("When the form is visible", () => {
    test("Then the title is visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <Error />
        </BrowserRouter>,
        { store }
      );

      //Title
      const title = screen.getByRole("heading", { name: "Error 404" });
      expect(title).toBeTruthy();

      //SubTitle
      const subTitle = screen.getByRole("heading", { name: "Page not Found" });
      expect(subTitle).toBeTruthy();
    });
  });
});
