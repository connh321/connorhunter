import { Box, Card, Skeleton, Stack, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import styles from "./projects.module.scss";

const ProjectsFallback = (): ReactElement => {
  return (
    <Box className={`${styles.projects} ${styles.fallbackCards}`}>
      <Typography variant="h5" sx={{ mb: 1 }} fontWeight={600}>
        Projects:
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap"
        width="100%"
        gap={"3rem"}
      >
        {Array.from({ length: 2 }).map((_, idx) => (
          <Card
            key={idx}
            sx={{
              width: "100%",
              padding: {
                xs: "1.5rem 1rem",
                sm: "3rem 2rem",
              },
              background: "rgba(226, 232, 240, 0.3)",
              borderRadius: "35px",
              boxShadow: "0 8px 13px rgba(0, 0, 0, 0.2) !important",
            }}
            className={styles.project}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              sx={{
                gap: { xs: 2, md: 0 },
                width: "100%",
              }}
              className={styles.content}
            >
              <Stack direction="column" spacing="1rem">
                <Skeleton variant="text" width={200} height={40} />
                <Skeleton variant="text" width={400} height={20} />
                <Skeleton variant="text" width={350} height={20} />

                <Stack direction="row" gap={1}>
                  <Skeleton variant="rectangular" width={60} height={32} />
                  <Skeleton variant="rectangular" width={80} height={32} />
                  <Skeleton variant="rectangular" width={70} height={32} />
                </Stack>

                <Stack direction="row" justifyContent="flex-end" gap={1}>
                  <Skeleton variant="rectangular" width={100} height={36} />
                  <Skeleton variant="rectangular" width={80} height={36} />
                </Stack>
              </Stack>
              <Skeleton
                variant="rectangular"
                sx={{
                  width: { xs: 250, sm: 325, md: 400, lg: 425 },
                  height: { xs: 163, sm: 211, md: 260, lg: 239 },
                  borderRadius: "10px",
                  mt: { xs: 2, md: 0 },
                  ml: { md: 2 },
                }}
              />
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectsFallback;
