import { usersMock } from "../mock/userRandomFactory";
import { setUsers } from "../service/user";

const ButtonDataCreate = () => {
  const dataUserMock = () => {
    const users = usersMock();
    console.log(users);
    try {
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="button__createData">
      <input
        type="button"
        className="notEven"
        value="Create data"
        onClick={dataUserMock}
      />
    </div>
  );
};

export default ButtonDataCreate;
