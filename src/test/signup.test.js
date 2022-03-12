import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter } from "../setupTestFiles/renderWithRouter";
import App from "../App";

describe("Sign up page unit test", () => {
  it("Renders Sign up Page", () => {
    renderWithRouter(<App />, { route: "/signup" });
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
  it("should fill text fields and press button", async () => {
    renderWithRouter(<App />, { route: "/signup" });
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
    expect(screen.getByPlaceholderText("password")).toHaveValue(
      "testing password"
    );

    const signupButton = screen.getByRole("button", { name: /Sign up/i });
    expect(signupButton).toBeInTheDocument();
    signupButton.onclick = (evt) => handleClick(evt);
    userEvent.click(signupButton);
    expect(handleClick).toHaveBeenCalled();
  });
});
