"use server";
import { ReactElement } from "react";
import { Alert, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./certifications.module.scss";
import Link from "next/link";
import { ICertification } from "@/types/certification";

/**
 * Props for the Certifications component.
 *
 * @property {() => Promise<ICertification[]>} fetchFunction - Function to fetch data for the chips.
 * @property {string} errorMessage - The error message to display if the fetch fails.
 */
interface Props {
  fetchFunction: () => Promise<ICertification[]>;
  errorMessage: string;
}

const Certifications = async ({
  fetchFunction,
  errorMessage,
}: Props): Promise<ReactElement> => {
  let data: ICertification[] | null = null;
  let error: string | null = null;

  try {
    data = await fetchFunction();
  } catch (err: unknown) {
    console.error("Failed to fetch certifications:", err);
    error = errorMessage;
  }

  /**
   * Show error if any.
   */
  if (error) {
    return (
      <Box sx={{ marginY: "1rem" }} component="section">
        <Alert severity="error">{errorMessage}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 3 }} component="section">
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Certifications:
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
        {data &&
          data.map((certification: ICertification, i) => (
            <Link
              key={i}
              className={styles.link}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.tile}
                src={certification.src}
                alt={certification.alt}
                width={150}
                height={150}
                style={{ objectFit: "contain" }}
              />
            </Link>
          ))}
      </Stack>
    </Box>
  );
};

export default Certifications;
