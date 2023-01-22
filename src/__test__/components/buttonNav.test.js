import { screen, fireEvent } from "@testing-library/react";
import { setupStore } from "../../app/store";
import ButtonNav from "../../components/ButtonNav";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the user is on the home page", () => {
  describe("When the header is closed", () => {
    test("Then the navigation button should be visible", async () => {
      const store = setupStore();
      renderWithProviders(<ButtonNav />, { store });

      const button = screen.getByTestId("buttonNav");

      expect(button).toHaveClass("buttonNav");
      expect(button).not.toHaveClass("buttonNav--notShow");
    });
  });

  describe("When the header is open", () => {
    test("Then the navigation button should not be visible", async () => {
      const store = setupStore();
      renderWithProviders(<ButtonNav />, { store });

      const button = screen.getByRole("button");
      fireEvent.click(button);

      await screen.findByTestId("buttonNav");
      const buttonNav = screen.getByTestId("buttonNav");
      expect(buttonNav).not.toHaveClass("buttonNav");
      expect(buttonNav).toHaveClass("buttonNav--notShow");
    });
  });
});
