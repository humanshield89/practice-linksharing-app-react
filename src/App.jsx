import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navigate } from "react-router-dom";
import { Customize } from "./pages/app/Customize";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app">
          <Route index element={<Navigate to="customize" />} />
          <Route path={"customize"} element={<Customize />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
