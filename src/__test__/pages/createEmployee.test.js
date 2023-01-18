import { fireEvent } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import CreateEmployee from "../../pages/CreateEmployee";
import { renderWithProviders } from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("../../utils/formCheck", () => jest.fn(() => true));
jest.mock("../../utils/formError", () => jest.fn());
jest.mock("../../utils/errorMessage", () => jest.fn());

jest.mock("@cecigiu2b/dropdown-menu-react", () => {
  const fakeName = jest.fn(({ name }) => name);
  const fakeOptions = jest.fn(({ options }) => options);
  const fakeCustomClassSelect = jest.fn(
    ({ customClassSelect }) => customClassSelect
  );
  const fakeCustomClassOption = jest.fn(
    ({ customClassOption }) => customClassOption
  );
  const fakGetValue = jest.fn(({ getValue }) => getValue);

  return {
    DropdownMenu: fakeName,
    fakeOptions,
    fakeCustomClassSelect,
    fakeCustomClassOption,
    fakGetValue,
  };
});

const provider = () => {
  //Store
  const store = setupStore();

  //Provider
  renderWithProviders(
    <HashRouter>
      <CreateEmployee />
    </HashRouter>,
    { store }
  );
};

describe("Given the user is on the page createEmployee", () => {
  test("Then the component should display", () => {
    provider();
    expect(screen.getByTestId("main-createdEmployee")).toBeInTheDocument();
    expect(screen.getByTestId("main-createdEmployee")).toHaveClass(
      "main createEmployee close"
    );
    expect(screen.getByTestId("formNewEmployee")).toBeInTheDocument();
    expect(screen.getByTestId("firstName")).toBeInTheDocument();
    expect(screen.getByTestId("lastName")).toBeInTheDocument();
    expect(screen.getByTestId("errorMessage")).toBeInTheDocument();
  });
  describe("When the user click on the navigation button", () => {
    test("then handleOpenNav function should be called", async () => {
      const handleOpenNav = jest.fn();
      provider();
      const main = screen.getByTestId("main-createdEmployee");

      main.addEventListener("click", handleOpenNav);
      userEvent.click(main);

      expect(handleOpenNav).toHaveBeenCalled();
    });
  });
  describe("When the form is sent", () => {
    test("then handleSubmit function should be called", async () => {
      const handleSubmit = jest.fn();

      provider();
      const form = screen.getByTestId("formNewEmployee");
      form.addEventListener("submit", handleSubmit);
      fireEvent.submit(form);

      expect(handleSubmit).toHaveBeenCalled();
    });
  });

  describe("When the user choose a birthday date", () => {
    test("Then the setBirthday function should be called", () => {
      const setBirthday = jest.fn();
      provider();
      const datePicker = screen.getByRole("textbox", { name: "Birthday" });
      datePicker.addEventListener("change", setBirthday);
      fireEvent.change(datePicker, { target: { value: "01/01/2022" } });
      expect(setBirthday).toHaveBeenCalled();
    });
  });

  describe("When the user choose a startday date", () => {
    test("Then the setBirthday function should be called", () => {
      const setStartDay = jest.fn();
      provider();
      const datePicker = screen.getByRole("textbox", { name: "Start day" });
      datePicker.addEventListener("change", setStartDay);
      fireEvent.change(datePicker, { target: { value: "01/01/2022" } });
      expect(setStartDay).toHaveBeenCalled();
    });
  });

  describe("When the user click on cancel button", () => {
    test("handleCloseModal function is called when close button is clicked", () => {
      const handleCloseModal = jest.fn(() => {});

      provider();
      const closeButton = screen.getByTestId("button-cancel");
      closeButton.addEventListener("click", handleCloseModal);

      fireEvent.click(closeButton);
      expect(handleCloseModal).toHaveBeenCalled();
    });
  });
});
