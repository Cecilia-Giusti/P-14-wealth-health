import axios from "axios";
import {
  addUser,
  setErrorGetUser,
  setUsersData,
} from "../../feature/usersSlice";
import { getUsers, postUser } from "../../service/user";

jest.mock("axios", () => {
  return { get: jest.fn() };
});

describe("Given retrieving the data", () => {
  describe("When there is no error", () => {
    test("Then the function getUser should return true and setErrorGetUser should be false", async () => {
      let dispatch = jest.fn();

      //Datas
      const data = [
        {
          sex: "male",
          firstName: "Adrian",
          lastName: "Jaskolski",
          birthday: "3/26/1967",
          startDay: "11/29/2022",
          department: "Human Resources",
          street: "96470 Millie Ways",
          city: "Ames",
          state: "California",
          zipCode: "01661",
          id: 1,
        },
        {
          sex: "female",
          firstName: "Grace",
          lastName: "Rowe",
          birthday: "3/25/1920",
          startDay: "11/29/2022",
          department: "Legal",
          street: "69024 Shanahan Tunnel",
          city: "Flagstaff",
          state: "Wyoming",
          zipCode: "19341",
          id: 2,
        },
      ];

      //Action
      axios.get.mockResolvedValue({ data });
      const result = await getUsers(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setErrorGetUser(false));

      //New datas after modelisation
      const newDataMock = [
        {
          firstName: "Adrian",
          lastName: "Jaskolski",
          birthday: "1967-03-25T23:00:00.000Z",
          startDay: "2022-11-28T23:00:00.000Z",
          department: "Human Resources",
          street: "96470 Millie Ways",
          city: "Ames",
          state: "California",
          zipCode: "01661",
        },
        {
          firstName: "Grace",
          lastName: "Rowe",
          birthday: "1920-03-24T23:00:00.000Z",
          startDay: "2022-11-28T23:00:00.000Z",
          department: "Legal",
          street: "69024 Shanahan Tunnel",
          city: "Flagstaff",
          state: "Wyoming",
          zipCode: "19341",
        },
      ];
      expect(dispatch).toHaveBeenCalledWith(setUsersData(newDataMock));
      expect(result).toEqual(true);
    });
  });

  describe("When there is an error", () => {
    test("Then the function getUser should return false and setErrorGetUser should be true", async () => {
      let dispatch = jest.fn();

      //Action
      axios.get.mockRejectedValue(new Error("Error"));
      const result = await getUsers(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setErrorGetUser(true));
      expect(result).toEqual(false);
    });
  });
});
