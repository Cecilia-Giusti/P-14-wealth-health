import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import ButtonNav from "./components/ButtonNav";
import Header from "./components/Header";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import Error from "./pages/Error";
import { getUsers } from "./service/user";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <ButtonNav />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/current-employees" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
