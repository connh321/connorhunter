import { ReactElement } from "react";
import { Box, Link, Typography } from "@mui/material";
import styles from "./education.module.scss";
import Image from "next/image";
import "@/../scss/globals.scss";

/**
 * Education component.
 * Displays education information.
 */
const Education = (): ReactElement => {
  /**
   * Get the URL for the RIT CS department from environment variable.
   */
  const csRitUrl = process.env.NEXT_PUBLIC_S3_RIT_CS_URL!;
  return (
    <Box sx={{ mb: 3 }} component="section">
      <Typography variant="h5" sx={{ mb: 1 }} fontWeight={600}>
        Education:
      </Typography>
      <Link
        className={styles.link}
        href={csRitUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            gap: 1.5,
            padding: 2,
          }}
          className={`${styles.education} tile`}
        >
          <Image
            src="/education/rit.webp"
            alt="RIT Logo"
            width={240}
            height={103}
            style={{ objectFit: "cover" }}
            priority={true}
          />
          <Typography variant="body1" color="textPrimary">
            B.S. in Computer Science
          </Typography>
          <Typography variant="body2" color="textPrimary">
            Rochester, NY
          </Typography>
          <Typography variant="body2" color="textPrimary">
            2019 → 2023
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Education;
