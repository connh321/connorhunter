// src/components/client/contact/contact.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./contact";

describe("Contact Component", () => {
  it("renders all contact labels", () => {
    render(<Contact />);

    // Check that each label is rendered
    expect(screen.getByText(/Phone:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub:/i)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn:/i)).toBeInTheDocument();
  });

  it("renders all contact links with correct hrefs", () => {
    render(<Contact />);

    expect(screen.getByText("(315) 694-6563").closest("a")).toHaveAttribute(
      "href",
      "tel:3156946563",
    );
    expect(screen.getByText("connh321@gmail").closest("a")).toHaveAttribute(
      "href",
      "mailto:connh321@gmail.com",
    );
    expect(screen.getByText("git/connh321").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/connh321",
    );
    expect(screen.getByText("in/connor--hunter").closest("a")).toHaveAttribute(
      "href",
      "https://linkedin.com/in/connor--hunter",
    );
  });
});
