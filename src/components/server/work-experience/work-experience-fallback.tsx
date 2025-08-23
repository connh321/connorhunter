import { Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import styles from "./work-experience.module.scss";

const WorkExperienceFallback = (): ReactElement => {
  return (
    <Box sx={{ width: "100%", marginY: "1rem" }} component="section">
      <Typography variant="h5" sx={{ mb: 2 }} fontWeight={600}>
        Work Experience:
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Box
            key={idx}
            sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
            className={`${styles.workExperience} tile`}
          >
            {/* Logo skeleton */}
            <Skeleton
              variant="rectangular"
              width={48}
              height={48}
              sx={{ borderRadius: 1 }}
            />

            {/* Text skeleton */}
            <Box>
              <Skeleton
                variant="text"
                width={120}
                height={28}
                sx={{ mb: 0.5 }}
              />
              <Skeleton
                variant="text"
                width={100}
                height={20}
                sx={{ mb: 0.5 }}
              />
              <Skeleton variant="text" width={80} height={18} />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default WorkExperienceFallback;
