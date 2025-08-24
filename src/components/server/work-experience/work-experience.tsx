import { Alert, Box, Stack, Typography } from "@mui/material";
import { IWorkExperience } from "@/types/work-experience";
import { FETCH_WORK_EXPERIENCE_ERROR } from "@/errors/work-experience";
import { getWorkExperience } from "@/lib/work-experience";
import Image from "next/image";
import "@/../scss/globals.scss";
import styles from "./work-experience.module.scss";

/**
 * WorkExperience component.
 * Displays a list of work experiences.
 */
const WorkExperience = async () => {
  let data: IWorkExperience[] = [];
  let error: string | null = null;

  try {
    data = await getWorkExperience();
  } catch (err: unknown) {
    console.error(FETCH_WORK_EXPERIENCE_ERROR, err);
    error = FETCH_WORK_EXPERIENCE_ERROR;
  }

  if (error) {
    return (
      <Box sx={{ marginY: "1rem" }} component="section">
        <Alert severity="error">{FETCH_WORK_EXPERIENCE_ERROR}</Alert>
      </Box>
    );
  }

  return (
    <Box component="section">
      <Typography variant="h5" sx={{ mb: 2 }} fontWeight={600}>
        Work Experience:
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        {data.map((exp) => (
          <Box
            key={exp.title + exp.startDate}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
            }}
            className={`${styles.workExperience} tile`}
          >
            {/* Logo */}
            <Image
              src={exp.companyImageUrl}
              alt={exp.companyImageAlt}
              width={48}
              height={48}
              style={{ borderRadius: 8, objectFit: "contain" }}
            />

            {/* Content */}
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {exp.company}
              </Typography>
              <Typography variant="body1">{exp.title}</Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {exp.startDate} → {exp.endDate}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default WorkExperience;
