import { HashRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import { fireEvent, screen } from "@testing-library/react";
import EmployeeList from "../../pages/EmployeeList";
import { renderWithProviders } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";

const provider = () => {
  //Store
  const store = setupStore();

  //Provider
  renderWithProviders(
    <HashRouter>
      <EmployeeList />
    </HashRouter>,
    { store }
  );
};

describe("Given the user is on the page employeeList", () => {
  test("Then the component should display", () => {
    provider();
    expect(screen.getByTestId("main-employeesList")).toBeInTheDocument();
    expect(screen.getByTestId("number-show")).toBeInTheDocument();
    expect(screen.getByTestId("searchBar")).toBeInTheDocument();
    expect(screen.getByTestId("employees-table")).toBeInTheDocument();
  });

  describe("When the user click on the navigation button", () => {
    test("then handleOpenNav function should be called", async () => {
      const handleOpenNav = jest.fn();
      provider();
      const main = screen.getByTestId("main-employeesList");

      main.addEventListener("click", handleOpenNav);
      userEvent.click(main);

      expect(handleOpenNav).toHaveBeenCalled();
    });
  });

  describe("When the user researchs an employee with the searchBar", () => {
    test("Then the setBirthday function should be called", () => {
      const setGlobalFilter = jest.fn();
      const name = "Eric";
      provider();
      const debounceInput = screen.getByTestId("searchBar");

      //Value is empty
      expect(debounceInput.value).toBe("");

      debounceInput.addEventListener("change", setGlobalFilter);
      fireEvent.change(debounceInput, { target: { value: name } });

      //Value is Eric
      expect(setGlobalFilter).toHaveBeenCalled();
      expect(debounceInput.value).toBe(name);
    });
  });
});
