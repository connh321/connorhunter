/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Certifications from "@/components/server/certifications/certifications";
import { ICertification } from "@/types/certification";

// Mock next/image to prevent errors in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("Certifications Component", () => {
  const mockCertifications: ICertification[] = [
    {
      link: "http://example.com/badge1",
      src: "/certifications/cert1.webp",
      alt: "Certification 1",
    },
    {
      link: "http://example.com/badge2",
      src: "/certifications/cert2.webp",
      alt: "Certification 2",
    },
  ];

  const mockErrorMessage = "Failed to fetch certifications.";

  it("should render certifications when data is fetched successfully", async () => {
    // Mock a successful fetch
    const mockFetchFunction = jest.fn().mockResolvedValue(mockCertifications);

    // Render the async component and wait for it to resolve
    render(
      await Certifications({
        fetchFunction: mockFetchFunction,
        errorMessage: mockErrorMessage,
      }),
    );

    // The title should be present
    expect(screen.getByText("Certifications:")).toBeInTheDocument();

    // Check that all certifications from the mock data are rendered
    mockCertifications.forEach((cert) => {
      const image = screen.getByAltText(cert.alt);
      expect(image).toBeInTheDocument();
      // You can also check the src and other props
      expect(image).toHaveAttribute("src", cert.src);
      expect(image.closest("a")).toHaveAttribute("href", cert.link);
    });
  });

  it("should render an error message when data fetching fails", async () => {
    // Mock a failed fetch by throwing an error
    const mockFetchFunction = jest
      .fn()
      .mockRejectedValue(new Error("Network Error"));

    // Render the component and check for the error state
    render(
      await Certifications({
        fetchFunction: mockFetchFunction,
        errorMessage: mockErrorMessage,
      }),
    );

    // Check that the alert component with the error message is visible
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
  });
});
