import { Alert, Box, Stack, Typography } from "@mui/material";
import styles from "./projects.module.scss";
import Project from "@/components/server/project/project";
import { IProject } from "@/types/project";
import { getProjects } from "@/lib/projects";
import { FETCH_PROJECTS_ERROR } from "@/errors/projects";

/**
 * Props interface for the Projects component.
 */
interface Props {
  showNonFeatured: boolean;
}

/**
 * Projects component.
 * Displays a list of projects.
 */
const Projects = async ({ showNonFeatured }: Props) => {
  let data: IProject[] = [];
  let error: string | null = null;

  try {
    data = await getProjects();
  } catch (err: unknown) {
    console.error("Failed to fetch certifications:", err);
    error = FETCH_PROJECTS_ERROR;
  }

  /**
   * Show error if any.
   */
  if (error) {
    return (
      <Box sx={{ marginY: "1rem" }} component="section">
        <Alert severity="error">{FETCH_PROJECTS_ERROR}</Alert>
      </Box>
    );
  }

  // Filter the projects based on the showNonFeatured prop.
  data = showNonFeatured ? data : data.filter((project) => project.featured);

  return (
    <Box className={styles.projects}>
      <Typography variant="h5" sx={{ mb: 1 }} fontWeight={600}>
        Projects:
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap"
        width="100%"
        gap={"3rem"}
      >
        {showNonFeatured}
        {data.map((data) => (
          <Project key={data.title} data={data} />
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
