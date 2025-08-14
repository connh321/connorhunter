// src/components/client/footer/footer.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer Component", () => {
  it("renders the footer with copyright current year", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} Connor Hunter`;

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it("renders the footer with copyright future year", () => {
    const getFullYearSpy = jest
      .spyOn(global.Date.prototype, "getFullYear")
      .mockReturnValue(2026);
    const currentYear = 2026;
    const expectedText = `© 2025 - ${currentYear} Connor Hunter`;
    render(<Footer />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    getFullYearSpy.mockRestore();
  });

  it("renders a footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo"); // MUI Box component as footer
    expect(footer).toBeInTheDocument();
  });
});
