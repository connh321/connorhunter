import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header component", () => {
  it("renders the name section with short and long text", () => {
    render(<Header />);
    expect(screen.getByText("CH")).toBeInTheDocument();
    expect(screen.getByText("CONNOR HUNTER")).toBeInTheDocument();
  });
});
