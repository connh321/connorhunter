import { ReactElement } from "react";
import { Box, Link, Typography } from "@mui/material";
import styles from "./education.module.scss";
import Image from "next/image";

const Education = (): ReactElement => {
  const csRitUrl = process.env.NEXT_PUBLIC_S3_RIT_CS_URL!;
  return (
    <Box sx={{ mb: 3 }} component="section">
      <Link
        className={styles.link}
        href={csRitUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Education:
        </Typography>
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
          className={`${styles.education} ${styles.tile}`}
        >
          <Image
            src="/education/rit.webp"
            alt="RIT Logo"
            width={240}
            height={103}
            style={{ objectFit: "cover" }}
            priority={true}
          />
          <Typography variant="body1" color="textSecondary">
            B.S. in Computer Science
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Rochester, NY
          </Typography>
          <Typography variant="body2" color="textSecondary">
            2019 - 2023
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Education;
