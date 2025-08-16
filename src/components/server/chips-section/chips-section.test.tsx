/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import ChipsSection from "@/components/server/chips-section/chips-section";

// Mock Material-UI components to prevent rendering issues in the test environment
// and to isolate the component's logic.
jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  Chip: (props) => (
    <div data-testid="mock-chip" {...props}>
      {props.label}
    </div>
  ),
  Alert: (props) => (
    <div data-testid="mock-alert" role="alert">
      {props.children}
    </div>
  ),
  Typography: (props) => (
    <h3 data-testid="mock-typography">{props.children}</h3>
  ),
  Box: (props) => <div data-testid="mock-box">{props.children}</div>,
  Stack: (props) => <div data-testid="mock-stack">{props.children}</div>,
}));

describe("ChipsSection Component", () => {
  const mockChips = ["Java", "TypeScript", "Python"];
  const mockTitle = "Core Programming Languages";
  const mockErrorMessage = "Failed to fetch languages.";

  it("should render chips when data is fetched successfully", async () => {
    // Mock a successful fetch
    const mockFetchFunction = jest.fn().mockResolvedValue(mockChips);

    // Render the async component and wait for it to resolve
    render(
      await ChipsSection({
        title: mockTitle,
        fetchFunction: mockFetchFunction,
        errorMessage: mockErrorMessage,
      }),
    );

    // The title should be present
    expect(screen.getByText(`${mockTitle}:`)).toBeInTheDocument();

    // Check that all chips from the mock data are rendered
    mockChips.forEach((chip) => {
      expect(screen.getByText(chip)).toBeInTheDocument();
      expect(screen.getByText(chip)).toHaveAttribute(
        "data-testid",
        "mock-chip",
      );
    });
  });

  it("should render an error message when data fetching fails", async () => {
    // Mock a failed fetch by throwing an error
    const mockFetchFunction = jest
      .fn()
      .mockRejectedValue(new Error("Network Error"));

    // Render the component and check for the error state
    render(
      await ChipsSection({
        title: mockTitle,
        fetchFunction: mockFetchFunction,
        errorMessage: mockErrorMessage,
      }),
    );

    // Check that the alert component with the error message is visible
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
  });
});
