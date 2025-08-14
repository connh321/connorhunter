"use client";

import { ReactElement, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./about-client.module.scss";
import useDynamicHighlight from "@/hooks/use-dynamic-highlight";

/**
 * AboutClient Component
 *
 * This component displays a short "About Me" section for Connor Hunter,
 * including a greeting, title, description, and side-projects note.
 * Key phrases in the text are highlighted sequentially using `useDynamicHighlight`.
 *
 * Highlight refs are individually created for each phrase and passed into
 * the `useDynamicHighlight` hook to animate them in order. The highlights
 * use different colors to emphasize certain words or phrases.
 *
 * @component
 * @returns {ReactElement} The rendered About section with animated highlights
 */

const AboutClient = (): ReactElement => {
  // Create individual refs for each highlighted element
  const fullStackRef = useRef<HTMLSpanElement>(null);
  const endToEndRef = useRef<HTMLSpanElement>(null);
  const scalabilityRef = useRef<HTMLSpanElement>(null);
  const highRef = useRef<HTMLSpanElement>(null);
  const performanceRef = useRef<HTMLSpanElement>(null);
  const awsRef = useRef<HTMLSpanElement>(null);
  const belowRef = useRef<HTMLSpanElement>(null);

  // Pass refs into custom hook for sequential animation
  useDynamicHighlight([
    { ref: fullStackRef, type: "highlight", color: "#f3ced1" },
    { ref: endToEndRef, type: "highlight", color: "#e6d4fa" },
    { ref: scalabilityRef, type: "highlight", color: "#e6d4fa" },
    { ref: highRef, type: "highlight", color: "#e6d4fa" },
    { ref: performanceRef, type: "highlight", color: "#e6d4fa" },
    { ref: awsRef, type: "highlight", color: "#fbe894" },
    { ref: belowRef, type: "highlight", color: "#fbe894" },
  ]);

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
          A <span ref={fullStackRef}>Full Stack Software Engineer </span> based
          in Penn Yan, NY.
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          className={styles.desc}
        >
          I love building modern, <span ref={endToEndRef}>end-to-end</span>{" "}
          systems that are designed for{" "}
          <span ref={scalabilityRef}>scalability</span> and{" "}
          <span ref={highRef}>high</span>{" "}
          <span ref={performanceRef}>performance.</span>
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          className={styles.desc}
        >
          {
            "Beyond coding, I'm always exploring new technologies and honing my "
          }
          <span ref={awsRef}>AWS</span> skills, enjoying projects that challenge
          me to think critically.
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          className={styles.desc}
        >
          Check out my side-projects{" "}
          <span ref={belowRef} className={styles.below}>
            below.
          </span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default AboutClient;
