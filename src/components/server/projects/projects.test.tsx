// Projects.test.tsx
import { render, screen } from "@testing-library/react";
import { getProjects } from "@/lib/projects";
import { FETCH_PROJECTS_ERROR } from "@/errors/projects";
import Projects from "@/components/server/projects/projects";

jest.mock("../project/project", () => ({
  __esModule: true,
  default: ({ data }) => <div data-testid="project">{data.title}</div>,
}));

jest.mock("../../../lib/projects");

describe("Projects component", () => {
  it("renders projects when fetch succeeds", async () => {
    (getProjects as jest.Mock).mockResolvedValue([
      { title: "Test Project" },
      { title: "Another Project" },
    ]);

    render(await Projects());

    expect(await screen.findByText("Projects:")).toBeInTheDocument();
    expect(await screen.findAllByTestId("project")).toHaveLength(2);
  });

  it("renders nothing but heading when fetch returns empty list", async () => {
    (getProjects as jest.Mock).mockResolvedValue([]);

    render(await Projects());

    expect(await screen.findByText("Projects:")).toBeInTheDocument();
    expect(screen.queryByTestId("project")).toBeNull();
  });

  it("renders error alert when fetch fails", async () => {
    (getProjects as jest.Mock).mockRejectedValue(new Error("fail"));

    render(await Projects());

    expect(await screen.findByText(FETCH_PROJECTS_ERROR)).toBeInTheDocument();
  });
});
