import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  getAuthFromLocalStorage,
  setAuth,
  setAuthLoaded,
} from "../redux/slices/AuthSlice";
import { useSelector } from "react-redux";
import { SpinnerIcon } from "../svgs/SpinnerIcon";

export function AuthInit({ children }) {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // check if this user was logged in before
    const authData = getAuthFromLocalStorage();

    if (authData?.session?.token) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/me`, {
        headers: {
          "session-token": `${authData.session.token}`,
        },
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            dispatch(
              setAuth({
                user: data.user,
                session: authData.session,
              }),
            );
          });
        } else {
          dispatch(setAuthLoaded(true));
        }
      });
    } else {
      dispatch(setAuthLoaded(true));
    }
  }, [dispatch]);

  return <>{auth.isLoaded ? children : <SpinnerIcon />}</>;
}

AuthInit.propTypes = {
  children: PropTypes.node,
};
