"use server";
import { ReactElement, Suspense } from "react";
import { Stack } from "@mui/material";
import "../../scss/globals.scss";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import { getLanguages } from "@/lib/languages";
import { getTools } from "@/lib/tools";
import { getAwsCloudServices } from "@/lib/aws-cloud-services";
import { getPrinciples } from "@/lib/principles";
import { FETCH_LANGUAGES_ERROR } from "@/errors/lanuages";
import { getCertifications } from "@/lib/certifications";
import { FETCH_CERTIFICATIONS_ERROR } from "@/errors/certifications";
import { FETCH_TOOLS_ERROR } from "@/errors/tools";
import { FETCH_AWS_CLOUD_SERVICES_ERROR } from "@/errors/aws-cloud-services";
import { FETCH_PRINCIPLES_ERROR } from "@/errors/principles";

const Hero = dynamic(() => import("@/components/server/hero/hero"), {
  ssr: true,
});

const App = (): ReactElement => {
  const Header = dynamic(() => import("@/components/server/header/header"), {
    ssr: true,
  });

  const Footer = dynamic(() => import("@/components/server/footer/footer"), {
    ssr: true,
  });

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
      <Header />
      <Stack component={"main"} className={styles.main} gap={6}>
        <Hero />
        <>
          <Education></Education>
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
            />
          </Suspense>
          <Suspense fallback={<ChipsSectionFallback />}>
            <ChipsSection
              title="Frameworks, Tools & Platforms"
              fetchFunction={getTools}
              errorMessage={FETCH_TOOLS_ERROR}
            />
          </Suspense>
          <Suspense fallback={<ChipsSectionFallback />}>
            <ChipsSection
              title="AWS Cloud Services"
              fetchFunction={getAwsCloudServices}
              errorMessage={FETCH_AWS_CLOUD_SERVICES_ERROR}
            />
          </Suspense>
          <Suspense fallback={<ChipsSectionFallback />}>
            <ChipsSection
              title="Core Development Principles"
              fetchFunction={getPrinciples}
              errorMessage={FETCH_PRINCIPLES_ERROR}
            />
          </Suspense>
        </>
      </Stack>
      <Footer />
    </>
  );
};

export default App;
