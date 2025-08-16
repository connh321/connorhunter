// AboutClient.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import About from "@/components/server/about/about";

// Mock the custom hook to avoid running rough-notation during tests
jest.mock("../../../hooks/use-dynamic-highlight", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("AboutClient", () => {
  it("renders main heading", () => {
    render(<About />);
    expect(screen.getByText("Hello! I'm Connor")).toBeInTheDocument();
  });

  it("renders highlighted phrases", () => {
    render(<About />);
  });

  it("renders all Typography elements", () => {
    render(<About />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });
});
