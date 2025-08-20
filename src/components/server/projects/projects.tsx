import { Alert, Box, Stack, Typography } from "@mui/material";
import styles from "./projects.module.scss";
import Project from "@/components/server/project/project";
import { IProject } from "@/types/project";
import { getProjects } from "@/lib/projects";
import { FETCH_PROJECTS_ERROR } from "@/errors/projects";

const Projects = async () => {
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
        {data.map((data) => (
          <Project key={data.title} data={data} />
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
