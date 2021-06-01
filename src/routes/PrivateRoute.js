import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getUsers } from "../redux/actions/users";
import { isLogin } from "../services/authService";

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("ROUTE!");
    dispatch(getUsers());
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
