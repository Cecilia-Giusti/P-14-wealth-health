import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import DebouncedInput from "../../components/DebouncedInput";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the user is on the current employees page", () => {
  describe("When the table is not empty", () => {
    test("Then the searchbar should be visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <DebouncedInput />
        </BrowserRouter>,
        { store }
      );

      const searchbar = screen.getByTestId("searchbar");
      expect(searchbar).toBeTruthy();
    });
  });
});
