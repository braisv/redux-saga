import { BrowserRouter, Switch } from "react-router-dom";
import { Login, Home, NoMatch, Profile } from "../pages";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} component={Login} path="/" exact />
        <PrivateRoute component={Home} path="/home" exact />
        <PrivateRoute component={Profile} path="/profile" exact />
        <PrivateRoute component={NoMatch} path="*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
