import { BrowserRouter, Switch } from "react-router-dom";
import { Login, Home, NoMatch, Profile } from "../pages";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} component={Login} path="/" exact />
        <PrivateRoute component={Home} path="/home" exact />
        <PrivateRoute component={Profile} path="/user/:id" exact />
        <PrivateRoute component={NoMatch} path="*" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
