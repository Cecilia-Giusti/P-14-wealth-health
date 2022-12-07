import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import ButtonNav from "./components/ButtonNav";
import Header from "./components/Header";
import Error from "./pages/Error";
import { getUsers } from "./service/user";

const CreateEmployee = lazy(() => import("./pages/CreateEmployee"));
const EmployeeList = lazy(() => import("./pages/EmployeeList"));

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <ButtonNav />
        <Routes>
          <Route path="/P-14-wealth-health/" element={<CreateEmployee />} />
          <Route
            path="/P-14-wealth-health/current-employees"
            element={<EmployeeList />}
          />
          <Route path="/P-14-wealth-health/*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
