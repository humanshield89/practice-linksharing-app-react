import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 *
 * @param {import("react").ReactNode} param0
 * @returns {JSX.Element}
 */

export const AuthGuard = ({ children }) => {
  const auth = useSelector((store) => store.auth);

  if (!auth.user) {
    return <Navigate to="/" />;
  }
  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};
