import { AuthGuard } from "../components/AuthGuarg";

/*
 * This is a Higher Order Component that wraps a component with the AuthGuard component
 * more about higher order components: https://legacy.reactjs.org/docs/higher-order-components.html
 * examples: https://www.freecodecamp.org/news/higher-order-components-in-react/
 */

/* eslint-disable react/display-name */
export const withAuthGuard = (WrappedComponent) => {
  return (props) => {
    return (
      <AuthGuard>
        <WrappedComponent {...props} />
      </AuthGuard>
    );
  };
};
