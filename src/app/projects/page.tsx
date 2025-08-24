import React, { ReactElement, Suspense } from "react";
import { Box, Button, Link } from "@mui/material";
import styles from "./page.module.scss";
import "@/../scss/globals.scss";
import ProjectsFallback from "@/components/server/projects/projects-fallback";
import Projects from "@/components/server/projects/projects";

const ProjectsPage = (): ReactElement => {
  return (
    <Box className={`${styles.space}`}>
      <Link href="/">
        <Button
          className={`${styles.btn} btnAnimationL`}
          size="medium"
          variant="contained"
        >
          ← Homepage
        </Button>
      </Link>
      <Suspense fallback={<ProjectsFallback />}>
        <Projects showNonFeatured={true}></Projects>
      </Suspense>
    </Box>
  );
};

export default ProjectsPage;
