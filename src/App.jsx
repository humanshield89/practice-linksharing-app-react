import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navigate } from "react-router-dom";
import { Customize } from "./pages/app/Customize";
import EditLayout from "./layouts/EditLayout";
import ProfileDetails from "./pages/app/ProfileDetails";
import Preview from "./pages/Preview";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthInit } from "./components/AuthInit";

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthInit>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/app" element={<EditLayout />}>
              <Route index element={<Navigate to="links" />} />
              <Route path={"links"} element={<Customize />} />
              <Route path={"profile"} element={<ProfileDetails />} />
            </Route>
            <Route path="/p" element={<Preview />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthInit>
      </Provider>
    </>
  );
}

export default App;
