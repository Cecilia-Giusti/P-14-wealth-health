import { fireEvent, screen } from "@testing-library/react";
import { setupStore } from "../../app/store";
import DebouncedInput from "../../components/DebouncedInput";
import { renderWithProviders } from "../../utils/test-utils";

describe("Given the component is called", () => {
  test("Then the component should be mounted", () => {
    //Store
    const store = setupStore();

    //Render
    renderWithProviders(<DebouncedInput data-testid='input' />, { store });

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  });

  describe("When a new value is typed", () => {
    test("Then the element value should change too", async () => {
      jest.useFakeTimers();
      const onChange = jest.fn();

      //Store
      const store = setupStore();

      //Render
      renderWithProviders(
        <DebouncedInput
          value='research'
          onChange={onChange}
          debounce={1000}
          data-testid='input'
        />,
        { store }
      );

      const input = screen.getByTestId("input");

      // Action
      fireEvent.change(input, { target: { value: "new research" } });

      // Timer simulate
      jest.advanceTimersByTime(1000);
      jest.runAllTimers();

      expect(onChange).toHaveBeenCalledWith("new research");
    });
  });
});
