import React from "react";
import user from "@testing-library/user-event";
import { waitFor, act, render } from "@testing-library/react";
import Login from "./index";

test("renders login page", () => {
  const script = document.createElement("script");
  document.body.appendChild(script);
  const { getByText, getAllByPlaceholderText } = render(<Login />, {
    route: "/login",
  });
  expect(getByText(/Log in/i)).toBeInTheDocument();

  const inputElements = getAllByPlaceholderText(/Insert/i);
  expect(inputElements[0]).toBeInTheDocument();
  expect(inputElements[1]).toBeInTheDocument();
});

test("on submit, with no input data login, required errors show up", async () => {
  const { getByText } = render(<Login />, {
    route: "/login",
  });
  user.click(getByText(/Log in/i));

  expect(getByText(/Email required/i)).toBeInTheDocument();
  expect(getByText(/Password required/i)).toBeInTheDocument();
});

test("on submit, with invalid input data login, invalid error show up", async () => {
  const userEmail = "test#mail.com";
  const { getByText, getByPlaceholderText } = render(<Login />, {
    route: "/login",
  });

  const emailInput = getByPlaceholderText("Insert valid email");

  user.type(emailInput, userEmail);
  user.click(getByText(/Log in/i));

  expect(getByText(/Invalid email provided/i)).toBeInTheDocument();
});

test("on submit, with valid input data login request happens", async () => {
  const userData = { email: "test@mail.com", password: "asdASD" };
  const { getByText, getByTestId, getByPlaceholderText } = render(<Login />, {
    route: "/login",
  });

  const emailInput = getByPlaceholderText("Insert valid email");
  const passwordInput = getByPlaceholderText("Insert password");

  await act(async () => {
    user.type(emailInput, userData.email);
    user.type(passwordInput, userData.password);
  });

  await act(async () => {
    user.click(getByText(/Log in/i));
    waitFor(() => getByTestId("loading"));
  });
});
