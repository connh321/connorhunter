/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Contact from "./contact";
import { getContacts } from "@/lib/contacts";
import { FETCH_CONTACTS_ERROR } from "@/errors/contacts";

jest.mock("../../../lib/contacts");

const mockGetContacts = getContacts as jest.Mock;

describe("Contact", () => {
  it("renders contacts when fetch succeeds", async () => {
    mockGetContacts.mockResolvedValueOnce([
      { type: "email", label: "me@example.com", href: "mailto:me@example.com" },
      {
        type: "github",
        label: "mygithub",
        href: "https://github.com/mygithub",
      },
    ]);

    render(await Contact());

    expect(await screen.findByText("me@example.com")).toBeInTheDocument();
    expect(await screen.findByText("mygithub")).toBeInTheDocument();
  });

  it("renders error when fetch fails", async () => {
    mockGetContacts.mockRejectedValueOnce(new Error("network fail"));

    render(await Contact());

    expect(await screen.findByText(FETCH_CONTACTS_ERROR)).toBeInTheDocument();
  });
});
