import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../services/authService";

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;