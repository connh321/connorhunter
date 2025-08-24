"use server";
import React, { ReactElement, Suspense } from "react";
import "../../scss/globals.scss";
import dynamic from "next/dynamic";
import BubbleBackground from "@/components/client/bubble-background/bubble-background";
import { Box, Button, Link, Stack } from "@mui/material";
import WorkExperienceFallback from "@/components/server/work-experience/work-experience-fallback";
import WorkExperience from "@/components/server/work-experience/work-experience";
import { getCertifications } from "@/lib/certifications";
import { FETCH_CERTIFICATIONS_ERROR } from "@/errors/certifications";
import { getLanguages } from "@/lib/languages";
import { FETCH_LANGUAGES_ERROR } from "@/errors/lanuages";
import { getTools } from "@/lib/tools";
import { FETCH_TOOLS_ERROR } from "@/errors/tools";
import { getAwsCloudServices } from "@/lib/aws-cloud-services";
import { FETCH_AWS_CLOUD_SERVICES_ERROR } from "@/errors/aws-cloud-services";
import { getPrinciples } from "@/lib/principles";
import { FETCH_PRINCIPLES_ERROR } from "@/errors/principles";
import styles from "./page.module.scss";
import "@/../scss/globals.scss";
import ProjectsFallback from "@/components/server/projects/projects-fallback";

/**
 * Main App component (Home page).
 */
const App = (): ReactElement => {
  /**
   * Dynamic imports of various components.
   */
  const Hero = dynamic(() => import("@/components/server/hero/hero"), {
    ssr: true,
  });

  const Header = dynamic(() => import("@/components/server/header/header"), {
    ssr: true,
  });

  const Footer = dynamic(() => import("@/components/server/footer/footer"), {
    ssr: true,
  });

  const Projects = dynamic(
    () => import("@/components/server/projects/projects"),
    {
      ssr: true,
    },
  );

  const Education = dynamic(
    () => import("@/components/server/education/education"),
    {
      ssr: true,
    },
  );

  const Certifications = dynamic(
    () => import("@/components/server/certifications/certifications"),
    {
      ssr: true,
    },
  );

  const CertificationsFallback = dynamic(
    () => import("@/components/server/certifications/certificates-fallback"),
    {
      ssr: true,
    },
  );

  const ChipsSection = dynamic(
    () => import("@/components/server/chips-section/chips-section"),
    {
      ssr: true,
    },
  );

  const ChipsSectionFallback = dynamic(
    () => import("@/components/server/chips-section/chips-section-fallback"),
    {
      ssr: true,
    },
  );

  return (
    <>
      <BubbleBackground />
      <Box className={styles.container}>
        <Header className="space" />
        <Stack
          component={"main"}
          className={`${styles.main} space`}
          gap={"3rem"}
        >
          <Hero />
          <>
            <Suspense fallback={<ProjectsFallback />}>
              <Projects showNonFeatured={false}></Projects>
            </Suspense>
            <Link href="/projects">
              <Button
                className={`${styles.btn} btnAnimation`}
                size="medium"
                variant="contained"
              >
                See More Projects →
              </Button>
            </Link>

            <Education></Education>
            <Suspense fallback={<WorkExperienceFallback />}>
              <WorkExperience></WorkExperience>
            </Suspense>
            <Suspense fallback={<CertificationsFallback />}>
              <Certifications
                fetchFunction={getCertifications}
                errorMessage={FETCH_CERTIFICATIONS_ERROR}
              />
            </Suspense>
            <Suspense fallback={<ChipsSectionFallback />}>
              <ChipsSection
                title="Core Programming Languages"
                fetchFunction={getLanguages}
                errorMessage={FETCH_LANGUAGES_ERROR}
                color="secondary"
                variant="outlined"
              />
            </Suspense>
            <Suspense fallback={<ChipsSectionFallback />}>
              <ChipsSection
                title="Frameworks, Tools & Platforms"
                fetchFunction={getTools}
                errorMessage={FETCH_TOOLS_ERROR}
                color="secondary"
                variant="outlined"
              />
            </Suspense>
            <Suspense fallback={<ChipsSectionFallback />}>
              <ChipsSection
                title="AWS Cloud Services"
                fetchFunction={getAwsCloudServices}
                errorMessage={FETCH_AWS_CLOUD_SERVICES_ERROR}
                color="secondary"
                variant="outlined"
              />
            </Suspense>
            <Suspense fallback={<ChipsSectionFallback />}>
              <ChipsSection
                title="Core Development Principles"
                fetchFunction={getPrinciples}
                errorMessage={FETCH_PRINCIPLES_ERROR}
                color="secondary"
                variant="outlined"
              />
            </Suspense>
          </>
        </Stack>
        <Footer />
      </Box>
    </>
  );
};

export default App;
