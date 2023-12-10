import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthInit } from "./components/AuthInit";
import { Suspense } from "react";
import { SpinnerIcon } from "./svgs/SpinnerIcon";
import { lazy } from "react";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Customize = lazy(() => import("./pages/app/Customize"));
const EditLayout = lazy(() => import("./layouts/EditLayout"));
const ProfileDetails = lazy(() => import("./pages/app/ProfileDetails"));
const Preview = lazy(() => import("./pages/Preview"));

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthInit>
          <Suspense
            fallback={
              <div className="min-h-screen min-w-screen flex justify-center items-center">
                <SpinnerIcon />
              </div>
            }
          >
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
          </Suspense>
        </AuthInit>
      </Provider>
    </>
  );
}

export default App;
