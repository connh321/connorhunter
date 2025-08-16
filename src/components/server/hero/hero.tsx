"use server";

import { ReactElement } from "react";
import "./hero.module.scss";
import dynamic from "next/dynamic";

const Hero = (): ReactElement => {
  const About = dynamic(() => import("@/components/server/about/about"), {
    ssr: true,
  });

  return <About />;
};

export default Hero;
