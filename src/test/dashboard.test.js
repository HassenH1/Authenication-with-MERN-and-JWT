import React from "react";
import { screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter } from "../setupTestFiles/renderWithRouter";
import App from "../App";

/**
 * @todo - need to finish tests
 */
describe("dashboard unit test", () => {
  it("tries to render dashboard when unauthenicated", async () => {
    renderWithRouter(<App />, { route: "/user/dashboard" });
    await waitFor(() =>
      expect(screen.getByText("Loading...")).toBeInTheDocument()
    );

    // await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    // screen.debug();
  });
});
