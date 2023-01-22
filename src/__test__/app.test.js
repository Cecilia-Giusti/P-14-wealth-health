import { screen } from "@testing-library/react";

import App from "../../src/App";
import { setupStore } from "../app/store";
import { renderWithProviders } from "../utils/test-utils";

jest.mock("../service/user", () => {
  const getFN = jest.fn(() => true);
  const thenFN = jest.fn();
  const catchFN = jest.fn();

  return {
    getUsers: getFN,
    thenFN,
    catchFN,
  };
});

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

describe("App", () => {
  it("renders correctly and calls getUsers with dispatch", () => {
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.append(root);

    //Store
    const store = setupStore();
    renderWithProviders(<App />, { store });
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("buttonNav")).toBeInTheDocument();
  });
});
