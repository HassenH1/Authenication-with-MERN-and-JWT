import React from "react";
import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter } from "../setupTestFiles/renderWithRouter";
import App from "../App";

describe("Home page unit test", () => {
  it("Renders Home Page", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/JWT Testing Area/i)).toBeInTheDocument();
  });

  it("Find and Click on Signup Button", async () => {
    renderWithRouter(<App />);
    const clickHandler = jest.fn((evt) => {
      evt.preventDefault();
      evt.stopPropagation();
    });
    const getRegisterButton = screen.getByRole("button", {
      name: /Sign up/i,
    });
    expect(getRegisterButton).toBeInTheDocument();
    getRegisterButton.onclick = (evt) => clickHandler(evt);
    act(() => userEvent.click(getRegisterButton));
    expect(clickHandler).toHaveBeenCalled();
  });
  it("Find and clicks on Login button", () => {
    renderWithRouter(<App />);
    const clickHandler = jest.fn((evt) => {
      evt.preventDefault();
      evt.stopPropagation();
    });
    const getSigninButton = screen.getByRole("button", {
      name: /Sign in/i,
    });
    expect(getSigninButton).toBeInTheDocument();
    getSigninButton.onclick = (evt) => clickHandler(evt);
    act(() => userEvent.click(getSigninButton));
    expect(clickHandler).toHaveBeenCalled();
  });
  it("Find and clicks on Dashboard button", () => {
    renderWithRouter(<App />);
    const clickHandler = jest.fn((evt) => {
      evt.preventDefault();
      evt.stopPropagation();
    });
    const getDashboardButton = screen.getByRole("button", {
      name: /Dashboard/i,
    });
    expect(getDashboardButton).toBeInTheDocument();
    getDashboardButton.onclick = (evt) => clickHandler(evt);
    userEvent.click(getDashboardButton);
    expect(clickHandler).toHaveBeenCalled();
  });
});
