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
          width="30%"
          height={"28px"}
          sx={{ mb: ".5rem" }}
        />
        <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
          {Array.from({ length: 9 }).map((__, chipIdx) => (
            <Skeleton
              key={chipIdx}
              variant="rounded"
              height={"32px"}
              width="60px"
              sx={{ borderRadius: "16px" }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ChipsSectionFallback;
