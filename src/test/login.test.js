import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter } from "../setupTestFiles/renderWithRouter";
import App from "../App";

describe("Login page unit test", () => {
  it("Renders Login Page", () => {
    renderWithRouter(<App />, { route: "/signin" });
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
  it("should fill text fields and press button", async () => {
    renderWithRouter(<App />, { route: "/signin" });
    const handleClick = jest.fn((evt) => {
      evt.preventDefault();
      evt.stopPropagation();
    });

    const username = screen.getByLabelText(/Username/i);
    expect(username).toBeInTheDocument();
    userEvent.type(username, "testing input");
    expect(username).toHaveValue("testing input");

    const password = screen.getAllByText(/Password/i)[0];
    expect(password).toBeInTheDocument();
    userEvent.type(password, "testing password");
    // screen.debug(password);
    expect(screen.getByPlaceholderText("Password")).toHaveValue(
      "testing password"
    );

    const signinButton = screen.getByRole("button", { name: /Sign in/i });
    expect(signinButton).toBeInTheDocument();
    signinButton.onclick = (evt) => handleClick(evt);
    userEvent.click(signinButton);
    expect(handleClick).toHaveBeenCalled();
    // screen.debug()
  });
});
