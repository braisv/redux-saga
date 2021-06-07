import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import { render } from "@testing-library/react";
import Home from "./index";

test("renders Home page", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>,
    { route: "/" }
  );
  expect(getByTestId("list-container")).toBeInTheDocument();
});
