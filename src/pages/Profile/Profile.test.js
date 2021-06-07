import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { waitFor, render } from "@testing-library/react";

import Profile from "./index";
import store from "../../redux/store";

function renderWithProviders(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
  apolloMocks
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>
          <Route path={route}>{ui}</Route>
        </Router>
      </Provider>
    ),
    history,
  };
}

test("Render Profile page", async () => {
  const { getByTestId } = renderWithProviders(
    <Route path="/user/:id">
      <Profile />
    </Route>,
    {
      route: "/user/4",
    }
  );
  await waitFor(() => getByTestId("profile-container"));
});
