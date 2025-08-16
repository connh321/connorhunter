/**
 * Server-side component for rendering a chips section.
 *
 * @module ChipsSection
 */
"use server";
import { Alert, Box, Chip, Stack, Typography } from "@mui/material";

/**
 * Props for the ChipsSection component.
 *
 * @property {string} title - The title of the section.
 * @property {string[]} fetchFunction - Function to fetch data for the chips.
 */
export interface Props {
  title: string;
  fetchFunction: () => Promise<string[]>;
  errorMessage: string;
}

const ChipsSection = async ({ title, fetchFunction, errorMessage }: Props) => {
  let data: string[] = [];
  let error: string | null = null;

  try {
    data = await fetchFunction();
  } catch (err) {
    console.error(errorMessage, err);
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
        {title}:
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
        {data.map((chip: string, i) => (
          <Chip key={i} label={chip} color="primary" variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
};

export default ChipsSection;
