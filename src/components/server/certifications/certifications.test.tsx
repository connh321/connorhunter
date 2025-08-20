// Certifications.test.tsx
/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Certifications from "@/components/server/certifications/certifications";
import { ICertification } from "@/types/certification";

// Silence console.error for cleaner test output
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
  });
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});

// Mock next/image to prevent errors in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props) => <img {...props} alt={props.alt} />
}));

describe("Certifications Component", () => {
  const mockCertifications: ICertification[] = [
    {
      link: "http://example.com/badge1",
      src: "/certifications/cert1.webp",
      alt: "Certification 1"
    },
    {
      link: "http://example.com/badge2",
      src: "/certifications/cert2.webp",
      alt: "Certification 2"
    }
  ];

  const mockErrorMessage = "Failed to fetch certifications.";

  it("renders certifications when data is fetched successfully", async () => {
    const mockFetchFunction = jest.fn().mockResolvedValue(mockCertifications);

    render(
      await Certifications({
        fetchFunction: mockFetchFunction,
        errorMessage: mockErrorMessage
      })
    );

    expect(screen.getByText("Certifications:")).toBeInTheDocument();

    mockCertifications.forEach((cert) => {
      const image = screen.getByAltText(cert.alt);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", cert.src);
      expect(image.closest("a")).toHaveAttribute("href", cert.link);
    });
  });

  it("renders an error message when data fetching fails", async () => {
    const mockFetchFunction = jest
      .fn()
      .mockRejectedValue(new Error("Network Error"));

    render(
      await Certifications({
        fetchFunction: mockFetchFunction,
        errorMessage: mockErrorMessage
      })
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
  });
});
