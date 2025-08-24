"use server";

import { ReactElement } from "react";
import "./hero.module.scss";
import dynamic from "next/dynamic";
import { Stack } from "@mui/material";

/**
 * Hero component.
 * Displays the hero section of the page.
 */
const Hero = (): ReactElement => {
  const About = dynamic(() => import("@/components/server/about/about"), {
    ssr: true,
  });

  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" width="100%">
      <About />
    </Stack>
  );
};

export default Hero;
