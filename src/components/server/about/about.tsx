"use server";

import { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./about.module.scss";
import HighlightElement from "@/components/client/highlight-element/highlight-element";

const About = (): ReactElement => {
  return (
    <Box className={styles.about} component="article">
      <Stack component="header" direction="column" spacing={2}>
        <Typography
          variant="h3"
          color="textPrimary"
          className={styles.name}
          fontWeight={600}
        >
          {`Hello! I'm Connor`}
        </Typography>

        <Typography variant="h5" color="textSecondary" className={styles.title}>
          A{" "}
          <HighlightElement type="highlight" color="#fbe894">
            Full
          </HighlightElement>{" "}
          <HighlightElement type="highlight" color="#fbe894">
            Stack
          </HighlightElement>{" "}
          <HighlightElement type="highlight" color="#fbe894">
            Software
          </HighlightElement>{" "}
          <HighlightElement type="highlight" color="#fbe894">
            Engineer
          </HighlightElement>{" "}
          based in Penn Yan, NY.
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          className={styles.desc}
        >
          I love building modern,{" "}
          <HighlightElement type="highlight" color="#f3ced1">
            end-to-end
          </HighlightElement>{" "}
          systems that are designed for{" "}
          <HighlightElement type="highlight" color="#e6d4fa">
            scalability
          </HighlightElement>{" "}
          and{" "}
          <HighlightElement type="highlight" color="#e6d4fa">
            high
          </HighlightElement>{" "}
          <HighlightElement type="highlight" color="#e6d4fa">
            performance
          </HighlightElement>
          .
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
