import usersSlice, {
  setUsersData,
  addUser,
  setErrorGetUser,
} from "../../feature/usersSlice";

describe("Given the application needs to use user data", () => {
  describe("When we want to get the data", () => {
    test("Then the action setUsersData should recover the data and errorGetUser should be false", () => {
      const users = [
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

      const nextState = usersSlice(undefined, setUsersData(users));
      expect(nextState).toEqual({
        users,
        errorGetUser: false,
      });
    });
  });

  describe("When we want to post a data", () => {
    test("Then the action addUser should post the data and errorGetUser should be false", () => {
      const newUser = {
        sex: "male",
        firstName: "Pauline",
        lastName: "Goodwin",
        birthday: "7/27/1971",
        startDay: "11/29/2022",
        department: "Engineering",
        street: "04491 Lazaro Crossroad",
        city: "Chesapeake",
        state: "Virginia",
        zipCode: "26890",
        id: 3,
      };

      const users = [
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
      const nextState = usersSlice(
        { users: [users], errorGetUser: false },
        addUser(newUser)
      );
      expect(nextState).toEqual({
        users: [users, newUser],
        errorGetUser: false,
      });
    });
    describe("When we want to post a data or get a data but there is an error", () => {
      test("Then the action errorGetUser should be true and and the employee table empty", () => {
        const nextState = usersSlice(undefined, setErrorGetUser(true));
        expect(nextState).toEqual({
          users: [],
          errorGetUser: true,
        });
      });
    });
  });
});
