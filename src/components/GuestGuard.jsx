import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @param {{children: import("react").ReactNode}} param0
 * @returns {JSX.Element}
 */
export const GuestGuard = ({ children }) => {
  const auth = useSelector((store) => store.auth);

  if (auth.user) {
    return <Navigate to="/app" />;
  }

  return children;
};

GuestGuard.propTypes = {
  children: PropTypes.node,
};
