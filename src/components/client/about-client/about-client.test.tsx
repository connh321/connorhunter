// AboutClient.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import AboutClient from "./about-client";

// Mock the custom hook to avoid running rough-notation during tests
jest.mock("../../../hooks/use-dynamic-highlight", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("AboutClient", () => {
  it("renders main heading", () => {
    render(<AboutClient />);
    expect(screen.getByText("Hello! I'm Connor")).toBeInTheDocument();
  });

  it("renders highlighted phrases", () => {
    render(<AboutClient />);
    expect(
      screen.getByText("Full Stack Software Engineer"),
    ).toBeInTheDocument();
    expect(screen.getByText("end-to-end")).toBeInTheDocument();
    expect(screen.getByText("scalability")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
    expect(screen.getByText("performance.")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("below.")).toBeInTheDocument();
  });

  it("renders all Typography elements", () => {
    render(<AboutClient />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });

  it("renders the 'below' element with the correct class", () => {
    render(<AboutClient />);
    const belowEl = screen.getByText("below.");
    expect(belowEl).toHaveClass("below");
  });
});
