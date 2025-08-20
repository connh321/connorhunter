/**
 * Server-side component for rendering a chips section.
 *
 * @module ChipsSection
 */
"use server";
import { Alert, Box, Chip, Stack, Typography } from "@mui/material";
import { FETCH_DEFAULT_ERROR } from "@/errors/default";

/**
 * Props for the ChipsSection component.
 *
 * @property title - Optional title of the section.
 * @property chips - Optional static chips
 * @property fetchFunction - Optional function to fetch data for the chips.
 */
export interface Props {
  title?: string;
  chips?: string[];
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  variant: "filled" | "outlined";
  fetchFunction?: () => Promise<string[]>;
  errorMessage?: string;
}

const ChipsSection = async ({
  title,
  chips,
  color,
  variant,
  fetchFunction,
  errorMessage,
}: Props) => {
  let data: string[] = [];
  let error: string | null = null;

  if (!chips && fetchFunction) {
    try {
      data = await fetchFunction();
    } catch (err) {
      const msg = error ?? FETCH_DEFAULT_ERROR;
      console.error(msg, err);
      error = msg;
    }
  } else if (chips) {
    data = chips;
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
      {title && (
        <Typography variant="subtitle1" sx={{ mb: 1 }} fontWeight={600}>
          {title}:
        </Typography>
      )}
      <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
        {data.map((chip: string, i) => (
          <Chip key={i} label={chip} color={color} variant={variant} />
        ))}
      </Stack>
    </Box>
  );
};

export default ChipsSection;
