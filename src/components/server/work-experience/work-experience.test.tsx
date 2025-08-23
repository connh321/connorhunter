// __tests__/WorkExperience.test.tsx
import { render, screen } from "@testing-library/react";
import { getWorkExperience } from "@/lib/work-experience";
import { FETCH_WORK_EXPERIENCE_ERROR } from "@/errors/work-experience";
import WorkExperience from "@/components/server/work-experience/work-experience";

jest.mock("../../../lib/work-experience");

const mockedGetWorkExperience = getWorkExperience as jest.Mock;

describe("WorkExperience", () => {
  it("renders work experience data", async () => {
    mockedGetWorkExperience.mockResolvedValueOnce([
      {
        company: "Test Company",
        title: "Software Engineer",
        startDate: "2022",
        endDate: "2023",
        companyImageUrl: "/test.png",
        companyImageAlt: "Test Logo",
      },
    ]);

    render(await WorkExperience());

    expect(await screen.findByText("Work Experience:")).toBeInTheDocument();
    expect(await screen.findByText("Test Company")).toBeInTheDocument();
    expect(await screen.findByText("Software Engineer")).toBeInTheDocument();
  });

  it("renders error alert when fetch fails", async () => {
    mockedGetWorkExperience.mockRejectedValueOnce(new Error("fail"));

    render(await WorkExperience());

    expect(
      await screen.findByText(FETCH_WORK_EXPERIENCE_ERROR),
    ).toBeInTheDocument();
  });
});
