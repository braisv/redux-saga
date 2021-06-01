import { BrowserRouter, Switch } from "react-router-dom";
import { Login, Home, NoMatch, Profile } from "../pages";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PrivateRoute component={Home} path="/" exact />
        <PrivateRoute component={Profile} path="/user/:id" exact />
        <PrivateRoute component={NoMatch} path="*" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
