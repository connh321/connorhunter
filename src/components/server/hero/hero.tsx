"use server";

import { ReactElement } from "react";
import "./hero.module.scss";
import styles from "./hero.module.scss";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const Hero = (): ReactElement => {
  const About = dynamic(() => import("@/components/server/about/about"), {
    ssr: true,
  });
  const Contact = dynamic(() => import("@/components/server/contact/contact"), {
    ssr: true,
  });

  return (
    <Grid
      component="section"
      container
      className={styles.hero}
      spacing={6}
      direction={{ xs: "column", md: "row" }}
    >
      <Grid size={{ xs: 12, md: 9 }}>
        <About />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Hero;
