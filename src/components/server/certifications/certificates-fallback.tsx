import { Box, Skeleton, Stack } from "@mui/material";
import React, { ReactElement } from "react";

/**
 * A fallback component that displays a skeleton loading state
 * for the ChipsSection.
 *
 * @returns {React.ReactElement} The skeleton loader component.
 */
const ChipsSectionFallback = (): ReactElement => {
  return (
    <Box sx={{ width: "100%", marginY: "1rem" }} component="section">
      <Box sx={{ mb: 3 }}>
        <Skeleton
          variant="rectangular"
          width="100px"
          height={"16px"}
          sx={{ mb: "8px" }}
        />
        <Stack direction="row" gap={2}>
          <Skeleton variant="rectangular" width="150px" height={"150px"} />
          <Skeleton variant="rectangular" width="150px" height={"150px"} />
          <Skeleton variant="rectangular" width="150px" height={"150px"} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ChipsSectionFallback;
