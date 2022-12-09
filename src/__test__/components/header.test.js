import { fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import ButtonNav from "../../components/ButtonNav";
import Header from "../../components/Header";
import { handleOpenNav } from "../../utils/handleOpenNav";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the user is on the home page", () => {
  describe("When the header is visible", () => {
    test("Then the logo should be visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        { store }
      );

      //Logo
      const logo = screen.getByRole("img");
      expect(logo).toBeTruthy();
    });

    test("Then the nav should be visible", () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        { store }
      );

      //Nav
      const nav = screen.getByRole("navigation");
      const createEmployee = screen.getByTestId("create-employee");
      const currentEmployees = screen.getByTestId("current-employees");

      expect(nav).toContainElement(createEmployee);
      expect(nav).toContainElement(currentEmployees);
    });
  });

  describe("When the user use a tablet or a smartphone", () => {
    test("Then the header should be closed", () => {
      // Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        { store }
      );

      // Header
      const header = screen.getByTestId("header");
      expect(header).not.toHaveClass("show");
    });
  });

  describe("When the user clicks on the navigation icon", () => {
    test("Then the header should be open", () => {
      // Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <Header />
          <ButtonNav />
        </BrowserRouter>,
        { store }
      );

      // Mock functions
      const dispatch = jest.fn();
      const openNav = jest.fn(handleOpenNav(dispatch));

      // Button open nav and click
      const button = screen.getByTestId("navigation-button");
      button.addEventListener("click", openNav);
      fireEvent.click(button);

      expect(openNav).toBeCalled();

      // Header
      const header = screen.getByTestId("header");
      expect(header).toHaveClass("show");
      expect(header).toHaveClass("header--tablet");
    });
  });

  describe("When the user clicks on the cross", () => {
    test("Then the header should be closed", () => {
      // Store
      const store = setupStore();
      renderWithProviders(
        <BrowserRouter>
          <Header />
          <ButtonNav />
        </BrowserRouter>,
        { store }
      );

      // Mock functions
      const dispatch = jest.fn();
      const closeNav = jest.fn(handleOpenNav(dispatch));

      // Button open nav and click
      const button = screen.getByTestId("navigation-button");
      button.addEventListener("click", closeNav);
      fireEvent.click(button);

      expect(closeNav).toBeCalled();

      // Button close nav and click
      const buttonClose = screen.getByTestId("button-close");
      buttonClose.addEventListener("click", closeNav);
      fireEvent.click(buttonClose);

      expect(closeNav).toBeCalled();

      // Header
      const header = screen.getByTestId("header");
      expect(header).not.toHaveClass("show");
      expect(header).not.toHaveClass("header--tablet");
    });
  });
});
