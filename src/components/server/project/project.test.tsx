/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Project from "./project";
import { IProject } from "@/types/project";

// Mock next/image to avoid Next.js errors
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props) => <img {...props} alt={props.alt} />,
}));

// Mock ChipsSection and fallback to avoid async client component error
jest.mock("../chips-section/chips-section", () => ({
  __esModule: true,
  default: ({ chips }: { chips: string[] }) => (
    <div data-testid="chips">{chips.join(",")}</div>
  ),
}));
jest.mock("../certifications/certificates-fallback", () => ({
  __esModule: true,
  default: () => <div data-testid="chips-fallback">Loading...</div>,
}));

const baseProject: IProject = {
  title: "Test Project",
  description: "This is a test description",
  chips: ["React", "TypeScript"],
  githubLink: "https://github.com/example/test",
};

describe("Project component", () => {
  it("renders title and description", () => {
    render(<Project data={baseProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("always renders GitHub button", () => {
    render(<Project data={baseProject} />);
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", baseProject.githubLink);
  });

  it("renders Website button when websiteLink is provided", () => {
    const projectWithWebsite = {
      ...baseProject,
      websiteLink: "https://example.com",
    };
    render(<Project data={projectWithWebsite} />);
    const websiteLink = screen.getByRole("link", { name: /Website/i });
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute("href", projectWithWebsite.websiteLink);
  });
});
