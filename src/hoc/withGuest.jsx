import { GuestGuard } from "../components/GuestGuard";

/* eslint-disable react/display-name */
export const withGuestGuard = (WrappedComponent) => {
  return (props) => {
    return (
      <GuestGuard>
        <WrappedComponent {...props} />
      </GuestGuard>
    );
  };
};
