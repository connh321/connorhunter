"use server";

import { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./about.module.scss";

/**
 * About component.
 * Displays information about me (Connor).
 */
const About = (): ReactElement => {
  /**
   * Get the job title and based in location from environment variables.
   */
  const jobTitle: string = process.env.NEXT_PUBLIC_JOB_TITLE!;
  const basedIn: string = process.env.NEXT_PUBLIC_BASED_IN!;

  return (
    <Box className={styles.about} component="article">
      <Stack component="header" direction="column" spacing="1rem">
        <Typography
          variant="h3"
          color="textPrimary"
          className={styles.name}
          fontWeight={600}
        >
          {`Hello! I'm Connor`}
        </Typography>

        <Typography variant="h5" className={styles.title}>
          A <strong>{jobTitle}</strong> based in {basedIn}.
        </Typography>

        <Typography variant="body1" className={styles.desc}>
          I love building modern, <strong>end-to-end</strong> systems that are
          designed for scalability and <strong>high performance</strong>.
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
