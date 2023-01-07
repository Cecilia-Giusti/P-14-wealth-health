import { fireEvent, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import ButtonNav from "../../components/ButtonNav";
import Error from "../../pages/Error";
import { handleOpenNav } from "../../utils/handleOpenNav";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the user is on the bad url page", () => {
  describe("When the error page is visible", () => {
    test("Then the error title should be visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <HashRouter>
          <Error />
        </HashRouter>,
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

describe("Given the user is on the bad url page on mobile or tablet", () => {
  describe("When the error page is visible", () => {
    test("Then the nav should not be visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <HashRouter>
          <Error />
        </HashRouter>,
        { store }
      );

      //Main
      const main = screen.getByTestId("main-errorPage");
      expect(main).toBeTruthy();
      expect(main).toHaveClass("main errorPage close");
    });
  });

  describe("When the user clics on nav button", () => {
    test("Then the nav should be visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <HashRouter>
          <ButtonNav />
          <Error />
        </HashRouter>,
        { store }
      );

      //Main
      const main = screen.getByTestId("main-errorPage");
      expect(main).toBeTruthy();
      expect(main).toHaveClass("main errorPage close");

      // Mock functions
      const dispatch = jest.fn();
      const openNav = jest.fn(handleOpenNav(dispatch));

      // Button open nav and click
      const button = screen.getByTestId("navigation-button");
      button.addEventListener("click", openNav);
      fireEvent.click(button);

      expect(openNav).toBeCalled();
      expect(main).toHaveClass("main errorPage");
    });
  });

  describe("When the user cliks on main when the nav is open", () => {
    test("Then the nav should be not visible", async () => {
      //Store
      const store = setupStore();
      renderWithProviders(
        <HashRouter>
          <ButtonNav />
          <Error />
        </HashRouter>,
        { store }
      );

      //Main
      const main = screen.getByTestId("main-errorPage");
      expect(main).toBeTruthy();
      expect(main).toHaveClass("main errorPage close");

      // Mock functions
      const dispatch = jest.fn();
      const openNav = jest.fn(handleOpenNav(dispatch));

      // Button open nav and click
      const button = screen.getByTestId("navigation-button");
      button.addEventListener("click", openNav);
      fireEvent.click(button);

      expect(openNav).toBeCalled();
      expect(main).toHaveClass("main errorPage");
      expect(main).not.toHaveClass("main errorPage error");

      //Click on main
      main.addEventListener("click", openNav);
      fireEvent.click(main);

      expect(openNav).toBeCalled();

      expect(main).toHaveClass("main errorPage close");
    });
  });
});
