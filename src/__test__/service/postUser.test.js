import axios from "axios";
import { postUser } from "../../service/user";
import { addUser } from "../../feature/usersSlice";

jest.mock("axios", () => {
  return { post: jest.fn() };
});

describe("Given post the data", () => {
  describe("When there is no error", () => {
    test("Then the function postUser should return true and addUser should be called", async () => {
      let dispatch = jest.fn();

      //Data
      const newEmployee = {
        firstName: "John",
        lastName: "Smith",
        birthday: "3/25/1920",
        startDay: "11/29/2022",
        department: "Legal",
        street: "69024 Shanahan Tunnel",
        city: "Flagstaff",
        state: "Wyoming",
        zipCode: "19341",
      };

      //Actions
      axios.post.mockResolvedValue({ newEmployee });
      const result = await postUser({ newEmployee }, dispatch);

      expect(dispatch).toHaveBeenCalledWith(addUser({ newEmployee }));
      expect(result).toBeTruthy();
    });
  });

  describe("When there is error", () => {
    test("Then the function postUser should return false", async () => {
      let dispatch = jest.fn();

      //Data
      const newEmployee = {};

      //Action
      axios.post.mockRejectedValue(new Error("Error"));
      const result = await postUser({ newEmployee }, dispatch);

      expect(dispatch).not.toHaveBeenCalled();
      expect(result).toEqual(false);
    });
  });
});
