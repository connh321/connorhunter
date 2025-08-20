import { ReactElement, Suspense } from "react";
import { Button, Card, CardActions, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { IProject } from "@/types/project";
import styles from "./project.module.scss";
import ChipsSectionFallback from "@/components/server/certifications/certificates-fallback";
import ChipsSection from "@/components/server/chips-section/chips-section";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "@/../scss/globals.scss";

interface Props {
  data: IProject;
}

const Project = ({ data }: Props): ReactElement => {
  return (
    <Card
      sx={{
        ...(data.featured?.bgcolor && {
          bgcolor: `${data.featured.bgcolor} !important`,
        }),
      }}
      className={styles.project}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={styles.content}
      >
        <Stack direction="column" flexWrap="wrap" spacing="1rem">
          <Typography variant="h5" color="textSecondary">
            {data.title}{" "}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {data.description}
          </Typography>
          <Suspense fallback={<ChipsSectionFallback />}>
            <ChipsSection
              chips={data.chips}
              color="primary"
              variant="outlined"
            />
          </Suspense>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            {data?.websiteLink && (
              <Button
                className="btnAnimation"
                size="small"
                href={data?.websiteLink}
                target="_blank"
                color={"secondary"}
                rel="noopener noreferrer"
                startIcon={<OpenInNewIcon color={"secondary"} />}
              >
                Website
              </Button>
            )}
            <Button
              className="btnAnimation"
              size="small"
              href={data.githubLink}
              target="_blank"
              variant="outlined"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </CardActions>
        </Stack>

        {data?.featured && data.featured.type !== "no-mockup" && (
          <Image
            src="/laptop-mockup.png"
            alt={data.featured.mockupAlt!}
            width={450}
            height={293}
            className={styles.img}
            priority={true}
          />
        )}
      </Stack>
    </Card>
  );
};

export default Project;
