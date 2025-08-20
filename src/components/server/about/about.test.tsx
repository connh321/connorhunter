// AboutClient.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import About from "@/components/server/about/about";

describe("AboutClient", () => {
  it("renders main heading", () => {
    render(<About />);
    expect(screen.getByText("Hello! I'm Connor")).toBeInTheDocument();
  });

  it("renders phrases", () => {
    render(<About />);
  });

  it("renders all Typography elements", () => {
    render(<About />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });
});
