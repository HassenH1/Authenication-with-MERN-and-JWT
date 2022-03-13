import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter } from "../setupTestFiles/renderWithRouter";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("nav bar test", () => {
  it("Should render navbar", () => {
    renderWithRouter(<App />);
    const registerNavLink = screen.getByRole("link", { name: /Register/i });
    expect(registerNavLink).toBeInTheDocument();
  });
  it("Navlink should be clickable", () => {
    renderWithRouter(<App />);
    const registerNavLink = screen.getByRole("link", { name: /register/i });
    expect(registerNavLink).toBeInTheDocument();

    const handleClick = jest.fn();
    registerNavLink.onclick = handleClick();
    userEvent.click(registerNavLink);
    expect(handleClick).toHaveBeenCalled();
  });
});
