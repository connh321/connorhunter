// src/components/client/contact/contact.test.tsx
import { render, screen } from "@testing-library/react";
import Contact from "./contact";
import { IContact } from "@/types/contact";

const mockData: IContact[] = [
  { type: "phone", label: "(315) 694-6563", href: "tel:3156946563" },
  { type: "email", label: "connh321@gmail", href: "mailto:connh321@gmail.com" },
  {
    type: "github",
    label: "git/connh321",
    href: "https://github.com/connh321",
  },
  {
    type: "linkedin",
    label: "in/connor--hunter",
    href: "https://linkedin.com/in/connor--hunter",
  },
];

describe("Contact Component", () => {
  it("renders all contact labels", async () => {
    render(
      await Contact({
        fetchFunction: async () => mockData,
        errorMessage: "Error loading contacts",
      }),
    );

    expect(screen.getByText("(315) 694-6563")).toBeInTheDocument();
    expect(screen.getByText("connh321@gmail")).toBeInTheDocument();
    expect(screen.getByText("git/connh321")).toBeInTheDocument();
    expect(screen.getByText("in/connor--hunter")).toBeInTheDocument();
  });

  it("renders all contact links with correct hrefs", async () => {
    render(
      await Contact({
        fetchFunction: async () => mockData,
        errorMessage: "Error loading contacts",
      }),
    );

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
