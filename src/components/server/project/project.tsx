import { ReactElement, Suspense } from "react";
import {
  Button,
  Card,
  CardActions,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { IProject } from "@/types/project";
import styles from "./project.module.scss";
import ChipsSectionFallback from "@/components/server/certifications/certificates-fallback";
import ChipsSection from "@/components/server/chips-section/chips-section";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "@/../scss/globals.scss";

/**
 * Props interface for the Project component.
 */
interface Props {
  data: IProject;
}

/**
 * Project component.
 * Displays a project card with details and links.
 */
const Project = ({ data }: Props): ReactElement => {
  const cardBgStyles = data?.featured
    ? { bgcolor: data.featured.bgcolor }
    : { bgcolor: "rgba(226, 232, 240, 0.3)" };

  return (
    <Card
      sx={{
        ...cardBgStyles,
      }}
      className={styles.project}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={styles.content}
      >
        <Stack
          direction="column"
          flexWrap="wrap"
          spacing="1rem"
          className={styles.textContent}
        >
          <Typography
            variant="h5"
            color={data?.featured ? "primary" : "secondary"}
          >
            {data.title}{" "}
          </Typography>
          <Typography
            variant="body1"
            color={data?.featured ? "primary" : "secondary"}
          >
            {data.description}
          </Typography>
          <Suspense fallback={<ChipsSectionFallback />}>
            <ChipsSection
              chips={data.chips}
              color={data?.featured ? "primary" : "secondary"}
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
                color={data?.featured ? "primary" : "secondary"}
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
              color={data?.featured ? "primary" : "secondary"}
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </CardActions>
        </Stack>

        {data?.featured && (
          <Link href={data?.websiteLink}>
            <Image
              src={data.featured.src}
              alt={data.featured.alt}
              width={425}
              height={239}
              className={`${styles.img} ${data?.websiteLink ? `${styles.imgHasLink} btnAnimation` : ""}`}
              priority={true}
            />
          </Link>
        )}
      </Stack>
    </Card>
  );
};

export default Project;
