import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonNav from "./components/ButtonNav";
import Header from "./components/Header";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import Error from "./pages/Error";

const App = () => {
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
